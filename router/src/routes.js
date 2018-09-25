import HomeComponent from './components/HomeComponent'
import ProductsComponent from './components/ProductsComponent'
import TasksComponent from './components/TasksComponent'

// Definição das rotas
export default [
    {path: '/', component: HomeComponent},
    {path: '/products', component: ProductsComponent, name: 'produtos'},
    {path: '/task/:id', component: TasksComponent, name: 'tarefa', props: true},
    {path: '/redirect', redirect: '/products'},
]