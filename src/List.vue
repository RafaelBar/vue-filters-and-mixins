<template>
            <div>
                <h1>Filters & Mixins</h1>
                <p>{{text | toUppercase | to-lowercase}}</p>
                <input v-model="filterText">
                <ul class="ul">
                    <li v-for="fruit in filteredFruits" :key="fruit">
                        {{fruit}}
                    </li>
                </ul>
            </div>
</template>

<script>
import {fruitMixin} from './fruitMixin';

    export default {
       mixins: [fruitMixin],
       created(){
           console.log("created2");
       }
    }
</script>

<style>

</style>
