
var btn = document.getElementById('btnAdd')
btn.addEventListener('click', addLine);

// var t = "my " +  "country " + "name " + "is " + "PK";
var i = 1;
var a = "my ";
a = a + "country";
a = a + "name ";
a = a + "is ";
a = a + "pakistan";

var x = 'my ';
var y = "country";
var statement = x + y;

console.log(statement);

function addLine() {

    var tbody = document.getElementById('datatable');
    var str = "<tr><td>"+ i +"</td><td>Ali</td><td>test@test.com</td><td>01234rree</td></tr>";
    console.log(i++);
    

    tbody.innerHTML = tbody.innerHTML + str;
    // tbody.append(str);
}

// var str = "<tr><td>Ali</td><td>test@test.com</td><td>01234rree</td></tr>";
// str = str + "<tr><td>Ali</td><td>test@test.com</td><td>01234rree</td></tr>";
// str = str + "<tr><td>Ali</td><td>test@test.com</td><td>01234rree</td></tr>";
// str = str + "<tr><td>Ali</td><td>test@test.com</td><td>01234rree</td></tr>";
// str = str + "<tr><td>Ali</td><td>test@test.com</td><td>01234rree</td></tr>";
// str = str + "<tr><td>Ali</td><td>test@test.com</td><td>01234rree</td></tr>";

// var tbody = document.getElementById('datatable');
// tbody.innerHTML = str;



