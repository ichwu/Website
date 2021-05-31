var App = Vue.createApp({
    data () {
          return {
                href: 'href',
                img: 'img',
                title: 'title',
                description: 'description'
          }
    }
})

App.component('my-card', {
    template: `<a class="index-link" :href="href">
    <div class="index-card">
    <div class="index-cover">
    <img class="index-cover-img" :src="img"/>
    </div>
    <div class="index-info">
    <h4  class="index-info-title"><b>{{ title }}</b></h4>
    <p   class="index-info-des">{{ description }}</p>
    </div></div>
    </a>`,
    props:['href', "img", "title", "description"]
})

App.mount('#app');