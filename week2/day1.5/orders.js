function orderSupplies(item, callback) {
  let warehouse; //undefined
  const deliveryTime = Math.random() * 3000;

  setTimeout(function(){
    warehouse = {
      paint: {
        product: 'Neon Green Paint',
        directions: function() { return 'mix it!' }
      },
      brush: {
        product: 'Horsehair brush',
        directions: function() { return 'start painting!' }
      },
      tarp: {
        product: 'Large Tarp',
        directions: function() { return 'lay it on the ground'; }
      }
    };

    callback(warehouse[item]);
  }, deliveryTime);
}

function success(warehouseItem){
  console.log(`We've delivered your ${warehouseItem.product} `);
  console.log(`You can ${warehouseItem.directions()}`)
}
orderSupplies('brush', success);
orderSupplies('paint', success);




//
