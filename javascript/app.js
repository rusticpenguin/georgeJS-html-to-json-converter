function convertToJson(){
    const html = String(document.querySelector("#originalHTML").value);
    document.querySelector("#jsonHTML").value = parseHtml(html)
}

function parseHtml(data){
    return data
}