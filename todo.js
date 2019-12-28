function newTask() {
    var task = document.getElementById("additem").value; //Add task
    var addBtn = document.getElementsById("addBtn")[0];//Add button
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("- " + task));
    ul.appendChild(li);
    document.getElementById("additem").value = "";
    document.getElementById("addBtn").value = "";
    // li.onclick = removeItem;
    console.log(additem);
  }