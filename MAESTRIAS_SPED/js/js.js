var m;
$.getScript( "./js/bd.js" ).done(function( script, textStatus ) {
    console.log( textStatus );
    console.log(script);
    m = ARRAYFAQ;
  });
lista(m);
function AtListaGrupo(grupo=""){
  if(!$.isEmptyObject(grupo.value)){
    lista(m, {"grupo": grupo});
  }else{
    lista(m);
  }
};
