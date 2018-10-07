import HomeComponent from '../components/home/HomeComponent'
import ProductComponent from '../components/product/ProductComponent'
import ProductCreateComponent from '../components/product/ProductCreateComponent'

export default [
    {path: '/', component: HomeComponent},
    {path: '/product', component: ProductComponent},
    {path: '/product/create', component: ProductCreateComponent},
]