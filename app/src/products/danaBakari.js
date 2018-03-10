const products = [];

exports.init = function() {
    products.push(
        {
            name: "borek",
            price: "25"
        },
        {
            name: "pizza",
            price: "40"
        }
    );
}

exports.addProduct = function(newProd) {
    products.push(newProd);
}

exports.getProduct = function(name) {
    return products[findProd(name)];
}

exports.getProducts = function() {
    return products;
}

exports.updateProduct = function(name, update) {
    var oldProd = findProd(name);
    if (oldProd) {
        products[oldProd] = update;
        return update;
    }
}

exports.deleteProduct = function(name) {
    var delProd = findProd(name);
    if (delProd !== undefined) {
        var deleted = products[delProd];
        products[delProd] = products.pop();
        return deleted;
    }
}

const findProd = function(name) {
    for (let i = 0; i < products.length; i++) {
        if(products[i].name === name) {
            return i;
        }
    }
}