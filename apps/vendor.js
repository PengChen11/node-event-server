const emitter = require('../lib/events');
const faker = require('faker');

function start(){

  setInterval(()=>{

    let order = {
      store: '1-206-flowers',
      orderID: Math.floor(Math.random*1000000),
      customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
      address: faker.address.streetAddress(),
    };
    emitter.emit('pickup', order);

  },5000);

}


emitter.on('delivered', delivered);
function delivered(order){
  console.log(`VENDOR: Thank you for delivering ${order.orderID}`) ;
}

module.exports = {start};
