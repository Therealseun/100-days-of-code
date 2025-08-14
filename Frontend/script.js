// Theme toggle
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    alert(data.message || "Message sent!");
    form.reset();
  } catch (error) {
    alert("Oops! Something went wrong.");
    console.error(err);
  }
});