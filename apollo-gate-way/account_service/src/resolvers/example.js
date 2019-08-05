const UserType = require('../utils/enums/UserType')

const userDB = require('../utils/databases/user.db')

const accounts = []

module.exports = {
  Query: {
    getAccounts: (_parent, _args, _context, _info) => {
      const users = accounts
      return (users.length > 0) ? users : null
    },
    getAccount: (_parent, args, _context, _info) => {
      const { accountId } = args
      const accountIdx = accounts.findIndex(account => accounts.consumerId === accountId)

      return (accountIdx >= 0) ? accounts[accountIdx] : null
    },
  },
  Mutation: {
    deleteAccount: (_parent, args, context, _info) => {
      const { accountId } = args
      const accountIdx = accounts.findIndex(account => accounts.consumerId === accountId)
      if (accountIdx >= 0) accounts.splice(accountIdx, 1)
      return (accountIdx >= 0) ? accounts[accountIdx] : null
    },
    /**
     * TODO!
     */
    createConsumer: (_parent, args, context, _info) => {
      const { consumerInput } = args
      accounts.push(consumerInput)

      return accounts[accounts.length - 1]
    },
    /**
     * TODO!
     */
    editConsumer: (_parent, args, context, _info) => {
      const { consumerInput } = args
      accounts.push(consumerInput)
      return accounts[accounts.length - 1]
    },
    /**
     * TODO!
     */
    createProducer: (_parent, args, context, _info) => {
      const { producerInput } = args
      accounts.push(producerInput)

      return accounts[accounts.length - 1]
    },
    /**
     * TODO!
     */
    editProducer: (_parent, args, context, _info) => {
      const { producerInput } = args
      accounts.push(producerInput)
      return accounts[accounts.length - 1]
    },
  },
  Account: {
    __resolveType: (user) => {
      switch (user.type) {
        case UserType.CONSUMER: return 'Consumer'
        case UserType.PRODUCER: return 'Producer'
        default: throw new Error('User could not be identified.')
      }
    },
    __resolveReference(reference) {
      return userDB.getUserById(reference.id)
    },
  },
  Consumer: {
    __resolveReference(reference) {
      return userDB.getUserById(reference.id)
    },
    purchases: ({ purchasedProductIds }) => purchasedProductIds.map(id => ({ __typename: 'Product', id })),
  },
  Producer: {
    __resolveReference(reference) {
      return userDB.getUserById(reference.id)
    },
  },
  UserType: {
    PRODUCER: UserType.PRODUCER,
    CONSUMER: UserType.CONSUMER,
  },
}
