var m = ARRAYFAQ;
lista(m);
AgruparSelection(m, "grupo");
AgruparSelection(m, "nivel");
function AtListaGrupo(e){
  var nivel = $("#nivel").val();
  var grupo = $('#grupo').val();
  var desc = $('#desc').val();
  var faq = $('#faq').val();
  if(nivel || grupo || desc || faq){
    lista(m, {Filtro: {"nivel": nivel, "grupo": grupo, "desc": desc, "faq": faq}});
  }else{
    lista(m);
  }
};
