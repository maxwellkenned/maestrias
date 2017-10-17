var colorBW = $("#colorBW");
function lista(bd, query = {}){
  var html = '';
  var ARRAYFAQ = bd;
  $("#tableFaq tr, td").remove();
  if(!$.isEmptyObject(query)){
    $.each(query, function(i, d){
      var grupo = d.grupo;
      var desc = d.desc;
      var faq = d.faq;

      $.each(ARRAYFAQ, function(i, c) {
          if( ((c["grupo"].toLowerCase()).indexOf(grupo.toLowerCase()) != -1) && ((c["desc"].toLowerCase()).indexOf(desc.toLowerCase()) != -1) && ((c["faq"].toString()).indexOf(faq.toString()) != -1)){
            console.log(c);
            html += createHtml(c);
          }
      });
    });
    $('#tableFaq').append(html);
  } else{
    $.each(ARRAYFAQ, function(i, c) {
      html += createHtml(c);
    });
    $('#tableFaq').append(html);
  }
};

function setCor(c){
  var cor;
  switch(c){
    case 0:
      cor = "";
      break;
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
      cor = "";
    break;
  }
  return cor;
}

function createHtml(c){
  var h;
  var cor = colorBW[0].checked?'':setCor(c.nivel);
  h += "<tr style='background-color:"+cor+"'>";
  h += "<td id='nivel'>"+c.nivel+"</td>";
  h += "<td id='grupo'>"+c.grupo+"</td>";
  h += "<td id='faq'>"+c.faq+"</td>";
  h += "<td id='desc'>"+c.desc+"</td>";
  h += "<td id='tmfaq'>"+c.tmfaq+"</td>";
  h += "</tr>";
  return h;
}
