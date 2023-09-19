function savePriceCoudeToLocalStorage() {
  // Obtenez le contenu de la div priceResultDPI
  let priceResultCoudeDPI = document.getElementById("priceResultCoudeDPI-I").textContent;
  let diamCoudeDpiI = document.getElementById("diamCoudeDpiI").value;
  let coudeInclinaisonDpiI = document.getElementById("coudeInclinaisonDpiI").value;

  // Récupérez les données existantes de "data1" depuis localStorage s'il existe
  let existingData1 = JSON.parse(localStorage.getItem("data1")) || {};

  // Créez un tableau pour stocker les détails DPI_i s'ils existent déjà, ou créez un nouveau tableau
  let detailsCoudeDPI_i = existingData1.detailsCoudeDPI_i || [];

  // Créez un nouvel objet pour stocker les informations actuelles
  let coudeDPI_i = {
    priceResultCoudeDPI_i: priceResultCoudeDPI,
    diamCoudeDpiI_i: diamCoudeDpiI,
    coudeInclinaisonDpiI_i: coudeInclinaisonDpiI,
  };

  // Ajoutez le nouvel objet au tableau de détails
  detailsCoudeDPI_i.push(coudeDPI_i);

  // Mettez à jour les détails DPI_i dans l'objet existant
  existingData1.detailsCoudeDPI_i = detailsCoudeDPI_i;

  // Convertissez l'objet JSON mis à jour en une chaîne JSON
  let updatedData1 = JSON.stringify(existingData1);

  // Stockez la chaîne JSON mise à jour dans localStorage
  localStorage.setItem("data1", updatedData1);

  alert("Les données ont été mises à jour dans localStorage.");
}