#11选5游戏玩法

##初始化项目
	mkdir 11c5 && cd 11c5
	express -e
	cd . &&　npm install

#bower
	npm install bower --save
	bower init
	touch .bowerrc
	bower install ionic --save

#gulp
	npm install npm install gulp gulp-concat gulp-clean-css gulp-rename gulp-uglify gulp-jshint gulp-imagemin gulp-sass gulp-notify gulp-clean gulp-cache merge-stream readable-stream --save-dev
	touch gulpfile.js

#创建配置目录
	mkdir configs
	touch gulp.cf.json

#划分目录结构	
	[11c5]
	    ├── bin
	    │   └── www
	    ├── configs 
	    │   └── gulp.cf.json
	    ├── node_modules                                                                      
	    ├── public                                        
	    │   ├── build
	    │   ├── libs
	    │   └── src
	    │       ├── fonts
	    │       ├── imgs
	    │       ├── sass
	    │       └── scripts
	    ├── routes
	    │   ├── index.js
	    │   └── users.js
	    ├── test
	    │   ├── e2e
	    │   └── unit
	    ├── views
	    │   ├── error.ejs
	    │   └── index.ejs
	    ├── .bowerrc
	    ├── .gitignore
	    ├── app.js
	    ├── bower.json
	    ├── gulpfile.js                                       
	    ├── package.json
	    └── README.md