class LinearAlgebra {

    transpose(a) {

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


    //MÉTODO SOLVE
    solve(a) {

        //triangular inferior
        let c = this.gauss(a).matrix;

        //triangular superior
        for(let j = c.cols - 1; j >= 2; j--) {
            for(let i = j - 1; i >= 1; i--) {
                let k = (-1 * c.get(i, j)) / c.get(j, j);
                this.multiplyRowByScalarAndPulsRow(c, j, k, i)
            }
        }


        //diagonal principal = 1
        for(let j = 1; j <= c.cols - 1; j++) {
            this.multiplyRowByScalar(c, j, 1 / c.get(j, j));
        }

        let vec = new Vector(c.rows)
        for(let i = 1; i <= vec.size; i++) {
            vec.set(i, c.get(i, c.cols))
        }
        return vec;

    }


    //MÉTODO RESOLUÇÃO DO DETERMINANTE
    det(a) {

        let resp = this.gauss(a);
        let det = resp.coef;

        for(let i = 1; i <= resp.matrix.rows; i++) {
            det *= resp.matrix.get(i, i);
        }
        return det;
    }


    //MÉTODO GAUSS
    gauss(a) {

        //let c = new Matrix(a.rows, a.cols, a.values.slice());

        let resp = {
            matrix: new Matrix(a.rows, a.cols, a.values.slice()),
            coef: 1
        }

        for(let j = 1; j <= resp.matrix.rows; j++) {
            for(let i = j + 1; i <= resp.matrix.rows; i++) {

                if (resp.matrix.get(j, j) == 0) {
                    for (let k = j + 1; k <= resp.matrix.rows; i++) {
                        if (resp.matrix.get(k, j) != 0) {
                            this.changeRows(resp.matrix, j, k);
                            resp.coef *= -1;
                            break;
                        }
                    }
                }


                let k = (-1 * resp.matrix.get(i, j)) / resp.matrix.get(j, j);
                this.multiplyRowByScalarAndPulsRow(resp.matrix, j, k, i);                


            }
        }

        return resp;

    }


    //MÉTODO MUDANÇA DE LINHAS
    changeRows(a, ei, ej) {
        for(let j = 1; j <= a.cols; j++) {
            let aux = a.get(ei, j);
            a.set(ei, j, a.get(ej, j));
            a.set(ej, j, aux);
        }
    }


    //MÉTODO PARA MÚLTIPLICAR LINHAS POR UM NÚMERO
    multiplyRowByScalar(a, ei, k) {
        for(let j = 1; j <= a.cols; j++) {
            a.set(ei, j, k * a.get(ei, j));
        }
    }


    //MÉTODO PARA MÚLTIPLICAR LINHAS POR ESCALAR E SOMAR LINHA
    multiplyRowByScalarAndPulsRow(a, ei, k, ej) {
        for(let j = 1; j <= a.cols; j++) {
            a.set(ej, j, k * a.get(ei, j) + a.get(ej, j));
        }
    }

}