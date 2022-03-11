<template>
    <section class="content">
        <div class="container">
          <img v-bind:src="imgPage" alt="" width="100%" height="100%"/>
            <div class="text">
                <h1>Nossas Regras</h1>
                <p>Sem sombra de dúvidas queremos o melhor para os nossos peludinhos, portanto queremos esclerecer quais são os requisitos para você ter um novo membro na família:</p>
                <ul>
                    <li>Carinho e atenção não pode faltar;</li>
                    <li>Cuide de pulgas, carrapatos, entre outros parasitas;</li>
                    <li>Leve ao veterinário regularmente;</li>
                    <li>Mantenha as vacinas em dia, é importante para ele(a) e para você;</li>
                    <li>A castração é importante para previnir doenças e a procriação. </li>
                </ul>
                <p>Todo animal merece respeito &lt;3</p>
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
        return this.imgPage = require('../../assets/RulesDog.png')
      }else{
        return this.imgPage = require('../../assets/RulesDogMini.png')
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
  max-width: 764px;
  float: left;
  z-index: 1000;
}

.content .container .text h1{
  font-size: 100px;
  font-family: 'Amatic SC', cursive;
  color: #000;
  float: left;
  margin: 127px 0 62px 0;
  padding: 0;
}

.content .container .text p{
  font-size: 26px;
  font-family: 'Nunito', sans-serif;
  color: #000;
  float: left;
  margin: 0 0 0 0;
  padding: 0;
}

.content .container .text ul{
    float: left;
    list-style-type: none;
    margin: 50px 0 50px 0;
}

.content .container .text ul li{
    padding: 10px 0px;
    font-family: 'Nunito', sans-serif;
    font-size: 26px;
    font-weight: bold;
    float: left;
    position: relative;
}
.content .container .text ul li::before {
    height: 25px;
    width: 25px;
    background-image: url('../../assets/DogHand.png');
    background-size: contain;
    background-repeat: no-repeat;
    content: '';
    display: inline-block;
    margin-left: -40px;
    position: absolute;
    top: 16px;
}
@media only screen and (max-width: 1751px) { 
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
      margin: 0 0 0 0;
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
    margin: 0 0 0 0;
  }

  .content .container .text ul li{
      font-size: 18px;
  }

  .content .container .text ul li::before {
        height: 16px;
        width: 16px;
        background-image: url('../../assets/DogHand.png');
        background-size: contain;
        background-repeat: no-repeat;
        content: '';
        display: inline-block;
        margin-left: -20px;
        position: absolute;
        top: 15px;
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
    float: none;
  }

  .content .container .text p{
    font-size: 18px;
    margin: 30px 0 0px 0;
    text-align: center;
    float: none;
  }

  .content .container .text ul{
    margin: 10px 0 20px 0;
  }
}
</style>