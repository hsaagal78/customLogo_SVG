const { ShapeLogo, Triangle, Circle, Rectangle } = require('../lib/shapes');

describe('ShapeLogo', () => {
  it('Should return true for a valid shape', () => {
    const isValid = new Circle('Circle', 'blue');
    expect(isValid instanceof Circle).toBe(true);
  });
});

describe('ShapeLogo', () => {
  it('Should return true for a valid shape', () => {
    const isValid = new Triangle('Triangle', 'green');
    expect(isValid instanceof Triangle).toBe(true);
  });
});

describe('ShapeLogo', () => {
  it('Should return true for a valid shape', () => {
    const isValid = new Rectangle('Rectangle', 'black');
    expect(isValid instanceof Rectangle).toBe(true);
  });
});