const { profile } = require("console");

let x=document.getElementById("hands");
let y=document.getElementById("animcon");

function closeye()
{
	y.style.backgroundImage="url('/ToDoList/src/monkey_pwd.gif')";
	x.style.marginTop="0%";
}

function openeye()
{
	y.style.backgroundImage="url('/ToDoList/src/monkey.gif')";
	x.style.marginTop="110%";
}

