class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(title, description , price, thumbnail, code, stock) {
        let coincidencia = this.products.some(si => si.code === code);
        if (!coincidencia) {
            let product = {
                title : title,
                description : description,
                price : price,
                thumbnail : thumbnail,
                code : code,
                stock : stock,
                id : this.products.length + 1
            }
            this.products.push(product);
            console.log("producto agregado", product);
    }
    else {
        console.log("error, producto ya cargado");
    }
        console.log("fin addProduct")
}

getProducts() {
     this.products;
    return console.log(this.products, "productos en general")
}

getProductById(code) {
    this.products.find(p => p.code === code)
    return console.log("producto encontrado")
    
} 

}

// Create a new instance of the ProductManager class
let productManager = new ProductManager();

// Add a new product
productManager.addProduct("manzana", "esto es una manzana", 19.99, "manzana.png", 1 , 10);
// error producto ya cargado
productManager.addProduct("pera", "esto es una pera", 15.99, "pera.png", 2 , 10);

let products = productManager.getProducts();

let product = productManager.getProductById(1);

let product2 = productManager.getProductById(2);
