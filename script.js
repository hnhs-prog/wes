function login() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('psw').value;

  google.script.run.withSuccessHandler(function(isValid) {
    if (isValid) {
      document.getElementById('data-entry').style.display = 'block';
    } else {
      alert('Invalid credentials');
    }
  }).validateLogin(email, password);
}

function addEntry() {
  var email = document.getElementById('email').value;
  var studentID = document.getElementById('studentID').value;
  var studentName = document.getElementById('studentName').value;
  var classID = document.getElementById('classID').value;
  var subject = document.getElementById('subject').value;
  var assessment1 = document.getElementById('assessment1').value;
  var assessment2 = document.getElementById('assessment2').value;
  var assessment3 = document.getElementById('assessment3').value;
  var assessment4 = document.getElementById('assessment4').value;

  google.script.run.addEntry(email, studentID, studentName, classID, subject, assessment1, assessment2, assessment3, assessment4);
  alert('Entry added successfully');
}
