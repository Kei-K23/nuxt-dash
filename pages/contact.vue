<script setup lang="ts">
import { CUSTOMER_CONTACT } from "~/constants";
import ContactCard from "~/features/contact/components/ContactCard.vue";
import CreateNewContactModal from "~/features/contact/components/CreateNewContactModal.vue";
import type { Contact } from "~/types";

let contacts = reactive<Contact[]>(CUSTOMER_CONTACT);
</script>

<template>
  <section class="mt-5 px-6">
    <div class="flex items-center gap-x-4 justify-between">
      <h2 class="text-xl md:text-3xl font-bold">Contact</h2>
      <CreateNewContactModal
        @create-contact="
          (contact) => {
            contacts.push(contact);
          }
        "
      />
    </div>
    <div class="mt-7 grid grid-cols-4 gap-x-5 gap-y-6">
      <ContactCard
        v-for="contact in contacts"
        :key="contact.id"
        :contact="contact"
      />
    </div>
  </section>
</template>
