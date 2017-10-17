var m = ARRAYFAQ;
lista(m);
function AtListaGrupo(e){
  var grupo = $('#grupo').val();
  var desc = $('#desc').val();
  var faq = $('#faq').val();
  if(grupo || desc || faq){
    lista(m, {Filtro: {"grupo": grupo, "desc": desc, "faq": faq}});
  }else{
    lista(m);
  }
};
