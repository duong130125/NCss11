class Shape {
    calculateArea(shapeData: { width: number; height: number } | { radius: number }): number {
        if ('width' in shapeData && 'height' in shapeData) {
            return shapeData.width * shapeData.height; // Tính diện tích hình chữ nhật
        } else if ('radius' in shapeData) {
            return Math.PI * shapeData.radius * shapeData.radius; // Tính diện tích hình tròn
        } else {
            return 0; // Trả về 0 nếu không có dữ liệu hợp lệ
        }
    }

    calculatePerimeter(shapeData: { width: number; height: number } | { radius: number }): number {
        if ('width' in shapeData && 'height' in shapeData) {
            return 2 * (shapeData.width + shapeData.height); // Tính chu vi hình chữ nhật
        } else if ('radius' in shapeData) {
            return 2 * Math.PI * shapeData.radius; // Tính chu vi hình tròn
        } else {
            return 0; // Trả về 0 nếu không có dữ liệu hợp lệ
        }
    }
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }
}

let rectangle = new Rectangle(5, 10);
console.log("Diện tích hình chữ nhật:", rectangle.calculateArea({ width: rectangle.width, height: rectangle.height }));
console.log("Chu vi hình chữ nhật:", rectangle.calculatePerimeter({ width: rectangle.width, height: rectangle.height }));

let circle = new Circle(3);
console.log("Diện tích hình tròn:", circle.calculateArea({ radius: circle.radius }));
console.log("Chu vi hình tròn:", circle.calculatePerimeter({ radius: circle.radius }));
