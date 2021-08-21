Object.keys(window).filter(function(x)
{
    return window[x] instanceof Function && !/\[native code\]/.test(window[x].toString());
});
