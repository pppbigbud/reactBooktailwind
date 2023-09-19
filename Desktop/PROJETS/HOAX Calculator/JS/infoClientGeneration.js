document.addEventListener("DOMContentLoaded", function () {
  // Récupérez les données du localStorage
  var data1 = JSON.parse(localStorage.getItem("data1"));
  console.log(data1);
  // Créez le contenu de résumé
  var summaryContent = document.getElementById("summary");

  if (data1) {
    var summaryHTML = "<h1>Résumé des données</h1>";
    summaryHTML += "<p>Nom: " + data1.name + "</p>";
    summaryHTML += "<p>Prenom: " + data1.surName + "</p>";
    summaryHTML += "<p>Adresse: " + data1.adress + "</p>";
    summaryHTML += "<p>Code Postal: " + data1.zip + "</p>";
    summaryHTML += "<p>Email: " + data1.email + "</p>";
    summaryHTML += "<p>Téléphone: " + data1.phone + "</p>";
    // summaryHTML +=
    //   "<p>Détail prix Longueur DPI: " +
    //   data1.detailDPI_i.priceResultDPI_i +
    //   "€</p>";
    summaryContent.innerHTML = summaryHTML;
  } else {
    summaryContent.innerHTML = "<p>Aucune donnée disponible.</p>";
  }
});
