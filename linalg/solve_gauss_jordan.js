const fileSelector = document.getElementById("file-selector");

fileSelector.addEventListener("change", function(event) {
    const files = event.target.files;

    for(var i = 0; i < files.length; i++) {
        let file = files.item(i);

        if(file) {
            let reader = new FileReader(file);
            let firstLine = true;

            reader.onload = function() {

                let lines = reader.result.split
                ("\n");
                let matrix;

                for(let j = 0; j < lines.length; j++) {
                    if(!lines[j].startsWith("%") && lines[j] != "") {

                        let aux = lines[j].split(" ");

                        if(firstLine) {
                            matrix = new Matrix (parseInt(aux[0]), parseInt(aux[1]));
                            firstLine = false;
                        } else {
                            matrix.set(parseInt(aux[0]), parseInt(aux[1]), parseInt(aux[2]));
                        }

                    }
                }

                let la = new LinearAlgebra();

                let start = Date.now();
                let result = la.solve(matrix);
                let stop = Date.now();

                let elapsedTime = stop - start;


                console.log(` [FILE: ${file.name}, ROWS: ${matrix.rows}] Elapsed Time: ${elapsedTime} ms`);

            }

            reader.readAsText(file);
        }
    }
})