document.addEventListener('DOMContentLoaded', function() {
    // fetch products
    fetch('data/products.json')
    .then(response => response.json())
    .then(data => {
        const productsContainer = document.getElementById('products');
        productsContainer.innerHTML = '';

        const flexContainer = document.createElement('div');
        flexContainer.className = 'columns is-multiline';

        data.forEach(product => {
            if (product.active) { // only display active products
                const productDisplay = `
                <div class="column is-one-third">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                            ${product.title}
                            </p>
                        </header>
                        <div class="card-image">
                            <figure class="image is-3by3">
                                <img src="${product.imageUrl}" alt="shampoo product image">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                ${product.description}
                                <ul>
                                    ${product.highlighted_features.map(feature => `<li>${feature}</li>`).join('')}
                                </ul>
                                <strong>Price: $${product.price}</strong>
                            </div>
                        </div>
                        <footer class="card-footer">
                            <a href="${product.paymentLink}" class="card-footer-item">Quick Shop</a>
                            <a class="card-footer-item">Learn More</a>
                            <a href="#reviews-glance" class="card-footer-item">Reviews</a>
                        </footer>
                    </div>
                </div>`;
                flexContainer.innerHTML += productDisplay;
            }
        });
        productsContainer.appendChild(flexContainer);
    })
    .catch(error => console.log('Error loading the products:', error));

    // fetch reviews
    fetch('data/reviews.json')
    .then(response => response.json())
    .then(data => {
        const reviewsContainer = document.getElementById('reviews');
        reviewsContainer.innerHTML = '';

        const flexContainer = document.createElement('div');
        flexContainer.className = 'columns is-multiline';

        data.forEach(review => {
            if (review.active) { // only display active reviews
                const reviewDisplay = `
                <div class="column is-3">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-3by2">
                                <img src="${review.imageUrl}" alt="dog image">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                        <img src="${review.profileUrl}" alt="profile image">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">${review.name}</p>
                                    <p class="subtitle is-6">${review.location}</p>
                                </div>
                            </div>
                            <div class="content">
                                <p><b>${review.title}</b></p>
                                <p>${review.description}</p>
                                <br>
                                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                            </div>
                        </div>
                    </div>
                </div>`;
                flexContainer.innerHTML += reviewDisplay;
            }
        });
        reviewsContainer.appendChild(flexContainer);
    })
    .catch(error => console.log('Error loading the reviews:', error));
});
