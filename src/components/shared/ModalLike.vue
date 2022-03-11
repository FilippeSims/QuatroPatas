<template>
    <div class="modal">
       <div class="box">
           <div class="img-box"></div>
           <h2>FAVORITADO<br> COM AMOR!</h2>
           <p>Obrigado por seu<br> interesse em nossos<br> amigos! Esperamos<br> ansiosos pela sua<br> adoção!</p>
           <button class="close" @click="$emit('close')"></button>
       </div>
    </div>
</template>

<script>
export default ({

})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap');

    .modal{
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: fixed;
        z-index: 1000000000;
    }

    .modal .box{
        width: 589px;
        height: 408px;
        background: #D88BB9;
        border: 10px solid #FFF;
        border-radius: 20px;
        position: relative;
    }

    .modal .box .img-box{
        width: 221px;
        height: 348px;
        background: url('../../assets/FavModalDog.png');
        float: left;
        margin: 33px 0 0 69px;
    }

    .modal .box h2{
        font-family: 'Amatic SC', cursive;
        font-size: 48px;
        font-weight: bold;
        margin: 35px 0 0 0;
    }

    .modal .box p{
        font-family: 'Nunito', sans-serif;
        font-size: 26px;
        margin: 10px 0 0 0;
    }

    .modal .box .close{
        width: 32px;
        height: 32px;
        border: 0;
        cursor: pointer;
        background: url('../../assets/Close.png') no-repeat center;
        position: absolute; 
        right: 32px;
        top: 32px;
    }

@media only screen and (max-width: 990px) {
        .modal .box{
        width: 326px;
        height: 226px;
        background: #D88BB9;
        border: 10px solid #FFF;
        border-radius: 20px;
        position: relative;
    }

    .modal .box .img-box{
        width: 99px;
        height: 189px;
        background: url('../../assets/FavModalDog.png');
        background-size: cover;
        float: left;
        margin: 18px 0 0 38px;
    }

    .modal .box h2{
        font-family: 'Amatic SC', cursive;
        font-size: 24px;
        font-weight: bold;
        margin: 35px 0 0 0;
    }

    .modal .box p{
        font-family: 'Nunito', sans-serif;
        font-size: 14px;
        margin: 10px 0 0 0;
    }

    .modal .box .close{
        width: 18px;
        height: 18px;
        border: 0;
        cursor: pointer;
        background: url('../../assets/Close.png') no-repeat center;
        background-size: cover;
        position: absolute; 
        right: 18px;
        top: 18px;
    }
}
</style>
