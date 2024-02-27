// creating  objects in javacripts
// m1 is by oblect literals
 var car1 = {
  cost:  '2500k',
  company: 'tata',
  fuel_capacity: '45L',
 }
 console.log(car1);
 console.log(car1.cost);

 // m2 is by : object directly (using new keyword);
 var ck_detais = new Object();
  ck_detais.name = "chandan koranga";
  ck_detais.age = 21;
  console.log(ck_detais);
  delete ck_detais.age;
  console.log(ck_detais);

 // m3 is  using new constructor;
