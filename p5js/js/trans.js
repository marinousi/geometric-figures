class Transformations{

    transpose(Matrix) {
        let la = new LinearAlgebra
        return la.transposition(Matrix)
    }

    //Translação
    translate2D (vector,dx,dy){

        let la = new LinearAlgebra
        let Vet = new Vector(3,[vector.values[0],vector.values[1],1])
        let Translate_Mat = new Matrix(3,3, [1,0,dx,0,1,dy,0,0,1])
        return la.dot(Translate_Mat,Vet)
        
    }

    translate3D (vector,dx,dy,dz){

        let la = new LinearAlgebra
        let Vet = new Vector(4,[vector.values[0],vector.values[1],vector.values[2],1])
        let Translate_Mat = new Matrix(4,4, [1,0,0,dx,0,1,0,dy,0,0,1,dz,0,0,0,1])
        return la.dot(Translate_Mat,Vet)
        }

    //Rotacao
    rotation2D (vector,angle){
        let la = new LinearAlgebra
        let rad = angle * Math.PI / 180
        let AnguloTeta = new Matrix(2,2, [Math.cos(rad),-Math.sin(rad),Math.sin(rad),Math.cos(rad)])

        return la.dot(AnguloTeta,vector)

    }

    rotation3D_X (vector,angle){
        let la = new LinearAlgebra
        let rad = angle * Math.PI / 180
        let AnguloTeta = new Matrix(3,3, [1,0,0,0,Math.cos(rad),Math.sin(rad),0,-Math.sin(rad),Math.cos(rad)])

        return la.dot(AnguloTeta,vector)

    }

    rotation3D_Y (vector,angle){
        let la = new LinearAlgebra
        let rad = angle * Math.PI / 180
        let AnguloTeta = new Matrix(3,3, [Math.cos(rad),0,-Math.sin(rad),0,1,0,Math.sin(rad),0,Math.cos(rad)])

        return la.dot(AnguloTeta,vector)

    }

    rotation3D_Z (vector,angle){
        let la = new LinearAlgebra
        let rad = angle * Math.PI / 180
        let AnguloTeta = new Matrix(3,3, [Math.cos(rad),Math.sin(rad),0,-Math.sin(rad),Math.cos(rad),0,0,0,1])

        return la.dot(AnguloTeta,vector)

    }

}