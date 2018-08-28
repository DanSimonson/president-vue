<template>
  <div id="app">
    <v-responsive color="primary" dark>
      <v-container fill-height>
        <v-layout align-center row wrap>
          <v-flex text-xs-center xs12>
            <h3><span class="glyphicon glyphicon-list-alt"></span>&nbsp;Trump News List</h3>
            <v-btn large @click="updateConservative">Trump news for Republicans</v-btn>
            <v-btn large @click="updateDemocrat">Trump News for Democrats</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-responsive>


    <div class="newslist">
      <div class="container">
        <ul class="media-list">
          <li class="media" v-for="article in articles">
            <div class="media-left">
              <a v-bind:href="article.url" target="_blank">
                <img class="media-object" v-bind:src="article.urlToImage">
              </a>
            </div>
            <div class="media-body">
              <h4 class="media-heading"><a v-bind:href="article.url" target="_blank">{{article.title}}</a></h4>
              <h5><i>by {{article.author}}</i></h5>
              <p>{{article.description}}</p>
            </div>
          </li>
        </ul>

      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        articles: [],
        q: ''
      }
    },
    methods: {
      updateDemocrat() {
        this.$http.get('https://newsapi.org/v2/top-headlines?q=trump&language=en&apiKey=c4910a48cfd74ddb952af0bc8fe89298')
          .then(response => {
            console.log(response)
            this.articles = response.data.articles;
          });
      },
      updateConservative() {
        this.$http.get('https://newsapi.org/v2/top-headlines?q=trump&sources=fox-news,breitbart-news,national-review&apiKey=c4910a48cfd74ddb952af0bc8fe89298')
          .then(response => {
            console.log(response)
            this.articles = response.data.articles;
          });
      }
    },
    created() {

    }
  }
</script>

<style>
  h3 {
    font-size: 40px;
  }

  #app {
    padding-top: 20px;

    /*font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
    line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)));*/

  }

  .jumbotron {
    min-width: 585px;
    margin: 10px auto;
    display: flex;
    justify-content: center;
    margin: 10px 10px 10px 10px;
    border: 0.08em solid black;
  }

  .media-object {
    width: 128px;
    padding: 10px;
  }

  .media {
    /*border-top: 1px solid lightgray;
    padding-top: 20px;*/
  }

  @media (max-width:600px) {
    h3 {
      font-size: 26px;
    }
    .v-btn__content {
      font-size: 16px;
    }
  }
</style>