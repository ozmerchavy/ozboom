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
} /////////////////////////////////////////Teaches how to load a script from a link
if (!window.clickLastSec) {
    clickLastSec = 0
}  ///////////////////creates the clickLastSec global variable 
clickLastSec++//////////////////////////indicates a click

async function stuffToDo() { //////////////////////////HERE IS WHAT WILL HAPPEN BASED ON CLICK AMOUNT
    if (clickLastSec == 1) {
        await loadScript("https://raw.githubusercontent.com/ozmerchavy2/ozboom/main/websites/" + window.location.hostname + ".js") ////////activates Oz Boom
        await loadScript("https://raw.githubusercontent.com/ozmerchavy2/ozboom/main/DevTools/KeysShortcuts.js") /////////adds Shortcuts

    }
    if (clickLastSec == 2) {
        await loadScript("https://raw.githubusercontent.com/ozmerchavy2/ozboom/main/DevTools/KeysShortcuts.js")/////////adds Shortcuts

    }
    if (clickLastSec == 3) {
         if (!window.editMode) {
            editMode = false
        }  ///////////////////creates the editMode global variable 
        console.log("Edit Website Mode is " + (editMode? "on": "off"))
        if (editMode == true) {
            document.body.contentEditable = 'false'; document.designMode = 'off'; void 0
            editMode = false
        }
        else {
            editMode = true
            document.body.contentEditable = 'true'; document.designMode = 'on'; void 0

        }
    }
    if (clickLastSec == 4) {
        console.log("Easter egg boom special")
    }

    clickLastSec = 0
}

setTimeout(() => { if (clickLastSec > 0) { stuffToDo() } }, 1000)
