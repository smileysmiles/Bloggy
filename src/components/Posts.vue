<template>
<div v-if="posts" class="blog">
      <v-container class="grey lighten-5">
        <v-row v-if="showFeature">
            <v-col cols="12">
                <Feature :feature="feature"></Feature>
            </v-col>
        </v-row>
        <v-row>
          <v-col v-for="post in posts" :key="post.slug" cols="12" md="6">
            <Post :post="post" message="Read"></Post>
          </v-col>
      </v-row>
    </v-container>
    <v-pagination v-model="page" :length="pagecount" circle></v-pagination>
  </div>
  </template>
  <script>
    import { butter } from '@/buttercms'
    import Feature from './Feature'
    import Post from './Post'

    export default {
        name: 'Posts',
        data() {
            return {
                page_title: 'Blog',
                posts: null,
                pagecount: 1,
                page: 1,
                previousPage : null,
                nextPage : null,
                pageSize : 4,
                feature : null,
                liked : "red"
            }
        },
        components:{
            Feature,
            Post
        },
        props:{
            type: null,
            value: null
        },
        computed:{
            showFeature : function(){
                return this.page == 1 ? true : false;
            },
            pagesize : function(){
                return this.showFeature ? this.pageSize + 1 : this.pageSize
            },
        },
        methods: {
            getPosts() {
                butter.post.list({
                page: this.page,
                page_size: this.pagesize
                }).then((res) => {
                    this.assignPosts(res.data.data, res.data.meta);
                })
            },
            assignPosts(data, meta)
            {
                this.posts = data;
                if (this.showFeature)
                {
                    this.feature = this.posts.shift();
                    this.feature.likes = 100;
                }
                
                this.pagecount = Math.ceil( meta.count / 4 );
                this.previousPage = meta.previous_page;
                this.nextPage = meta.next_page;
            }

        },
        watch: {
        $route(to, from) {
            this.getPosts()
        },
        page: function (newPage, oldPage)
        {
            this.getPosts();
        }
        },
        created() {
        this.getPosts()
        }
    }
</script>
