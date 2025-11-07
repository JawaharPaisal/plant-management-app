// Load plants from localStorage
function getPlants() {
    return JSON.parse(localStorage.getItem("plants")) || [];
  }
  
  function savePlants(plants) {
    localStorage.setItem("plants", JSON.stringify(plants));
  }
  
  // Add Plant
  function addPlant() {
    let name = document.getElementById("plantName").value;
    let type = document.getElementById("plantType").value;
  
    if (!name || !type) return alert("Enter all details!");
  
    let plants = getPlants();
    plants.push({ name, type });
    savePlants(plants);
  
    loadPlants();
    document.getElementById("plantName").value = "";
    document.getElementById("plantType").value = "";
  }
  
  // Display Plants
  function loadPlants() {
    let plants = getPlants();
    let table = document.getElementById("plantTable");
    table.innerHTML = "";
  
    plants.forEach((plant, index) => {
      table.innerHTML += `
        <tr>
          <td><input value="${plant.name}" 
                     onchange="updatePlant(${index}, 'name', this.value)" /></td>
          <td><input value="${plant.type}" 
                     onchange="updatePlant(${index}, 'type', this.value)" /></td>
          <td>
            <button onclick="deletePlant(${index})">Delete</button>
          </td>
        </tr>`;
    });
  }
  
  // Update Plant
  function updatePlant(index, field, value) {
    let plants = getPlants();
    plants[index][field] = value;
    savePlants(plants);
  }
  
  // Delete Plant
  function deletePlant(index) {
    let plants = getPlants();
    plants.splice(index, 1);
    savePlants(plants);
    loadPlants();
  }
  
  // Place Order
  function placeOrder() {
    let name = document.getElementById("orderPlant").value;
    let qty = document.getElementById("orderQty").value;
  
    if (!name || !qty) return alert("Enter order details!");
  
    document.getElementById("orderMsg").innerHTML =
      `✅ Order placed for ${qty} ${name}(s)!`;
  
    document.getElementById("orderPlant").value = "";
    document.getElementById("orderQty").value = "";
  }
  
  // Load data on page load
  window.onload = loadPlants;
  