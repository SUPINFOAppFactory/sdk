# SUPINFO AppFactory Plugin SDK
This repository provides the framework needed to create an AppFactory Plugin.
Plugins are components that are added to a AppFactory app (http://www.supinfoappfactory.com) to add additional functionality to the platform.

## Video Tutorials
Here is a playlist on how to develop on the plugins using our SDK
https://www.youtube.com/playlist?list=PLnq_waykAGlgsERwxHmGNokE6WIeVeH0I

##Dev Environment
If you havent setup your environment just yet click here https://github.com/SUPINFOAppFactory/sdk-master/wiki/How-to-setup-your-development-environment to get started

[Video Tutorial Here](https://www.youtube.com/watch?v=IZcvBZT-zjY&list=PLnq_waykAGlgsERwxHmGNokE6WIeVeH0I&index=1)


## Plugins
Plugins are written in HTML and JavaScript with a few restrictions:
* Plugin files must be written within the __required folder structure__, so that the system can identify and import it correctly
* Plugin HTML files must be styled with __bootstrap__ (http://getbootstrap.com) so that your pages will be styled with theme that the app owner has chosen
* Plugin HTML files must import __buildfire.js in the header__ of the document in order to access the platform, context and device

### Plugin Structure
![file system](https://dl.dropboxusercontent.com/s/b24vawzz1jrsz2o/plugin%20structure.png?dl=0)

Plugins consists of three major components:
* the Config (plugin.json)
* the Control
  * Context
  * Design
  * Settings
* the Widget
* **The Resources** 
  * **Note** :This folder is only meant for plugin configuration resource like default widget icon and widget hero image.** You can replace those two files if you need by overriding the default hero image and default icon image. **Don't add any other files in this folder, any dependencies in this folder WILL NOT be carried over to the app.**


#### the Config (plugin.json)
The configuration of each plugin is placed in a file on the root of the plugin called __plugin.json__. This JSON file consists of all the settings the plugin requires

#### the Control (folder)
The Control is the part of the code that is added to the App Control Panel to help configure your plugin
the control has 3 sections/__sub folder__ *each of which have their own index.html start page*:
* content
* design
* settings

#### the Widget (folder)
The Widget is the part that is rendered on the device. It consumes the configuration made from the control and displays the output.


![Control Panel](https://dl.dropboxusercontent.com/s/3x284a9g2aoetw0/ControlPanelAppFact.png?dl=0)


#### the Resources (folder)
The Resources is the default images which will be used for your widget .
* image.png : this image file will be used as a default image for your widget which will appear when App Owners installed your plugin in their plugin Manager .

* icon.png : this image file will be used as a default icon for your widget which will appear as an icon for the widget on the emulator and the actual device .

* **Note** :This folder is only meant for plugin configuration resource like default widget icon and widget hero image.** You can replace those two files if you need by overriding the default hero image and default icon image. **Don't add any other files in this folder, any dependencies in this folder WILL NOT be carried over to the app.**

[Video Tutorial Here](https://www.youtube.com/watch?v=4qh4S-BwLJM&list=PLnq_waykAGlgsERwxHmGNokE6WIeVeH0I&index=2)

### for full documentation on how to develop a plugin [click here to see the wiki](https://github.com/SUPINFOAppFactory/sdk-master/wiki)
