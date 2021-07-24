<template>
  <div class="flex flex-col items-center justify-center gap-2 p-4 rounded-lg lg:min-w-max lg:pl-10 lg:pr-16 lg:mb-4 lg:flex-row lg:items-baseline lg:justify-center bg-light-grayish-magenta">
    <div class="flex gap-2">
      <img src="../assets/icon-star.svg" alt="" class="w-4 h-4" />
      <img src="../assets/icon-star.svg" alt="" class="w-4 h-4" />
      <img src="../assets/icon-star.svg" alt="" class="w-4 h-4" />
      <img src="../assets/icon-star.svg" alt="" class="w-4 h-4" />
      <img src="../assets/icon-star.svg" alt="" class="w-4 h-4" />
    </div>
    <p class="text-base font-bold text-very-dark-magenta">{{rating}}</p>
  </div>
</template>

<script>
export default {
  name: "Rating",
  props: {
    rating: String,
  },
};
</script>