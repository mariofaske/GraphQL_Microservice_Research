const authAccounts = []

module.exports = {
  Query: {
    authenticateAccount: (_parent, args, _context, _info) => {
      // manage tokens (JWT) here
      return (authAccounts.length > 0) ? authAccounts[authAccounts.length - 1] : null
    }
  },
  Mutation: {
    createAccount: (_parent, args, _context, _info) => {
      const account = args.AccountInputWithId
      authAccounts.push(account)
      return (authAccounts.length > 0) ? authAccounts[authAccounts.length - 1] : null
    },
    modifyPassword: (_parent, args, _context, _info) => {
      const account = args.AccountInputWithId
      authAccounts.push(account)
      return (authAccounts.length > 0) ? authAccounts[authAccounts.length - 1] : null
    }
  },
}
