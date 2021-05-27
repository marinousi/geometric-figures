class LinearAlgebra {

    transposition(a) {

        let c;
        
        if (a instanceof Vector) {
            c = new Vector(a.size);
            c.rows = a.cols;
            c.cols = a.rows;

            for (let i = 1; i <= c.size; i++) {
                c.set(i, a.get(i));
            }
        } else if (a instanceof Matrix) {
            c = new Matrix(a.cols, a.rows);
            for(let i = 1; i <= c.rows; i++) {
            
                for(let j = 1; j <= c.cols; j++) {
                
                    c.set(i, j, a.get(j, i));
                
                }
            
            }
        } else {
            throw "O parâmetro colocado não é um objeto tipo vetor nem matriz"
        }
        
        return c;
    
    }


    //MÉTODO PLUS
    plus(a, b) {

        if(a.rows != b.rows || a.cols != b.cols) {

            throw "As matrizes são incompatíveis";

        }

        let c = new Matrix(a.rows, a.cols);

        for(let i = 1; i <= c.rows; i++) {
            
            for(let j = 1; j <= c.cols; j++) {
            
                c.set(i, j, a.get(i, j) + b.get(i, j));
            
            }
        
        }

        return c;

    }


    //MÉTODO TIMES
    times(a, b) {
        let c = new Matrix(b.rows, b.cols);

        if(typeof a == "number") {
            
            for(let i = 1; i <= c.rows; i++) {
            
                for(let j = 1; j <= c.cols; j++) {
                
                    c.set(i, j, a * b.get(i, j));
                
                }
            
            }
        } else if (typeof a == "object" && a instanceof Matrix) {
            for(let i = 1; i <= c.rows; i++) {
            
                for(let j = 1; j <= c.cols; j++) {
                
                    c.set(i, j, a.get(i, j) * b.get(i, j));
                
                }
            
            }
        } else {

            throw "Apenas matrizes e escalares podem ser o parâmetro para 'a'"

        }

        return c;

    }


    //MÉTODO DIV
    div(a, b) {
        let c = new Matrix(a.rows, a.cols);

        for(let i = 1; i <= c.rows; i++) {
            
            for(let j = 1; j <= c.cols; j++) {
            
                c.set(i, j, a.get(i, j) / b.get(i, j));
            
            }
        
        }

        return c;

    }


    dot(a, b) {
        let c = new Matrix(a.rows, b.cols);

        for(let i = 1; i <= a.rows; i++) {
            
            for(let j = 1; j <= b.cols; j++) {

                for(let k = 1; k <= a.cols;k++) {

                    c.set(i, j, a.get(i, k) * b.get(k, j) + c.get(i, j));

                }
            
            }
        
        }

        return c;

    }


}