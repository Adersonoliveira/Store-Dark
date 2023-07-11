<!-- eslint-disable vue/attributes-order -->
<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="1">
          <h >
           CADASTRO
         </h>
          
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
                    v-model="Full_name"
                    class="text-input-black"
                    label="Full_name"
                    placeholder="Full_name"
                    filled
                    rounded
                    dense
                    required
                    light
                    color="#00897B"
                    prepend-inner-icon="mdi-account-circle"
                  ></v-text-field>
                </v-col>
              </v-row>
              
              <v-row>
                <v-col>
                  <v-text-field
                    class="text-input-black"
                    label="Email"
                    style="margin-top: -6%"
                    filled
                    rounded
                    dense
                    light
                    placeholder="Email"
                    color="#00897B"
                    prepend-inner-icon="mdi-email"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    class="text-input-black"
                    label="password"
                    style="margin-top: -6%"
                    filled
                    rounded
                    dense
                    light
                    placeholder="password"
                    color="#00897B"
                    prepend-inner-icon="mdi-lock"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    class="text-input-black"
                    label="Comfirm password"
                    style="margin-top: -6%"
                    filled
                    rounded
                    dense
                    light
                    placeholder="password"
                    color="#00897B"
                    prepend-inner-icon="mdi-lock"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    class="text-input-black"
                    label="CPF"
                    style="margin-top: -6%"
                    filled
                    rounded
                    dense
                    light
                    placeholder="CPF"
                    color="#00897B"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    class="text-input-black"
                    label="Data Nascimento"
                    style="margin-top: -6%"
                    filled
                    rounded
                    dense
                    light
                    placeholder="Data Nacimento"
                    color="#00897B"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
              </v-row>
              <v-row>
                <v-col>
                  <v-btn x-large block color="#686A6C" 
                    >Cadastrar</v-btn
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
  layout: 'user',

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
.text-input-black .v-text-field__slot input {
  color: #4a148c !important;
}
</style>