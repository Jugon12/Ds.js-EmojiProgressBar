# Emoji-PogressBar

This script is for creating emoji progress bars for Discord.js.

It includes a folder with some free-use pictures for your progress bar. Just upload them as emojis in your guild server, and change de Id's in the .js file.
You can get the ID of an emoji by typing in any channel \:emoji_name:.

**¡BE CAREFUL!**
For proper work in embeds, be sure to give permissions in all channels of using external emojis for the bot.

## How to use it
First you have to require the script at the start of your file:
```javascript
const Bar = require("../functions/progressbar.js")
```

And then use it wherever you want:
```javascript
let progressBar = Bar.generateBar(color, length, interval, number, client)
```

Also remember to invoke the variable with template literals:
```javascript
await interaction.editReply(`${progressBar}`)
```

#### Parameters:
- color: The color for your progress bar, you can use multiple colors as in the .js file, or only just have one color used.
- lenght: The maximum lenght of the progress bar. Ex: In a lifebar it would be 100.
- interval: How many numbers contains one emoji. Ex: In the life bar, setting the interval to 20 would return us a 5 emoji lenght life bar.
- numer: How much has the progress bar progressed. Ex: In the life bar, 47 life points out of 100.
- client: Discord client, don't modify this parameters, just let it as default.

## Examples 
![](https://imgur.com/Ms4vEdS.png)
\
![](https://imgur.com/nXqcT66.png)

## Contact
Feel free to ask any questions or suggesting changes to Jugon#2059!
