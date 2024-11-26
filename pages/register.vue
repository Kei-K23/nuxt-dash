<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";

const schema = z.object({
  username: z.string(),
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Must be at least 8 characters"),
  confirmPassword: z.string().min(8, "Must be at least 8 characters"),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  username: undefined,
  email: undefined,
  password: undefined,
  confirmPassword: undefined,
});
const isRememberPassword = ref(false);

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with data
  console.log(event.data);
}
</script>

<template>
  <div class="flex flex-col lg:flex-row w-full">
    <div
      class="hidden lg:flex w-full lg:w-1/2 bg-emerald-500 dark:bg-emerald-700 items-center justify-center flex-col p-6"
    >
      <h1 class="text-center text-white font-bold text-xl lg:text-3xl mb-10">
        VueDash - All in one Admin Dashboard
      </h1>
      <img src="/register.png" alt="register img" class="aspect-square" />
    </div>
    <div
      class="w-full lg:w-1/2 h-screen flex flex-col items-center justify-center bg-emerald-500 dark:bg-emerald-700 lg:bg-white lg:dark:bg-black"
    >
      <div
        class="w-[320px] md:w-[420px] lg:w-[480px] mx-auto overflow-hidden bg-white dark:bg-black lg:bg-none p-6 border lg:border-none shadow-xl lg:shadow-none rounded-md lg:rounded-none"
      >
        <h2 class="text-center text-2xl font-semibold">Create an Account</h2>
        <p class="text-center text-sm dark:text-gray-300 text-gray-500">
          Create a account to continue
        </p>
        <UForm
          :schema="schema"
          :state="state"
          class="space-y-4 mt-6 mb-4 w-full"
          @submit="onSubmit"
        >
          <UFormGroup label="Username" name="username">
            <UInput v-model="state.username" placeholder="John Doe" />
          </UFormGroup>
          <UFormGroup label="Email" name="email">
            <UInput v-model="state.email" placeholder="example@gmail.com" />
          </UFormGroup>

          <UFormGroup label="Password" name="password">
            <UInput
              v-model="state.password"
              type="password"
              placeholder="pass123"
            />
          </UFormGroup>
          <UFormGroup label="Confirm Password" name="confirmPassword">
            <UInput
              v-model="state.confirmPassword"
              type="password"
              placeholder="pass123"
            />
          </UFormGroup>
          <div class="flex">
            <UCheckbox
              v-model="isRememberPassword"
              name="termsAndConditions"
              label="I accept terms and conditions"
            />
          </div>

          <UButton
            type="submit"
            class="w-full text-center flex items-center justify-center"
          >
            Submit
          </UButton>
        </UForm>
        <ULink
          to="/login"
          class="text-sm dark:text-gray-300 text-gray-500 hover:underline mt-4"
          >Already have an account? Login here</ULink
        >
      </div>
    </div>
  </div>
</template>
