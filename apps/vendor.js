const emitter = require('../lib/events');
const faker = require('faker');

function start(){

  setInterval(()=>{

    let order = {
      store: '1-206-flowers',
      orderID: faker.random.number(),
      customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
      address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}, ${faker.address.zipCode()} } `,
    };
    emitter.emit('pickup', order);

  },5000);

}


emitter.on('delivered', delivered);
function delivered(order){
  console.log(`VENDOR: Thank you for delivering ${order.orderID}`) ;
}

module.exports = {start};
