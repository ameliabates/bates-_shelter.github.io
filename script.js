document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('catForm');
  const catList = document.getElementById('catList');

  // Load existing cats from localStorage when the page loads
  loadCatsFromStorage();

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const catInfo = {};
    formData.forEach((value, key) => {
      catInfo[key] = value;
    });

    displayCat(catInfo);
    saveCatToStorage(catInfo);
    form.reset();
  });

  function displayCat(catInfo) {
    const catDiv = document.createElement('div');
    catDiv.classList.add('cat');
    catDiv.innerHTML = `
      <h2>${catInfo.name}</h2>
      <p>Age: ${catInfo.age}</p>
      <p>Breed: ${catInfo.breed}</p>
      <p>Gender: ${catInfo.gender}</p>
      <p>Color: ${catInfo.color}</p>
      <p>Description: ${catInfo.description}</p>
    `;
    catList.appendChild(catDiv);
  }

  function saveCatToStorage(catInfo) {
    let cats = JSON.parse(localStorage.getItem('cats')) || [];
    cats.push(catInfo);
    localStorage.setItem('cats', JSON.stringify(cats));
  }

  function loadCatsFromStorage() {
    let cats = JSON.parse(localStorage.getItem('cats')) || [];
    cats.forEach(catInfo => {
      displayCat(catInfo);
    });
  }
});
