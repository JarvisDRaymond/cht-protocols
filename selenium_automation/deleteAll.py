import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

browser = webdriver.Firefox()
browser.get('http://localhost:3000/hand-protocols')
num_of_files = 1

# FIRST
time.sleep(1)
del_target = browser.find_element(By.XPATH, '/html/body/div/div/div[3]/a[1]')
del_target.click()
time.sleep(1)
del_button = browser.find_element(By.XPATH, '/html/body/div/div/div[2]/button')
del_button.click()
time.sleep(2)

alert = browser.switch_to.alert
alert.accept()
time.sleep(2)
alert = browser.switch_to.alert
alert.accept()

for x in range(num_of_files-1):
    time.sleep(2)
    del_target = browser.find_element(By.XPATH, '/html/body/div/div/div[2]/a[1]')
    del_target.click()
    time.sleep(1)
    del_button = browser.find_element(By.XPATH, '/html/body/div/div/div[2]/button')
    del_button.click()
    time.sleep(2)
    alert = browser.switch_to.alert
    alert.accept()
    time.sleep(1)
    alert = browser.switch_to.alert
    alert.accept()

