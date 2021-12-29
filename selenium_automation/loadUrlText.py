import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

browser = webdriver.Firefox()
browser.get('http://localhost:3000/hand-protocols/Add')

num_of_files = 3
base_file_path = '/mnt/usb-WD_Elements_25A3_325347444839524A-0:0-part1/coding/firebase/hand-protocols/hand-protocols/selenium_automation/'

for x in range(num_of_files):   
    lines = []
    with open(str(x+1)+".txt") as file_in:    
        for line in file_in:
            lines.append(line)
    title = lines[0]
    title = title.replace("<h1>", "")
    title = title.replace("</h1>", "") 
    title_elem = browser.find_element(By.CLASS_NAME, 'title-input')  # Find the search box
    title_elem.send_keys(title)
    text_elem = browser.find_element(By.CLASS_NAME, 'text-input')
    body_text = ''.join(lines)
    body_text = body_text.replace("_ F"," - ")
    body_text = body_text.replace("<br />L<br />","")
    body_text = body_text.replace("10 7 14","10 - 14")

    text_elem.send_keys(body_text)


    upload_elem = browser.find_element(By.XPATH, '/html/body/div/div/form/input[2]')
    upload_elem.send_keys(base_file_path+ str(x+1) +'.jpg')

    submit_elem = browser.find_element(By.XPATH, '/html/body/div/div/form/button')
    submit_elem.click()
    time.sleep(10)

#browser.quit()

