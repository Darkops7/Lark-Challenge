function makeTable() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var Jgrocery = response; //parsed json
            var output = "";
    
            output+=`<tr> 
            <th style="width : 100px"> Serial Num </th>
            <th style = "width: 180"> Name </th>
            <th style= "width : 150"> Quantity </th>
            <th style = "width: 100"> Unit</th>
            <th syle= "width: 150"> Department</th>
            <th style = "width: 180"> Notes </th>
            </tr>`
            for (var i = 0; i < Jgrocery.length; i++) {
            //     output += `
            //     <tr>
            //     <td>${g[i].SerialNumber}</td>
            //     <td>${g[i].Name}</td>
            //     <td>${g[i].Quantity}</td>
            //     <td>${g[i].Unit}</td>
            //     <td>${g[i].Department}</td>
            //     <td>${g[i].Notes}</td>
            //   </tr>`;
            output +=  `<tr>
                                <td style="width :100px">${Jgrocery[i].SlNo}</td>
                                <td style="width :180px">${Jgrocery[i].Name}</td>
                                <td style="width :150px">${Jgrocery[i].Quantity}</td>
                                <td style="width :100px">${Jgrocery[i].Unit}</td>
                                <td style="width :150px">${Jgrocery[i].Department}</td>
                                <td style="width :180px" >${Jgrocery[i].Notes}</td>
                            </tr>`;
            }
            document.getElementsByClassName("list")[0].innerHTML = output;
        }
    };
    xhttp.open("GET", "grocery.json", true);
    xhttp.send();
}