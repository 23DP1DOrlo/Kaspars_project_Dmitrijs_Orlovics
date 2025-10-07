const toggleBtn = document.getElementById("theme-toggle");

    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");

      // Меняем иконку в зависимости от темы
      if (document.body.classList.contains("dark-theme")) {
        toggleBtn.textContent = "🌞"; // тёмная тема
      } else {
        toggleBtn.textContent = "🌙"; // светлая тема
      }
    });