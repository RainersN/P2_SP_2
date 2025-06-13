// Šeit vari pievienot interaktivitāti, piemēram, pogas klikšķa efektus
console.log("Sveiks! Mājaslapa ir ielādēta.");
document.getElementById('darkModeToggle').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');

  // Opc. mainīt pogas tekstu:
  this.textContent = document.body.classList.contains('dark-mode')
    ? '☀️ Gaišais režīms'
    : '🌙 Tumšais režīms';
});
