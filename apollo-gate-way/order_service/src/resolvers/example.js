// const { withFilter } = require('graphql-yoga')

// const Unit = require('../utils/enums/Unit')
// const Channels = require('../utils/enums/ChannelNames')

// const productDB = require('../utils/databases/product.db')
const faye = require('faye')

var client = new faye.Client('http://localhost:8000/');

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

      client.publish('/addedOrder', {
        text: 'Hello world',
        json: order[order.length - 1]
      });

      return order[order.length - 1]
    },

    /**
     * TODO: implment changeOrderStatus with faye pubsub
     */
  },
}
// DUMMY Data for TESTING!!!
/* mutation addOrder{
  createOrder(orderInput:{
    consumer: {consumerId:"12345"},
    producer: {producerId:"abcde"},
    products:[{id: "1", name:"Apfel", amount:5, tax: 5, price:5}],
    total: 15,
    pickupStation:{
      locationId: "qwertz",
      pickupDeadline: "now",
      name: "Hier",
      pickupType: PRODUCER,
      address:{
        street_name:"here",
        street_number: "5",
        city:"Dort",
        zip_code:12345,
        country: "Indien"
      },
      openingHours:{
        is_closed: false,
        start: "10",
        end: "20"
      },
    }
    date:"now",
    orderStatus: {
      status: ORDERED,
      data: "now"
    },
    paymentMethod:PAYPAL,
    bill:{
      consumerAddress:{
        street_name:"here",
        street_number: "5",
        city:"Dort",
        zip_code:12345,
        country: "Indien"
      },
      producerAddress:{
        street_name:"here",
        street_number: "5",
        city:"Dort",
        zip_code:12345,
        country: "Indien"
      },
      billNumber:5,
      issueDate: "now",
      dueDate: "later",
      total:15,
      products:[{id: "1", name:"Apfel", amount:5, tax: 5, price:5}],
      shippingPrice:5,
      tax:5,
      taxId: "2"
    }
  }){
    total
  }
} */
