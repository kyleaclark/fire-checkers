fire-checkers
============

##Overview

Multiplayer Checkers game built on AngularJS + Firebase.

##Authored Date

March 2014

(last edit: March 2014)

##Screenshot Example

Last taken 03-29-2014:

![alt text](https://raw.github.com/kyleaclark/fire-checkers/master/screenshot.png "Screenshot Image")

##Technologies

JavaScript

NodeJS

AngularJS

Yeoman

Grunt

Bower

HTML5

CSS3

Sass

#Development Overview

##Setup

Install Node dependencies [compatible version >= 0.10.0 < 0.11.0] - refer to nodejs.org.

Install Grunt depdencies [npm install -g grunt-cli] - refer to http://gruntjs.com/getting-started.

Install Bower dependencies [npm install -g bower, Git via http://git-scm.com] - refer to http://bower.io/.

Install Compass dependencies (Ruby, Compass, & Sass) [gem update --system && gem install compass] - refer to https://github.com/gruntjs/grunt-contrib-compass.

##Build

Clone repo to local.

Use correct nvm version >= 0.10.0 < 0.11.0 e.g.:

```
nvm use 0.10.17
```

Run "npm install" to install project dependencies from package.json:

```
npm install
```

Run "grunt setup" to install project dependencies from bower.json.

```
grunt setup
```

##Run

Run "grunt serve" command from root to run application locally

Run "grunt build" command from root to compile js, css, & html into disbrution-ready, minified code
