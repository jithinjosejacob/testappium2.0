This repo is used to maintain appium 2.0 tests using WebdriverIO and simple plugin development.

We use ```ApiDemos-debug.apk``` in apps directory to run a simple android test against appium server 2.0.

Make sure that you have Android SDK Tools setup in your local - ```https://developer.android.com/tools```

Recommended to use Android Studio as an IDE for this setup

***Steps to setup***

1) Run ```npm ci``` to setup all dependancies

2) Create an emulator to run the android tests.
Start the emulator
Update the device name onto appium:deviceName in wdio.conf.js file

3) Install plugin using ```appium plugin install --source=local /path/to/your/plugin```
In this case you can use ```appium plugin install --source=local ./logSessionDataPlugin```
   
4) verify the Plugin installation using ```appium plugin list```
   
5) Set up Appium Server using ```appium --use-plugins=logSessionData```. 
   This terminal would now run appium serever

6) Run tests using ```npm run test``` in a new terminal

5) Observe the Appium Server logs for required message