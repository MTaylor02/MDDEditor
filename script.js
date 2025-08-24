document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('markdown-input');
  const preview = document.getElementById('markdown-preview');

  const render = () => {
    const text = input.value;
    preview.innerHTML = marked.parse(text);
  };

  input.addEventListener('input', render);

  // Sample content
  input.value = '# Welcome to MDDEditor\n\nStart typing markdown on the left page!';
  render();
});
