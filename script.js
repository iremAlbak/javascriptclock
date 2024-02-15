function showWelcomeMessage() {
  const nameInput = document.getElementById('name').value;
  const welcomeMessage = document.getElementById('welcome-message');
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('tr-TR', options);
  
  welcomeMessage.innerHTML = `<p>Merhaba, ${nameInput}!</p><p>Şu anki tarih ve saat: ${formattedDate}</p>`;
}