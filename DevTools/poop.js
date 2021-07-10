let tagsAndContent = /((?<=>)[^>]+(?=<)|<[^>]*>)/g;
let words = /([\p{L}']+)/ug;

// we won't touch any content that's in a safe tag
let safeTags = ['script', 'style', 'head'];

function safeTagValue(str) {
    for (const tagName of safeTags) {
        if (str.startsWith('<' + tagName)) return +1;
        if (str.startsWith('</' + tagName)) return -1;
    }
    return 0;
}

function handleInputTag(str) {
    // replace the value of the input with poop
    // (only if the value is not empty)
    return str.replaceAll(/(?<=value=")[^"]+(?=")/g, 'poop')
}
function poopify(html) {

    // goes up by one when we see a <safe-tag>,
    // goes down by one when we see a </safe-tag>
    let nestedSafeTags = 0;
    
    return html.match(tagsAndContent).map(str => {
        // now `str` is either a tag or a content

        if (str.startsWith('<')) { // we got a tag
            nestedSafeTags += safeTagValue(str);

            return str.startsWith('<input') ?
                handleInputTag(str) : str;
        }
        else if (nestedSafeTags == 0) {
            return str.replaceAll(words, 'poop');
        }
        return str;
    }).join('')
}

document.body.outerHTML = poopify(document.body.outerHTML)
