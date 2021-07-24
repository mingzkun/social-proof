<template>
  <div class="flex flex-col justify-center lg:flex-row lg:h-72">
    <Card class="lg:self-start lg:mr-6 lg:w-1/3" :url="colton.photo" :name="colton.name" :buyerType="buyerType" :msg="colton.msg" />
    <Card class="lg:self-center lg:mr-6 lg:w-1/3" :url="irene.photo" :name="irene.name" :buyerType="buyerType" :msg="irene.msg" />
    <Card class="lg:self-end lg:w-1/3" :url="anne.photo"  :name="anne.name" :buyerType="buyerType" :msg="anne.msg" />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "CardList",
  components: {
    Card,
  },
  data() {
    return {
      buyerType: "Verified Buyer",
      colton: {
        photo: "image-colton",
        name: "Colton Smith",
        msg:
          "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
      },
      irene: {
        photo: "image-irene",
        name: "Irene Roberts",
        msg:
          "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
      },
      anne: {
        photo: "image-anne",
        name: "Anne Wallace",
        msg:
          "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
      },
    };
  },
};
</script>
