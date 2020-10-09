'use strict';
const io = require('socket.io-client');
const host = 'http://localhost:3000/caps';
const capsConnection = io.connect(host);

capsConnection.emit('join', 'Lovers-flowers');

const faker = require('faker');

function start(){

  setInterval(()=>{

    let order = {
      store: 'Lovers-flowers',
      orderID: faker.random.uuid(),
      customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
      address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}, ${faker.address.zipCode()} } `,
    };
    capsConnection.emit('pickup', order);

  },5000);
}

capsConnection.on('delivered', delivered);
function delivered(order){
  console.log(`Thank you for delivering ${order.orderID}`) ;
}

start();
