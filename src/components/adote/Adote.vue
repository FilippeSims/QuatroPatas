<template>
    <div>
        <modal-adota v-if="modalAdota" @close="modalAdota = false"></modal-adota>
        <modal-like v-if="modalLike && favPets.length > 0" @close="modalLike = false"></modal-like>
        <section class="content">
            <div class="container">
                <img class="img-page" v-bind:src="imgPage" alt="" width="100%" height="100%"/>
                <div class="text">
                    <h1>Adote Agora</h1>
                    <p>Temos vários peludinhos esperando para fazer um lar mais feliz!</p>
                </div>
                <div class="lista-pets">
                    <div class="box-pet" v-for="(pet, id) in pets" :key="id">
                        <img class="img-pet" v-bind:src="require('../../assets/' + pet.nome.replace(/\s/g, '') + '.png')" alt="" width="100%" height="100%">
                        <h2>{{ pet.nome }}</h2>
                        <p>{{ pet.raca }}, {{ pet.sx }}</p>
                        <button class="button" :class="{'likeOff': favPets.indexOf(pet.id) < 0,  'likeOn': favPets.indexOf(pet.id) >= 0}" @click="modalLike = true, LikeDeslike(pet.id)"></button>
                        <button class="button adote"  @click="modalAdota = true">Adote agora</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { pets } from '../../data/pets';
import ModalAdota from '../shared/ModalAdota.vue';
import ModalLike from '../shared/ModalLike.vue';
export default {
    components: {
        'modal-adota' : ModalAdota,
        'modal-like' : ModalLike
    },
    data (){
        return{
            pets,
            modalAdota: false,
            modalLike: false,
            favPets: [],
            imgPage: ''
        }
    },
    methods: {
      LikeDeslike(id) {
        if(this.favPets.indexOf(id) >= 0){
          this.favPets.splice(this.favPets.indexOf(id), 1)
          this.$store.dispatch('changeArrayIdPet', this.favPets)
         } else {
          this.favPets.push(id)
          this.$store.dispatch('changeArrayIdPet', this.favPets)
        }
      },
      ImgRedi(){
        const width = screen.width
        if(width > 990){
          return this.imgPage = require('../../assets/AdoptDog2x.png')
        }else{
          return this.imgPage = require('../../assets/AdoptDogMini.png')
        }
      }
    },
    mounted(){
      this.favPets = this.$store.getters.getIdPets,
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

.content .container .img-page{
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

.content .container .lista-pets{
    width: 1220px;
    float: left;
    margin: 127px 0 0 0;
    position: relative;
    z-index: 10000;
}

.content .container .lista-pets .box-pet{
    width: 360px;
    height: 500px;
    background: #FFF;
    border-radius: 20px;
    box-shadow: 11px 10px 10px rgba(191, 128, 255, 0.25);
    float: left;
    margin-bottom: 62px;
}

.content .container .lista-pets .box-pet:nth-child( 1n + 1 ) {
	margin-right: 68px;
}

.content .container .lista-pets .box-pet:nth-child( 3n ) {
	margin-right: 0px;
}

.content .container .lista-pets .box-pet .img-pet{
    width: 300px;
    height: 255px;
    margin: 0 auto;
    margin: 30px 0 0 30px;
}

.content .container .lista-pets .box-pet h2{
    text-align: center;
    font-family: 'Nunito', sans-serif;
    font-size: 26px;
    color: #7918D9;
    margin: 25px 0 0 0;
}

.content .container .lista-pets .box-pet p{
    text-align: center;
    font-family: 'Nunito', sans-serif;
    font-size: 22px;
    font-weight: 300;
    color: #8E8E8E;
    margin: 3px 0 0 0;
}

.content .container .lista-pets .box-pet .button{
    height: 52px;
    border: 0;
    border-radius: 10px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 30px;
}

.content .container .lista-pets .box-pet .likeOn{
    width: 60px;
    background: url('../../assets/Heart.png') no-repeat center rgba(191, 128, 255, 0.2);
    float: left;
    margin-left: 30px;
}

.content .container .lista-pets .box-pet .likeOff{
    width: 60px;
    background: url('../../assets/GrayHeart.png') no-repeat center #E5E5E5;
    float: left;
    margin-left: 30px;
}

.content .container .lista-pets .box-pet .adote{
    width: 220px;
    background: #7918D9;
    color: #FFF;
    float: left;
    margin-left: 20px;
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

  .content .container .img-page{
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

  .content .container .lista-pets{
      width: 330px;
      float: left;
      margin: 60px 0 0 0;
      position: relative;
      z-index: 10000;
  }

  .content .container .lista-pets .box-pet{
      width: 326.37px;
      height: 500px;
      background: #FFF;
      border-radius: 20px;
      box-shadow: 11px 10px 10px rgba(191, 128, 255, 0.25);
      float: left;
      margin-bottom: 50px;
  }

  .content .container .lista-pets .box-pet:nth-child( 1n + 1 ) {
    margin-right: 0;
  }

  .content .container .lista-pets .box-pet:nth-child( 3n ) {
    margin-right: 0px;
  }

  .content .container .lista-pets .box-pet .img-pet{
      width: 272px;
      height: 255px;
      margin: 0 auto;
      margin: 30px 0 0 27.2px;
  }

  .content .container .lista-pets .box-pet .button{
    height: 52px;
    border: 0;
    border-radius: 10px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 30px;
  }

  .content .container .lista-pets .box-pet .likeOn{
      width: 54.4px;
      background: url('../../assets/Heart.png') no-repeat center rgba(191, 128, 255, 0.2);
      float: left;
      margin-left: 27.20px;
  }

  .content .container .lista-pets .box-pet .likeOff{
      width: 54.4px;
      background: url('../../assets/GrayHeart.png') no-repeat center #E5E5E5;
      float: left;
      margin-left: 27.20px;
  }

  .content .container .lista-pets .box-pet .adote{
      width: 200px;
      background: #7918D9;
      color: #FFF;
      float: left;
      margin-left: 18.13px;
  }
}
</style>