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
addShortcut("e", prompt("what is the link for the new code?"), "test new codes")
console.log("added a new shortcut on e")
