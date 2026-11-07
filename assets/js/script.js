/* ==========================================
   PORING HUB - INTERACTIVE SCRIPT (script.js)
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {
    console.log("✨ Poring Hub Local Environment Loaded Successfully!");

    // Contoh interaksi sederhana: Sambutan interaktif saat tombol ditekan
    const exploreBtn = document.querySelector("button");
    
    if (exploreBtn) {
        exploreBtn.addEventListener("click", function () {
            alert("✨ Halo Piter! Selamat datang kembali di Poring Hub local project kamu. Siap membangun fitur baru!");
        });
    }

    // Efek interaktif pada barisan Poring di atas
    const poringAvatars = document.querySelectorAll(".poring-avatar");
    poringAvatars.forEach(avatar => {
        avatar.addEventListener("mouseenter", function () {
            this.style.filter = "brightness(1.1) saturate(1.2)";
        });
        avatar.addEventListener("mouseleave", function () {
            this.style.filter = "none";
        });
    });
});