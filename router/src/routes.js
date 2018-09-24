import HomeComponent from './components/HomeComponent'
import ProductsComponent from './components/ProductsComponent'
import TasksComponent from './components/TasksComponent'

// Definição das rotas
export default [
    {path: '/', component: HomeComponent},
    {path: '/products', component: ProductsComponent},
    {path: '/tasks', component: TasksComponent},
]