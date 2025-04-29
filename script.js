function showEnrollmentPopup() {
  alert("Thank you! You are successfully enrolled.");
}

document.addEventListener("DOMContentLoaded", () => {
  const enrollForm = document.getElementById("enroll-form");
  if (enrollForm) {
    enrollForm.addEventListener("submit", function (e) {
      e.preventDefault();
      showEnrollmentPopup();
      this.reset();
    });
  }
});
