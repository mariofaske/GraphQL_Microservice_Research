// const { withFilter } = require('graphql-yoga')

const Unit = require('../utils/enums/Unit')
// const Channels = require('../utils/enums/ChannelNames')

// const productDB = require('../utils/databases/product.db')

const order = []

module.exports = {
  Query: {
    getOrders: (_parent, args, _context, _info) => {
      const products = order
      return (products.length > 0) ? products : null
    },
    getOrder: (_parent, args, _context, _info) => order[0],
  },
  Mutation: {
    createOrder: (_parent, args, _context, _info) => {
      const { orderInput } = args

      order.push(orderInput)

      return order[0]
    },
  },
  Unit: {
    QUANTITY: Unit.QUANTITY,
    KILOGRAM: Unit.KILOGRAM,
    LITER: Unit.LITER,
  },
}
