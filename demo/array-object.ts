function testArrayMethods() {
  let data = [
    { id: "ABC123", name: "Product name 134", price: 34, pos: 0 },
    { id: "ABC567", name: "Product name 567", price: 134, pos: 0 },
    { id: "ZCA897", name: "Product name 897", price: 34, pos: 0 },
    { id: "DD100", name: "Product name 100", price: 10, pos: 0 },
  ];

  console.log("data", data);

  //loop every item
  data.forEach((item, index) => {
    item.pos = index;
  });
  console.log("data forEach", data);

  //init data
  let filledData = Array(10).fill({ id: "0", name: "-", price: 0, pos: 0 });
  console.log("filledData", filledData);

  let partFilledData = Array(10).fill(
    { id: "0", name: "-", price: 0, pos: 0 },
    4,
    7
  );
  console.log("partFilledData", partFilledData);

  //transform data
  let newData = data.map((item, index) => item.name);
  console.log("newData", newData);

  //filter data
  let filterData = data
    .filter((item) => item.price === 34)
    .filter((item) => item.name.indexOf("8") > -1);
  console.log("filterData", filterData);

  //tranform filter data
  let transformedFilterdData = data
    .filter((item) => item.price > 34)
    .map((item) => {
      item.price = 100;
      return item;
    });
  console.log("transformedFilterdData", transformedFilterdData);

  //check all data respect condition
  let allMinorThan100 = data.every((item) => item.price < 100);
  console.log("allMinorThan100=", allMinorThan100);

  //check some data respect condition
  let someMinorThan35 = data.some((item) => item.price < 35);
  console.log("someMinorThan35=", someMinorThan35);

  //reduce to a single value
  let priceSum = data.reduce((priceSum, item) => {
    return (priceSum += item.price);
  }, 0);
  console.log("priceSum=", priceSum);
  //without passing inital value
  let minorPrice = data.reduce((minorPrice, item) => {
    return minorPrice.price < item.price ? minorPrice : item;
  });
  console.log("minorPrice=", minorPrice);
}

function testObjectMethods() {
  //merge object
  const obj = { id: "DD100", name: "100 LXR", price: 10, pos: 0 };
  const objDesc = { description: "The 100 LRX is a product", pos: 30 };
  const completeObj = Object.assign(objDesc, obj, { pos: 100 });
  console.log(completeObj);

  //merge by decostructing
  const completeObjDesc = { ...obj, ...objDesc, ...{ pos: 50 } };
  console.log(completeObjDesc);

  //all key, values, array tuple
  console.log(Object.keys(completeObjDesc));
  console.log(Object.values(completeObjDesc));
  console.log(Object.entries(completeObjDesc));
}

export { testArrayMethods, testObjectMethods };
