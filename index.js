async function websitecode() {
      let instructions
      try {
            instructions = await fetch("https://raw.githubusercontent.com/ozmerchavy2/ozboom/main/websites/" + window.location.hostname + ".js");
      }
      catch (err) {
            alert('err! info' + JSON.stringify(err))
            return
      }
      if (instructions.status == 404) { alert("error:404"); return }
      Function(await instructions.text())()
} /////////////////////////////////////////Teaches how to do the OzBoom

if (!window.clickLastSec) {
      clickLastSec = 0
} ///////////////////////////////////////Adds clickLastSec as a thingy thing 
clickLastSec++//////////////////////////indicates a click

async function stuffToDo() {
      if (clickLastSec < 3) {
            await websitecode()
      }
      if (clickLastSec == 3) {
            console.log("Easter egg")
            if (!window.editMode) {
                  editMode = 0
            }
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
