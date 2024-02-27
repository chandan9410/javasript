var get_value = function () {
  return 6;
}
console.log(get_value());
function return_function() {
  return get_value;
}
console.log("after using power  of heigher order concept ");
const reurn_value = return_function();
console.log(reurn_value());