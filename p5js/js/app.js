let r;
let l;
let t;
let c;
let pa;
let pla;
let py;
let sp;

let escolha;
escolha = parseInt(prompt("Digite '3' para mostrar as figuras em 3D, ou '2' para mostrar as figuras em 2D"));

while(escolha != 2 && escolha != 3) {
    escolha = parseInt(prompt("Você digitou o número errado! \n Digite '3' para mostrar as figuras em 3D, ou '2' para mostrar as figuras em 2D")); 
}
if (escolha == 3) {
    function setup() {
        createCanvas(640,480, WEBGL)
        createEasyCam();
        pa = new Parallelogram(50, -200, 0, 50, 50, 50);
        pla = new Plane(150, -50, 0, 50, 50, 50)
        py = new Pyramid(200, 50, 0, 50, 50, 50)
        sp = new Sphere(10, 100, 0, 55, 40, 40)
    }
    
    
    function draw() {
        background(100)

        //TRANSLATE E ROTATION        
        // sp.rotation_Y(5, 5, 5)
        // sp.rotation_X(5, 5, 5)
        // sp.rotation_Z(5, 5, 5)
        // sp.translate(10,10,0)

        // pa.rotation_Y(5, 5, 5)
        // pa.rotation_X(5, 5, 5)
        // pa.rotation_Z(5, 5, 5)
        // pa.translate(10,10,0)

        // pla.rotation_Y(5, 5, 5)
        // pla.rotation_X(5, 5, 5)
        // pla.rotation_Z(5, 5, 5)
        // pla.translate(10,10,0)

        // py.rotation_Y(5, 5, 5)
        // py.rotation_X(5, 5, 5)
        // py.rotation_Z(5, 5, 5)
        // py.translate(10,10,0)

        

        pa.draw()
        pla.draw()
        py.draw()
        sp.draw()
    }
} else if (escolha == 2) {
    function setup() {
        //Coloquei a EasyCam aqui para ficar mais fácil de testar o rotation e translate
        createCanvas(640,480) //, WEBGL
        // createEasyCam()
        r = new Rectangle(150, 180, 50, 50);
        l = new Line(60, 10, 50, 50)
        t = new Triangle(120, 0, 50, 50)
        c = new Circle(100, 100, 25, 1000)
        
    }
    
    function draw() {
        background(52)
        
        //ROTATION
        // r.rotation(45)
        // l.rotation(20)
        // t.rotation(45)
        // c.rotation(20)

        //TRANSLATION
        // r.translate(10,0)
        // l.translate(10,0)
        // t.translate(10,0)
        // c.translate(10,0)
        
        r.setColor('#ff0000')
        r.draw()
        l.setColor('#ff0000')
        l.draw()
        t.setColor('#ff0000')
        t.draw()
        c.setColor('#ff0000')
        c.draw()
    }
} 
