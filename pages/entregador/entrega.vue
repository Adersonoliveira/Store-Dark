<template>
  <v-container>
    <h1>Pedidos Diponíveis para Entregar</h1>
    <hr>
    <v-row style="margin-top: 2%">
      <v-col
        cols="2"
      >
      </v-col>
    </v-row>
    <v-container>
      <v-row>
      <v-col
      cols="max"
      >
      <v-data-table
        :headers="headers"
        :items="order"
        :items-per-page="10"
        class="elevation-1"
      >
      <template #item.status="{ item }">
          <p 
            :style="item.status === 'criado' ? 'color: blue' : item.status === 'cancelado' ? 'color: red' : item.status === 'A caminho' ? 'color: yellow' : 'color: green' "
          > {{ item.status }} </p>
        </template>
        <template #item.actions="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="editar(item)"
          >
            mdi-magnify
          </v-icon>
          <v-icon
            small
            @click="deletar(item)"
          >
            mdi-cancel
          </v-icon>
        </template>
      </v-data-table>
      </v-col>
    </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'ConsultaOrderPage',
  layout: 'default',

  data () {
    return{
      headers: [
        {
          text: 'Código',
          align: 'center',
          sortable: true,
          value: 'id',
        },
        {
          text: 'Cliente',
          align: 'center',
          sortable: true,
          value: 'idUserCostumer.name',
        },
        {
          text: 'Rua',
          align: 'center',
          sortable: true,
          value: 'idAdress.street',
        },
        {
          text: 'Valor',
          align: 'center',
          sortable: true,
          value: 'total',
        },
        {
          text: 'Status',
          align: 'center',
          sortable: true,
          value: 'status',
        },
      ]
    }
  }
}