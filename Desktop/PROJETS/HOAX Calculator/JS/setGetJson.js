function saveInfoJson() {
  var nameValue = document.getElementById("nom").value;
  var surNameValue = document.getElementById("prenom").value;
  var adressValue = document.getElementById("adresse").value;
  var zipValue = document.getElementById("codepostal").value;
  var phoneValue = document.getElementById("telephone").value;
  var emailValue = document.getElementById("email").value;

  // Créez un objet JSON avec la valeur du champ
  var dataInfoClient = {
    name: nameValue,
    surName: surNameValue,
    adress: adressValue,
    zip: zipValue,
    phone: phoneValue,
    email: emailValue,
  };

  // Convertissez l'objet JSON en une chaîne JSON
  var jsonData = JSON.stringify(dataInfoClient);

  // Stockez la chaîne JSON dans localStorage
  localStorage.setItem("data1", jsonData);

  // console.log(updatedData1Cookie);

}
