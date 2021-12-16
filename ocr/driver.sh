echo "Removing existing .txt files in directory"
rm *.txt
echo "Performing OCR on all .jpg files in directory"
for f in ./*.jpg; do python3 easyOCR.py $f > $f.txt; done
echo "Completed OCR on all files."

