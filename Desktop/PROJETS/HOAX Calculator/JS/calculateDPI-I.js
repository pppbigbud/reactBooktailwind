document.addEventListener("DOMContentLoaded", function () {
  // Récupérez les éléments nécessaires
  const quantityInput = document.querySelector(".quantity-input");
  const diameterSelect = document.getElementById("diameter");
  const sizeSelect = document.getElementById('size');
  const priceResultDPIi = document.getElementById("priceResultDPI-I");

  // Ajoutez des écouteurs d'événements "change" aux cases à cocher pour les diamètres
  diameterSelect.addEventListener('change', calculatePriceDPI_I);


  // Ajoutez des écouteurs d'événements "change" aux cases à cocher pour les tailles
  sizeSelect.addEventListener('change', calculatePriceDPI_I);


  // Ajoutez un écouteur d'événement "input" à l'élément de quantité
  quantityInput.addEventListener("input", calculatePriceDPI_I);

  function calculatePriceDPI_I() {
    var quantity = parseInt(quantityInput.value);
    // var quantity = parseInt(document.getElementById("quantityDPI-I").value);
    var excelFileInput = document.getElementById("excelFileInput");

    // console.log(document.querySelectorAll('[id^="diamDPI-I"]'));

    if (excelFileInput.files.length === 0) {
      alert("Veuillez sélectionner un fichier Excel.");
      return;
    }

    var file = excelFileInput.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
      var data = new Uint8Array(e.target.result);
      var workbook = XLSX.read(data, { type: "array" });

      // Récupérez le diamètre sélectionné en fonction des cases à cocher
      var selectedDiameter = parseInt(diameterSelect.value);
      var selectedSize = parseInt(sizeSelect.value);

      if (selectedDiameter === null) {
        alert("Veuillez sélectionner un diamètre et une taille.");

        return;
      }

      // Déterminez la cellule en fonction du diamètre sélectionné (par exemple, B3 pour diamètre 20 cm)
      var cellAddress = "B2"; // Changez cela en fonction de votre structure Excel
      if (selectedDiameter === 150 && selectedSize === 50) {
        cellAddress = "C2";
      } else if (selectedDiameter === 150 && selectedSize === 25) {
        cellAddress = "D2";
      }
      //DIAM 180
      else if (selectedDiameter === 180 && selectedSize === 100) {
        cellAddress = "B3";
      } else if (selectedDiameter === 180 && selectedSize === 50) {
        cellAddress = "C3";
      } else if (selectedDiameter === 180 && selectedSize === 25) {
        cellAddress = "D3";
      }
      //DIAM 200
      else if (selectedDiameter === 200 && selectedSize === 100) {
        cellAddress = "B4";
      } else if (selectedDiameter === 200 && selectedSize === 50) {
        cellAddress = "C4";
      } else if (selectedDiameter === 200 && selectedSize === 25) {
        cellAddress = "D4";
      }

      // Récupérez la valeur de la cellule correspondant au diamètre sélectionné
      var sheet = workbook.Sheets[workbook.SheetNames[2]];
      var cellValue = sheet[cellAddress].v;

      // Effectuez le calcul du prix en fonction de la quantité et du diamètre sélectionné
      var price = quantity * cellValue;

      // Affichez le résultat
      var priceResult = document.getElementById("priceResult");
      priceResultDPIi.textContent = price;
    };

    reader.readAsArrayBuffer(file);
  }

  function getSelectedDiameterDPI_I() {
    // Récupérez toutes les cases à cocher pour les diamètres
    var checkboxes = document.querySelectorAll('[id^="diam"]');
    var selectedDiameter = null;

    // Parcourez les cases à cocher pour déterminer laquelle est cochée
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        selectedDiameter = parseInt(checkboxes[i].value);
        break; // Sortez de la boucle dès qu'une case à cocher cochée est trouvée
      }
    }

    return selectedDiameter;
  }

  function getSelectedSizeDPI_I() {
    // Récupérez toutes les cases à cocher pour les diamètres
    var checkboxes = document.querySelectorAll('[id^="size"]');
    var selectedSize = null;

    // Parcourez les cases à cocher pour déterminer laquelle est cochée
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        selectedSize = parseInt(checkboxes[i].value);
        break; // Sortez de la boucle dès qu'une case à cocher cochée est trouvée
      }
    }

    return selectedSize;
  }
});
