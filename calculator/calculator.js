module.exports = {
  add,
};

function add(a = 0, b = 0) {  // '= 0' after the variable means: use 0 if there is no argument passed. 
  if(isNumber(a) && isNumber(b)) {
    return a + b
  } else {
    throw new Error('Both arguments need to be numbers')
  }
}

function isNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value)
}