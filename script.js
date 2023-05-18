function addItem() {
  var itemName = document.getElementById('item-name').value;
  var itemQuantity = document.getElementById('item-quantity').value;

  var table = document.getElementById('item-table');
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  cell1.innerHTML = itemName;
  cell2.innerHTML = itemQuantity;
  cell3.innerHTML = '<button onclick="updateItem(this)">Update</button>';
  cell3.innerHTML += '<button onclick="DeleteItem(this)">Delete</button>';
  // Reset input fields
  document.getElementById('item-name').value = '';
  document.getElementById('item-quantity').value = '';
}

function displayItems() {
  var table = document.getElementById('item-table');
  var rowCount = table.rows.length;

  // Skip the header row (index 0) while removing rows
  for (var i = rowCount - 1; i > 0; i--) {
      table.deleteRow(i);
  }
}

function clearItems() {
  var table = document.getElementById('item-table');
  var rowCount = table.rows.length;

  // Remove all rows except the header row (index 0)
  for (var i = rowCount - 1; i > 0; i--) {
      table.deleteRow(i);
  }
}

function updateItem(button) {
  var row = button.parentNode.parentNode;
  var itemName = row.cells[0].innerHTML;
  var itemQuantity = row.cells[1].innerHTML;

  var newName = prompt("Enter new name for '" + itemName + "':", itemName);
  var newQuantity = prompt("Enter new quantity for '" + itemName );
  if (newName != null && newQuantity != null) {
      row.cells[0].innerHTML = newName;
      row.cells[1].innerHTML = newQuantity;
  }
}

function DeleteItem(button) {
  var row = button.parentNode.parentNode;
  var itemName = row.cells[0].innerHTML;
  var itemQuantity = row.cells[1].innerHTML;

  var confirmDelete = confirm("Are you sure you want to delete '" + itemName + "'?");
  if (confirmDelete) {
      row.parentNode.removeChild(row);
  }
}