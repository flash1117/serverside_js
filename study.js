class Shape {

    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;

    }
    draw() {
        console.log(`drawing ${this.color} color!`);

    }

    getArea() {
        return this.width * this.height;
    }

}

class Rectangle extends Shape {

}

class Triangle extends Shape {
    // overriding (다형성)
    draw() {
        // 부모의 draw의 기능도 가져오면서 내껏도 추가하고 싶다.
        super.draw();
        console.log('add');
    }

    getArea() {
        return (this.width * this.height);
    }
}

const rectangle =  new Rectangle(20,20,'blue');
rectangle.draw();