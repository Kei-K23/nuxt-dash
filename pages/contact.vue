<script setup lang="ts">
import { CUSTOMER_CONTACT } from "~/constants";
import ContactCard from "~/features/contact/components/ContactCard.vue";
</script>

<template>
  <section class="mt-5 px-6">
    <h2 class="text-xl md:text-3xl font-bold">Contact</h2>
    <div class="mt-7 grid grid-cols-4 gap-x-5 gap-y-6">
      <ContactCard
        v-for="contact in CUSTOMER_CONTACT"
        :key="contact.username"
        :contact="contact"
      />
    </div>
  </section>
</template>
