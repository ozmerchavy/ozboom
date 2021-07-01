let intervalFinal = setInterval(()=>{},0)
let timeFinal = setTimeout(()=>{},0)
for (i = 0; i <= intervalFinal; i++) {
    clearInterval(i);
}
for (i = 0; i <= timeFinal; i++) {
    clearTimeout(i);
}
