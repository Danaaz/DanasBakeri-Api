const bodyParser = require("body-parser");

const products = require("../products/danaBakari");

module.exports = function(app) {
    
    app.use(bodyParser.json());
    
    // routes
    products.init();
    app.get("/danas", getAllProd);
    app.get("/danas/:prod", getProd);
    app.post("/danas", addProd);
    app.put("/danas/:prod", updateProd);
    app.delete("/danas/:prod", deleteProd);
}

const getAllProd = function(req, res) {
    res.json(products.getProducts());
}

const getProd = function (req, res) {
    var prod = products.getProduct(req.params.prod);

    if(prod) {
        res.json(prod);
    } else {
        res.status(404)
        .json("No product by the name of: " + req.params.prod);
    }
}

const addProd = function(req, res) {
    var newProd = {
        name: req.body.name,
        price: req.body.price
    }

    products.addProduct(newProd);
    res.status(201)
    .json(newProd);
}

const updateProd = function(req, res) {
    var updateProd = {
        name: req.body.name,
        price: req.body.price
    }

    if(products.updateProduct(req.params.prod, updateProd)) {
        res.json(updateProd);
    }else {
        res.status(404)
        .json("No product by the name of: " + req.params.prod);
    }
}

const deleteProd = function(req, res) {
    var deleteProd = products.deleteProduct(req.params.prod);
    if(deleteProd) {
        res.json(deleteProd);
    }else {
        res.status(404)
        .json("No product by the name of: " + req.params.prod);
    }
}
