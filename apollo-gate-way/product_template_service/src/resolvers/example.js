const templates = []

module.exports = {
  Query: {
    getTemplates: (_parent, args, _context, _info) => {
      const templates = order
      return (templates.length > 0) ? templates : null
    },
    getTemplatesByProduct: (_parent, args, _context, _info) => {
      const { getTemplatesByProductInput } = args
      return (templates.length > 0) ? templates[0] : null
    },
    getTemplatesByProducer: (_parent, args, _context, _info) => {
      const { getTemplatesByProducerInput } = args
      return (templates.length > 0) ? templates[0] : null
    }
  },
  Mutation: {
    createTemplate: (_parent, args, _context, _info) => {
      const { createTemplateInput } = args      
      templates.push(createTemplateInput)
      return templates[0]
    },
    updateTemplate: (_parent, args, _context, _info) => {
      const { updateTemplateInput } = args
      templates.push(updateTemplateInput)
      return templates[0]
    }
  },
}
