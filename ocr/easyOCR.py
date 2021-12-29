# FROM https://www.analyticsvidhya.com/blog/2021/06/text-detection-from-images-using-easyocr-hands-on-guide/
# Run on all images in folder:
# for f in ./*.jpg; do python3 easyOCR.py $f > $f.txt; done
# or on individual file: 
# python3 easyOCR.py imgName.jpg

import os
import sys
import easyocr
import cv2
from matplotlib import pyplot as plt
import numpy as np

IMAGE_PATH = sys.argv[1];

reader = easyocr.Reader(['en'])
result = reader.readtext(IMAGE_PATH,paragraph="True")
output = ''
count = 0

for x in result: 
    if (count == 0):
        output = output+'<h1>'+x[1]+'</h1>\n'
        count = count + 1
    else: 
        output = output + (x[1]) +'<br /><br />'

print(output)
