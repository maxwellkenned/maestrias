var m = new Maestria();

function lista(query = {}){
  var html = '';
  $("#tableFaq tr, td").remove();
  if(!$.isEmptyObject(query)){
    $.each(query, function(i, d){
      var value = d.value;
      var grupo = d.grupo;
      $.each(ARRAYFAQ, function(i, c) {
        if(grupo == "faq"){
          if((c[grupo].toString()).indexOf(value.toString()) != -1){
            html += "<tr>";
            html += "<td id='nivel'>"+c.nivel+"</td>";
            html += "<td id='grupo'>"+c.grupo+"</td>";
            html += "<td id='faq'>"+c.faq+"</td>";
            html += "<td id='desc'>"+c.desc+"</td>";
            html += "<td id='tmfaq'>"+c.tmfaq+"</td>";
            html += "</tr>";
          }
        }else{
          if((c[grupo]).toLowerCase().indexOf(value.toLowerCase()) != -1){
            html += "<tr>";
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
      html += "<tr>";
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
