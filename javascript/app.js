function convertToJson(){
    const html = String(document.querySelector("#originalHTML").value);
    document.querySelector("#jsonHTML").value = parseHtml(html)
}

function parseHtml(data){
    jsonParse = { component: []}
    for(let i = 0; i < data.length; i++){
        if (data[i] === "<" && data[i + 1] !== "/"){
   
            jsonParse.component.push({element: ""})
            for(let j = 1; j < data.length; j++){
                if (data[i + j] !== ">"){
                    console.log("Hi")
                    jsonParse.component[0].element += data[i + j]
                } else {
                    console.log("end")
                    i += j + 1;
                    j = data.lenth;
                }
            }
        } else if (data[i] === "<" && data[i + 1] === "/"){
            console.log(jsonParse + " end")
            return jsonParse
        }
        console.log(i)
        console.log(data[i])
    }
    console.log(jsonParse)
}