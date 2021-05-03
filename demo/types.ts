namespace demo {
  interface Animal {
    age: number;
    nature?: string;
  }

  //typing
  let msg: string = "Ciao mondo";
  console.log(msg);

  //compiling error
  //--> msg = 1;

  //type inference
  let msg2 = "Ciao mondo";
  //code completation
  console.log(msg.length);
  //compiling error
  //--> msg2 = 1;

  //const and let: ES6
  const immutualMsg = "Ciao";
  console.log(immutualMsg);
  //compiling error
  //--> immutualMsg = "Ciao mondo";

  //let block scope
  for (let i = 0; i < 10; i++) {
    if (i == 5) {
      let result = "gimme five";
      console.log(result);
    }
    //compiling error
    //--> console.log(result);
  }
  //compiling error
  //--> console.log("last i", i);

  function testDeadZone() {
    //compiling error
    //--> console.log(blockValue);

    let blockValue = 20;
    console.log(blockValue);
  }

  //no type
  let okAllType: any = "ciao";
  console.log(typeof okAllType);
  okAllType = 2;
  console.log(typeof okAllType);
  okAllType = true;
  console.log(typeof okAllType);
}
