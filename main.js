const addBtn = document.querySelector(".add");
const clearBtn = document.querySelector(".clear");
let inputField = document.querySelector(".line");
const container = document.getElementById("container");

class lines {
    constructor(list){
        this.createDiv(list);
    }
    createDiv(list){
        let lists = document.createElement("input");
        lists.value = list;
        lists.disabled = true;
        lists.classList.add("listMade")              
        lists.type = "text";

        let lineList = document.createElement('div');
        lineList.classList.add("doingList")


        let editBtn = document.createElement("button");
        editBtn.innerHTML = "edit"
        editBtn.classList.add("edit");

        let removeBtn = document.createElement("button");
        removeBtn.innerHTML = "remove"
        removeBtn.classList.add("remove");

        container.appendChild(lineList);
        
        lineList.appendChild(lists);
        lineList.appendChild(editBtn);
        lineList.appendChild(removeBtn);

        editBtn.addEventListener('click',() => this.edit(lists));
        removeBtn.addEventListener('click',() => this.remove(lineList));
    }
    edit(lists){
        lists.disabled = !lists.disabled;
    }
    remove(lines){
        container.removeChild(lines);
    }
    
}

function provera(lists){
    if(inputField.value != ""){
        new lines(inputField.value);
        inputField.value = "";
    }
}

clearBtn.addEventListener('click',() => {
    if (clearBtn){
        inputField.value = ""
        
    };
});
addBtn.addEventListener('click',provera)
window.addEventListener('keydown',(e)=>{
    if(e == 13){
        check();
    }
});