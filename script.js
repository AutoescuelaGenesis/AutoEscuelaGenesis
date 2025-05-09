setTimeout(() => {
  const msg = document.getElementById('whatsapp-msg');
  msg.style.display = 'inline-block';
  setTimeout(() => { msg.style.display = 'none'; }, 60000);
}, 120000);
