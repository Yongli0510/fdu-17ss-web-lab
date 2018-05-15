var tableList = new Array();
function changeDiv() {
    var div = document.getElementById("div");
    switch (document.getElementById("select1").value){
        case "select one":
            div.innerHTML = "";
            break;
        case "create table":
            div.innerHTML = "<p><input type='text' placeholder='Table Name' id='Table Name'><input type='number' id='Column Number' placeholder='Columns Number' onchange='showAttr()'></p><p id='p1'></p>";
            break;
        case "add row":
            div.innerHTML = "<p>";
            for(var j = 0;j < getSelectedTable().AttributeList.length;j++){
                div.innerHTML += "<input type='text' name='Attribute' placeholder="+getSelectedTable().AttributeList[j]+">";
            }
            div.innerHTML += "</p><button type='button' onclick='commit()'>commit</button>";
            break;
        case "delete row":
            div.innerHTML = "<p>";
            for(var k = 0;k < getSelectedTable().AttributeList.length;k++){
                div.innerHTML += "<input type='text' name='Deleted Attribute' placeholder="+getSelectedTable().AttributeList[k]+">";
            }
            div.innerHTML += "</p><button type='button' onclick='commit()'>commit</button>";
            break;
        case "delete table":
            div.innerHTML = "<p>WARNING: You cannot undo this action!</p><button type='button' onclick='commit()'>commit</button>";
    }

}
function showAttr() {
    var p1 = document.getElementById("p1");
    p1.innerHTML = "";
    var i = document.getElementById("Column Number").value;
    if(i > 0){
        for (var j = 0;j < i;j++){
            p1.innerHTML += "<input type='text' placeholder='Attribute' name='AttributeName'>";
        }
        p1.innerHTML += "<br><button type='button' onclick='commit()'>commit</button>";
    }
}
function commit() {
    var select2 = document.getElementById("select2");
    switch (document.getElementById("select1").value){
        case "create table":
            var attributeList = new Array(document.getElementsByName('AttributeName').length);
            for(var j = 0;j < attributeList.length;j++){
                attributeList[j] = document.getElementsByName('AttributeName')[j].value;
            }
            var attribute = new Array(attributeList.length);
            for(var a = 0;a < attribute.length;a++){
                attribute[a] = new Array();
            }
            var table = {TableName:document.getElementById("Table Name").value,AttributeList:attributeList,Attribute:attribute };
            tableList.push(table);
            var x = document.createElement("option");
            x.text = document.getElementById("Table Name").value;
            select2.add(x,null);
            x.selected = true;
            showThead();
            break;
        case "add row":
            for(var b = 0;b < document.getElementsByName("Attribute").length;b++){
                getSelectedTable().Attribute[b].push(document.getElementsByName("Attribute")[b].value);
            }
            changeTable();
            break;
        case "delete row":
            for(var c = 0;c < getSelectedTable().Attribute[0].length;c++){
                var index = 0;
                for(var d = 0;d < getSelectedTable().AttributeList.length;d++){
                    if(document.getElementsByName("Deleted Attribute")[d].value !== getSelectedTable().Attribute[d][c]&&document.getElementsByName("Deleted Attribute")[d].value.length !== 0){
                        break;
                    }
                    index++;
                }
                if(index === getSelectedTable().AttributeList.length){
                    for(var e = 0;e < getSelectedTable().AttributeList.length;e++){
                        getSelectedTable().Attribute[e].splice(c,1);
                    }
                    c = c-1;
                }
            }
            changeTable();
            break;
        case "delete table":
            if(document.getElementById("select2").options.selectedIndex > 0){
                tableList.splice(document.getElementById("select2").options.selectedIndex - 1,1);
                document.getElementById("select2").remove(document.getElementById("select2").options.selectedIndex);
            }
            if(tableList.length > 0){
                document.getElementById("select2").options[1].selected = true;
                changeTable();
            }
            else {
                document.getElementById("select2").options[0].selected = true;
                changeTable();
            }
    }
}
function changeTable() {
    showThead();
    var table = document.getElementById("table");
    for(var i = 0;i < getSelectedTable().Attribute[0].length;i++){
        table.innerHTML += "<tr class='tr'></tr>";
        for(var j = 0;j < getSelectedTable().AttributeList.length;j++){
            document.getElementsByClassName("tr")[i].innerHTML += "<td>"+getSelectedTable().Attribute[j][i]+"</td>";
        }
    }
    for(var k = 0;k < document.getElementsByClassName("tr").length;k++){
        if(k % 2 === 0)
            document.getElementsByClassName("tr")[k].style.background = "white";
        else
            document.getElementsByClassName("tr")[k].style.background = "lightgrey";
    }

}
function changeDivAgain() {
    var div = document.getElementById("div");
    switch (document.getElementById("select1").value){
        case "add row":
            div.innerHTML = "<p>";
            for(var j = 0;j < getSelectedTable().AttributeList.length;j++){
                div.innerHTML += "<input type='text' name='Attribute' placeholder="+getSelectedTable().AttributeList[j]+">";
            }
            div.innerHTML += "</p><button type='button' onclick='commit()'>commit</button>";
            break;
        case "delete row":
            div.innerHTML = "<p>";
            for(var k = 0;k < getSelectedTable().AttributeList.length;k++){
                div.innerHTML += "<input type='text' name='Deleted Attribute' placeholder="+getSelectedTable().AttributeList[k]+">";
            }
            div.innerHTML += "</p><button type='button' onclick='commit()'>commit</button>";
            break;
    }
}
function getSelectedTable() {
    if(document.getElementById("select2").options.selectedIndex === 0)
        return null;
    else
        return tableList[document.getElementById("select2").options.selectedIndex - 1];
}
function showThead() {
    var table = document.getElementById("table");
    table.innerHTML = "<tr id='thead'></tr>";
    for(var i = 0;i < getSelectedTable().AttributeList.length;i++) {
        document.getElementById("thead").innerHTML += "<th>"+getSelectedTable().AttributeList[i]+"</th>";
    }
}
