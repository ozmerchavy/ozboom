console.log("converting from hectars to km2...")

function formatize(innerT){
   const t =  Math.round(Number(innerT)/ 100) 
   return t.toLocaleString() + " "
}

function makeTableKM2ifNecessary(table) {
    let headers = [...table.querySelectorAll("th")];
  
    for (let i = 0; i < headers.length; i++) {
      if (headers[i].innerText === "Hectares") {
        headers[i].innerHTML = 'km<sup>2</sup>';
  
        let tds = [...table.querySelectorAll("tr")].map(tr => tr.querySelectorAll("td")[i]);
  
        tds.forEach(td => {
          if (td) {
            td.innerText = formatize(td.innerText);
          }
        });
  
        let sum = table.querySelectorAll("tfoot th")[i]
        console.log(sum)
        if(sum){
            sum.innerText = formatize(sum.innerText)

        }
        
      }
    }
  }
  
[...document.querySelectorAll("table")].forEach(t=>makeTableKM2ifNecessary(t))
