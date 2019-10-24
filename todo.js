var todoItems = [];

function addToList() {
    var element = document.getElementById("todo").value;

    if (!(element === "")) {
        if (!(todoItems.includes(element))) {
            var node = document.createElement("LI");
            var textNode = document.createTextNode(element);
            node.appendChild(textNode);
            document.getElementById("lista").appendChild(node);
            todoItems.push(element);
        } else {
            alert("Input already exists or input is empty");
        }

    }

}