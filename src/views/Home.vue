<template>
  <div class="home">
    <button @click="handleDashboard">Dashboard</button>
    <div class="search-soldier">
      <input v-model.trim="searchKeyword" />
      <button
        @click="handleSearch"
        :disabled="searchKeyword === ''"
        placeholder="훈련병 이름 검색"
      >
        Let's write!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchKeyword: ""
    };
  },
  methods: {
    handleDashboard() {
      this.$router.push("/dashboard");
    },
    handleSearch() {
      this.$router.push({
        name: "Write",
        params: { soldier: this.searchKeyword }
      });
    }
  }
};
</script>
