// ================= FADE ANIMATION =================
const fades = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

fades.forEach(fade => observer.observe(fade));

// ================= CONTACT FORM =================
function sendMessage(event){
  event.preventDefault();
  document.getElementById("success").innerText =
    "Message sent successfully!";
}
