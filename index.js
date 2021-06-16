// Your code here
class Polygon {

    constructor(arrInt) {
        this.arrInt = arrInt
    }

    get countSides() {
        return this.arrInt.length
    }

    get perimeter() {
        let total = this.arrInt.reduce((total, amount) => {
            return total + amount
        })
        return total
    }

}

class Triangle extends Polygon {

    get isValid() {
        if (this.arrInt[1] + this.arrInt[2] <= this.arrInt[0] || this.arrInt[0] + this.arrInt[2] <= this.arrInt[1] || this.arrInt[0] + this.arrInt[1] <= this.arrInt[2]) {
            return false
        } else {
            return true
        }
    }

}

class Square extends Polygon {

    get isValid() {
        let firstSides = this.arrInt[0] + this.arrInt[1]
        let secondSides = this.arrInt[2] + this.arrInt[3]
        if (firstSides === secondSides) {
            return true
        } else {
            return false
        }
    }

    get area() {
        if (this.countSides === 4) {
            return this.arrInt[0] * this.arrInt[0]
        }
    }

}