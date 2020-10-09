'use strict';
const io = require('socket.io-client');
// const host = 'http://localhost:3000/caps';
const host = 'https://intense-lowlands-77850.herokuapp.com/caps';

const capsConnection = io.connect(host);

capsConnection.on('pickup', onPickup);

function onPickup(order) {
  setTimeout(() => {

    console.log(`pickup ${order.orderID}`);
    capsConnection.emit('in-transit', order);

  }, 1500);

  setTimeout(()=>{
    console.log(`delivered ${order.orderID}`);
    capsConnection.emit('delivered', order);
  }, 3000);
}


