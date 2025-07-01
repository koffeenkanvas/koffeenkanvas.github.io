const list = document.getElementById('repo-list');
fetch('https://api.github.com/users/koffeenkanvas/repos?sort=updated')
  .then(res => res.json())
  .then(data => {
    list.innerHTML = '';
    data.slice(0, 6).forEach(repo => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${repo.html_url}" target="_blank">
                        ${repo.name}
                      </a>${repo.description ? ` – ${repo.description}` : ''}`;
      list.appendChild(li);
    });
  })
  .catch(() => {
    list.textContent = 'Could not load repos.';
  });
