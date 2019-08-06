// const { withFilter } = require('graphql-yoga')
const Unit = require('../utils/enums/Unit')
// const Channels = require('../utils/enums/ChannelNames')
const productDB = require('../utils/databases/product.db')

const products = []
module.exports = {
  Query: {
    getAllProducts: (_parent, _args, _context, _info) => products,
    getProductsFromProducer: (_parent, args, _context, _info) => {
      const { producerId } = args
      const productIdx = products.findIndex(product => products.producerId === producerId)

      return (productIdx >= 0) ? products[productIdx] : null
    },
    getProduct: (_parent, args, _context, _info) => {
      const { producerId } = args
      const productIdx = products.findIndex(product => products.producerId === producerId)

      return (productIdx >= 0) ? products[productIdx] : null
    },
  },
  Mutation: {
    createProduct: (_parent, args, context, _info) => {
      const { producerId, productInput } = args

      productInput.producerId = producerId

      products.push(productInput)

      return products[products.length - 1]
    },
  },
  Product: {
    __resolveReference(reference) {
      return productDB.getProductById(reference.id)
    },
    producer: product => ({ id: product.producerId, username: product.producerName }),
  },
  Unit: {
    QUANTITY: Unit.QUANTITY,
    KILOGRAM: Unit.KILOGRAM,
    LITER: Unit.LITER,
  },
}
