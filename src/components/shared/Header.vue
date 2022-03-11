<template>
    <header>
        <div class="container">
            <nav class="menu">
                <router-link to="/">
                    <img class="logo" src="../../assets/LogoQuatroPatas.svg" alt="" />
                </router-link>
                <ul>
                    <li><router-link to="/regras">Nossas Regras</router-link></li>
                </ul>
                <div class="bars-menu" @click="barMenu = !barMenu"></div>
            </nav>
            <nav class="menu-mobile" v-if="barMenu">
                <ul @click="barMenu = false">
                    <li><router-link to="/regras">Nossas Regras</router-link></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
  data(){
    return{
      barMenu: false
    }
  },
  methods: {

  },
  mounted () {
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');

header{
  width: 100%;
  height: 165px;
  background: #ECD48B;
  float: left;
}

header .container{
  width: 1328px;
  margin: 0 auto;
  flex-wrap: nowrap;
}

header .container .menu{
  display: flex;
  margin-top: 45px;
}

header .container .menu a .logo{
  width: 222px;
  height: 74.35px;
}

header .container .menu ul li a{
  text-decoration: none;
  font-family: 'Amatic SC', cursive;
  font-size: 36px;
  margin: 0;
  color: #1F0F2B;
}

header .container .menu li{
  list-style: none;
}

header .container .menu .bars-menu{
  width: 52px;
  height: 48.33px;
  background: url('../../assets/bars-menu.png');
  float: right;
  margin-right: 30px;
  margin-top: -8.5px;
  cursor: pointer;
  display: none;
}

header .container .menu-mobile{
  width: 100%;
  height: 50px;
  background: #7918D9;
  display: none;
  position: relative;
  z-index: 100000;
}

header .container .menu-mobile ul{
  list-style: none;
}

header .container .menu-mobile ul li a{
  text-decoration: none;
  font-family: 'Amatic SC', cursive;
  font-size: 36px;
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
}


@media only screen and (max-width: 1348px) {
  header .container{
    width: 1220px;
  }
}

@media only screen and (max-width: 1300px) {
  header .container{
    width: 900px;
  }
}

@media only screen and (max-width: 990px) {
  header{
     height: 70px;
  }

  header .container{
    width: 100%;
    float: left;
  }
  
  header .container .menu{
    display: block;
    margin: 20px 0 0 30px;
  }

  
  header .container .menu a .logo{
    width: 92px;
    height: 31px;
  }

  header .container .menu ul{
    display: none;
  }

  header .container .menu .bars-menu{
    display: block;
  }

  header .container .menu-mobile{
    display: block;
  }
}
</style>