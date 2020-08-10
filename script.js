let content = document.querySelector('.discussContentPlain > div');
content.innerHTML = content.innerHTML
    .replace(
        /Image:<a href="(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)" target="_blank">(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)<\/a>/g,
        match => `<img src="${match.slice(15, match.indexOf('" target'))}"></img>`
    ).replace(
        /Youtube:<a href="https:\/\/youtu.be\/[a-zA-Z0-9-_]+" target="_blank">https:\/\/youtu.be\/[a-zA-Z0-9-_]+<\/a>/g,
        match => `<iframe width="640" height="480" src="https://www.youtube.com/embed/${match.slice(17)}"></iframe>`
    )