<template>
    <div class="div">
        <ul >
            <li v-for="(item,index) in list" :key="index" :class="[item.flag==0?'color1':'color2']" >{{index}}</li> 
        </ul>
    </div>
</template>
<script>
 export default{
     data(){
         return{
             list:[
                 {
                     'id':1,
                     'flag':true
                 },{
                     'id':2,
                     'flag':false
                 }
             ]
         }
     }
 }
</script>
<style>
    .color1{
        background-color: red;
    }
    .color2{
        background-color: blue;
    }
</style>