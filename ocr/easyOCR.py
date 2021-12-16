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
result = reader.readtext(IMAGE_PATH,paragraph="False")
output = ''
for x in result: 
    output = output + (x[1]) +'\n\n'

print(output)
