<template>
  <div class="flex flex-col gap-10 mx-6 my-24 lg:gap-8 lg:max-h-screen lg:items-start lg:justify-center lg:my-32 lg:mx-44">
    <div class="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:mb-10">
      <Heading />
      <div class="flex flex-col gap-4 lg:gap-0">
        <Rating class="lg:self-start" rating="Rated 5 Stars in Reviews" />
        <Rating class="lg:self-center" rating="Rated 5 Stars in Report Guru" />
        <Rating class="lg:self-end" rating="Rated 5 Stars in BestTech" />
      </div>
    </div>
    <CardList />
    <div class="text-sm font-normal lg:self-center lg:flex lg:gap-1 lg:fixed lg:bottom-6 text-very-dark-magenta">
      <p>Challenge by <a class="no-underline lg:underline hover:text-soft-pink" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.</p>
      <p>Coded by <a class="no-underline lg:underline lg:hover:text-soft-pink" href="https://www.instagram.com/sightsaming/" target="_blank">KUNLAKARN</a></p>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
import Rating from "@/components/Rating.vue";
import CardList from "@/components/CardList.vue";

export default {
  name: "SocialProof",
  components: {
    Heading,
    Rating,
    CardList,
  },
};
</script>
