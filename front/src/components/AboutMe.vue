
<template>

    <div class="aboutMe">
        <div class="me"></div>
        <div class="wording">
            <h1 v-html="$t('hello')"></h1>
            <h2 v-html="$t('aboutMe')"></h2>
            <p v-html="$t('shortDescription')"></p>
            <p v-html="$t('cvText')"></p>
        </div>
    </div>

</template>



<script setup></script>

<style>

    .aboutMe {
        display: flex;
        flex-direction: row;
        align-items: center;       
        justify-content: center;    
        gap: 5%;                  
        text-align: left;         
        padding: 10px;
    }

    .me {
        width: 500px;       
        height: 500px;       
        border-radius: 50%;  
        background-image: url("../assets/photo/p1.png"); 
        background-size: cover; 
        background-position: center; 
    }

    .wording {
        width:45%;
        display: flex;
        color:white;
        flex-direction: column;

        h1 { 
            font-size: 150px; 
            margin:0 ;
            font-family: "goodbye"
        }
        h2 { 
            font-size: 30px; 
            font-family: Tahoma, Geneva, Verdana, sans-serif;
            font-weight: 100;
            margin-bottom:35px;
        }
        p { 
            font-size: 16px;
            font-family:  system-ui,fantasy, sans-serif, system-ui;
            font-weight: 100;  
            margin-bottom:20px;
            line-height: 30px;
        }
    }

    @media (max-width: 600px) {
        .aboutMe {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .me {
            margin-bottom: 15px;
        }
    }
</style>