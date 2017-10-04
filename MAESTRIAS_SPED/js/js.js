var m = new Maestria();

function lista(query = {}){
  var html = '';
  $("#tableFaq tr, td").remove();
  if(!$.isEmptyObject(query)){
    $.each(query, function(i, d){
      var value = d.value;
      var grupo = d.grupo;
      $.each(ARRAYFAQ, function(i, c) {
        var cor = setCor(c.nivel);
        if(grupo == "faq"){
          if((c[grupo].toString()).indexOf(value.toString()) != -1){
            html += "<tr style='background-color:"+cor+"'>";
            html += "<td id='nivel' >"+c.nivel+"</td>";
            html += "<td id='grupo'>"+c.grupo+"</td>";
            html += "<td id='faq'>"+c.faq+"</td>";
            html += "<td id='desc'>"+c.desc+"</td>";
            html += "<td id='tmfaq'>"+c.tmfaq+"</td>";
            html += "</tr>";
          }
        }else{
          if((c[grupo]).toLowerCase().indexOf(value.toLowerCase()) != -1){
            html += "<tr style='background-color:"+cor+"'>";
            html += "<td id='nivel'>"+c.nivel+"</td>";
            html += "<td id='grupo'>"+c.grupo+"</td>";
            html += "<td id='faq'>"+c.faq+"</td>";
            html += "<td id='desc'>"+c.desc+"</td>";
            html += "<td id='tmfaq'>"+c.tmfaq+"</td>";
            html += "</tr>";
          }
        }
      });
    });
    $('#tableFaq').append(html);
  } else{
    $.each(ARRAYFAQ, function(i, c) {
      var cor = setCor(c.nivel);
      html += "<tr style='background-color:"+cor+"'>";
      html += "<td id='nivel'>"+c.nivel+"</td>";
      html += "<td id='grupo'>"+c.grupo+"</td>";
      html += "<td id='faq'>"+c.faq+"</td>";
      html += "<td id='desc'>"+c.desc+"</td>";
      html += "<td id='tmfaq'>"+c.tmfaq+"</td>";
      html += "</tr>";
    });
    $('#tableFaq').append(html);
  }
};
lista();
function AtListaGrupo(grupo){
  if(!$.isEmptyObject(grupo.value)){
    lista({"grupo": grupo});
  }else{
    lista();
  }

};
function setCor(c){
  var cor;
  switch(c){
    case 1:
      cor = "#d5ffe0";
      break;
    case 2:
      cor = "#d5e2ff";
      break;
    case 3:
      cor = "#f4ce42";
      break;
    case 4:
      cor = "#c7dba7";
      break;
    default:
      cor = '';
    break;
  }
  return cor;
}
