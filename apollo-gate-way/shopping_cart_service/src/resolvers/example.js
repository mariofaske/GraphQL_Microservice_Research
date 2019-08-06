const shoppingCarts = []

module.exports = {
  Query: {
    getShoppingCartByConsumer: (_parent, args, _context, _info) => {
      const { GetShoppingCartByConsumerInput } = args
      return (shoppingCarts.length > 0) ? shoppingCarts[0] : null
    }
  },
  Mutation: {
    createShoppingCart: (_parent, args, _context, _info) => {
      const { EditShoppingCartInput } = args
      shoppingCarts.push(EditShoppingCartInput)
      return shoppingCarts[shoppingCarts.length - 1]
    },
    addProduct: (_parent, args, _context, _info) => {
      const { EditShoppingCartProductsInput } = args
      shoppingCarts.push(EditShoppingCartProductsInput)
      return shoppingCarts[shoppingCarts.length - 1]
    },
    removeProduct: (_parent, args, _context, _info) => {
      const { EditShoppingCartProductsInput } = args
      return shoppingCarts[shoppingCarts.length - 1]
    },
    modifyProductAmount: (_parent, args, _context, _info) => {
      const { EditShoppingCartProductsInput } = args
      shoppingCarts.push(EditShoppingCartProductsInput)
      return shoppingCarts[shoppingCarts.length - 1]
    },
    emptyShoppingCart: (_parent, args, _context, _info) => {
      const { EditShoppingCartInput } = args
      return shoppingCarts[shoppingCarts.length - 1]
    },
    removeShoppingCart: (_parent, args, _context, _info) => {
      const { EditShoppingCartInput } = args
      return shoppingCarts[shoppingCarts.length - 1]
    }
  }
}
