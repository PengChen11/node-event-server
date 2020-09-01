'use strict';
const events = require('./lib/events');

events.on('pickup', pickupHandler);
events.on('in-transit', transitHandler);
events.on('delivered', deliveredHandler);

function pickupHandler(order){
  const time = new Date();

  console.log('EVENT', {event: 'pickup', time, order});
}


function transitHandler(order){
  const time = new Date();

  console.log('EVENT', {event: 'in-transit', time, order});
}

function deliveredHandler(order){
  const time = new Date();

  console.log('EVENT', {event: 'delivered', time, order});
}

// events.emit('pickup', {id: 'bahaha', ohoh: 'ohoh'});
// events.emit('in-transit', {id: 'bahaha', ohoh: 'ohoh'});
// events.emit('delivered', {id: 'bahaha', ohoh: 'ohoh'});
