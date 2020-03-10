<template>
  <section>
    <button class="aowu-button_primary" @click="setLang('zh-CN')">中文</button>
    <button class="aowu-button_primary" @click="setLang('en')">英文</button>
    <button class="aowu-button_primary">{{ t('aowu.test.btnContent',{"name":"二哈"}) }}</button>
    <button @click="setTheme('darkTheme')">黑夜模式</button>
    <button @click="setTheme('normalTheme')">正常模式</button>
  </section>

  <!-- <button>{{ t('aowu.test.btnContent') }}</button> -->
</template>
<script type="text/babel">
import Locale from "../../../src/mixins/locale";

export default {
  name: "AowuButton",
  mixins: [Locale],
  data() {
    return {};
  },
  methods: {
    setLang: function(lang) {
      localStorage.setItem("AOWU_LANGUAGE", lang);
      alert("切换语言成功！！");
      location.reload();
    },
    setTheme: function(themeMode) {
      let headEle = document.querySelector("head");
      // console.log("headEle:", headEle.innerHTML);
      if (themeMode === "darkTheme") {
        console.log("set darkTheme");
        headEle.innerHTML +=
          "<link name='darkTheme' rel='stylesheet' type='text/css' href='http://47.103.151.107:8081/css/dark-theme.css'></link>";
      } else if (themeMode === "normalTheme") {
        console.log("set normalTheme");
        let darkTheme = document.querySelectorAll("link[name='darkTheme']")[0];
        !darkTheme || darkTheme === "" ? "" : headEle.removeChild(darkTheme);
      }
    }
  }
};
</script>