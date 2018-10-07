import HomeComponent from '../components/home/HomeComponent'
import ProductComponent from '../components/product/ProductComponent'
import ProductCreateComponent from '../components/product/ProductCreateComponent'
import ProductEditComponent from '../components/product/ProductEditComponent'

export default [
    {path: '/', component: HomeComponent},
    {path: '/product', component: ProductComponent},
    {path: '/product/create', component: ProductCreateComponent},
    {path: '/product/:id/edit', component: ProductEditComponent, name: 'product.edit', props: true},
]