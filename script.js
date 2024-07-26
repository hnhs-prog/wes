function addEntry() {
  var entry = {
    studentID: document.getElementById('studentID').value,
    studentName: document.getElementById('studentName').value,
    classID: document.getElementById('classID').value,
    subject: document.getElementById('subject').value,
    assessment1: document.getElementById('assessment1').value,
    assessment2: document.getElementById('assessment2').value,
    assessment3: document.getElementById('assessment3').value,
    assessment4: document.getElementById('assessment4').value
  };

  google.script.run.addEntry(entry);
  
  // Clear the form fields after submission
  document.getElementById('studentID').value = '';
  document.getElementById('studentName').value = '';
  document.getElementById('classID').value = '';
  document.getElementById('subject').value = '';
  document.getElementById('assessment1').value = '';
  document.getElementById('assessment2').value = '';
  document.getElementById('assessment3').value = '';
  document.getElementById('assessment4').value = '';
}
