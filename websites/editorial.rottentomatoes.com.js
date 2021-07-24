let allsuspects = [...$$("h2", "h3", "h4", "h5")]
let kaki = new Date
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
await loadScript("https://raw.githubusercontent.com/ozmerchavy2/ozboom/main/DevTools/addUsefulFunctions.js") 



async function getShowlink(keyword) {
    let yap = encodeURI(keyword)

    let res = await amazingFetch(`https://www.sdarot.tv/search?term=${yap}`)
    let text = await res.text()
    if (text.includes('לא נמצאו')) { return null }
    let docu = new DOMParser().parseFromString(text, "text/html")
    let b = docu.querySelector(`a[href*=watch]`)
    if (!b) { // if no link found (error page)
        console.log('pipi bamichnas', keyword)
        return null
    }
    else {
        let link = 'https://sdarot.tv/watch' + b.toString().split("/watch")[1]
        return link
    }
}




while (allsuspects.length > 0) {
    const h = allsuspects.shift()
    let name = h.innerText.match(/[\w ]+/g)?.[0];
    if (name) {

        let link = await getShowlink(name)
        if (link) {
            say('got the link', link)
            h.querySelectorAll("*").forEach(thing => thing.href = "#")
            h.style.border = "3px solid yellow"
            h.style.cursor = "pointer"
            h.style.textDecoration = 'underline'
            h.onclick = function () { open(link) }
        }
        else {
            allsuspects.push(h)
        }
        await sleep(Math.floor(Math.random() * 250 + 400))
        if (new Date - kaki > 1000 * 60 * 2) { say("I need to do pipi"); break }
    }

}
