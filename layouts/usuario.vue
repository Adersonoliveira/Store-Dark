<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      color="#212626"
      permanent
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar style="background-color: #212626" :clipped-left="clipped" fixed app>
      <v-btn href="/admin/login">

    <v-icon>
      mdi-shield-crown
    </v-icon></v-btn>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main style="background-color: #2e3030;"> 
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
          
        </v-list-item>
        
      </v-list>
    </v-navigation-drawer>
    <v-footer style="background-color: #212626;" :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>

</template>

<script>
export default {
  name: 'UsuarioLayout',
  layout:'usuario',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
      {
          icon: 'mdi-home-circle',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-shoe-print',
          title: 'Sneakers',
          to: '/usuario/produto',
        },
        {
          icon: 'mdi-tshirt-crew',
          title: 'T-shirt / Sweatshirt',
          to: '/usuario/T-shirt',
        },
        {
          icon: 'mdi-coat-rack',
          title: 'Pants / Shorts',
          to: '/usuario/pants',
        },

        {
          icon: 'mdi-swap-vertical-variant',
          title: 'Acessorios',
          to: '/usuario/acessorios',
        },
        
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  async created() {
    const response = await this.$api.get('/categories');
    this.items = response.data.map((item) => {
      return {
        icon: item.icone,
        to: item.caminho,
        title: item.name
      }
    })
  }
}
</script>