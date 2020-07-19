import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Statistics from '@/views/Statistics.vue';
import More from '@/views/More.vue';
import NotFound from '@/views/NotFound.vue';
import Details from '@/views/Details.vue';
import Money from '@/views/Money.vue';
import Pages from '@/components/Pages.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/details'
  },
  {
    path: '/details',
    component: Details
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path: '/more',
    component: More
  },
  {
    path: '*',
    component: NotFound
  }
];

const router = new VueRouter({
  routes
});

export default router;
