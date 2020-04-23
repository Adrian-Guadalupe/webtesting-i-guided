const { add } = require('./calculator.js');

// test away!
it('should run the tests', function() {
   expect(true).toBe(true)
})

describe('calculator', () => {
   describe('.add()', () => {
      it('should return the sum of two numbers passed as arguments', () => {
         //Arrange (setup the environment and inputs)

         //Act
         const sum = add(2, 2)

         //Assert
         expect(sum).toBe(4)
      })
   })
})

// Given two numbers
// When the add function is invoked
// Then it should return the sum of the two numbers