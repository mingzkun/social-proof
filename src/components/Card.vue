<template>
  <div
    class="flex flex-col justify-start gap-6 px-8 py-10 mb-4 rounded-lg bg-very-dark-magenta">
    <div class="flex flex-row items-start gap-5">
      <img :src="require(`../assets/${url}.jpg`)" alt="" class="w-10 h-10 rounded-full"/>
      <div class="flex flex-col">
        <h1 class="text-sm font-bold text-white">{{ name }}</h1>
        <h2 class="text-sm font-normal text-soft-pink">{{ buyerType }}</h2>
      </div>
    </div>
    <p class="text-sm font-normal text-light-grayish-magenta">"{{ msg }}"</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    name: String,
    buyerType: String,
    msg: String,
    url: String,
  },
};
</script>

<style>
  @media (min-width: 375px) {
    body {
      background: url("../assets/bg-pattern-top-mobile.svg"),
        url("../assets/bg-pattern-bottom-mobile.svg");
      background-position: top left, bottom right;
      background-repeat: no-repeat, no-repeat;
    }
  }
  
  @media (min-width: 1024px) {
    body {
      background: url("../assets/bg-pattern-top-desktop.svg"),
        url("../assets/bg-pattern-bottom-desktop.svg");
      background-position: top left, bottom right;
      background-repeat: no-repeat, no-repeat;
    }
  }
  </style>
