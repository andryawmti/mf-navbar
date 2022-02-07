<template>
    <nav class="navbar">
        <ul class="navbar-list">
            <li class="navbar-list-item"><router-link to="/home">Home</router-link></li>
            <li class="navbar-list-item"><router-link to="/service">Service</router-link></li>
            <li class="navbar-list-item">
                <as-button primary rounded @click="navigateToPage('/home')">Home</as-button>
            </li>
            <li class="navbar-list-item">
                <as-button primary rounded @click="navigateToPage('/service')">Service</as-button>
            </li>
            
        </ul>
    </nav>
</template>

<script>
import { navigateToUrl } from 'single-spa'
import { AsButton } from '@niagahoster/components'

export default {
    name: 'Navbar',
    components: {
      AsButton,  
    },
    setup() {
        const navigateToPage = (path) => {
          navigateToUrl(path)
        }
        
        return {
          navigateToPage,
        }
    },
}
</script>

<style>
.navbar {
    background: linear-gradient(249.77deg, #0094FF -1.99%, #007DFF 43.52%, #026CE8 95.86%);
}

.navbar-list {
    display: flex;
    list-style: none;
    margin: 0
}

.navbar-list-item {
    padding: 10px 5px;
}

.navbar-list-item a {
    color: #fff;
}
</style>
