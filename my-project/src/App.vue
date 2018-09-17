<template>
  <div id="app">
      Teste {{ msg }}

      <!--utilizando os componentes-->
      <test-component></test-component>
      <form-component></form-component>
  </div>
</template>

<script>
/*importando componentes*/
import TestComponent from './components/TestComponent'
import FormComponent from './components/FormComponent'

export default {
    /*definindo o método data para declarar atributos do projeto*/
    data () {
        return {
            msg: 'Alguma coisa!'
        }
    },
    /*adicionando os componentes que serão utilizados*/
    components: {
        TestComponent,
        FormComponent
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
