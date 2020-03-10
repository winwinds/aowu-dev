<template>
  <section>
    <button class="aowu-button_primary" @click="setLang('zh-CN')">中文</button>
    <button class="aowu-button_primary" @click="setLang('en')">英文</button>
    <button class="aowu-button_primary">{{ t('aowu.test.btnContent') }}</button>
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
    }
  }
};
</script>