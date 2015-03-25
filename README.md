JetSetter [![Join the chat at https://gitter.im/msavin/Mongol](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/msavin/Mongol?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) <a href="https://gratipay.com/16f742ef619c/"><img src="https://img.shields.io/gratipay/16f742ef619c.svg"></a>
==================

JetSetter is a Get/Set tool for Meteor Sessions. JetSetter keeps you out of the console by providing a visual abstraction for working with Session variables. 


How to Install
--------------

JetSetter configures automatically. To get started, simply run:

	$ meteor add msavin:jetsetter

After installation, press <strong>Control + M</strong> to toggle it.<br>If you'd prefer to see a demo first, go to http://jetsetter.meteor.com.


See All Your Sessions at Once
----------------------------
JetSetter will automatically scan for all your Session variables and display them in your browser. 

<img src="https://raw.githubusercontent.com/msavin/JetSetter/master/documentation/screenshots/1.gif">


Easily View & Modify Sessions
------------------------------
With a click, you can expand the panel to see the Session variables complete value. You're then a click away from modifying its value. 

<img src="https://raw.githubusercontent.com/msavin/JetSetter/master/documentation/screenshots/2.png">


Only There When You Want It
---------------------------
JetSetter won't render into the DOM until you activate it. You can activate by pressing <strong>Control + M</strong>, or with `Session.set("MeteorToys_display", true)`.

<img src="https://raw.githubusercontent.com/msavin/JetSetter/master/documentation/screenshots/3.png">

Additional Information
----------------------
 - <a href="https://atmospherejs.com/msavin/jetsetter">On Atmosphere</a>
 - <a href="https://github.com/msavin/JetSetter/">On GitHub</a>
 - <a href="https://github.com/msavin/JetSetter/blob/master/documentation/LICENSE.md">Licensed under MIT</a>
 - Designed to work with <a href="https://github.com/msavin/Mongol/">Mongol</a>