document.addEventListener("DOMContentLoaded", function () {
  // Récupérez l'élément "devisContainer" où vous souhaitez afficher les détails
  var devisContainer = document.getElementById("devisContainer");

  // Récupérez les données du localStorage
  var data1 = JSON.parse(localStorage.getItem("data1"));

  if (data1) {
    // Créez une section pour afficher les détails des coudeDPI_i
    var coudeSection = document.createElement("div");
    coudeSection.innerHTML = "<h2>Détails des Coudes DPI-I</h2>";

    // Parcourez les éléments de detailsCoudeDPI_i
    for (var i = 0; i < data1.detailsCoudeDPI_i.length; i++) {
      var coude = data1.detailsCoudeDPI_i[i];
      var coudeDetails = document.createElement("p");
      coudeDetails.textContent = `Coude DPI-I ${i + 1}: Prix - ${
        coude.priceResultCoudeDPI_i
      } €, Diamètre - ${coude.diamCoudeDpiI_i}, Inclinaison - ${
        coude.coudeInclinaisonDpiI_i
      }°`;
      coudeSection.appendChild(coudeDetails);
    }

    // Ajoutez la section des coudes au conteneur
    devisContainer.appendChild(coudeSection);

    // Créez une section pour afficher les détails des DPI-i
    var dpiSection = document.createElement("div");
    dpiSection.innerHTML = "<h2>Détails des DPI-I</h2>";

    // Parcourez les éléments de detailsDPI_i
    for (var j = 0; j < data1.detailsDPI_i.length; j++) {
      var dpi = data1.detailsDPI_i[j];
      var dpiDetails = document.createElement("p");
      dpiDetails.textContent = `DPI-I ${j + 1}: Prix - ${
        dpi.priceResultDPI_i
      } €, Diamètre - ${dpi.diameterSelectDPI_i}, Quantité - ${
        dpi.quantityInputDPI_i
      }`;
      dpiSection.appendChild(dpiDetails);
    }

    // Ajoutez la section des DPI-i au conteneur
    devisContainer.appendChild(dpiSection);
  } else {
    devisContainer.innerHTML = "<p>Aucune donnée disponible.</p>";
  }
  
});
