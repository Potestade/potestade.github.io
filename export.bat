if [ ! -d ".git" ]; then
echo "# potestade.github.io" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:Potestade/potestade.github.io.git
git push -u origin main
fi

git add -A
git commit -m "Website update."
git push -u origin main