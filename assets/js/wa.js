  document.addEventListener("DOMContentLoaded", function() {
      const waBtn = document.getElementById("waBtn");
      const waPopup = document.getElementById("waPopup");

      waBtn.style.display = "block";

      if (!localStorage.getItem("waPopupClosed")) {
          waPopup.style.display = "flex";
      } else {
          waPopup.style.display = "none";
      }
  });

  function closeWaPopup() {
      const waPopup = document.getElementById("waPopup");
      waPopup.style.display = "none";
      localStorage.setItem("waPopupClosed", "true");
  }
  const waNumber = "6281216700519";

  const hour = new Date().getHours();
  let greet = "Halo";

  if (hour >= 5 && hour < 11) {
      greet = "Halo selamat pagi";
  } else if (hour >= 11 && hour < 15) {
      greet = "Halo selamat siang";
  } else if (hour >= 15 && hour < 18) {
      greet = "Halo selamat sore";
  } else {
      greet = "Halo selamat malam";
  }

  const message = `${greet} ucic, saya mau bertanya seputar ucic.`;

  const waBtn = document.getElementById("waBtn");
  waBtn.href = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;