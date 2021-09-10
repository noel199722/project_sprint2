console.log ("Hello");

let add = document.querySelector("form button");
add.addEventListener("click", e => {
    //prevent form from being submitted
    e.preventDefault();

    //get the input volues
    let form = e.target.parentElement;
    let todoText = form.children[0].value;
    let todoText = form.children[1].value;
    let todoText = form.children[2].value;
    let todoText = form.children[3].value;
    let todoDate = form.children[4].value;
    let todoText = form.children[6].value;
    let todoButton = form.children[6].value;,

    console.log(todoText); = form
})