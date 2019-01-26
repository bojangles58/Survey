function validateName() {
  var x = document.forms["surveyForm"]["name"].value;
  if (x == "") {
      alert("Please enter your first name");
      return false;
  }
}
