(() => {
  let p;

  return (() => {
    console.log("HOT AND COLD MODE");
    window.document.title = "HACKED " + document.title;
    const originalComputeDistanceBetween =
      google.maps.geometry.spherical.computeDistanceBetween;
    google.maps.geometry.spherical.computeDistanceBetween = function (...args) {
      const result = originalComputeDistanceBetween.apply(this, args);
      const KMresult = Math.round(result / 1000) + " km";
      console.log("distance is", KMresult);
      document.title = KMresult;
      try {
        const p2 = [...document.querySelectorAll("p")].find((p) =>
          p.innerText.includes("Click on the map")
        );
        p = p2 ?? p;

        p.innerText = "your guess is " + KMresult + " away from hider";
      } catch {}

      return result;
    };
  })();
})();
