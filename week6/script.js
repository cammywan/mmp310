window.addEventListener("load", function() {
	
	
	var c = document.getElementById("container");
	var submit = document.getElementById("submitItem");
	var input = document.getElementById("newItem");
	submit.addEventListener("click", addItem);
	input.addEventListener("keydown", function(event) {
		if (event.key == "Enter") {
			addMessage();
		}
	});
	
	function addItem() {
		var list = document.createElement("div");
		var text = document.createElement("p");
		list.className = "movieList";
		text.innerText = input.value;
		text.className = "text";
        list.appendChild(text);

		
		var del = document.createElement("button");
		del.className = "delete";
		del.innerText = "Delete This Movie";
		del.addEventListener("click", function() {
			c.removeChild(this.parentNode);
		});
		
	function deleteItem(){	}
		
		list.appendChild(del);
		
		
		
		c.appendChild(list);
	}

});