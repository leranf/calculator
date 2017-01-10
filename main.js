document.getElementById('add-input').addEventListener('click', function() {
  var newListItem = document.createElement('li');
  var newInput = document.createElement('input');
  newInput.placeholder = 'Enter Value';
  newListItem.append(newInput);
  document.getElementById('numbers').append(newListItem);
});

var methods = {
  Add: function(a,b) { return a + b; },
  Subtract: function(a,b) { return a - b; },
  Multiply: function(a,b) { return a * b; },
  Divide: function(a,b) { return a / b; },
};

document.getElementById('calculate').addEventListener('click', function() {
  var method = document.querySelector('select').value;
  var inputs = Array.prototype.slice.call(document.querySelectorAll('input'));
  var values = inputs.map(function(input) {
    return Number(input.value);
  }); 
  var result = values.reduce(function(total, curr) {
    return methods[method](total, curr);
  });
  console.log(result);
  
  var resultElement = document.createElement('h1');
  resultElement.innerHTML = 'Result = ' + result;
  document.body.append(resultElement);
});

