//fetch data from api
function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayData(data);
        }
        )
}
//data model for product
function displayData(data) {
    let html = '';
    data.forEach(user => {
        html += `<div class="user">
        <h2>${user.name}</h2>
        <p>${user.email}</p>
        <p>${user.phone}</p>
        <p>${user.website}</p>
        </div>`;
    }
    );
    document.getElementById('users').innerHTML = html;
}
