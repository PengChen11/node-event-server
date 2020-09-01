const emitter = require('../lib/events');


function start(){

}

emitter.on('delivered', delivered);

function delivered(order){
  console.log(`VENDOR: Thank you for delivering ${order.orderID}`) ;
}

module.exports = start;
