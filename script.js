const rootAddress = window.location.origin;

console.log('Root Address (Origin):', rootAddress);
// Example output: "https://yourwebsite.com" or "http://localhost:8080"

fetch('/includes/navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('nav-placeholder').innerHTML = data;

    let currentPath = window.location.pathname.split('/').pop();
    if (currentPath === '' || currentPath === 'index.html') {
        currentPath = '/';
    }
    document.querySelectorAll('#nav-placeholder a').forEach(link => {
      console.log(currentPath, "DIVIDE" , link.getAttribute('href'));
        if (link.getAttribute('href').endsWith(currentPath)) {
            link.classList.add('active');
        }
    });
  });