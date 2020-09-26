'use strict';
const events = require('./lib/events');
const vendor = require('./apps/vendor');
require('./apps/driver');

events.on('pickup', eventHandler('pickup'));
events.on('in-transit', eventHandler('in-transit'));
events.on('delivered', eventHandler('delivered'));

function eventHandler(eventName){

  return order=>{

    const time = new Date();

    console.log('EVENT', {event: eventName, time, order});
  };

}

vendor.start();
