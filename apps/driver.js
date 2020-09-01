/*
driver.js - Drivers Module
Monitor the system for events …
On the ‘pickup’ event …
Wait 1 second
Log “DRIVER: picked up [ORDER_ID]” to the console.
Emit an ‘in-transit’ event with the payload you received
Wait 3 seconds
Log “delivered” to the console
Emit a ‘delivered’ event with the same payload
*/
const emitter = require('../lib/events');


emitter.on('pickup', onPickup);

function onPickup(order) {
  // wait 1 second
  setTimeout(() => {
    // what after 1 second

    // Log “DRIVER: picked up [ORDER_ID]” to the console.
    // Emit an ‘in-transit’ event with the payload you received
    console.log(`DRIVER: picked up ${order.orderID}`);
    emitter.emit('in-transit', order);

  }, 1000);

  // also after 3 seconds do something
}

emitter.on('in-transit', inTransit);

function inTransit(order){

  setTimeout(()=>{
    console.log(`DRIVER: delivered ${order.orderID}`);
    emitter.emit('delivered', order);
  }, 3000);
}


