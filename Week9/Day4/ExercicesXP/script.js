//exercice 1 : Giphy API

const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"

const data = new XMLHttpRequest();

data.open("GET", `https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=${apiKey}`)

data.send();

data.onload=()=>{
    console.log(data.status);
    if (data.status== 200){
        console.log(data.response);
    } else{
        console.log( `data status : ${data.status}`);
    }
    console.log(JSON.parse(data.response));
}




// Exercise 2 : Giphy API

const data2 = new XMLHttpRequest();

data2.open("GET" , `https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=${apiKey}&limit=10&offset=2`)

data2.send();

data2.onload=()=>{
    console.log(data2.status);
    if (data2.status== 200){
        console.log(data2.response);
    } else{
        console.log( `data status : ${data2.status}`);
    }
    console.log(JSON.parse(data2.response));
}
