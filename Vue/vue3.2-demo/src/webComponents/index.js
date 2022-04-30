// import { defineCustomElement } from 'vue'

// const MyVueElement = defineCustomElement({
//     props:['title'],
//     emits:{},
//     inject:['user'],
//     template:'<div class="msg" >MyVueElement---{{title}}<div slot="named">hello</div>---{{user}}</div>',
//     styles:[`.msg { color: red; }`]
// })

// customElements.define('my-vue-element',MyVueElement)

import { defineCustomElement } from 'vue'
import ExampleTest  from './ExampleTest.ce.vue'

const ExampleCustom = defineCustomElement(ExampleTest)
customElements.define('example-custom', ExampleCustom)