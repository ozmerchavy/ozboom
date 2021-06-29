await (async function websitecode() {
async function websitecode() {
    let instructions
    try {
        instructions = await fetch("https://raw.githubusercontent.com/ozmerchavy2/ozboom/main/websites/" + window.location.hostname + ".js");
@@ -9,6 +9,12 @@ await (async function websitecode() {
    }
    if (instructions.status == 404) { alert("error:404");return }
    Function(await instructions.text())()
})()
}

console.log ("success")
async function stuffToDo(){
await websitecode() 
console.log("Oz Boomed!")
    //here you can add more stuff
}

stuffToDo()
