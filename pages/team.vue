<script setup lang="ts">
import { TEAM_MEMBERS } from "~/constants";
import TeamUserProfileCard from "~/features/team/components/TeamUserProfileCard.vue";
</script>

<template>
  <section class="mt-5 px-6">
    <h2 class="text-xl md:text-3xl font-bold">Team</h2>
    <div class="mt-7 grid grid-cols-4 gap-x-5 gap-y-6">
      <TeamUserProfileCard
        v-for="member in TEAM_MEMBERS"
        :key="member.username"
        :member="member"
      />
    </div>
  </section>
</template>
