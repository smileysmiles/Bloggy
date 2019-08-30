<template>


  <div v-if="blogpost" id="blog-post" class="mt-12">

<v-card class="mx-auto mt-12" color="green" max-width="900" min-width="270" height="100%">
        <v-card-title>
          <v-container>
            <v-row justify="center" class="mb-5 mt-2">
              <v-avatar color="green darken-2" size="88">
                <v-img class="elevation-6" :src="blogpost.author.profile_image"></v-img>
              </v-avatar>
            </v-row>
            <v-row justify="center">
              <span class="subtitle-1 white--text  font-weight-normal">{{blogpost.author.first_name}}</span>
            </v-row>
            <v-row justify="center">
              <span class="body-2 white--text font-italic">{{blogpost.author.title}}</span>
            </v-row>
          </v-container>
        </v-card-title>
        <v-container class="white">
          <v-row>
            <v-card-text class="headline green--text text--darken-4 font-weight-bold white pt-3">
              <h3>{{blogpost.title}}</h3>
            </v-card-text>
          </v-row>
          <v-row>
            <v-card-text class="green--text text--darken-3 subtitle-2 font-weight-bold white pt-1">
              <div v-html="blogpost.body"></div>
            </v-card-text>
          </v-row>


    <router-link v-if="blogmeta.previous_post" :to="/blog/ + blogmeta.previous_post.slug" class="button">
      {{ blogmeta.previous_post.title }}
    </router-link>
    <router-link v-if="blogmeta.next_post" :to="/blog/ + blogmeta.next_post.slug" class="button">
      {{ blogmeta.next_post.title }}
    </router-link>

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
                </v-row>
              </v-container>
            </v-card-actions>
        </v-card>
        <v-container class="grey lighten-5">
        <v-row>
          <v-col v-if="previous" cols="12" md="6">
            <Post :post="previous.data" message="Previous"></Post>
          </v-col>
          <v-col v-if="next" cols="12" md="6">
            <Post :post="next.data"  message="Next"></Post>
          </v-col>
          
      </v-row>
    </v-container>
    
    

  </div>
</template>
<script>
import { butter } from '@/buttercms'
import Prism from 'prismjs';
import Post from '../components/Post'

export default {
  name: 'Blog',
  data() {
      return {
        blogpost:null,
        blogmeta:null,
        liked:"red",
        previous:null,
        next:null
      }
  },
  components:{
    Post
  },
  methods:{
    async getPost(slug) {
        let res = await butter.post.retrieve(slug);
        console.log("res", res)    
        return res.data;
    },
    async getArticle(slug){
      let article = await this.getPost(slug);
      console.log("Article", article)
      this.blogpost = article.data;
      this.blogmeta = article.meta;
      this.previous = await this.getPost(this.blogmeta.previous_post.slug);
      this.next = await this.getPost(this.blogmeta.next_post.slug);    
    }
  },
  updated(){
      Prism.highlightAll();
  },
  created(){
    var slug = this.$route.params.slug;
    console.log("slug", slug);
    this.getArticle(slug);
  },
  watch: {
      $route(to, from) {
        var slug = this.$route.params.slug;
        console.log("slug", slug);
        this.getArticle(slug);
      }
    },
}
</script>
<style>
  
img {
  max-width: 100%;
  height: auto;
}
pre code{
  max-width: 100%;
  min-width:100%;
  height: auto;
  overflow:auto
}
</style>