////////////////Design Functions

function onelinify(attributes) {
  return attributes
    .replaceAll(/\s+/g, " ")
    .replaceAll(/ ?: ?/g, ": ")
    .replaceAll(/ ?; ?/g, "; ")
    .trim();
}

function draw_oz_boom(menu_obj) {
  const container = document.createElement("div");
  container.style = onelinify(`
    --height: 400px;
    --margin: 15px;
    z-index: 92147483647;
    position: fixed;
    bottom: var(--margin);
    left: var(--margin);
    right: var(--margin);
    top: calc(100% - var(--height));
    background: rgb(30, 30, 30, 0.95);
    border-radius: 15px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 5px;
    box-shadow: rgba(10, 10, 10, 0.8) 0px 3px 8px;
  `);

  menu_obj.forEach(({ keyString, description }) => {

    const h1 = document.createElement("h1");
    h1.innerText = keyString;
    h1.style = onelinify(`
        font-family: monospace;
        font-size: 30px;
        margin-bottom: 13px;
        color: rgb(48, 26, 52);
        text-shadow: -2px 0 purple, 0 2px purple, 2px 0 purple, 0 -2px purple;
    `);

    const p = document.createElement("p");
    p.innerText = description;
    p.style = onelinify(`
        font-size: 14px;
        text-transform: capitalize;
        color: #c0c0c0c0;
        text-shadow:
            -1px 0 black,
            0 1px black,
            1px 0 black,
            0 -1px black;
    `);

    const item = document.createElement("div");
    item.style = onelinify(`
        flex: 1;
        text-align: center;
        flex-basis: 200px;
        padding: 10px;
    `);

    item.appendChild(h1);
    item.appendChild(p);

    container.appendChild(item);
  });

  document.body.appendChild(container);

  const keys = menu_obj.map((obj) => obj.keyString);

  function attempt_to_clear(event) {
    const charCode = event.keyCode || event.which;
    const charStr = String.fromCharCode(charCode).toLowerCase();
    if (keys.indexOf(charStr) != -1) {
      document.body.removeChild(container);
      document.removeEventListener("keydown", attempt_to_clear);
    }
  }
  document.addEventListener("keydown", attempt_to_clear);
}

///////////////////////////Here Code Starts

let instructionKeys = []
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
addShortcut("w", "https://raw.githubusercontent.com/Krazete/bookmarklets/master/piano.js", "cool piano inside the page!")
addShortcut("u", "https://raw.githubusercontent.com/Krazete/bookmarklets/master/tri.js", "3d page!!")
addShortcut("b", "https://unpkg.com/@mourner/bullshit@1.2.0/bullshit.js", "reveals bullshit in page")
addShortcut("a", "https://raw.githubusercontent.com/ozmerchavy2/ozboom/main/DevTools/addUsefulFunctions.js", "add useful functions to chrome")
addShortcut("m", "https://github.com/ozmerchavy2/ozboom/blob/main/DevTools/test-10-min-mails.js", "tests '10 Min Mail' sites by emailing them")
addShortcut("p","https://raw.githubusercontent.com/ozmerchavy2/ozboom/main/DevTools/poop.js", "make everything poop")
addShortcut("s","https://raw.githubusercontent.com/ozmerchavy2/ozboom/main/DevTools/find-shows-in-Hs.js", "makes every h in page link to a show if one exists")


console.log("Keys shortcuts were added")
draw_oz_boom(instructionKeys);



