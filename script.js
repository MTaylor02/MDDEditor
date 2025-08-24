document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('markdown-input');
  const preview = document.getElementById('markdown-preview');
codex/create-markdown-editing-application-hqlthj
  const saveBtn = document.getElementById('save-btn');
=======
main

  const render = () => {
    const text = input.value;
    preview.innerHTML = marked.parse(text);
  };

  input.addEventListener('input', render);

codex/create-markdown-editing-application-hqlthj
  saveBtn.addEventListener('click', () => {
    localStorage.setItem('markdown-content', input.value);
  });

  const saved = localStorage.getItem('markdown-content');
  input.value = saved || '# Welcome to MDDEditor\n\nStart typing markdown on the left page!';
=======
  // Sample content
  input.value = '# Welcome to MDDEditor\n\nStart typing markdown on the left page!';
main
  render();
});
