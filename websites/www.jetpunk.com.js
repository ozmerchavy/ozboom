
function all() {
    sade = document.querySelector('input[name="stopitchrome"]');
countries = _page.data.quiz.answers.map(x=> x.display)
    if (document.querySelector('h1').innerText.includes("Find The Mystery Country")){
    countries = [
    "Samoa",
    "Tonga",
    "Tuvalu",
    "Fiji",
    "Kiribati",
    "Nauru",
    "Vanuatu",
    "Marshall Islands",
    "Solomon Islands",
    "New Zealand",
    "El Salvador",
    "Guatemala",
    "Belize",
    "Mexico",
    "Papua New Guinea",
    "Costa Rica",
    "Honduras",
    "Nicaragua",
    "Federated States of<br />Micronesia",
    "Panama",
    "Ecuador",
    "Jamaica",
    "Palau",
    "Cuba",
    "Peru",
    "Chile",
    "Bahamas",
    "Haiti",
    "Colombia",
    "Dominican Republic",
    "East Timor",
    "Japan",
    "Bolivia",
    "Saint Kitts and Nevis",
    "United States",
    "Uruguay",
    "Grenada",
    "South Korea",
    "Antigua and Barbuda",
    "Saint Vincent and the<br />Grenadines",
    "Dominica",
    "Saint Lucia",
    "Trinidad and Tobago",
    "North Korea",
    "Paraguay",
    "Argentina",
    "Venezuela",
    "Barbados",
    "Taiwan",
    "Philippines",
    "Guyana",
    "Australia",
    "Brunei",
    "Suriname",
    "Canada",
    "Singapore",
    "Vietnam",
    "Cambodia",
    "Laos",
    "Malaysia",
    "Thailand",
    "Iceland",
    "Indonesia",
    "Mongolia",
    "Myanmar",
    "Bhutan",
    "Brazil",
    "Bangladesh",
    "Norway",
    "Ireland",
    "Finland",
    "Nepal",
    "Cape Verde",
    "Sweden",
    "Estonia",
    "United Kingdom",
    "Denmark",
    "China",
    "Latvia",
    "Sri Lanka",
    "Netherlands",
    "Belgium",
    "Lithuania",
    "Luxembourg",
    "Kyrgyzstan",
    "Portugal",
    "Tajikistan",
    "Belarus",
    "Liechtenstein",
    "Czech Republic",
    "Germany",
    "Andorra",
    "Switzerland",
    "Poland",
    "Gambia",
    "Guinea-Bissau",
    "Slovakia",
    "Austria",
    "Monaco",
    "Maldives",
    "Slovenia",
    "Hungary",
    "San Marino",
    "Uzbekistan",
    "Senegal",
    "India",
    "Spain",
    "France",
    "Sierra Leone",
    "Kazakhstan",
    "Vatican City",
    "Moldova",
    "Ukraine",
    "Bosnia and<br />Herzegovina",
    "Croatia",
    "Morocco",
    "Lesotho",
    "Montenegro",
    "Romania",
    "Russia",
    "Guinea",
    "Kosovo",
    "Serbia",
    "Liberia",
    "Turkmenistan",
    "Afghanistan",
    "North Macedonia",
    "Georgia",
    "Mauritania",
    "Pakistan",
    "Bulgaria",
    "Albania",
    "Eswatini",
    "Armenia",
    "Azerbaijan",
    "Italy",
    "Malta",
    "Ivory Coast",
    "South Africa",
    "Mauritius",
    "Tunisia",
    "Turkey",
    "Greece",
    "Ghana",
    "Iran",
    "Cyprus",
    "Togo",
    "Botswana",
    "Namibia",
    "Burkina Faso",
    "Bahrain",
    "Madagascar",
    "United Arab Emirates",
    "Mali",
    "Kuwait",
    "Lebanon",
    "Qatar",
    "Syria",
    "Benin",
    "Iraq",
    "Oman",
    "Zimbabwe",
    "Algeria",
    "São Tomé and Príncipe",
    "Comoros",
    "Seychelles",
    "Israel",
    "Jordan",
    "Mozambique",
    "Equatorial Guinea",
    "Angola",
    "Malawi",
    "Gabon",
    "Zambia",
    "Niger",
    "Nigeria",
    "Egypt",
    "Saudi Arabia",
    "Yemen",
    "Libya",
    "Cameroon",
    "Djibouti",
    "Republic of the Congo",
    "Burundi",
    "Somalia",
    "Rwanda",
    "Tanzania",
    "Eritrea",
    "Chad",
    "Central African Republic",
    "Democratic Republic<br />of the Congo",
    "Ethiopia",
    "Kenya",
    "Sudan",
    "Uganda",
    "Mystery Country",
    "South Sudan"
]
    
    }
answers = countries.map(x => {
    if (!x.includes(`{`)) {
        return x
    } else {
        return x.split("{")[1].split("}")[0]
    }
})
let i = 0
function guess(){
    
    if (i < answers.length) {
        sade.value = answers[i];
        sade.dispatchEvent(new KeyboardEvent("input"));
        i++;
        setTimeout(guess, 10);
    } 
}
guess()
}
all()
