<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card class="mx-auto" color="green" min-width="270" height="100%">
        <v-card-title>
          <v-container>
            <v-row justify="center" class="mb-5 mt-2">
              <v-avatar color="green darken-2" size="88">
                <v-img class="elevation-6" :src="post.author.profile_image"></v-img>
              </v-avatar>
            </v-row>
            <v-row justify="center">
              <span class="subtitle-1 white--text  font-weight-normal">{{post.author.first_name}}</span>
            </v-row>
            <v-row justify="center">
              <span class="body-2 white--text font-italic">{{post.author.title}}</span>
            </v-row>
          </v-container>
        </v-card-title>
        <v-container :class="containerclass">
          <v-row>
            <v-card-text class="headline green--text text--darken-4 font-weight-bold white pt-3">
              {{post.title}}
            </v-card-text>
          </v-row>
          <v-row>
            <v-card-text class="green--text text--darken-3 subtitle-2 font-weight-bold white pt-1">
              {{post.summary}}
            </v-card-text>
          </v-row>
          </v-container >
            <v-card-actions class="white">
              <v-container >
                <v-row >
                  <v-col class="pl-12">
                    <v-btn icon>
                      <v-icon :color="liked">mdi-heart</v-icon>
                    </v-btn>
                    <span>100</span>
                  </v-col>
                  <!-- <v-col class="text-right pr-12">
                    <v-btn outlined>Read</v-btn>
                  </v-col> -->
                </v-row>
              </v-container>
            </v-card-actions>
          <v-fade-transition>
            <v-overlay v-if="hover" absolute color="#036358">
              <v-btn :to="`/blog/${post.slug}`">{{message}}</v-btn>
            </v-overlay>
          </v-fade-transition>
        </v-card>
      </template>
    </v-hover>
  </template>

  <script>
    import { butter } from '@/buttercms'

export default {
        name: 'Post',
        data() {
            return {
              liked : "red"
            }
        },
        props:[
           'post',
           'message'
        ],
        computed:{
          containerclass : function(){
              console.log(this.$vuetify.breakpoint.name)
              switch(this.$vuetify.breakpoint.name)
              {
              case 'xs' : return "post-container-xs white";
              default: return "post-container white"
              }
          }
        }
    }
</script>
