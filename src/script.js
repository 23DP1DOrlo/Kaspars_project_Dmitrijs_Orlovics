const toggleBtn = document.getElementById("theme-toggle");

  toggleBtn.addEventListener("click", () => {
    // Добавляем класс "switching" для лёгкого затемнения
    document.body.classList.add("switching");

    // Через 150 мс переключаем тему
    setTimeout(() => {
      document.body.classList.toggle("dark-theme");

      // Меняем иконку 🌞 / 🌙
      toggleBtn.textContent = document.body.classList.contains("dark-theme") ? "🌞" : "🌙";

      // Убираем эффект затемнения плавно
      setTimeout(() => {
        document.body.classList.remove("switching");
      }, 200);
    }, 150);
  });