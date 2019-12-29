function newTask() {
  document.getElementById ("list").addEventListener("task", newTask);
    var task = document.getElementById("task").value; //Add task
    // var addBtn = document.getElementsById("addBtn")[0];//Add button
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("- " + task));
    ul.appendChild(li);
    // document.getElementById("addItem").value = "";
    // document.getElementById("addBtn").value = "";
    // // li.onclick = removeItem;
    // console.log(addItem);
  }