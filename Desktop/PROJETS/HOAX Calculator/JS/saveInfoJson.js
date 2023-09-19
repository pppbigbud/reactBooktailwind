function savePriceToLocalStorage() {
  // Obtenez le contenu de la div priceResultDPI
  let priceResultDPI = document.getElementById("priceResultDPI-I").textContent;
  let diameterSelect = document.getElementById("diameter").value;
  let quantityInput = document.querySelector(".quantity-input").value;

  // Récupérez les données existantes de "data1" depuis localStorage s'il existe
  let existingData1 = JSON.parse(localStorage.getItem("data1")) || {};

  // Créez un tableau pour stocker les détails DPI_i s'ils existent déjà, ou créez un nouveau tableau
  let detailsDPI_i = existingData1.detailsDPI_i || [];

  // Créez un nouvel objet pour stocker les informations actuelles
  let detailDPI_i = {
    priceResultDPI_i: priceResultDPI,
    diameterSelectDPI_i: diameterSelect,
    quantityInputDPI_i: quantityInput,
  };

  // Ajoutez le nouvel objet au tableau de détails
  detailsDPI_i.push(detailDPI_i);

  // Mettez à jour les détails DPI_i dans l'objet existant
  existingData1.detailsDPI_i = detailsDPI_i;

  // Convertissez l'objet JSON mis à jour en une chaîne JSON
  let updatedData1 = JSON.stringify(existingData1);

  // Stockez la chaîne JSON mise à jour dans localStorage
  localStorage.setItem("data1", updatedData1);

  alert("Les données ont été mises à jour dans localStorage.");
}
