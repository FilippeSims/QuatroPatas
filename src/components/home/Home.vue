<template>
    <section class="content">
        <div class="container">
          <img v-bind:src="imgPage" alt="" width="100%" height="100%"/>
            <div class="text">
                <h1>Procurando um novo AMIGO?</h1>
                <p>A <b>Quatro Patas</b> pode ajudar nessa missão! Doguinhos e Gatinhos estão esperando para fazer você feliz!<br>Adote agora mesmo.</p>
                <router-link to="/adote"><button class="button one">Adote agora</button></router-link>
                <router-link to="/regras"><button class="button two">Nossas Regras</button></router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  data(){
    return{
      imgPage: ''
    }
  },
  methods:{ 
    ImgRedi(){
      const width = screen.width
      if(width > 990){
        return this.imgPage = require('../../assets/HomeDog.png')
      }else{
        return this.imgPage = require('../../assets/HomeDogMini.png')
      }
    }
  },
  mounted(){
    this.ImgRedi()
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap');

.content{
  width: 100%;
  float: left;
}

.content .container{
  max-width: 1220px;
  margin: 0 auto;
      display: flex;
    flex-direction: column;
}

.content .container img{
  max-width: 754px;
  max-height: 748px;
  float: right;
  margin: 67px 0 0 0;
  position: absolute;
  right: 0px;
}

.content .container .text{ 
  max-width: 621px;
  float: left;
  z-index: 1000;
}

.content .container .text h1{
  font-size: 100px;
  font-family: 'Amatic SC', cursive;
  color: #000;
  float: left;
  margin: 127px 0 54px 0;
  padding: 0;
}

.content .container .text p{
  font-size: 26px;
  font-family: 'Nunito', sans-serif;
  color: #000;
  float: left;
  margin: 0 0 108px 0;
  padding: 0;
}

.content .container .text .button{
  width: 300px;
  height: 80px;
  border-radius: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: 'Nunito', sans-serif;
  font-size: 26px;
  font-weight: bold;
  box-sizing: border-box;
}

.content .container .text .one{
  background: #7918D9;
  color: #FFF;
  float: left;
}

.content .container .text .two{
  background: transparent;
  color: #7918D9;
  border: 3px solid #7918D9;
  float: left;
  margin: 0 0 0 20px;
}

@media only screen and (max-width: 1520px) { 
  .content .container img{
      max-width: 700px;
      max-height: 694.42px;
  }

  .content .container .text{
    width: 520px;
  }

  .content .container .text h1{
    font-size: 80px;
  }

  .content .container .text p{
      margin: 0 0 88px 0;
  }

  .content .container .text .button{
    width: 250px;
    height: 66.66px;
    font-size: 22px;
  }

  .content .container .text .two{
    margin: 0 0 0 20px
  }
}

@media only screen and (max-width: 1348px) {
  .content .container{
    width: 1100px;  
  }
}

@media only screen and (max-width: 1300px) {
  .content .container{
    width: 800px;  
  }

  .content .container img{
      max-width: 500px;
      max-height: 496.01px;
  }

  .content .container .text{
    width: 400px;
  }

  .content .container .text h1{
    font-size: 60px;
  }

  .content .container .text p{
    font-size: 18px;
    margin: 0 0 38px 0;
  }

  .content .container .text .button{
    width: 190px;
    height: 50.66px;
  }

  .content .container .text .two{
    margin: 0 0 0 20px
  }
}

@media only screen and (max-width: 990px) {
  .content .container{
      width: 330px;  
  }

  .content .container img{
      max-width: 330px;
      max-height: 310px;
      float: none;
      margin: 0 auto;
      position: relative;
      margin-top: 40px;
  }

  .content .container .text{
    width: 330px;
  }

  .content .container .text h1{
    font-size: 50px;
    text-align: center;
    margin: 0;
    padding: 0;
  }

  .content .container .text p{
    font-size: 18px;
    margin: 32px 0 80px 0;
    text-align: center;
  }

  .content .container .text .button{
    width: 330px;
    height: 80px;
  }

  .content .container .text .two{
    margin: 50px 0 0 0;
  }
}
</style>