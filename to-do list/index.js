const storagekey="kaifia"
let items=[]
const itemsDiv=document.getElementsByClassName("ItemsList")[0];
itemsDiv.style.display="none";
const inputItems=document.getElementById("inputItems");

inputItems.addEventListener("keypress", (event)=> {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("add").click();
    }
  });


function renderItems(){
    itemsDiv.innerHTML=null; 
    for(const [idx,value] of Object.entries(items)){
        let inputDiv=document.createElement("div");
        inputDiv.style.marginBottom="10px"; 
        let para= document.createElement("p");
        para.textContent=value;
        para.style.display="inline";
        para.style.marginRight="10px";

        let button=document.createElement("button");
        button.textContent="delete"
        button.onclick=()=>removeItems(idx);

        inputDiv.appendChild(para)
        inputDiv.appendChild(button)

        itemsDiv.appendChild(inputDiv)
    }
}


function loadItems(){
    const oldItems=localStorage.getItem(storagekey);
    if(oldItems) items=JSON.parse(oldItems);
    
    renderItems()
}

function saveItems(){
    const stringfyItems=JSON.stringify(items);
    localStorage.setItem(storagekey,stringfyItems)
}
function addItems(){
    itemsDiv.style.display="block";
    value=inputItems.value;
    if(!value){
        alert("No Item in input");
        return
    }
    items.push(value);
    saveItems()
    renderItems()
    inputItems.value=""
}
function removeItems(idx){
    items.splice(idx,1)
    saveItems()
    renderItems()
}


document.addEventListener("DOMContentLoaded",loadItems())
