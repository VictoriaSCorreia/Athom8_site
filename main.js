document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
      console.log('Form data submitted:', data);
      alert('Mensagem enviada! (simulação)');
      form.reset();
    });
  }
});
