<template>
  <div id="app" class="comp">
      <h1>{{ title }}</h1>
      Teste {{ msg }}

      <!--utilizando os componentes-->
      <test-component></test-component>
      <form-component></form-component>
      <tasks-component></tasks-component>
  </div>
</template>

<script>
/*importando componentes*/
import TestComponent from './components/TestComponent'
import FormComponent from './components/FormComponent'
import TasksComponent from './components/TasksComponent'

export default {
    /*definindo o método data para declarar atributos do projeto*/
    data () {
        return {
            msg: 'Alguma coisa!',
            title: 'App Component'
        }
    },
    /*adicionando os componentes que serão utilizados*/
    components: {
        TestComponent,
        FormComponent,
        TasksComponent
    }
}
</script>

<style>
.comp {
    border: 1px solid blue;
    margin: 5px;
    padding: 5px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
