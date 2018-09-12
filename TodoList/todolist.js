var storage = window.localStorage;
var lastId = 0;

var list = document.getElementById("list");
var addButton = document.getElementById("addButton");

// Init
for(var i = 0; i < storage.length; i++){
	let id = storage.key(i);
	lastId = Math.max(lastId, id);
	addTaskElement(storage.getItem(id), id);
}

lastId++;

function addTask(text){
	var text = prompt('Tâche à faire : ');
	if(!text)
		return;
	text = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
	var id = lastId++;
	saveTask(text, id);
	addTaskElement(text, id);
}

function addTaskElement(text, id){
	var task = document.createElement("div");
	task.className = "item";
	task.innerHTML = `${text}
	<img class="removeButton" onclick="removeTask(this, ${id})" src="remove.png"></img>`;
	list.insertBefore(task, addButton);
}

function saveTask(text, id){
	storage.setItem(id, text);
}

function removeTask(elem, id){
	elem.parentElement.remove(elem);
	storage.removeItem(id);
}