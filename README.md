## Windows Instructions for Ionic / Cordova setup

1. Install node.js
2. npm install --global --production windows-build-tools
3. npm install --global node-gyp
4. Add to PATH variable the following: %USERPROFILE%\.windows-build-tools\python27
5. npm install --global ionic@latest
6. npm install --global cordova@latest

## For creating project with Ionic

1. ionic start projectName

## For updating when saving

1. ionic serve

## IDE: Visual Studio Code

1. Install extension **Ionic Extension Pack**

## Running this project

1. Open the folder in the Visual Studio Code
2. In the terminal run: 
  1. ionic cordova platform add ios
  2. ionic cordova platform add android
  3. ionic cordova platform add browserionic cordova
3. When prompted to download node dependencies, accept.
4. ionic serve
5. Debug the device in the platform you like.
