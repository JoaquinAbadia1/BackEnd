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
        
        if(this.tittle == '' || this.description== '' || this.price== '' || this.tumbnail =='' || this.code== '' || this.stock== '' || this.id== ''){
            return ('Todos los campos son requeridos')
        }
        
        this.products.push(product)
    }
    getProduct(product){
        return this.products
    }
    randomId(){
        Math.random()
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
console.log(productManager.addProduct({tittle:'hola', description:'producto',price:9999,tumbnail:'https://img.png',code:09876657,stock:28}))
console.log(productManager.getProduct())    