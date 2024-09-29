function placeOrder(Order, callback) {
  console.log(`Order Received ${Order}. Preparing...`);
  setTimeout(() => {
    console.log(`Order Prepared ${Order}`);
    callback(Order);
  }, 3000);
}

function serveOrder(Order) {
  console.log(`Order Served: ${Order}`);
}

placeOrder("Burger", serveOrder);
