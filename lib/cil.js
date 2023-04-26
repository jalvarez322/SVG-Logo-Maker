class Shapes{
    constructor(){
        this.shapecolor = ``;
    }
    setshapeColor(color){
        this.shapecolor = color;
    }
}

class Circle extends Shapes{
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.shapecolor}" />`
    }
}

class Triangle extends Shapes{
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapecolor}" />`
    }
}

class Square extends Shapes{
    render(){
        return ` <rect x="90" y="40" width="120" height="120" fill="${this.shapecolor}" />`
    }
}

module.exports = {Triangle, Circle, Square};