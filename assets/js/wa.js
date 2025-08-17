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