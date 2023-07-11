<template>
  <v-container>
  
    <v-row>      
    <v-card-title >
      <h1>
        Welcome to Crazy Monkey
        Clothing store

      </h1>
    </v-card-title >
    <v-row>
      <v-col>
        <img src="https://monkeystore.be/cdn/shop/files/3003_1000x.png?v=1687618616">
      </v-col>
    </v-row>
          <v-card-text>
            <br>
            <p>
              A vida é para quem tem estilo!
            </p>
            <p>
              <br>
              " Passo a passo. Não consigo pensar em nenhum outro modo de se realizar algo."
            </p>
            <div class="text-xs-right">
              <em><small>&mdash; Michael Jordan </small></em>
            </div>
            
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn x-large block color="#686A6C" to="/usuario/loginusuario"> Login </v-btn>
          </v-card-actions>
      </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  layout:'usuario',
}
</script>
