
document.getElementById("contact-form")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting Aptevus Pharma! We will get back to you soon.");
  this.reset();
});
