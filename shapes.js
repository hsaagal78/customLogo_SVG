
class ShapeLogo {
    constructor(shapeOption, colorShape) {
      this.color = colorShape;
      this.shapeOption = shapeOption;
    }
  }
  
  class Triangle extends ShapeLogo {
    render() {
      return `<polygon height="100" width="100" points="0,200 300,200 150,0" fill="${this.color}"/>`;
    }
  }
  
  class Circle extends ShapeLogo {
    render() {
      return `<circle cx="50" cy="50" r="100" height="100" width="100" fill="${this.color}" />`;
    }
  }
  
  class Rectangle extends ShapeLogo {
    render() {
      return `<rect x="50" y="50" width="200" height="200" fill="${this.color}"/>`;
    }
  }
  
  module.exports = ShapeLogo;


