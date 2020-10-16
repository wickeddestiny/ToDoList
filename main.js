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
        lineList.classList.add("doingList");

        let marka = document.createElement("label");
        marka.classList.add("marka");
        marka.innerHTML= "Priority";
        marka.htmlFor="prior";

        let chose = document.createElement("select");
        chose.name = "prior";

        let importantPrio = document.createElement("option");
        importantPrio.value = "Important";
        importantPrio.innerHTML= "Important";
        let mediumPrior = document.createElement("option");
        mediumPrior.value = "Medium";
        mediumPrior.innerHTML= "Medium";
        let lowPrior = document.createElement("option");
        lowPrior.value = "Low";
        lowPrior.innerHTML= "Low";
        let fastPrior = document.createElement("option");
        fastPrior.value = "Fast";
        fastPrior.innerHTML= "Fast";
        


        

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
        lineList.appendChild(marka);
        lineList.appendChild(chose);
        chose.appendChild(importantPrio)
        chose.appendChild(mediumPrior)
        chose.appendChild(lowPrior)
        chose.appendChild(fastPrior)


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
new lines("gym");