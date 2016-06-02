echo gitPullBat
cd curveJS
git init
git remote rm origin
git remote add origin git@git@github.com:chokcoco/FJC.git
git pull origin master
echo gitPullBat end
pause
