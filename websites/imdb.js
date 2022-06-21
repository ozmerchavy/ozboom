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


loadScript("https://raw.githubusercontent.com/ozmerchavy2/ozboom/main/DevTools/find-shows-in-Hs.js")
