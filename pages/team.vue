<script setup lang="ts">
import { TEAM_MEMBERS } from "~/constants";
import CreateNewMemberModal from "~/features/team/components/CreateNewMemberModal.vue";
import TeamUserProfileCard from "~/features/team/components/TeamUserProfileCard.vue";
import type { Member } from "~/types";

let members = reactive<Member[]>(TEAM_MEMBERS);
</script>

<template>
  <section class="mt-5 px-6">
    <div class="flex items-center justify-between gap-x-4">
      <h2 class="text-xl md:text-3xl font-bold">Team</h2>
      <CreateNewMemberModal
        @create-member="
          (member) => {
            members.push(member);
          }
        "
      />
    </div>
    <div
      class="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6"
    >
      <TeamUserProfileCard
        v-for="member in members"
        :key="member.username"
        :member="member"
      />
    </div>
  </section>
</template>
