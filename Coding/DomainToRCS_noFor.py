from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common import action_chains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import pandas as pd
import csv
import re

ENT = 'Cook Angels'
ENT_DOM = 'cookangels.com'
#REGEXR_RCS_STEP1 = '[a-zàâäæ-ëîïôöù-üœ]+(?:[ ‘’-]+[a-zàâäæ-ëîïôöù-üœ]+)*[ \t]+\d{3}[ \t]*\d{3}[ \t]*\d{3}'
REGEXR_RCS = '\d{3}[ \t]*\d{3}[ \t]*\d{3}'

def main() :
    
    print('\n___________Allons récupérer le RCS de l\'entreprise \"'+ENT+'\"___________\n')
    driver = webdriver.Chrome('chromedriver')
    urlEnt = 'http://'+ENT_DOM
    driver.get(urlEnt)

    #Détection de la langue
    elem = driver.find_element_by_xpath('/html')
    lang = elem.get_attribute('lang')
    
    #Recherche des mentions légales sur le site
    elem = driver.find_element_by_xpath('/html/body')
    bodyParser = elem.get_attribute('outerHTML').split ('href')
    i = 0
    while i < len(bodyParser) :
        lowBodyParser = bodyParser[i].lower()
        if lowBodyParser.find(strLegal(lang)) == -1 :
            i += 1
        else :
            break
    #Si introuvable, passe à l'entreprise suivante
    if i == len(bodyParser) :
        print("Mention légales introuvables !!\n:( ")
        driver.quit()
        #Améliorer avec une exception
    else :    
        #Accéder aux mentions légales 
        mentionLegaleParser = bodyParser[i].split('\"')
        if mentionLegaleParser[1][0] == '/' :
            urlMentionsLegales = urlEnt+mentionLegaleParser[1]
        else :
            urlMentionsLegales = mentionLegaleParser[1]
        driver.get(urlMentionsLegales)
        #Améliorer ... Exemple avec ESA
    
    #Recherche du RCS
    elem = driver.find_element_by_xpath('/html/body')
    bodyParser = elem.get_attribute('outerHTML').split ('<p>')
    i = 0
    while i < len(bodyParser) :
        m = re.search(REGEXR_RCS, bodyParser[i], re.IGNORECASE)
        try :
            print(m.group(0))
            print('Peut-être RCS')
        except AttributeError :
            pass
        i+=1

    time.sleep(5)
    driver.quit()

def strLegal(lang) :
    if lang == 'en':
        #Anglais
        return "legal"
    if lang == 'fr' or lang == 'fr-FR' :
        #Français
        return "mentions légales"
    

main()



