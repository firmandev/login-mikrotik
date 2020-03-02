# login-mikrotik
Hello my name is firman, this is my first open source for login to mikrotik.
Because i'm using wifi id as my primary internet it is annoyed when every 24 hours i got kicked, so this script is only support wifi id 
only, but i promise in the future it will support many mikrotik. 

# This is how to use my script for login
1. You need to install npm and node js.
<br>https://nodejs.org/en/download/ <br>
https://www.npmjs.com/get-npm

2. Install puppeteer 
npm i puppeteer

3. You need to change the constant.js
if you are using wifi id, here is the setting.
<br>module.exports = {
    <br>    username            : 'your pass',
    <br>    password            : 'your password',
    <br>    userElement         : '#username_member',
    <br>    userElementPassword : '#password_member',
    <br>    url                 : 'https://welcome2.wifi.id/login/',
    <br>    loginElementButton  : '.button-lg',
    <br>    loginAfterElement   : '.skinner-right',
    <br>    noShow              : true<br>
}


