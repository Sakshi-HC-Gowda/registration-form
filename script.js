/* ---------- PARTICLES (run once) ---------- */
(function createParticles() {
  const container = document.querySelector(".background-particles");
  if (!container) return;
  const count = 22;
  for (let i = 0; i < count; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    const size = Math.random() * 18 + 6; // 6px - 24px
    p.style.width = p.style.height = `${size}px`;
    p.style.left = `${Math.random() * 100}vw`;
    p.style.bottom = `-${Math.random() * 40 + 10}px`;
    p.style.opacity = 0.18 + Math.random() * 0.6;
    const duration = Math.random() * 10 + 8; // 8s - 18s
    p.style.animationDuration = `${duration}s`;
    p.style.animationDelay = `${Math.random() * 6}s`;
    container.appendChild(p);
  }
})();

/* ---------- FORM HANDLING ---------- */
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("regForm");
  const resultBox = document.getElementById("resultBox");
  const resultData = document.getElementById("resultData");
  const previewImg = document.getElementById("previewImg");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // IMPORTANT - stops default navigation/reload

    // read values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const course = document.getElementById("course").value.trim();
    const address = document.getElementById("address").value.trim();
    const file = document.getElementById("pic").files[0];

    // basic mobile validation (optional - adjust as you like)
    const mobileClean = mobile.replace(/\D/g, "");
    if (mobileClean.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // populate output HTML
    resultData.innerHTML = `
      <div id="resultDataInner">
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Mobile:</strong> ${escapeHtml(mobile)}</p>
        <p><strong>DOB:</strong> ${escapeHtml(dob)}</p>
        <p><strong>Gender:</strong> ${escapeHtml(gender)}</p>
        <p><strong>Course:</strong> ${escapeHtml(course)}</p>
        <p><strong>Address:</strong> ${escapeHtml(address)}</p>
      </div>
    `;

    // show preview if file chosen
    if (file) {
      try {
        previewImg.src = URL.createObjectURL(file);
        previewImg.onload = () => URL.revokeObjectURL(previewImg.src);
      } catch (err) {
        previewImg.src = "";
      }
    } else {
      previewImg.src = "";
    }

    // reveal result box and scroll to it
    resultBox.style.display = "block";
    resultBox.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  // small helper to avoid XSS when inserting text
  function escapeHtml(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
});
