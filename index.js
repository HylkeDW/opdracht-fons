// code runs if script is loaded
(function() {
    // vanilla javascript request to get products from json file. (note: does not work local because security issues)
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        // set json data to object
        var data = JSON.parse(this.responseText);
        data.products.forEach(function (item, index) {

            // create elements for the card
            var thumbnail = document.createElement("img");
            thumbnail.setAttribute("class", "product__img")
            thumbnail.setAttribute("src",item.image);

            var title = document.createElement("h3");
            title.setAttribute("class", "product__title")
            title.appendChild(document.createTextNode(item.title));

            var price = document.createElement("span");
            price.setAttribute("class", "product__price");
            price.appendChild(document.createTextNode(item.price));

            // create product container
            var product = document.createElement("div");
            product.setAttribute("class", "product");

            // append product content to container
            product.appendChild(thumbnail);
            product.appendChild(title);
            product.appendChild(price);

            // select products container and append products
            document.getElementById("products").appendChild(product);
        });
    }
    else {
        // fout afhandeling als pagina geen status 200 terug geeft.
        var error = document.createElement("h3");
        error.appendChild(document.createTextNode("Fout bij het ophalen van de producten"));
        document.getElementById("products").appendChild(product);
    }
    };
    xmlhttp.open("GET", "products.json", true);
    xmlhttp.send();
 })();  