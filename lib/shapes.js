
class ShapeLogo {
    constructor(shapeOption, colorShape) {//This line defines the constructor method for the ShapeLogo class. It takes shapeOption and colorShape as parameters.
      this.color = colorShape;
      this.shapeOption = shapeOption;
      this.shapeRenderResult=this.render();//This line assigns the result of calling the render method to the shapeRenderResult property of the ShapeLogo instance.
    }

  }
  
  class Triangle extends ShapeLogo {
    render() {
     return`<polygon points="0,200 300,200 150,0" fill="${this.color}"/>`;

    }
  }
  
  class Circle extends ShapeLogo {
    render() {
     return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
     
    }
  }
  
  class Rectangle extends ShapeLogo {
    render() {
    return`<rect x="50" y="50" width="200" height="200" fill="${this.color}"/>`;
    
    }
  
  }
  
  module.exports = {//This line exports
    ShapeLogo,
    Triangle,
    Circle,
    Rectangle,
  };


