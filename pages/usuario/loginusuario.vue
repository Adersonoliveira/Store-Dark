<!-- eslint-disable vue/attributes-order -->
<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="5">
          <h1 style="font-size: 50px; margin-top: 45%; margin-left: 20%">
            <strong
              style="
                font-family: 'Courier New', Courier, monospace;
                color: #1c1d1a;
              "
            >
            Welcome to Crazy Monkey
            clothing store
              <span class="mdi mdi-copyleft"></span>
            </strong>
          </h1>
        </v-col>
        <v-col>
          <v-container
            class="elevation-10 rounded-xl"
            style="
              border: 2px solid #00897b;
              background-color: #a0a0a0;
              border-radius: 1%;
              width: 70%;
              margin-top: 13%;
              margin-left: 7%;
              font-family: 'Courier New', Courier, monospace;
            "
          >
            <v-container style="padding: 8%; background-color: #909592">
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="users.username"
                    class="text-input-black"
                    label="Username"
                    placeholder="Username"
                    filled
                    rounded
                    dense
                    required
                    light
                    color="#00897B"
                    prepend-inner-icon="mdi-email"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    class="text-input-blue"
                    label="Senha"
                    v-model="users.passwordHash"
                    style="margin-top: -8%"
                    filled
                    rounded
                    dense
                    light
                    placeholder="Senha"
                    color="#00897B"
                    prepend-inner-icon="mdi-lock"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col style="margin-top: -10%">
                  <a
                    href="/public/login/forget"
                    class=""
                    style="margin-top: -10%; color: rgb(1, 1, 1); margin-left: 10px;"
                    >Esqueci minha senha</a
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-btn x-large block color="#7D5BA6" 
                    >Entrar</v-btn
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <p
                    style="
                      margin-top: -5%;
                      color: black;
                      text-align: center;
                      font-size: 90%;
                      margin: auto;
                    "
                  >
                    Não tem uma conta?
                    <strong>
                      <a style="color: rgb(1, 1, 1)" href="/usuario/register"
                        >Registre-se</a
                      >
                    </strong>
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'Users',
  layout: 'usuario',

  data() {
    return {
      valid: false,
      users: {
        username: null,
        cpf: null,
        passwordHash: null,
        role: null,
        name: null,
        phone: null,
        email: null,
      },
      rule: [(v) => !!v || 'Esse campo é obrigatório'],
    }
  },
}
</script>

<style>
.text-input-blue .v-text-field__slot input {
  color: #4a148c !important;
}
</style>