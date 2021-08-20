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

let email = [...document.querySelectorAll("input")].filter(x=>x.outerHTML.includes("mail"))[0].value
console.log(email+" is being tested")
await amazingFetch("https://www.geoguessr.com/api/v3/accounts/signup", {
  "headers": {
    "accept": "*/*",
    "accept-language": "he,en;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"92\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"92\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cookie": "devicetoken=F63FF54929; __gads=ID=7c7ef0462769a5ae:T=1629460421:S=ALNI_MbKWPri90JRYpf3TqSj4WQsWzqo8A; _ga=GA1.2.1368626205.1629460428; _gid=GA1.2.1595404295.1629460433; _gat_gtag_UA_40205730_2=1"
  },
  "referrer": "https://www.geoguessr.com/signup?target=%2F",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": `{\"email\":\"${email}"}`,
  "method": "POST",
  "mode": "cors"
});
