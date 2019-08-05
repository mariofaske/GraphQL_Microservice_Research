const accounts = []

module.exports = {
  Query: {
    authenticateAccount: (_parent, args, _context, _info) => {
      // manage tokens (JWT) here
      return (accounts.length > 0) ? accounts[accounts.length - 1] : null
    }
  },
  Mutation: {
    createAccount: (_parent, args, _context, _info) => {
      const account = args.AccountInputWithId
      accounts.push(account)
      return (accounts.length > 0) ? accounts[accounts.length - 1] : null
    },
    modifyPassword: (_parent, args, _context, _info) => {
      const account = args.AccountInputWithId
      accounts.push(account)
      return (accounts.length > 0) ? accounts[accounts.length - 1] : null
    }
  },
}
