
<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="5">
          <h1 style="font-size: 50px; margin-top: 45%; margin-left: 20%">
            <span
              style="
                font-family: 'Courier New', Courier, monospace;
                font-size: 21px;
                color: #5d5d5d;
              "
            >
              <p>O ministerio da saude ADVERTE <span class="mdi mdi-alert-box"></span></p>
              <p style="margin-top: -20px;">"falta de novos looks deprime." <span class="mdi mdi-basketball"></span></p>
              
            </span>
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
                  <v-btn href="/admin/category" block color="#7D5BA6" 
                    >Entrar</v-btn
                  >
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
  layout: 'Login',

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