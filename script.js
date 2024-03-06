document.addEventListener('DOMContentLoaded', function() {
  const catForm = document.getElementById('catForm');
  const catList = document.getElementById('catList');

  catForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(catForm);
    const catInfo = {};
    formData.forEach((value, key) => {
      catInfo[key] = value;
    });

    displayCat(catInfo);
    catForm.reset();
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
});
