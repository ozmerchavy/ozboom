(async function loadScript() {
    let instructions
    try {
        instructions = await fetch('https://raw.githubusercontent.com/ozmerchavy2/ozboom/main/websites/www.dominos.ca.js);
    }
    catch (err) {
        alert('error! this is the info we have: \n' + err.message)
        return
    }
    if (instructions.status == 404) { console.log("Script link doesnt work. Try manually to check if there's a script for you here: \n" + scriptLink); return }
    Function(await instructions.text())()
})();
