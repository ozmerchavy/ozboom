
let instructionKeys = []
console.log("Keys shortcuts are added")
console.log("This are the options: ")
if (!window.isShortcutMode) {
    isShortcutMode = true
}  ///////////////////creates the shortcutmode global variable 
isShortcutMode = true  ///////////////////allowes shortcuts

async function loadScript(scriptLink) {
    let instructions
    try {
        instructions = await fetch(scriptLink);
    }
    catch (err) {
        alert('error! this is the info we have: \n' + JSON.stringify(err))
        return
    }
    if (instructions.status == 404) { console.log("Script link doesnt work. Try manually to check if there's a script for you here: \n" + scriptLink); return }
    Function(await instructions.text())()
}
function addShortcut(keyString, scriptLink, description) {
    let keyCode = "Key" + keyString.toUpperCase()
    instructionKeys.push(({ keyString, description }))
    document.addEventListener("keyup", async (e) => {
        if (e.code != keyCode) { return; }
        if(isShortcutMode == false ){return }
        console.log(keyString + " is pressed!")
        isShortcutMode = false
        console.log(description)
        await loadScript(scriptLink)
    })
}

addShortcut("t", "https://raw.githubusercontent.com/ozmerchavy2/ozboom/main/DevTools/freezeTimers.js", "freeze timers in the page")
addShortcut("v", "https://raw.githubusercontent.com/ozmerchavy2/ozboom/main/DevTools/randomEmail.js", "copy random Email adress")
addShortcut("f", "https://raw.githubusercontent.com/ozmerchavy2/ozboom/main/DevTools/fillForms.js", "fill forms 2.0")
addShortcut("g", "https://raw.githubusercontent.com/ozmerchavy2/ozboom/main/DevTools/fillForms-old-vrs.js", "fill forms 1.0")
addShortcut("p", "https://raw.githubusercontent.com/Krazete/bookmarklets/master/piano.js", "cool piano inside the page!")
addShortcut("u", "https://raw.githubusercontent.com/Krazete/bookmarklets/master/tri.js", "3d page!!")
addShortcut("b", "https://unpkg.com/@mourner/bullshit@1.2.0/bullshit.js", "reveals bullshit in page")
addShortcut("s", "https://raw.githubusercontent.com/ozmerchavy2/ozboom/main/DevTools/addSuperFetchFunction.js", "add SuperFetch functions to the console.")



console.log(instructionKeys)



