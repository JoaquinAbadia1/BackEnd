class ProductManager {
    constructor(tittle, description,price,thumbnail,code,stock, id){
        this.products = []
        this.tittle = tittle
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.id = id
    }
    addProduct(product){
        product.id = Math.random().toString(16)
        if(this.tittle == '' || this.description== '' || this.price== '' || this.tumbnail =='' || this.code== '' || this.stock== '' || this.id== ''){
            return ('Todos los campos son requeridos')
        }else if(product.code === this.products.code) {
            return ('ya esta agregado')
        }
        
        this.products.push(product)
        return this.products
    }
    getProduct(product){
        return this.products
    }
    getProductById(id){
        for (const elements of this.products) {
            if(elements.id === id) {
                return elements.tittle
            }else{
                return 'no se encontro'
            }
        }
    }
}

const productManager = new ProductManager();
console.log(productManager.addProduct({tittle:'hola', description:'producto',price:9999,tumbnail:'https://img.png',code:09876657,stock:28}))
console.log(productManager.getProduct())