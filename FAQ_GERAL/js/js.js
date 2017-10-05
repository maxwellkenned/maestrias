var m = ARRAYFAQ;
lista(m);
function AtListaGrupo(grupo=""){
  if(!$.isEmptyObject(grupo.value)){
    lista(m, {"grupo": grupo});
  }else{
    lista(m);
  }
};
