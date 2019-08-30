<template>
        <v-list nav dense>
        <v-list-item-group  color="white">
          <v-subheader>Tags</v-subheader>
            <v-list-item
              v-for="tag in tags" :key="`tag_${tag.slug}`"
              :to="{name: 'tag', params: { tag: tag.slug }}"
            >
              <v-list-item-icon>
                <v-icon>chat</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="tag.name"></v-list-item-title>
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
            tags:[]
        }
    },
    methods: {
        getTags() {
            butter.tag.list()
                .then((res) => {
                  console.log("TAGS ", res.data);
                    this.tags = res.data.data;
                })        
      }
    },
    created() {
      this.getTags();
    }
}
</script>