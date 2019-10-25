//Array which should contain task objects
//Object consists of a task text and a timestamp
var tasks = [];

var counter = 0;

//Constructor for making Task-Objects
function Task(text, timeStamp) {
    this.text = text;
    this.timeStamp = timeStamp;
}


//Function adds element to list
function addToList() {
    var element = document.getElementById("todo").value;

    if (!(element === "")) {
        var checkbox = document.createElement("INPUT")
        checkbox.setAttribute("type", "checkbox");
        var node = document.createElement("LI");
        var label = document.createElement("LABEL");
        var textNode = document.createTextNode(element);
        label.appendChild(textNode);
        node.appendChild(checkbox);
        node.appendChild(label);
        document.getElementById("lista").appendChild(node);
        var taskObject = new Task(element, Date.now());
        tasks.push(taskObject);
        updateCounter();

        //Added eventlistener for updating counter every time checkbox
        //is checked!
        checkbox.addEventListener("change", function () {
            updateCounter();
        });

    } else {
        alert("Input is empty");
    }


    //This function updates counters, to keep control over
    //which tasks has been completed
    function updateCounter() {
        let checkBoxList = document.querySelectorAll("input[type=\"checkbox\"]");
        console.log("checkboxList: " + checkBoxList.length);
        counter = 0;


        //Iterate over checkBoxlist element
        //And if the checkbox is checked
        //update counter by +1
        for (i of checkBoxList) {
            if (i.checked == true) {
                counter += 1;
            }
        }

        document.getElementById("counter").innerHTML = (counter + "/" + checkBoxList.length + "completed!");

    }


}