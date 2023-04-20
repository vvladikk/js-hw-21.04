class Rectangle {
    constructor(width, height) {
      this._width = width;
      this._height = height;
    }
    get width() {
      return this._width;
    }
    set width(newWidth) {
      this._width = newWidth;
    }
    get height() {
      return this._height;
    }
    set height(newHeight) {
      this._height = newHeight;
    }
    getArea() {
      return this._width * this._height;
    }
    getPerimeter() {
      return 2 * (this._width + this._height);
    }
  };
  
  const myRectangle = new Rectangle(5, 7);

  console.log(myRectangle.getArea());

  console.log(myRectangle.getPerimeter()); 

  console.log(myRectangle.width); 

  console.log(myRectangle.height); 

  myRectangle.width = 10;

  myRectangle.height = 12;

  console.log(myRectangle.width); 

  console.log(myRectangle.height); 
  