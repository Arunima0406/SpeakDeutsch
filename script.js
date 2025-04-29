// Display a random German fact
document.getElementById('benefitsButton').addEventListener('click', function () {
  const facts = [
    "German is the most widely spoken native language in Europe!",
    "There are over 100 million native German speakers worldwide.",
    "German has three grammatical genders: masculine, feminine, and neuter.",
    "The German language is famous for its long compound words!"
  ];
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById('funFact').innerText = randomFact;
});

// Scroll to the form on Enroll Now click
document.getElementById('enrollButton').addEventListener('click', function () {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// Handle form submission with alert
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if (name && email) {
    alert(`Thank you, ${name}! You are successfully enrolled.`);
    this.reset();
    document.getElementById('formMessage').innerText = "";
  } else {
    document.getElementById('formMessage').innerText = "Please fill out all fields.";
  }
});
