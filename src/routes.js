import Home from './components/Home.vue';
import Accordion from './components/Accordion.vue'
import Picker from './components/Picker.vue'

export default [
  // Index page
  {
    path: '/',
    component: Home,
  },
  // Components
  {
    path: '/accordion/',
    component: Accordion,
  },
  {
    path: '/picker/',
    component: Picker
  }
];