const addBtn = document.querySelector(".add");
const clearBtn = document.querySelector(".clear");
let inputField = document.querySelector(".line");
const container = document.getElementById(".container");

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

    }
}

new lines("Code");

