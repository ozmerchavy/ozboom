(function iife() {
  if (window.beenHackedOz) return console.log("already hacked...");
  window.beenHackedOz = true;
  console.log("HACKED: HOT AND COLD MODE");
  window.document.title = "HACKED " + document.title;

  const originalComputeDistanceBetween =
    google.maps.geometry.spherical.computeDistanceBetween;

  google.maps.geometry.spherical.computeDistanceBetween = function (...args) {
    const result = originalComputeDistanceBetween.apply(this, args);
    const KMresult = Math.round(result / 1000) + " km";
    console.log("distance is", KMresult);
    document.title = KMresult;
    showText(KMresult);
    return result;
  };

  let timeout;

  function showText(text) {
    let div = document.getElementById("hacked-div");
    if (!div) {
      div = document.createElement("div");
      div.id = "hacked-div";
      div.style.position = "fixed";
      div.style.top = "30px";
      div.style.right = "30px";
      div.style.zIndex = "99999999999999";
      div.style.color = "black";
      div.style.backgroundColor = "white";
      div.style.padding = "10px";
      div.style.fontSize = "16px";
      div.style.fontWeight = "300";
      div.style.borderRadius = "10px";
      div.style.boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
      div.style.maxWidth = "300px";
      div.style.boxSizing = "border-box";
      div.style.transition = "transform 200ms ease";
      document.body.appendChild(div);
    }

    div.textContent = text;
    div.style.transform = "translateX(0)";

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      div.style.transform = "translateX(300px)";
    }, 1500);

    return div;
  }
})();
