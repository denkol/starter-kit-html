# starter-kit-html
##### Empty template for quick start a new hmtl-project

### Components:

* Gulp
* Font-Awesome
* Sass
* jQuery
* PostCSS

### Gulp plugins:

* gulp-plumber
* gulp-rename
* gulp-concat
* gulp-uglify
* gulp-cssmin
* gulp-imagemin
* gulp-sass
* browser-sync
* gulp-csslint

### PostCSS plugins:
* csswring
* autoprefixer
* cssnext
* precss

## How to use?

You can use <kbd>starter-kit-html.sh</kbd> script:

```
sudo ./starter-kit-html.sh
```

> **Note:** Before the start, make sure that you have <a href="https://www.npmjs.com/" title="npm">npm</a> and <a href="https://nodejs.org/en/" title="NodeJS">NodeJS</a>


> **Warning!** Look at the following lines in the starter-kit-html.sh: 

```
mkdir ~/Documents/Projects/${NAME}
cp -r ~/Documents/Projects/starter-kit-html/* ~/Documents/Projects/${NAME}
cd ~/Documents/Projects/${NAME}
sublime ~/Documents/Projects/${NAME}/src
```

> You need to **change** on correct path to the directory of your projects and folder with starter-kit-html (I keep my project in ~/Documents/Projects/ and my "starter-kit-html" in ~/Documents/Projects/starter-kit-html)

**Let see consider:**

Script creates project folder:
```
mkdir ~/Documents/Projects/${NAME}
```

Script copies **all** files from starter-kit-html folder to you project directory:
```
cp -r ~/Documents/Projects/starter-kit-html/* ~/Documents/Projects/${NAME}
```

Script opens my project folder in Sublime Text:
```
sublime ~/Documents/Projects/${NAME}/src
```
> **Note:** I created something like a snippet from <a href="https://gist.github.com/artero/1236170" title="Title">this</a>

You also specify which Gulp plugins to be installed:
```
#Gulp plugins
npm install --save-dev gulp-sass
npm install --save-dev gulp-plumber
npm install --save-dev gulp-rename
...
```


