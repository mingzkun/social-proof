<template>
  <div class="flex flex-col justify-center gap-8 lg:gap-4 lg:mr-24 lg:items-start">
    <h1 class="text-4xl font-bold text-center lg:text-5xl lg:max-w-xl lg:text-left text-very-dark-magenta">
     {{title}}
    </h1>
    <p class="text-base font-medium text-center lg:max-w-3xl lg:text-left text-dark-grayish-magenta">
      {{description}}
    </p>
  </div>
</template>

<script>
export default {
  name: "Heading",
  props: {
    title: String,
    description: String,
  },
  data(){
    return {
      title: " 10,000+ of our users love our products.",
      description: "We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services."
    }
  }
};
</script>
