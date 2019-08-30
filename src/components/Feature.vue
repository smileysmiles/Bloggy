<template>

            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="mx-auto pt-5" elevation width="100%">
                  <v-img class="black--text pt-5" :src="feature.featured_image" contain height="200px"></v-img>
                    <v-container :class="featurecontainerclass">
                      <v-row>
                        <v-card-title class="headline green--text text--darken-4 font-weight-bold white pt-3">
                          {{feature.title}}
                        </v-card-title>
                      </v-row>
                      <v-row>
                        <v-card-text class="green--text text--darken-3 subtitle-2 font-weight-bold white pt-1">
                          {{feature.summary}}
                        </v-card-text>
                      </v-row>
                    </v-container>
                  <v-card-actions>
                    <v-container>
                      <v-row >
                        <v-col class="pl-12">
                          <v-btn icon>
                            <v-icon :color="liked">mdi-heart</v-icon>
                          </v-btn>
                          <span>{{feature.likes}}</span>
                        </v-col>
                        <!-- <v-col class="text-right pr-12">
                          <v-btn outlined>Read</v-btn>
                        </v-col> -->
                      </v-row>
                    </v-container>
                  </v-card-actions>
                  <v-fade-transition>
                    <v-overlay
                      v-if="hover"
                      absolute
                      color="#036358"
                    >
                      <v-btn :to="`/blog/${feature.slug}`">Read</v-btn>
                    </v-overlay>
                  </v-fade-transition>
                </v-card>
              </template>
            </v-hover>
</template>
<script>
    import { butter } from '@/buttercms'

    export default {
        name: 'Feature',
        data() {
            return {
                liked : "red"
            }
        },
        props:[ 'feature'],
        computed:{
        featurecontainerclass : function(){
            console.log(this.$vuetify.breakpoint.name)
            switch(this.$vuetify.breakpoint.name)
            {
            case 'xs' : return "post-container-xs white";
            default: return "feature-container white"
            }
        }
        },
        methods: {

        }
    }
</script>