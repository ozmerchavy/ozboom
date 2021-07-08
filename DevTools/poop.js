["p", "span", "h1", "h2", "h3", "h4"].forEach(x => [...document.querySelectorAll(x)].forEach(t => {
    let prev = t.innerText.length;
    t.innerText = "";
    for (let i = 0; i < prev; i++) t.innerText += "poop "
}))
