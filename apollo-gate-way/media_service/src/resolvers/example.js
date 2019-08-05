const media = []

module.exports = {
  Query: {

    processMedia: (_parent, args, _context, _info) => {
      const { ProcessMediaInput } = args

      media.push(ProcessMediaInput)

      return media[0]
    },
  },
  Mutation: {
    deleteMedia: (_parent, args, _context, _info) => {
      const { DeleteMediaInput } = args

      media.push(DeleteMediaInput)

      return media[0]
    },
  },
}
