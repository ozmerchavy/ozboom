async function superfetch%28t%2Ce%29%7Blet r%3D%60https//notes-get-req.herokuapp.com/fetch?url=${t}`;e&&(r+=`&options=${JSON.stringify(e)}`);const n=await fetch(r),s=await n.text()
  ,a=JSON.parse(s).text;return(new DOMParser).parseFromString(a,"text/html")}
async function trySuperFetch(url,options=undefined){let superUrl=`https://notes-get-req.herokuapp.com/fetch?url=${url}`;if(options){superUrl+=`&options=${JSON.stringify(options)}`}console.log("tried")}

console.log("added async functions: trySuperFetch, superFetch")
