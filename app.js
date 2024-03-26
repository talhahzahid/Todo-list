


const inputTodo = document.querySelector("#todo");
const div = document.querySelector(".java-main");


function randar(){
    div.innerHTML = "";
    for(let i = 0; i < array.length; i++){
        div.innerHTML += ` <div class="sec-container">
        <div class="para">
            <h1>${array[i]}</h1>
        </div>
        <div class="sec-buttons">
            <button class="btn-1" onclick="Delete(${i})">Delete <i class="fa-solid fa-trash" id ="red"></i></button>
            <button class="btn-2" onclick="Edit(${i})">Edit <i class="fa-solid fa-pen-to-square" id ="green"></i></button>
        </div>`
    }
}
const array = [];

function Click(){
    array.push(inputTodo.value);
    console.log(array);
    inputTodo.value = "";

    randar()
}

function Delete(index){
    array.splice(index , 1)

    randar()

}

function Edit(index){
    let updateValue = prompt("Please enter update value")
    array.splice(index , 1,updateValue)

    randar()

}