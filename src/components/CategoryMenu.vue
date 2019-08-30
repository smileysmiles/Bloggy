<template>
        <v-list nav dense>
        <v-list-item-group  color="white">
          <v-subheader>Categories</v-subheader>
            <v-list-item
              v-for="( category, i ) in categories" :key="i"
              :to="{name: 'category', params: { cat: category.slug }}"
            >
              <v-list-item-icon>
                <v-icon>chat</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="category.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
        </v-list>
</template>
<script>
import { butter } from '@/buttercms'

export default {
    name:'Menu',
    data() {
        return {
            drawer:true,
            item:1,
            categories:[]
        }
    },
    methods: {
        getCategories() {
            butter.category.list()
                .then((res) => {
                    console.log('List of Categories:', res.data.data)
                    this.categories = res.data.data;
                })        
      }
    },
    created() {
      this.getCategories();
    }
}
</script>