
function type(input, text) {
    input.select(); // you can also use input.focus()
    input.value = "";

    let l = text.length;
    let current = 0;
    let time = 2

    let write_text = function () {
        input.value += text[current];
        if (current < l - 1) {
            current++;
            setTimeout(function () { write_text() }, time);
        } else {
            input.setAttribute('value', input.value);
            input.focus();
            input.dispatchEvent(new KeyboardEvent('input', {
                bubbles: true,
                cancelable: true,
                key: input.value[input.value.length - 1]
            }));
            input.dispatchEvent(new KeyboardEvent('keyup', {
                bubbles: true,
                cancelable: true,
                key: input.value[input.value.length - 1]
            }));
            input.dispatchEvent(new KeyboardEvent('keydown', {
                bubbles: true,
                cancelable: true,
                key: input.value[input.value.length - 1]
            }));
            input.dispatchEvent(new KeyboardEvent('keypress', {
                bubbles: true,
                cancelable: true,
                key: input.value[input.value.length - 1]
            }));
        }
    }
    setTimeout(function () { write_text() }, time);

}

async function stuff() {

    allinputs = [...document.querySelectorAll("input")],
        password = Math.random().toString(36).slice(3),
        namelist = [
            "Stuart",
            "Christopher",
            "Alan",
            "Colin",
            "Brian",
            "Kevin",
            "Gary",
            "Richard",
            "Derek",
            "Martin",
            "Thomas",
            "Neil",
            "Barry",
            "Ian",
            "Jason",
            "Iain",
            "Gordon",
            "Alexander",
            "Graeme",
            "Peter",
            "Darren",
            "Graham",
            "George",
            "Kenneth",
            "Allan",
            "Simon",
            "Douglas",
            "Keith",
            "Lee",
            "Anthony",
            "Grant",
            "Ross",
            "Jonathan",
            "Gavin",
            "Nicholas",
            "Joseph",
            "Stewart",
            "Daniel",
            "Edward",
            "Matthew",
            "Donald",
            "Fraser",
            "Garry",
            "Malcolm",
            "Charles",
            "Duncan",
            "Alistair",
            "Raymond",
            "Philip",
            "Ronald",
            "Ewan",
            "Ryan",
            "Francis",
            "Bruce",
            "Patrick",
            "Alastair",
            "Bryan",
            "Marc",
            "Jamie",
            "Hugh",
            "Euan",
            "Gerard",
            "Sean",
            "Wayne",
            "Adam",
            "Calum",
            "Alasdair",
            "Robin",
            "Greig",
            "Angus",
            "Russell",
            "Cameron",
            "Roderick",
            "Norman",
            "Murray",
            "Gareth",
            "Dean",
            "Eric",
            "Adrian",
            "Gregor",
            "Samuel",
            "Gerald",
            "Henry",
            "Justin",
            "Benjamin",
            "Shaun",
            "Callum",
            "Campbell",
            "Frank",
            "Roy",
            "Timothy",
            "Glen",
            "Marcus",
            "Hamish",
            "Niall",
            "Barrie",
            "Liam",
            "Brendan",
            "Terence",
            "Greg",
            "Leslie",
            "Lindsay",
            "Trevor",
            "Vincent",
            "Christian",
            "Lewis",
            "Rory",
            "Antony",
            "Fergus",
            "Roger",
            "Arthur",
            "Dominic",
            "Ewen",
            "Jon",
            "Owen",
            "Gregory",
            "Jeffrey",
            "Terry",
            "Damian",
            "Geoffrey",
            "Harry",
            "Walter",
            "Bernard",
            "Desmond",
            "Jack",
            "Aaron",
            "Archibald",
            "Blair",
            "Jeremy",
            "Nathan",
            "Alister",
            "Dale",
            "Dylan",
            "Glenn",
            "Julian",
            "Leon",
            "Allen",
            "Martyn",
            "Nigel",
            "Alisdair",
            "Denis",
            "Drew",
            "Evan",
            "Phillip",
            "Frazer",
            "Guy",
            "Laurence",
            "Lawrence",
            "Magnus",
            "Crawford",
            "Finlay",
            "Frederick",
            "Gregg",
            "Karl",
            "Kerr",
            "Mohammed",
            "Rodney",
            "Victor",
            "Carl",
            "Daryl",
            "Don",
            "Edwin"
        ],
        username = namelist[Math.floor(Math.random() * namelist.length)] + Math.floor(1e3 * Math.random()),
         email = await async function () {
             let a = await fetch("https://10minutemail.net/address.api.php"),
                e = await a.text(),
                 n = JSON.parse(e);
             return open(n.permalink.url + "?key=" + n.permalink.key),
             console.log(n.mail_get_mail, n.permalink.url + "?key=" + n.permalink.key),
             n.mail_get_mail
         }()
    console.log(username),

        allinputs.forEach(a => 
        
                a.outerHTML.toLowerCase().includes("mail") ? type(a,email) :
                    a.outerHTML.toLowerCase().includes("email") ? type(a,email) :
                        a.outerHTML.toLowerCase().includes("pass") ? type(a,password) :
                            a.outerHTML.includes("assword") ?  type(a,password) :
                                a.outerHTML.includes("ser") ?  type(a,username) :
                                        a.outerHTML.includes("irst") ? type(a,namelist[Math.floor(Math.random() * namelist.length)] ) :
                                            a.outerHTML.toLowerCase().includes("last") ?  type(a,namelist[Math.floor(Math.random() * namelist.length)] ) :
                                                a.outerHTML.includes("Full") ?  type(a,namelist[Math.floor(Math.random() * namelist.length)] + " "+ namelist[Math.floor(Math.random() * namelist.length)] ) :
                                                    a.outerHTML.includes("tel") ? type(a, "+1" + Math.floor(7097598888 * Math.random())) :
                                                        a.outerHTML.includes("num") ?type(a, "+1" + Math.floor(7097598888 * Math.random())) :
                                                            type(a,Math.random().toString(36).slice(4))
        )
}
stuff();