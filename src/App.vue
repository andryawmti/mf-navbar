<template>
    <Navbar/>
    <router-view></router-view>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
    name: 'App',
    components: {
        Navbar,
    },
    setup() {
        
    },
}
</script>

<style scoped>
    
</style>
