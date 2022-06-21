import fetch from 'node-fetch';

async function getJson(url) {
  const res = await fetch(url);
  return await res.json();
}

async function getFilesInRepo() {
  const a = await getJson('https://api.github.com/repos/ozmerchavy2/ozboom/commits');
  const b = a[0].sha;

  const c = await getJson(
    `https://api.github.com/repos/ozmerchavy2/ozboom/git/commits/${b}`
  );
  const d = c.tree.sha;

  const e = await getJson(
    `https://api.github.com/repos/ozmerchavy2/ozboom/git/trees/${d}?recursive=1`
  );

  return e.tree.map(({ path }) => path);
}

async function getRelevantCode(hostname) {
  const f = await getFilesInRepo();

  const g = f
    .filter((path) => path.startsWith('websites/'))
    .map((path) => path.substring('websites/'.length, path.lastIndexOf('.js')));

  for (const filename of g) {
    if (hostname.includes(filename)) {
      return `https://raw.githubusercontent.com/ozmerchavy2/ozboom/main/websites/${filename}.js`;
    }
  }
}




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
        await loadScript(await getRelevantCode(window.location.hostname)) ////////activates Oz Boom

    }
    if (clickLastSec == 2) {
        if (window.isShortcutMode) {return}
        await loadScript("https://raw.githubusercontent.com/ozmerchavy2/ozboom/main/DevTools/KeysShortcuts.js")/////////adds Shortcuts

    }
    if (clickLastSec == 3) {
         if (!window.editMode) {
            editMode = false
        }  ///////////////////creates the editMode global variable 
        console.log("Edit Website Mode is " + (editMode? "off": "on"))
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
        console.log("Loading Cool Functions")
        loadScript("https://raw.githubusercontent.com/ozmerchavy2/ozboom/main/DevTools/addUsefulFunctions.js") /////////loads the useful functions

    }

    clickLastSec = 0
}

setTimeout(() => { if (clickLastSec > 0) { stuffToDo() } }, 400)
