$(function(){

   $.ajax(
       {url: "jsontermekek.json", 
       success: function (result) {
               console.log(result);
               
               tomb = result;
               
               ajaxtablazat(tomb);
   }});
 
   function ajaxtablazat(tomb) {
   
    console.log(tomb);
    $("article").append("<table>");
    
    var btn = document.createElement('input');
    btn.type = "button";
    btn.className = "btn";

    var txt =
      "<tr id='fejlec'><th>Terméknév</th><th>Leírás</th><th>Készlet</th><th>Ár</th><th>Módosít</th></tr>";
      tomb.forEach(function(value, index){
        txt += "<tr id='" + index + "'>";
        for (let item in value) {
          txt += "<td>" + value[item] + "</td>";
        }
        txt += "</tr>";
      });
    $("article table").html(txt);
    $("tr").on("click",  etelKivalasztas);
    $("tr").hover(function () {
     
    });
  }



//     $(document).ready(function(){
//       $.getJSON("jsontermekek.json" , function(data){
//           var termekekData = '';
//           $.each(data , function(key,value){
//               termekekData += '<tr>';
//               termekekData += '<td>'+value.termeknev+'</td>';
//               termekekData += '<td>'+value.keszlet+'</td>';
//               termekekData += '<td>'+value.leiras+'</td>';
//               termekekData += '<td>'+value.ar+'</td>';
//           });
//           $('#termekekTablazat').append(termekekData);
    
//       });
      

// });

});


