document.querySelector("form").addEventListener("submit",handleSubmit);

function handleSubmit(e){
    e.preventDefault();
    const formData = new FormData(document.querySelector("form"));
    const entries = formData.entries();
    const data = Object.fromEntries(entries);
    //console.log(data);
    //console.log(entries);
    console.log(formData);

    const dataJSON = JSON.stringify(data);
    const creatData = document.createElement("creatData");
    creatData.innerText = dataJSON ;
    document.body.appendChild(creatData);

}