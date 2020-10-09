'use strict';
const io = require('socket.io-client');
// const host = 'http://localhost:3000/caps';
const host = 'https://intense-lowlands-77850.herokuapp.com/caps';
const capsConnection = io.connect(host);

capsConnection.emit('join', '1-206-flowers');

const faker = require('faker');

function start(){

  setInterval(()=>{

    let order = {
      store: '1-206-flowers',
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
