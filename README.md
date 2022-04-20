# Weekly Chore Tracker
This app was designed to be used by a family to track chores and make sure that they get done over the course of a week. On Sunday it will clear the previous weeks completions to start over. 

This is meant to be run on a raspberry pi that uses a touchscreen. I used the 7" official Pi touch screen to complete this build. 

Required Hardware: 
1. Raspberry Pi 4B (at least 2GB of Ram for full OS support)
2. Pi Accessories (power brick, heat sinks)
3. 7" official Pi Touchscreen
4. Display ribbon cable
5. Keyboard
6. 3D printed parts
7. 32 GB micro SD card

Step 1: Print Parts

Using a 3d printer and slicing software, print the back, legs, and bezel STLS. 
When choosing which version of the top to print consider whether or not you'll 
be using a cooling fan and what size it'll be. Hardware for assembly is listed 
at https://www.thingiverse.com/thing:4610955. 

Step 2: Flash OS 

Using the Raspberry Pi Imager tool flash the micro SD card. Making sure that you
check the ssh box and put in the SSID and password for your wifi network. 

Step 3: Assemble

Follow the guide for the touch screen assembly but stop before putting on the top piece. 
It'll need to be left off till we're sure that everything is working completely. 

Step 4: Software

run the install.sh script to setup the pi to automatically open to the chores screen in a
full screen view.