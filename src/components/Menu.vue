<template>
<div>
    <v-app-bar color="green darken-2" dark fixed app collapse collapse-on-scroll="collapseOnScroll">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Collapsing Bar</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-checkbox
        v-model="collapseOnScroll"
        color="white"
        hide-details
      ></v-checkbox>
    </v-app-bar>
    <v-navigation-drawer app dark :model="drawer">
      <CategoryMenu></CategoryMenu>
      <TagMenu></TagMenu>
    </v-navigation-drawer>
    </div>
</template>
<script>
import CategoryMenu from './CategoryMenu'
import TagMenu from './TagMenu'

export default {
    name:'Menu',
    components:{
      CategoryMenu,
      TagMenu
    },
    data() {
      return {
        drawer:true,
        collapseOnScroll:false
        }
    },
}
</script>