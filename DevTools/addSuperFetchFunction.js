async function superFetch(url, options = undefined) {
    let superUrl = `https://notes-get-req.herokuapp.com/fetch?url=${url}`;
    if (options) {
        superUrl += `&options=${JSON.stringify(options)}`;
    }
    const theFetch = await fetch(superUrl);
    const theText = await theFetch.text();
    return JSON.parse(theText);
}
async function trySuperFetch(url,options=undefined){let superUrl=`https://notes-get-req.herokuapp.com/fetch?url=${url}`;if(options){superUrl+=`&options=${JSON.stringify(options)}`}console.log("tried")}
async function checkLink(t){const e=await fetch(t),n=await e.text();return(new DOMParser).parseFromString(n,"text/html")}


console.log("added async functions: trySuperFetch, superFetch and checkLink (that returns a document)")
