function calc(){
  var shoeSize = document.getElementById('shoeSize').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;
  var result = ((((shoeSize * 2) + 5) * 50) - yearOfBirth) + 1768;
    if(!isNaN(shoeSize) && !isNaN(yearOfBirth)){
      return result;
    }else{
      alert('Veuillez renseigner les champs correctement !');
    }
}
