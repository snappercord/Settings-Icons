const fs = require('fs');

let userstyle = `
/* ==UserStyle==
@name         Discord Settings Icons
@description  Add neat looking icons to the settings menu
@author       MulverineX
@namespace    github.com/MulverineX/legacy-settings-icons
@version      1.0.0
@license      CC0-1.0
@var color settings-icon-color "Icon Fill Color" white
@var color settings-subscriptions "Nitro/Subscriptions Icon Fill" #80a6ff
@var color settings-hypesquad "Hypesquad Icon Fill" #fbb848 
@var color settings-logout "Logout Icon Fill" #f04747
==/UserStyle== */

@-moz-document domain("discord.com") {
    $replace$
}
`.trim();

const styles = fs.readFileSync("dist-web.css").toString();

userstyle = userstyle.replace('$replace$', styles.trim());

fs.writeFileSync("legacy-settings-icons.user.css", userstyle)