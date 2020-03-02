# login-mikrotik
Hello my name is firman, this is my first open source for login to mikrotik.
Because i'm using wifi id as my primary internet it is annoyed when every 24 hours i got kicked, so this script is only support wifi id 
only, but i promise in the future it will support many mikrotik. 

# This is how to use my script for login
1. You need to install npm and node js.
https://nodejs.org/en/download/
https://www.npmjs.com/get-npm

2. Install puppeteer 
npm i puppeteer

3. You need to change the constant.js
if you are using wifi id, here is the setting.
module.exports = {
    username            : 'your pass',
    password            : 'your password',
    userElement         : '#username_member',
    userElementPassword : '#password_member',
    url                 : 'https://welcome2.wifi.id/login/',
    loginElementButton  : '.button-lg',
    loginAfterElement   : '.skinner-right'
}


