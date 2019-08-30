<template>
  <Posts></Posts>
</template>
<script>

  import Posts from '../components/Posts';

  export default {
    name: 'BlogHome',
    components:{
      Posts
    }

  }
</script>
<style>
.post-container{
    height: 170px;
    overflow: hidden;
}

.feature-container{
    height: 100px;
    overflow: hidden;
}

.post-container-xs{
    height: 250px;
    overflow: hidden;
}
</style>