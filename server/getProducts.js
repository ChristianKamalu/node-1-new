const products = require('../products.json')

module.exports = {
    getProducts: (req, res) => {
        const {price} = req.query;
        if(price) {
            const filtered = products.filter(item => item.price >= price * 1);
            return res.status(200).send(filtered)
        }
        res.status(200).send(products)
    },
    getProductById: (req, res) => {
        const {id} = req.params;
        const item = products.find(items => items.id == id);
        if(!item) {
            return res.status(500).send('Item not in list')
        }
        res.status(200).send(item)
    }
}