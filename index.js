

async function fetchData() {
    await fetch('https://fakestoreapi.com/products')
    .then(response =>  response.json())
    .then(data => {

        console.log(data);
        
        const productData = document.getElementById('product-table');

        const rows = data.map(item => {
            
            const tr = document.createElement('tr');
            
            const id = document.createElement('td');
            id.textContent = item.id;
            tr.appendChild(id);

            const title = document.createElement('td');
            title.textContent = item.title;
            tr.appendChild(title);

            const price = document.createElement('td');
            price.textContent = item.price;
            tr.appendChild(price);

            const description = document.createElement('td');
            description.textContent = item.description;
            tr.appendChild(description);

            const category = document.createElement('td');
            category.textContent = item.category;
            tr.appendChild(category);
            
        return tr;
    }
)

    rows.map(row => {
        productData.appendChild(row);
    });
    })
}

fetchData();

