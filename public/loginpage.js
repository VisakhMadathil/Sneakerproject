document.addEventListener('DOMContentLoaded', function () {
    var openModalBtn = document.getElementById('openModalBtn');
    var closeModalBtn = document.getElementById('closeModalBtn');
    var loginModal = document.getElementById('loginModal');
  
    // Open the modal when the button is clicked
    openModalBtn.onclick = function () {
      loginModal.style.display = 'block';
    };
  
    // Close the modal when the close button is clicked
    closeModalBtn.onclick = function () {
      loginModal.style.display = 'none';
    };
  
    // Close the modal if the overlay is clicked
    window.onclick = function (event) {

      if (event.target === loginModal) {
        loginModal.style.display = 'none';
      }
    };
});

document.getElementById("signup-link").addEventListener("click", function() {
  document.getElementById("login-form").classList.add("hidden");
  document.getElementById("signup-form").classList.remove("hidden");
});

document.getElementById("login-link").addEventListener("click", function() {
  document.getElementById("signup-form").classList.add("hidden");
  document.getElementById("login-form").classList.remove("hidden");
});

