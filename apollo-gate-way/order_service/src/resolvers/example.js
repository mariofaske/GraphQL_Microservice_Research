// const { withFilter } = require('graphql-yoga')

// const Unit = require('../utils/enums/Unit')
// const Channels = require('../utils/enums/ChannelNames')

// const productDB = require('../utils/databases/product.db')

const order = []

module.exports = {
  Query: {
    getOrders: (_parent, args, _context, _info) => {
      const products = order
      return (products.length > 0) ? products : null
    },
    getOrder: (_parent, args, _context, _info) => order[order.length - 1],

    getOrdersByConsumer: (_parent, args, _context, _info) => {

    },

    getOrdersByProducer: (_parent, args, _context, _info) => {

    },

    getBill: (_parent, args, _context, _info) => {

    },
  },
  Mutation: {
    createOrder: (_parent, args, _context, _info) => {
      const { orderInput } = args

      order.push(orderInput)

      return order[0]
    },
  },
}
