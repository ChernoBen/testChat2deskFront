<template>
  <b-container class="bv-example-row">
    <br />
    <div>
      <hr />
      <ul class="list-unstyled">
        <b-media tag="li">
          <template #aside>
            <b-img
              blank
              blank-color="#abc"
              width="64"
              alt="placeholder"
            ></b-img>
          </template>
          <h5 class="mt-0 mb-1">/signin</h5>
          <p class="mb-0">
            Rota para cadastro método POST. <strong>Entrada: </strong>
            { "name":"joão", "email":"joão@hotmail.com", "password":"123456",
            "birth":"30/12/1995", "documento":"420.997.800-05" }
            <strong>Saida: </strong> { "message": "Usuario cadastrado com
            sucesso", "status": 1 }
          </p>
        </b-media>
<hr>
        <b-media tag="li" class="my-4">
          <template #aside>
            <b-img
              blank
              blank-color="#cba"
              width="64"
              alt="placeholder"
              variant="success"
            ></b-img>
          </template>

          <h5 class="mt-0 mb-1">/login</h5>
          <p class="mb-0">
            Rota para obter token de acesso método POST
            <strong>Entrada: </strong> { "email":"nome@email",
            "password":"123456" }
            <strong>Saida: </strong>{token:!@##$$$1TOKEN723883}
          </p>
        </b-media>
<hr>
        <b-media tag="li">
          <template #aside>
            <b-img
              blank
              blank-color="#bac"
              width="64"
              alt="placeholder"
            ></b-img>
          </template>

          <h5 class="mt-0 mb-1">/recover</h5>
          <p class="mb-0">
            Rota para obter token de alteração de senha metodo POST.
            <strong>Entrada: </strong> { "email":"email@email.com" }
            <strong>Saída: </strong>{ "response":
            123token-de-recuperacao-de-senha456 }
          </p>
        </b-media>
        <br>
        <hr>
        <b-media tag="li">
          <template #aside>
            <b-img
              blank
              blank-color="#bac"
              width="64"
              alt="placeholder"
            ></b-img>
          </template>

          <h5 class="mt-0 mb-1">/changePass</h5>
          <p class="mb-0">
            Rota para alteração de senha metodo POST.
            <strong>Entrada: </strong> { "email":"email@email.com" }
            <strong>Saída: </strong>{ "message": "senha alterada com sucesso" }
          </p>
        </b-media>
        <br>
        <hr>
        <b-media tag="li">
          <template #aside>
            <b-img
              blank
              blank-color="#bac"
              width="64"
              alt="placeholder"
            ></b-img>
          </template>

          <h5 class="mt-0 mb-1">/users</h5>
          <p class="mb-0">
            Rota para alteração de senha metodo POST.
            <strong>Entrada: </strong> { "email":"email@email.com" }
            <strong>Saída: </strong>{ "message": "senha alterada com sucesso" }
          </p>
        </b-media>
      </ul>
    </div>
  </b-container>
</template>

