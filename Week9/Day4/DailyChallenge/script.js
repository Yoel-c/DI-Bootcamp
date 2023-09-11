const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"

const data = new XMLHttpRequest();

function getInput(e){
    e.preventDefault();
    const request = document.getElementById("input").value;
    //console.log(request);

    data.open("GET", `https://api.giphy.com/v1/gifs/search?q=${request}&rating=g&api_key=${apiKey}&limit=1`);
    
    data.send();


    data.onload=()=>{
    console.log(data.status);
    if (data.status== 200){
        //console.log(data.response);
    } else{
        console.log( `data status : ${data.status}`);
    }
    console.log(JSON.parse(data.response));

    //const url = `https://api.giphy.com/v1/gifs/search?q=${request}&rating=g&api_key=${apiKey}&limit=1`



    function createImage(url, alt){
    const img = document.createElement("img");
    img.scr = data.response ;
    img.alt = alt;

}
} 

}



