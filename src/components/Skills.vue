
//////////////////////////////////////////////////////////// TEMPLATE ///////////////////////////////////////////////////////////
<template>

    <div class="skillContent">

        <div class="barCharts">
            <ProgressBar :progress="20" />
            <ProgressBar :progress="40" />
            <ProgressBar :progress="60" />
            <ProgressBar :progress="80" />
        </div>
        <div class="graphs">
            <ProgressBar :progress="60" />
            <ProgressBar :progress="80" />
        </div>
        
        
    </div>

</template>


//////////////////////////////////////////////////////////// SCRIPT ///////////////////////////////////////////////////////////
<script setup>
import ProgressBar from "./utils/ProgressBar.vue"


</script>


//////////////////////////////////////////////////////////// STYLE ///////////////////////////////////////////////////////////
<style>

    .skillContent {
        display: flex;
        flex-direction: row;
        align-items: center;       
        justify-content: center;    
        padding: 20% 0;
        margin-top: -300px ;
    }
    .barCharts {
        display: flex;
        flex-direction: column;
        width: 20%;
    }
    .graphs {
        display: flex;
        flex-direction: column;
        width: 20%;
    }

</style>