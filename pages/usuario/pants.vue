<!-- eslint-disable vue/no-parsing-error -->
<template>
  <v-container>
    <v-row>

      <v-col v-for="(item, i) in products" :key="i" max-width="330">
        <v-card v-if="item.idCategory === 3 ">
          
  
          <v-img
            class="align-end text-white"
            height="330"
            width="330"
            :src="item.image"
            cover
            >
          </v-img>
          
          <v-card-subtitle class="pt-4"> {{ item.name }} </v-card-subtitle>
          
          <v-card-text>
            <div>{{ item.price }}</div>
            
            <div>{{ item.desc }}</div>
          </v-card-text>
          
          <v-card-actions>
            <v-btn color="nard-grey" @click="comprar(item)"> Comprar
              <v-icon>
                mdi-currency-usd
              </v-icon></v-btn>
      
            <v-btn color="nard-grey" @click="comprar(item)"> Carrinho 
              <v-icon>
                mdi-cart-plus
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  name: 'Pants',
  layout: 'usuario',

data() {
      return{
        model: null,
        products:[],
        drawer: null 
      }
    },

    // eslint-disable-next-line require-await
    async created(){
      this.getAll()
    },
    methods:{
      async getAll () {
        const response = await this.$api.get('/products-by-category/3')
        response.data.forEach(element => {
          element.name = element.name.toUpperCase()
        });
        this.products = response.data
      },
    }
  }
  </script>


