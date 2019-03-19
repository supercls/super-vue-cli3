<template>
    <div class="zd-wrapper">
        <p>helloy</p>
    </div>
</template>
<script>
import helloWorld from "@/components/HelloWorld";
// import {login} from "@/api/login.js"
// import { mapGetters } from 'vuex'
export default {
    name:'hello',
    data(){
        return {

        }
    },
    components:{
        helloWorld
    },
    methods:{

    },
    created(){

    },
    mounted(){
        // login(1,2).then(res=>{
        //     console.log(res)
        // })
    },
    computed:{

    },
    filters:{

    },
}
</script>
<style scoped lang="less">
    .zd-wrapper{
        margin:0 auto;
        p{
            font-size: 30px;
            height: 50px;
            text-align: center;
        }
    }
</style>