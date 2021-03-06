<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>MAESTRIAS SOFTCOM</title>
    <link type="text/css" rel="stylesheet" href="../css/bootstrap.min.css" />
    <link rel="icon" href="../img/icone.png" sizes="any" type="image/png">
  </head>
  <body>
    <?php include_once("../navbar.php"); ?>
    <head>
      <h1 class="text-center">MAESTRIAS N2</h1>
    </head>
    <div class="row justify-content-end mr-1">
      <div class="col-auto">   </div>
      <div class="col-auto">
        <div class="form-check">
          <label class="form-check-label">
            Black and White
            <input type="checkbox" name="color" value="1" id="colorBW" onchange="AtListaGrupo()">
          </label>
        </div>
      </div>
    </div>
    <div class=" container" >

      <div Id="filtrosPesquisa" class="row justify-content-center mb-3 mt-3 ">
        <div class="col-md-3">
            <select name="pGrupo" id="grupo" class="custom-select col-md-3" onchange="AtListaGrupo()">
              <option value="">Grupo</option>
            </select>
        </div>
        <div class="col-md-3">
            <select name="pNivel" id="nivel" class="custom-select col-md-3" onchange="AtListaGrupo()">
              <option value="">Nível</option>
            </select>
        </div>
        <div class="input-group col-md-3 " >
          <span class="input-group-addon" id="basic-addon1">Descrição</span>
          <input type="text" name="pDesc" id="desc" value="" onkeyup="AtListaGrupo()" class="form-control" placeholder="Descrição" aria-label="Descrição" aria-describedby="basic-addon1">
        </div>
        <div class="input-group col-md-3" >
          <span class="input-group-addon" id="basic-addon1">FAQ</span>
          <input type="text" name="pFaq" id="faq" value="" onkeyup="AtListaGrupo()" class="form-control" placeholder="FAQ" aria-label="FAQ" aria-describedby="basic-addon1">
        </div>
      </div>
      <table class="table table-responsive table-hover table-bordered table-sm table-striped">
        <thead class="thead-default">
          <tr>
            <th>Nivel</th>
            <th>Grupo</th>
            <th>FAQ</th>
            <th>Descrição</th>
            <th>TM FAQ</th>
          </tr>
        </thead>
        <tbody id="tableFaq">
        </tbody>
      </table>
      <footer class="footer mt-5 text-center">Desenvolvido por Maxwell Kenned</footer>
    </div>



    <script type="text/javascript" src="../js/jquery.js"></script>
    <script type="text/javascript" src="../js/popper.js"></script>
    <script type="text/javascript" src="../js/bootstrap.min.js"></script>
    <script type="text/javascript" src="../js/maestria.js"></script>
    <script type="text/javascript" src="js/bd.js"></script>
    <script type="text/javascript" src="../js/js.js"></script>
    <script type="text/javascript" src="js/js.js"></script>

  </body>
</html>
