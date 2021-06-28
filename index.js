await (async function websitecode() {
    let instructions
    try {
        instructions = await fetch("https://raw.githubusercontent.com/ozmerchavy2/ozboom/main/websites/" + window.location.hostname + ".js");
    }
    catch (err) {
        alert('err! info' + JSON.stringify(err))
        return
    }
    if (instructions.status == 404) { alert("error:404");return }
    Function(await instructions.text())()
})()

console.log ("success")
