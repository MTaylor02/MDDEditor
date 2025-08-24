document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('markdown-input');
  const preview = document.getElementById('markdown-preview');
  const saveBtn = document.getElementById('save-btn');

  const render = () => {
    const text = input.value;
    preview.innerHTML = marked.parse(text);
  };

  input.addEventListener('input', render);

  saveBtn.addEventListener('click', () => {
    localStorage.setItem('markdown-content', input.value);
  });

  const saved = localStorage.getItem('markdown-content');
  input.value = saved || '# Welcome to MDDEditor\n\nStart typing markdown on the left page!';
  render();
});
