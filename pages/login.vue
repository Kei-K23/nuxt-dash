<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Must be at least 8 characters"),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  email: undefined,
  password: undefined,
});
const isRememberPassword = ref(false);

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with data
  console.log(event.data);
}
</script>

<template>
  <div
    class="w-full h-screen flex flex-col items-center justify-center bg-emerald-500 dark:bg-emerald-700"
  >
    <div
      class="w-[320px] md:w-[450px] mx-auto border dark:border-gray-600 dark:shadow-gray-800 shadow-xl rounded-lg overflow-hidden p-6 bg-white dark:bg-neutral-800"
    >
      <h2 class="text-center text-2xl font-semibold">Login to Account</h2>
      <p class="text-center text-sm dark:text-gray-300 text-gray-500">
        Please enter your email and password to continue
      </p>
      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4 mt-6 mb-4"
        @submit="onSubmit"
      >
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
        <div class="flex items-center justify-between gap-x-4">
          <UCheckbox
            v-model="isRememberPassword"
            name="rememberPassword"
            label="Remember Password"
          />
          <ULink
            to="/forget-password"
            class="text-sm font-semibold hover:underline"
            >Forget Password?</ULink
          >
        </div>

        <UButton
          type="submit"
          class="w-full text-center flex items-center justify-center"
        >
          Submit
        </UButton>
      </UForm>
      <ULink
        to="/register"
        class="text-sm dark:text-gray-300 text-gray-500 hover:underline mt-4"
        >Don't have an account? Register here</ULink
      >
    </div>
  </div>
</template>
