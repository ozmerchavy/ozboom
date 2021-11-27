
console.log(Object.keys(window).filter(function(x)
{
    try {return !/\[native code\]/.test(window[x].toString())}
    catch{return false}
}))
