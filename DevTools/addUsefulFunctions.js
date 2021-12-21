say = console.log
sleep = (ms)=> new Promise(res => (setTimeout(res,ms)))
superFetch = async function superFetch(url, options = undefined) {
    let superUrl = `https://notes-get-req.herokuapp.com/fetch?url=${url}`;
    if (options) {
        superUrl += `&options=${JSON.stringify(options)}`;
    }
    const theFetch = await fetch(superUrl);
    const theText = await theFetch.text();
    return JSON.parse(theText);
}
checkLink = async function checkLink(t){const e=await amazingFetch(t),n=await e.text();return(new DOMParser).parseFromString(n,"text/html")}

randomArticleName = async function randomArticleName(){
let wiki = await superFetch("https://en.wikipedia.org/wiki/Special:Random")
return wiki.text.split("title>")[1].split(" - Wikipedia</")[0]}

downloadJSON = function downloadJSON(filename, string) {
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

downloadText= function downloadText(filename, string) {
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

amazingFetch = async function(url, options = undefined) {
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

getVariables = function getVariables(){
    return Object.keys(window).filter(function(x)
{
    return window[x] instanceof Function && !/\[native code\]/.test(window[x].toString());
});}


allScripts = await Promise.all([...document.scripts].map(async (x, idx) => {
        if (x.src) {
            let obj = {}; 
            obj.source = x.src;
            try {obj.code = await fetch(x.src).then(x => x.text(), (err)=>{x.src})}
            catch {obj.code = ""}
        return obj
        }
        else { return ({ "source": "document", "code": x.innerText }) }
    }))

findInScripts = async function(query){
    return allScripts.filter(x =>{ try {return x.code.includes(query)} catch{return false}})
}


console.log("added async functions: amazingFetch, superFetch (its old version), checkLink (that returns a document - rn doesnt work), findInScripts, and RandomArticleName() and downloadTEXT downloadJSON")
