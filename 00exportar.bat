@ECHO  OFF
CD %1
git add -A
git commit -m "Website updates." -q
git push origin main