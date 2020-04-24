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

      it('should return the sum of two numbers', () => {
         expect(add(2, 2)).toBe(4)
         expect(add(0, 2)).toBe(2)
         expect(add(1, 10)).toBe(11)
         expect(add(-2, 2)).toBe(0)
         expect(add(-2, -1)).toBe(-3)
      })

      it('should return 0 when called with no arguments', () => {
         expect(add()).toBe(0)
      })

      it('should return the value of the argument when passing only one number', () => {
         expect(add(7)).toBe(7)
      })

      it('should throw an error when passing non-integers', () => {
         expect(() => {
            add(2, {})
         }).toThrow()
         expect(() => {
            add(2, [])
         }).toThrow()
         expect(() => {
            add(2, 'two')
         }).toThrow()
         expect(() => {
            add(2, NaN)
         }).toThrow()
         expect(() => {
            add(2, null)
         }).toThrow()
      })

      it.todo('should return the sum of a list of numbers separated by a comma')
   })
})

// Given two numbers
// When the add function is invoked
// Then it should return the sum of the two numbers