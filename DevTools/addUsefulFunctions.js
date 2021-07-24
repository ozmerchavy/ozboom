say = console.log
superFetch = async function superFetch(url, options = undefined) {
    let superUrl = `https://notes-get-req.herokuapp.com/fetch?url=${url}`;
    if (options) {
        superUrl += `&options=${JSON.stringify(options)}`;
    }
    const theFetch = await fetch(superUrl);
    const theText = await theFetch.text();
    return JSON.parse(theText);
}
trySuperFetch= async function trySuperFetch(url,options=undefined){let superUrl=`https://notes-get-req.herokuapp.com/fetch?url=${url}`;if(options){superUrl+=`&options=${JSON.stringify(options)}`}console.log("tried")}
checkLink = async function checkLink(t){const e=await superFetch(t),n=await e.text();return(new DOMParser).parseFromString(n,"text/html")}

randomArticleName = async function randomArticleName(){
let wiki = await superFetch("https://en.wikipedia.org/wiki/Special:Random")
return wiki.text.split("title>")[1].split(" - Wikipedia</")[0]}

function downloadJSON(filename, string) {
    // thanks Matěj Pokorný from stack overflow
    
    const a = document.createElement('a');
    const href = 'data:application/json;charset=utf-8,' + encodeURIComponent(string);
    a.setAttribute('href', href);
    a.setAttribute('download', filename);
    a.style.display = 'none';

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function downloadText(filename, string) {
    // thanks Matěj Pokorný from stack overflow

    const a = document.createElement('a');
    const href = 'text/plain;charset=utf-8,' + encodeURIComponent(string);
    a.setAttribute('href', href);
    a.setAttribute('download', filename);
    a.style.display = 'none';

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

async function amazingFetch(url, options = undefined) {
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


async function amazingFetch(url, options = undefined) {
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

async function isShow(keyword) {
    let yap = encodeURI(keyword)
    console.log(yap)
    let a = await amazingFetch(`https://www.sdarot.tv/search?term=${yap}`)
    let text = await a.text()
    return !text.includes('לא נמצאו')
}


console.log("added async functions: trySuperFetch, superFetch, checkLink (that returns a document - rn doesnt work), and RandomArticleName() and downloadTEXT downloadJSON too and also amazingFetch() that does return an object too with the function text()")
say("also, isShow() checks if available at sdarot.tv")


