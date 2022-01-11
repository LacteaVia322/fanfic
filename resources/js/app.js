// require('./bootstrap');
// /**
//  * First we will load all of this project's JavaScript dependencies which
//  * includes Vue and other libraries. It is a great starting point when
//  * building robust, powerful web applications using Vue and Laravel.
//  */

//  require('./bootstrap');
//  import VueRouter from 'vue-router';
 
//  window.Vue = require('vue');
//  Vue.use(VueRouter);
 
//  window.Vue = require('vue');
//  window.simplebar = require('simplebar-vue');
 
//  /**
//   * The following block of code may be used to automatically register your
//   * Vue components. It will recursively scan this directory for the Vue
//   * components and automatically register them with their "basename".
//   *
//   * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
//   */
 
//  // const files = require.context('./', true, /\.vue$/i)
//  // files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
 
//  Vue.component('search', require('./components/book-ui/Search.vue').default);
//  Vue.component('nav-bar', require('./components/book-ui/NavBar.vue').default);
 
//  Vue.component('book-info', require('./components/book-ui/bookshelf/BookInfo.vue').default);
 
//  import Book from './components/book-ui/BookApp.vue';
//  import Reader from './components/reader-ui/Reader.vue';
 
//  import Bookshelf from './components/book-ui/bookshelf/Bookshelf.vue';
//  import Discover from './components/book-ui/discover/Discover.vue';
//  import Community from './components/book-ui/community/Community.vue';
//  import Profile from './components/book-ui/profile/Profile.vue';
 
//  import Admin from './components/admin-ui/Main.vue';
//  import Editor from './components/admin-ui/Editor.vue';
 
//  const router = new VueRouter({
//      mode: 'history',
//      routes: [
//          {
//              path: '/bookshelf',
//              name: 'home',
//              component: Book,
//              children: [
//                  {
//                      path: 'books',
//                      name: 'bookshelf',
//                      component: Bookshelf,
//                      meta: { 
//                          title: 'Библиотека'
//                      }
//                  },
//                  {
//                      path: 'discover',
//                      name: 'discover',
//                      component: Discover,
//                      meta: { 
//                          title: 'Обзор'
//                      }
//                  },
//                  {
//                      path: 'bookmarks',
//                      name: 'bookmarks',
//                      component: Community,
//                      meta: { 
//                          title: 'Закладки'
//                      }
//                  },
//                  {
//                      path: 'profile',
//                      name: 'profile',
//                      component: Profile,
//                      meta: { 
//                          title: 'Профиль'
//                      }
//                  },
//              ]
//          },
//          {
//              path: '/reader/:id',
//              name: 'reader',
//              component: Reader,
//          },
//          {
//              path: '/admin',
//              name: 'admin',
//              component: Admin,
//              children: [
//                  {
//                      path: 'editor/:id',
//                      name: 'bookeditor',
//                      props: true,
//                      component: Editor,
//                      meta: { 
//                          title: 'Редактор'
//                      }
//                  },
//              ]
//          },
//          // { 
//          //     path: '*', 
//          //     component: Error404Component 
//          // }
//      ],
//  });
 
//  /**
//   * Next, we will create a fresh Vue application instance and attach it to
//   * the page. Then, you may begin adding components to this application
//   * or customize the JavaScript scaffolding to fit your unique needs.
//   */
 
//  const app = new Vue({
//      el: '#app',
//      router,
//      data: {
//          loading: true,
//          title: "..."
//      },
//      computed: {
         
//      },
//      mounted: function () {
 
//          this.title = this.$route.meta.title;
 
//          this.$on('click-on-book', function (book) {
//              if (this.bookInfoState)
//                  return;
                 
//              this.openedBook = book;
//              this.bookInfoState = true;
//          });
 
//          if (this.$route.path == "/")
//              this.$router.push({ name: 'bookshelf'});
 
//          window.addEventListener("DOMContentLoaded", () => {
//              this.loading = false;
//              document.body.classList.remove('blockScroll');
//          });
 
//          this.$router.beforeEach((to, from, next) => {
//              this.title = to.meta.title;
//              next();
//          })
//      }
     
//  });