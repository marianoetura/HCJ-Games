var mines = 0
var F = 0


function Play() {
    var n = 0
    n = document.getElementById("nmines").value;
    CreateField()
    PutMines(n);
}


var x = new Array(10);

function CreateField() {
    alert("CreateField Working")
    for (i = 0; i < x.length; i++) {
        x[i] = new Array(10);
        for (j=0;j<10;j++){
            x[i][j]=0;
        }
      }
      console.log(x)
}

function PutMines(n) {
    mines = 0;
    for (i=0; i<n; i++) {
        var minex = Math.trunc(Math.random()*(10-0)+0);
        var miney = Math.trunc(Math.random()*(10-0)+0);
        if(x[minex][miney]==0){
            mines++
        }
        x[minex][miney]=1
    }
    console.log(x)
    //alert("?")
}

var MSTcounter = 0
function MSTouch(id){

    var splitted = id.split(".");
    var i = splitted[0];
    var j = splitted[1];
    var count = 0;
    if (i=="10"||i=="-1"||j=="10"||j=="-1"){
        return
    }


    if (x[i][j]===1){
        document.getElementById(id).textContent="X";
        document.getElementById(id).style.backgroundColor="orange";
        if(F==0){
            F++
            alert("Perdiste Capoeira")
            MSLCDTM()
        }
        document.getElementById("MS").style.backgroundImage="url(https://media2.giphy.com/media/urp8cVywl1Sk8/giphy.gif)";
    } else {
        var elvalue = document.getElementById(id).backgroundColor;
        if (elvalue != "gray") {
            MSTcounter++
        }
        if (MSTcounter == (100-mines)){
            if (F==0){
            alert("WINNER!")
            document.getElementById("MS").style.backgroundImage="url(https://media1.tenor.com/images/45daec385fa74a2163a5a1336f1f3e47/tenor.gif?itemid=7856204)"
        }
        }
        i=parseInt(i)
        j=parseInt(j)
        if (i!=0&&i!=9&&j!==0&&j!=9){
            if (x[i+1][j+1]==1){
                count++
            }
            if (x[i-1][j+1]==1){
                count++
            }
            if (x[i+1][j-1]==1){
                count++
            }
            if (x[i-1][j-1]==1){
                count++
            }
            if (x[i+1][j]==1){
                count++
            }
            if (x[i-1][j]==1){
                count++
            }
            if (x[i][j+1]==1){
                count++
            }
            if (x[i][j-1]==1){
                count++
            }
        } 

        //Edges
        
        if (i==0&&j!=0&&j!=9){
            if (x[i+1][j+1]==1){
                count++
            }
            if (x[i+1][j-1]==1){
                count++
            }
            if (x[i+1][j]==1){
                count++
            }
            if (x[i][j+1]==1){
                count++
            }
            if (x[i][j-1]==1){
                count++
            }
        }
        
        if (i==9&&j!=0&&j!=9){
            if (x[i-1][j+1]==1){
                count++
            }
            if (x[i-1][j-1]==1){
                count++
            }
            if (x[i-1][j]==1){
                count++
            }
            if (x[i][j+1]==1){
                count++
            }
            if (x[i][j-1]==1){
                count++
            }
        }

        if (j==0&&i!=0&&i!=9){
            if (x[i+1][j+1]==1){
                count++
            }
            if (x[i-1][j+1]==1){
                count++
            }
            if (x[i+1][j]==1){
                count++
            }
            if (x[i-1][j]==1){
                count++
            }
            if (x[i][j+1]==1){
                count++
            }
        }

        if (j==9&&i!=0&&i!=9){
            if (x[i+1][j-1]==1){
                count++
            }
            if (x[i-1][j-1]==1){
                count++
            }
            if (x[i+1][j]==1){
                count++
            }
            if (x[i-1][j]==1){
                count++
            }
            if (x[i][j-1]==1){
                count++
            }
        }

        //Corners
        
        if(i==0&&j==0){
            if (x[i+1][j+1]==1){
                count++
            }
            if (x[i+1][j]==1){
                count++
            }
            if (x[i][j+1]==1){
                count++
            }
        }

        if(i==9&&j==9){
            if (x[i-1][j-1]==1){
                count++
            }
            if (x[i-1][j]==1){
                count++
            }
            if (x[i][j-1]==1){
                count++
            }
        }

        if(i==9&&j==0){
            if (x[i-1][j+1]==1){
                count++
            }
            if (x[i-1][j]==1){
                count++
            }
            if (x[i][j+1]==1){
                count++
            }
        }

        if(i==0&&j==9){
            if (x[i+1][j-1]==1){
                count++
            }
            if (x[i+1][j]==1){
                count++
            }
            if (x[i][j-1]==1){
                count++
            }
        }
    document.getElementById(id).textContent=count;
    document.getElementById(id).style.backgroundColor="gray";


    // if (count==0){
    //     var y = i
    //     var z = j
    //     k=y+1
    //     l=z+1
    //     m=y-1
    //     n=z-1
    //     MSTouch(y.toString()+"."+l.toString())
    //     MSTouch(k.toString()+"."+z.toString())
    //     MSTouch(y.toString()+"."+n.toString())
    //     MSTouch(m.toString()+"."+z.toString())
    // }
    //alert("listo el count:"+count);
    }
}

function MSLCDTM(){
    for (i=0;i<10;i++) {
        for (j=0;j<10;j++){
            i = i.toString()
            j = j.toString()
            MSTouch(i+"."+j)
        }
    }  
}