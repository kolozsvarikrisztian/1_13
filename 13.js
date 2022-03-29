osztaly = ['Barta Domonkos','Hegyesi Zsolt','Kása István Patrik','Kasza Tünde Napsugár','Kiss Lajos Bertalan','Kolozsvári László Krisztián','Nagy Tibor',
'Panyik Szabolcs','Rostás Barbara','Oláh István','Kalász Ádám','Márki-Kira Péter','Tóth Tamás Levente'];

function feltolt(){
    for(i = 0; i < osztaly.length; i++){
        var ujelem = document.createElement("li");
        var ujszoveg = document.createTextNode(osztaly[i]);
        ujelem.appendChild(ujszoveg);
        // ujelem.setAttribute("onclick", "this.style.display = 'none';")
        ujelem.onclick = function() { elrejt(this)};
        document.getElementById("nevsor").appendChild(ujelem);
    }    
}

function elrejt(elem){
    elem.style.display = "none";
}