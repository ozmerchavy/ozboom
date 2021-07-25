let allsuspects = [...document.querySelectorAll("h2", "h3", "h4", "h5")]
let kaki = new Date
say = console.log
sleep = (ms) => new Promise(res => (setTimeout(res, ms)))
amazingFetch = async function (url, options = undefined) {
    let superUrl = `https://notes-get-req.herokuapp.com/fetch?url=${url}`;
    if (options) {
        superUrl += `&options=${JSON.stringify(options)}`;
    }
    const theFetch = await fetch(superUrl);
    const { status, text } = JSON.parse(await theFetch.text());
    return {
        status,
        text: () => Promise.resolve(text)
    };
}

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

async function getEnglishlink(keyword) {
    let yap = encodeURI(keyword)

    let res = await amazingFetch(`https://primewire.pics/search/${yap}`)
    let text = await res.text()
    if (text.includes('no results')) { return null }
    let link = `https://primewire.pics/search/${yap}`
    return link

}

async function findHebrew() {
    while (allsuspects.length > 0) {
        const h = allsuspects.shift()
        let name = h.innerText.match(/[a-zA-Z ]+/g)?.[0];
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
}

async function findEnglish() {
        while (allsuspects.length > 0) {
            const h = allsuspects.shift()
            if (h.style.border == "3px solid yellow") { allsuspects.push(h) }
            else{
            let name = h.innerText.match(/[a-zA-Z ]+/g)?.[0];
            if (name) {

                let link = await getEnglishlink(name)
                if (link) {
                    say('got the English link', link)
                    h.querySelectorAll("*").forEach(thing => thing.href = "#")
                    h.style.border = "3px solid blue"
                    h.style.cursor = "pointer"
                    h.style.textDecoration = 'underline'
                    h.onclick = function () { open(link) }
                    allsuspects.push(h)

                }
                else {
                    allsuspects.push(h)
                }
                await sleep(Math.floor(Math.random() * 100 + 100))
                if (new Date - kaki > 1000 * 60 * 2) { say("I need to do pipi"); break }
            }

        }}
    }

findHebrew()
findEnglish()
