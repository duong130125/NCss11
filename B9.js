"use strict";
class Shape {
    calculateArea(shapeData) {
        if ('width' in shapeData && 'height' in shapeData) {
            return shapeData.width * shapeData.height; // Tính diện tích hình chữ nhật
        }
        else if ('radius' in shapeData) {
            return Math.PI * shapeData.radius * shapeData.radius; // Tính diện tích hình tròn
        }
        else {
            return 0; // Trả về 0 nếu không có dữ liệu hợp lệ
        }
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
}
// Tạo thực thể từ lớp Rectangle và tính diện tích
let rectangle = new Rectangle(5, 10);
console.log("Diện tích hình chữ nhật:", rectangle.calculateArea({ width: rectangle.width, height: rectangle.height }));
// Tạo thực thể từ lớp Circle và tính diện tích
let circle = new Circle(3);
console.log("Diện tích hình tròn:", circle.calculateArea({ radius: circle.radius }));
