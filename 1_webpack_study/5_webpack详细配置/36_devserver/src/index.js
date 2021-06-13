console.log(666);
 

function fetchClassic() {
    // fetch('http://localhost:3006/app1/service/list')
    fetch('/app1/service/list')
    .then(res => res.json())
    .then(json => {
      const container = document.getElementById('container');
      json.forEach(item => {
        const element = document.createElement('p');
        element.textContent = `${item.name} - ${item.age}岁`;
        container.appendChild(element);
      });
    });
  }
  
  fetchClassic();
