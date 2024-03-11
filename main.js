const inputBox = document.querySelector("#input-box");
const listContainer = document.getElementById("list-container");


function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  // cross sign code /u00d7
        li.appendChild(span);
     }
    inputBox.value = "";//to clear the input field
    saveData();

}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
}
else if (e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
}
},false

)
// to store data in listContainer
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
    // const dataToSave = listContainer.innerHTML.trim();
    // if (dataToSave !== "") {
    //     localStorage.setItem("data", dataToSave);
    // } else {
    //     localStorage.removeItem("data");
    // }
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
    // const savedData = localStorage.getItem("data");
    // if (savedData !== undefined && savedData !== null) {
    //     listContainer.innerHTML = savedData;
    // } else {
    //     // Handle the case where no data is found or it's undefined
    //     listContainer.innerHTML = "";
    // }
}
showTask();