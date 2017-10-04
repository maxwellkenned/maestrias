$.getScript( "./js/bd.js" ).done(function( script, textStatus ) {
    console.log( textStatus );
  });
var m = ARRAYFAQ;
lista(m);
function AtListaGrupo(grupo=""){
  if(!$.isEmptyObject(grupo.value)){
    lista(m, {"grupo": grupo});
  }else{
    lista(m);
  }
};
