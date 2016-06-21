#!/bin/bash
echo -e "\033[32mProject init start\033[0m"
echo "Enter name of project: "
read NAME
mkdir ~/Documents/Projects/${NAME}
cp -r ~/Documents/Projects/starter-kit-html/* ~/Documents/Projects/${NAME}
cd ~/Documents/Projects/${NAME}
touch README.md
echo -e "\033[32mInstalling gulp...\033[0m"
npm install gulp
echo -e "\033[32mpackage.json:\033[0m"
npm init


echo -e "\033[32mInstalling packages...\033[0m"
#Gulp plugins
npm install --save-dev gulp-sass
npm install --save-dev gulp-plumber
npm install --save-dev gulp-rename
npm install --save-dev gulp-concat
npm install --save-dev gulp-uglify
npm install --save-dev gulp-cssmin
npm install --save-dev gulp-imagemin
npm install --save-dev browser-sync
npm install --save-dev gulp-csslint
npm install --save-dev gulp-postcss
npm install --save-dev csswring
npm install --save-dev autoprefixer
npm install --save-dev cssnext
npm install --save-dev precss

echo -e "\033[32mProject created!\033[0m"

#Start gulp or not?
while true; do
  read -p "Start gulp? (y/n): " yn
  case $yn in
    [Yy]* ) echo -e "\033[32mStarting gulp...\033[0m"
    gulp; break;;
    [Nn]* ) exit;;
    * ) echo "Please answer yes or no.";;
  esac
done

sublime ~/Documents/Projects/${NAME}/src