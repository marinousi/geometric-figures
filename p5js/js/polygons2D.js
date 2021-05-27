class Rectangle {

    constructor(x, y, w, h) {

        this.points = [];

        this.points.push(new Vector(3, [x, y, 1]));
        this.points.push(new Vector(3, [x + w, y, 1]));
        this.points.push(new Vector(3, [x + w, y + h, 1]));
        this.points.push(new Vector(3, [x, y + h, 1]));
        this.color = '#000000'

        this.t = new Transformations();
    }

    setColor(newColor) {
        this.color = newColor;
     }
 
    translate(dx, dy) {
        for(let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.translate2D(this.points[i],dx,dy)
        }
    }

    rotation(angle) {
        for(let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation2D(this.points[i], angle)
        }
    }

    draw() {

        strokeWeight(0);
        stroke(this.color);
        fill(this.color);

        beginShape(TRIANGLES);

        vertex(this.points[0].values[0], this.points[0].values[1])
        vertex(this.points[1].values[0], this.points[1].values[1])
        vertex(this.points[3].values[0], this.points[3].values[1])

        vertex(this.points[1].values[0], this.points[1].values[1])
        vertex(this.points[2].values[0], this.points[2].values[1])
        vertex(this.points[3].values[0], this.points[3].values[1])

        endShape(CLOSE);

    }

}

class Triangle {
    constructor(x, y, w, h) {

        this.points = [];

        this.points.push(new Vector(3, [x, y, 1]));
        this.points.push(new Vector(3, [x + w, y, 1]));
        this.points.push(new Vector(3, [x, y + h, 1]));
        this.color = '#000000'

        this.t = new Transformations();
    }

    setColor(newColor) {
        this.color = newColor;
     }
 
    translate(dx, dy) {
        for(let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.translate2D(this.points[i],dx,dy)
        }
    }

    rotation(angle) {
        for(let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation2D(this.points[i], angle)
        }
    }



    draw() {

        strokeWeight(0);
        stroke(this.color);
        fill(this.color);
        beginShape(TRIANGLES);

        vertex(this.points[0].values[0], this.points[0].values[1])
        vertex(this.points[1].values[0], this.points[1].values[1])
        vertex(this.points[2].values[0], this.points[2].values[1])
        
        endShape(CLOSE);

    }
}

class Line {
    constructor(x, y, w, h) {

        this.points = [];

        this.points.push(new Vector(3, [x, y, 1]));
        this.points.push(new Vector(3, [x + w, y, 1]));
        this.color = '#000000'

        this.t = new Transformations();
    }

    setColor(newColor) {
        this.color = newColor;
     }
 
    translate(dx, dy) {
        for(let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.translate2D(this.points[i],dx,dy)
        }
    }

    rotation(angle) {
        for(let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation2D(this.points[i], angle)
        }
    }



    draw() {

        strokeWeight(8);
        stroke(this.color);
        fill(this.color);

        beginShape(TRIANGLES);

        vertex(this.points[0].values[0], this.points[0].values[1])
        vertex(this.points[1].values[0], this.points[1].values[1])
        
        endShape(CLOSE);

    }
}

class Circle {
    constructor(x, y, r, triangle) {

        this.x = x
        this.y = y

        this.triangle = triangle;
        this.points = [];

        this.points.push(new Vector(3, [0, 0, 1]));
        this.points.push(new Vector(3, [0 + r, 0, 1]));
        this.color = '#000000'

        this.t = new Transformations();
    }

    setColor(newColor) {
        this.color = newColor;
     }
 
    translate(dx, dy) {
        for(let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.translate2D(this.points[i],dx,dy)
        }
    }

    rotation(angle) {
        for(let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation2D(this.points[i], angle)
        }
    }



    draw() {

        strokeWeight(1);
        stroke(this.color);
        fill(this.color);

        beginShape(TRIANGLES);
        for(let i = 0; i < this.triangle; i+= 1) {

            let translate_0 = this.t.translate2D(this.points[0],this.x,this.y)
            this.points[0].values[0] = translate_0.values[0]
            this.points[0].values[1] = translate_0.values[1]

            let translate_1 = this.t.translate2D(this.points[1],this.x,this.y)
            this.points[1].values[0] = translate_1.values[0]
            this.points[1].values[1] = translate_1.values[1] 

            vertex(this.points[0].values[0], this.points[0].values[1])
            vertex(this.points[1].values[0], this.points[1].values[1])

            translate_0 = this.t.translate2D(this.points[0],-this.x,-this.y)
            this.points[0].values[0] = translate_0.values[0]
            this.points[0].values[1] = translate_0.values[1]

            translate_1 = this.t.translate2D(this.points[1],-this.x,-this.y)
            this.points[1].values[0] = translate_1.values[0]
            this.points[1].values[1] = translate_1.values[1] 

            this.rotation(360/this.triangle)

            translate_0 = this.t.translate2D(this.points[0],this.x,this.y)
            this.points[0].values[0] = translate_0.values[0]
            this.points[0].values[1] = translate_0.values[1]

            translate_1 = this.t.translate2D(this.points[1],this.x,this.y)
            this.points[1].values[0] = translate_1.values[0]
            this.points[1].values[1] = translate_1.values[1] 

            vertex(this.points[1].values[0], this.points[1].values[1])

            translate_0 = this.t.translate2D(this.points[0],-this.x,-this.y)
            this.points[0].values[0] = translate_0.values[0]
            this.points[0].values[1] = translate_0.values[1]

            translate_1 = this.t.translate2D(this.points[1],-this.x,-this.y)
            this.points[1].values[0] = translate_1.values[0]
            this.points[1].values[1] = translate_1.values[1] 
        }
        
        
        endShape(CLOSE);

    }
}

