document.addEventListener('DOMContentLoaded', function() {
  const catList = document.getElementById('catList');

  // Load available cats from localStorage
  loadAvailableCats();

  function loadAvailableCats() {
    catList.innerHTML = ''; // Clear existing cat list
    const cats = JSON.parse(localStorage.getItem('cats')) || [];
    cats.forEach(cat => {
      displayCat(cat);
    });
  }

  function displayCat(cat) {
    const catDiv = document.createElement('div');
    catDiv.classList.add('cat');
    catDiv.innerHTML = `
      <h2>${cat.name}</h2>
      <p>Age: ${cat.age}</p>
      <p>Breed: ${cat.breed}</p>
      <p>Gender: ${cat.gender}</p>
      <p>Color: ${cat.color}</p>
      <p>Description: ${cat.description}</p>
    `;
    catList.appendChild(catDiv);
  }

  // Function to save cat information to localStorage
  function saveCatToStorage(cat) {
    let cats = JSON.parse(localStorage.getItem('cats')) || [];
    cats.push(cat);
    localStorage.setItem('cats', JSON.stringify(cats));
  }

  // Event listener for form submission
  const form = document.getElementById('catForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const catInfo = {};
    formData.forEach((value, key) => {
      catInfo[key] = value;
    });

    saveCatToStorage(catInfo); // Save cat information to localStorage
    loadAvailableCats(); // Reload available cats from localStorage
    form.reset();
  });
});

