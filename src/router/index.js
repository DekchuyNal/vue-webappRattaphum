import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import Products from '@/views/Products.vue';
import About from '@/views/About.vue';
import NotFound from '@/views/NotFound.vue';
import ProductDetails from '@/views/ProductDetail.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/products', component: Products },
  { path: '/productdetails', component: ProductDetails }, 
  {

    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
{
  path: "/products/:id",
  name: "ProductDetail",
  component: ProductDetails,
  props: true
},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;