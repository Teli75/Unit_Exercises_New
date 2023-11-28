const products = [
    { name: 'hard drive', price: 59.99 },
    { name: 'lighbulbs', price: 2.59 },
    { name: 'paper towels', price: 6.99 },
    { name: 'flatscreen monitor', price: 159.99 },
    { name: 'cable ties', price: 19.99 },
    { name: 'ballpoint pens', price: 4.49 },
  ];
    //return the highest of the items that are under $10
      // Result: { name: 'paper towels', price: 6.99 }

      
    //   const product = products
    //     .filter(product => product.price < 10)
    //     .reduce((highest, product) => {
    //         if (highest.price > product.price) {
    //             return highest;
    //         }
    //         return product;
    //   });
    //highest isn't a keyword
    //Does the first price iterate over the rest of the 3 prices
    //that are under 10


    //return a total of all products over $10
      const total = products
        .filter(product => product.price > 10)
        .reduce((sum, product) => sum + product.price, 0)
        .toFixed(2);

      console.log(total);