<template>
  <div>
    <h1 class="h-style">CG Future Test System</h1>
    <div>
      <input class="input-api-url" type="text" name="apiUrl" v-model="apiUrl" placeholder="Interface URL"/>
    </div>
    <div></div>
    <div>
      <textarea class="input-json-content" name="jsonContent" v-model="jsonContent" placeholder="Request JSON"
                rows="15"></textarea>
    </div>
    <div>
      <textarea class="response-content" v-model="response" placeholder="Response" rows="18"></textarea>
    </div>

    <button class="input-commit btn" v-on:click="submit">commit</button>
  </div>

</template>

<script>
  export default {
    name: "",
    data() {
      return {
        apiUrl: '',
        jsonContent: '',
        url: '/test/commit',
        response: ''
      }
    },

    methods: {
      submit: function () {
        this.response = '';
        let req = {
          apiUrl: this.apiUrl,
          jsonContent: this.jsonContent
        };
        if(this.apiUrl === '' || this.jsonContent === ''){
          this.response = "请填写请求参数";
          return;
        }
        this.$http.post(this.url, req,
        {
          withCredentials: true  //打开cookie
        }
      ).
        then(resp => {
          console.log("resp = " + JSON.stringify(resp));
          this.response = JSON.stringify(resp);
        }).catch(error => {
          this.response = JSON.stringify(error);
        });
      }
    }
  }
</script>

<style scoped>

  @import '../../static/css/TestCommit.css';

</style>
