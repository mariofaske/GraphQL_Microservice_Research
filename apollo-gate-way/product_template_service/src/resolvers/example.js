const templates = []

module.exports = {
  Query: {
    getTemplates: (_parent, args, _context, _info) => {
      const templates = order
      return (templates.length > 0) ? templates : null
    },
    getTemplatesByProduct: (_parent, args, _context, _info) => {
      const { GetTemplatesByProductInput } = args
      return (templates.length > 0) ? templates[0] : null
    },
    getTemplatesByProducer: (_parent, args, _context, _info) => {
      const { GetTemplatesByProducerInput } = args
      return (templates.length > 0) ? templates[0] : null
    }
  },
  Mutation: {
    createTemplate: (_parent, args, _context, _info) => {
      const { CreateTemplateInput } = args
      templates.push(CreateTemplateInput)
      return templates[0]
    },
    updateTemplate: (_parent, args, _context, _info) => {
      const { UpdateTemplateInput } = args
      templates.push(UpdateTemplateInput)
      return templates[0]
    }
  },
}
