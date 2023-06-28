
class ShapeLogo {
    constructor(shapeOption, colorShape) {
      this.color = colorShape;
      this.shapeOption = shapeOption;
      this.shapeRenderResult=this.render();
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
  
  module.exports = {
    ShapeLogo,
    Triangle,
    Circle,
    Rectangle,
  };


