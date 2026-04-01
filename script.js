fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    console.log(data);

    const container = document.getElementById('data');

    data.slice(0, 5).forEach(item => {
      const p = document.createElement('p');
      p.textContent = item.title;
      container.appendChild(p);
    });
  })
  .catch(error => console.log(error));
