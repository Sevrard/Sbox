//////////////////////////////////////////////////////////// SCRIPT
///////////////////////////////////////////////////////////
<script setup>
import logo from "../assets/white.png";
</script>



//////////////////////////////////////////////////////////// TEMPLATE
///////////////////////////////////////////////////////////
<template>

    <div class="middleBLock">

        <div class="middleContent">

            <div class="sLogo"></div>
            <div class="middleTextContent">
                <p v-html="$t('cvText')"></p>
            </div>

            <div class="middleButtonContent">
                <input type="button" class="customButton" :value="$t('dlCustomCv')" >
                <input type="button" class="customButton" :value="$t('dlEuroCv')" >
            </div>
            
            
        </div>
        
    </div>

</template>


//////////////////////////////////////////////////////////// STYLE
///////////////////////////////////////////////////////////
<style>
.middleBLock {
    width: 40em;
    position: absolute;
    margin-top: -330px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    background-color: #2A405C;
    border-radius: 15px;
    /* box-shadow: 0px 0px 34px 19px rgb(236 88 114 / 50%); */
    padding: 70px 70px;

    p {
        font-size: 17px;
        color:white;
        font-family: Monospace;
        line-height: 1.7;
        text-align: center;
    }

}
.middleContent{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
}

.middleTextContent {
    width: 80%;
}

.middleButtonContent{
    display: flex;
    gap: 60px;
}

.sLogo {
  width: 150px;
  height: 150px;
  background-image: var(--logo);
  background-size: contain;
  background-repeat: no-repeat;
}

.smallLogo{
    width: 10%;
    margin-bottom: 40px;
    margin-top: 40px;
}

.customButton {
    padding:15px 20px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid var(--mainColor);
    color: white;
    text-transform: uppercase;
}
.customButton:hover {
    background-color: var(--mainColor);
}
</style>