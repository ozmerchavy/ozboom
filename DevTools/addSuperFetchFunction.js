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


console.log("added async functions: trySuperFetch, superFetch and checkLink (that returns a document)")
