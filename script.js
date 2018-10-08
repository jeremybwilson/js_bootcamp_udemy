var a = 2;
var b = 5;
var c;
var d = 1000;

for(var i = 0; i < 5; i++){
  if(i > a && i < b){
  c = 1000;
  }
  if(i === 3){
    d *= 2;
  }
}

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

try {
  // test();
} catch (error) {
  console.log(error);
} finally {
  console.log('Finally!');
}

const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}
console.log(GetSum(2,4));

function GetSum2( a,b ) {
  if (a === b){
    return a;
  } else if (a < b){
    return a + GetSum2(a+1, b);
  } else {
    return a + GetSum2(a-1, b);
  }
}
console.log(GetSum2(2,2));

function removeElement(arr, arrayElement)
{
  for(var i = 0; i < arr.length; i++) { 
    if(arr[i] == arrayElement){
      arr.splice(i, 1); 
    }
  }
}
var array_vals1 = ["false",1,2,0,3,4,0,5,"ab"];
removeElement(array_vals1, 0);
console.log(array_vals1);

function removeElementsWithValue(arr, val) {
  var i = arr.length;
  while (i--) {
    if (arr[i] === val) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
var array_vals2 = ["false", 1, 3, 0, 5, 0, 0, 1, "ab"];
removeElementsWithValue(array_vals2, 0);
console.log(array_vals2); // [1, 1]


function minValue(values){
  return Number(
  values.filter(function(value, index, self){
    return self.indexOf(value) === index;
  })
  .sort(function(a, b){
    return (a-b);
  })
  .join('')
  );
}

// function sayHey(){
//   for (i = 0; i < 3; i++){
//     console.log('Hey');
//   }
// }
// sayHey();

function sayHey(input){
  for (i = 0; i < 3; i++){
    return input;
  }
}
console.log(sayHey('hey'));
