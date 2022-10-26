function generateBar(color, lenght, interval, number, client) {

    // Declaring the emojis IDs
    
    let Full_start = ""
    let Full_middle = ""
    let Full_end = ""

    let Empty_start = ""
    let Empty_middle = ""
    let Empty_end = ""
    
    // The emojis IDs must be like this 0123456789012345678

    if (color === "green"){

        Full_start = client.emojis.cache.get("ID")
        Full_middle = client.emojis.cache.get("ID")
        Full_end = client.emojis.cache.get("ID")

        Empty_start = client.emojis.cache.get("ID")
        Empty_middle = client.emojis.cache.get("ID")
        Empty_end = client.emojis.cache.get("ID")
    }
    if (color === "red"){

        Full_start = client.emojis.cache.get("ID")
        Full_middle = client.emojis.cache.get("ID")
        Full_end = client.emojis.cache.get("ID")

        Empty_start = client.emojis.cache.get("ID")
        Empty_middle = client.emojis.cache.get("ID")
        Empty_end = client.emojis.cache.get("ID")
    }    
    

    let nIcons = Math.round(lenght/interval)        // Number of icons it will display
    let bar = ""
    let filledIcons = Math.round(number/interval)   // Number of filled icons
    let emptyIcons = nIcons - filledIcons           // Number of empty icons

    if (filledIcons === nIcons){                    // Checks if the bar is full
        bar = `${Full_start}` 
        for (let i = 0; i < nIcons-2; i++){
            bar += `${Full_middle}`
        }
        bar += `${Full_end}`

    } else if (filledIcons >= 1) {                  // If the bar isn't completly full o empty it first display (filledIcons-1) middle emojis
        bar = `${Full_start}`                       // because one emoji is saved por the start and another for the end
        for (let i = 0; i < filledIcons-1; i++){
            bar += `${Full_middle}`
        }
        for (let i = 0; i < emptyIcons-1; i++){
            bar += `${Empty_middle}`
        }
        bar += `${Empty_end}`

    } else if (filledIcons === 0) {                 // Checks if the bar is empty
        bar = `${Empty_start}`
        for (let i = 0; i < nIcons-2; i++){
            bar += `${Empty_middle}`
        }
        bar += `${Empty_end}`
    }

    return bar
}

module.exports = { generateBar };                   // Exports the function
