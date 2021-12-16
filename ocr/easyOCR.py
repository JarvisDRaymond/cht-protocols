# FROM https://www.analyticsvidhya.com/blog/2021/06/text-detection-from-images-using-easyocr-hands-on-guide/
# Run on all images in folder:
# for f in ./*.jpg; do python3 easyOCR.py > $f.txt; done

import os
import easyocr
import cv2
from matplotlib import pyplot as plt
import numpy as np

#IMAGE_PATH = 'https://blog.aspose.com/wp-content/uploads/sites/2/2020/05/Perform-OCR-using-C.jpg'
#IMAGE_PATH= 'PXL_20210909_205455411.jpg'
#IMAGE_PATH = 'PXL_20211103_204120481.jpg'
IMAGE_PATH = 'PXL_20210909_205450834.jpg'
reader = easyocr.Reader(['en'])
result = reader.readtext(IMAGE_PATH,paragraph="False")
output = ''
for x in result: 
    #print (x[1])
    output = output + (x[1]) +'\n\n'


print(output)
