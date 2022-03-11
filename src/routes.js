import Home from './components/home/Home.vue'
import Regras from './components/regras/Regras.vue'
import Adote from './components/Adote/Adote.vue'

export const routes = [
    {path: '', component: Home},
    {path: '/regras', component: Regras},
    {path: '/adote', component: Adote}
]