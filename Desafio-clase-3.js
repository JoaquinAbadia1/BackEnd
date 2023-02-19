class ProductManager {
    constructor(tittle, description,price,tumbnail,code,stock, id){
        this.products = []
        this.tittle = tittle
        this.description = description
        this.price = price
        this.tumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.id = id
    }
    addProduct(product){
        if(this.tittle == '' || this.description== '' || this.price== '' || this.tumbnail =='' || this.code== '' || this.stock== '' || this.id== ''){
            return ('Todos los campos son requeridos')
        }else if(this.code === this.id) {
            return ('ya esta agregado')
        }
        product.id = math.random().toString(16)
        this.products.push(product)
    }
    getProduct(product){
        return this.products
    }
}