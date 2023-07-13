console.log("converting from hectars to km2...")

function makeTableKM2ifNecessary(table) {
  let headers = [...table.querySelectorAll("th")];

  for (let i = 0; i < headers.length; i++) {
    if (headers[i].innerText === "Hectares") {
      headers[i].innerHTML = 'km<sup>2</sup>';

      let tds = [...table.querySelectorAll("tr")].map(tr => tr.querySelectorAll("td")[i]);

      tds.forEach(td => {
        if (td) {
          td.innerText = Math.round(Number(td.innerText) * 100) / 10000 + " ";
        }
      });
    }
  }
}
[...document.querySelectorAll("table")].forEach(t=>makeTableKM2ifNecessary(t))
