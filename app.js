function keyarr(arr) {
  var object = {};
  for (var i = 0; i < arr.length; i += 2) {
    if (i + 1 < arr.length) {
      object[arr[i]] = arr[i + 1];
    }
  }
  return object;
}

var arr = ["name", "John", "lastname", "Black", "age", "23"]
var object = keyarr(arr)
console.log(object)



//dop-dz
function numbers() {
    var num = 0
    var colvo = arguments.length
    for (var i = 0; i < colvo; i++) {
      num += arguments[i]
    }
    return num / colvo
  }
  
  console.log(numbers(2, 4, 5, 6, 7))
  console.log(numbers(1, 3, 5, 7, 90))
  console.log(numbers(0, 15))
  