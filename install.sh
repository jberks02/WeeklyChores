# install latest software

sudo apt update

sudo apt upgrade

# install node, git, npm

sudo apt install nodejs

sudo apt install npm 

sudo apt install git

# clone repo

git clone https://github.com/jberks02/WeeklyChores.git

# build output 

cd ./WeeklyChores

npm run build

# configure automatic full screen

cd /home/pi/.config

sudo mkdir -p lxsession/LXDE-pi

sudo touch lxsession/LXDE-pi/autostart

'@lxpanel --profile LXDE-pi' >> lxsession/LXDE-pi/autostart
'@pcmanfm --desktop --profile LXDE-pi' >> lxsession/LXDE-pi/autostart
#'@xscreensaver -no-splash' >> lxsession/LXDE-pi/autostart
'point-rpi' >> lxsession/LXDE-pi/autostart
'@chromium-browser --start-fullscreen --start-maximized /home/pi/WeeklyChores/dist/index.html' >> lxsession/LXDE-pi/autostart
