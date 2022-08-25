@ECHO  OFF
CD %1
git remote set-url origin https://Potestade:0Mkw@I9UK1FF=>|C@github.com/Potestade/potestade.github.io.git
git add -A
git commit -m "Website updates." -q
git push origin main