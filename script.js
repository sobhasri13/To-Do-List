function addItem() {
  let input = document.getElementById("itemInput");
  let text = input.value.trim();

  if (text === "") {
    alert("Please enter some text");
    return;
  }

  // Create new list item
  let li = document.createElement("li");
  li.textContent = text;

  // Create delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function () {
    li.remove();
  };

  // Append button to li and li to ul
  li.appendChild(deleteBtn);
  document.getElementById("itemList").appendChild(li);

  // Clear input
  input.value = "";
}
