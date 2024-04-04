
let i = 1, j = localStorage.getItem("cont");
i = i + j;

function registraIncidencia (x, y){
    if (i === 1){
        let incidencia = [[0,0,0],[0,0,0],[0,0,0]];
        localStorage.setItem("incid", JSON.stringify(incidencia));
    }
    let incid = JSON.parse(localStorage.getItem("incid"));
    incid [x][y] ++;
    localStorage.setItem("incid",JSON.stringify(incid));
    localStorage.setItem("cont", 10);
}

function personalizaAnuncio (x){
    let incidencia = JSON.parse(localStorage.getItem("incid"));
    let preferencia = incidencia [x][2] - incidencia [x][1] - incidencia[x][0];
    if (preferencia >= 0){
        return "3.";
    }
    if (preferencia < 0){
        if (incidencia [x][1] >= incidencia[x][0]){
            return "2.";
        }
        else{
            return "1.";
        }
    }
}

export { registraIncidencia, personalizaAnuncio };