<template>
    <footer>
        <div class="container">
            <router-link to="/">
                <img class="logo" src="../../assets/LogoQuatroPatas.svg" alt="" />
            </router-link>

            <div class="infos">
                <b>Quatro Patas Adoção de Animais</b>
                <p>Rua das Oliveiras, 158 | Nova Floresta - São Paulo, SP 13999-008</p>
                <p>(021) 9921-8282 ou (19) 9923-5050</p>
            </div>
        </div>
        <div class="copyright">
            <div class="container">
                <div class="row">
                    <p>Copyright 2022. Todos os direitos.</p>
                    <b>Violência contra animais é crime. Denuncie 0800 600 6428</b>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer{
  width: 100%;
  height: 324px;
  background: #ECD48B;
  float: left;
  font-family: 'Nunito', sans-serif;
  position: relative;
  margin-top: 325px;
}

footer .container{
  width: 1328px;
  margin: 0 auto;
  margin-top: 60px;
  flex-wrap: nowrap;
}

footer .container a .logo{
  width: 332px;
  height: 111px;
}

footer .container .infos{
  width: 430px;
  float: right;
  font-size: 18px;
}

footer .copyright{
  width: 100%;
  height: 54px;
  background: #6C3659;
  color: #FFF;
  position: absolute;
  bottom: 0;
  display: flex;
}

footer .copyright .container{
  width: 1328px;
  margin: 0 auto;
  display: table;
}

footer .copyright .container .row{
    display: table-cell;
    vertical-align: middle;
}

footer .copyright p{
  float: left;
  margin: 0;
}

footer .copyright b{
  float: right;
  margin: 0;
}


@media only screen and (max-width: 1520px) { 
  footer{
    margin-top: 200px;
  }
}


@media only screen and (max-width: 1348px) {
  footer .container, footer .copyright .container{
    width: 1220px;
  }
}


@media only screen and (max-width: 1300px) {
  footer .container, footer .copyright .container{
    width: 900px;

  }

  footer{
    margin-top: 120px;
  }
}

@media only screen and (max-width: 990px) {
  footer .container, footer .copyright .container{
    width: 330px;
  }

  footer{
    height: 490px;
    margin-top: 94px;
  }

  footer .container{
    width: 330px;
    margin: 0 auto;
    margin-top: 64px;
  }

  footer .container a .logo{
    width: 165;
    height: 69.83px;
    margin: 0 auto;
  }

  footer .container .infos{
    width: 330px;
    font-size: 14px;
    text-align: center;
    margin: 40px 0 0 0;
  }

  footer .copyright{
    width: 100%;
    height: 148px;
    background: #6C3659;
    color: #FFF;
    position: absolute;
    bottom: 0;
    display: flex;
    text-align: center;
  }

  footer .copyright .container{
    width: 330px;
    margin: 0 auto;
    display: table;
  }

  footer .copyright .container .row{
      display: table-cell;
      vertical-align: middle;
  }

  footer .copyright p{
    float: none;
    text-align: center;
    font-size: 14px;
  }

  footer .copyright b{
    float: none;
    text-align: center;
    font-size: 14px;
  }

}
</style>