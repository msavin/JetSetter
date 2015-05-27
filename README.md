<a href="http://bit.ly/1ARJG4x"><img align="center" src="https://raw.githubusercontent.com/msavin/Mongol/master/documentation/ad.png"></a>

JetSetter 
=========
Meet JetSetter, the insanely handy development package for Meteor. Starting today, you'll never have to enter the console to play with your Session variables again. Instead, JetSetter lets you view and modify your Session variables in the browser. And because JetSetter is a debugOnly package, it does not compile to production code.

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

Plug-and-Play Installation
--------------------------

JetSetter configures automatically. To get started, simply run:

	$ meteor add msavin:jetsetter

After installation, press <strong>Control + M</strong> to toggle it.<br>If you'd prefer to see a demo first, go to http://jetsetter.meteor.com.

JetSetter Pro
----------
JetSetter Pro is available as part of the Meteor Toys suite. The Pro version allows you to watch reactive variables and dictionaries, and includes support for inline editing. For more information, go to the <a href="http://meteor.toys">Meteor Toys</a> website.

Additional Information
----------------------
 - <a href="https://atmospherejs.com/msavin/jetsetter">On Atmosphere</a>
 - <a href="https://github.com/msavin/JetSetter/">On GitHub</a>
 - <a href="https://github.com/msavin/JetSetter/blob/master/documentation/LICENSE.md">Licensed under MIT</a>
 - Designed to work with <a href="https://github.com/msavin/Mongol/">Mongol</a>
