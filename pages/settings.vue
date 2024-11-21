<script setup lang="ts">
interface SettingInputs {
  siteName: string;
  seoTitle: string;
  copyright: string;
  seoDescription: string;
}

const settingsInputs = ref<SettingInputs>({
  siteName: "",
  seoTitle: "",
  seoDescription: "",
  copyright: "",
});
</script>

<template>
  <section class="mt-5 px-6">
    <h2 class="text-xl md:text-3xl font-bold">General Settings</h2>
    <div
      class="mt-7 border mx-auto dark:border-gray-600 dark:shadow-gray-800 shadow-xl rounded-lg overflow-hidden p-6"
    >
      <div class="flex flex-col gap-y-1 items-center justify-center mx-auto">
        <UAvatar icon="i-heroicons-photo" size="3xl" />
        <p class="text-blue-500 text-sm">Upload image</p>
      </div>
      <div class="px-4 py-5 sm:p-6">
        <div class="grid grid-cols-1 gap-y-6 gap-x-10 sm:grid-cols-6 mb-6">
          <div class="sm:col-span-3">
            <label
              for="seoTitle"
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >SEO Title</label
            >
            <UInput
              id="seoTitle"
              v-model="settingsInputs.seoTitle"
              class="mt-1"
              placeholder="SEO Title"
            />
          </div>
          <div class="sm:col-span-3">
            <label
              for="siteName"
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >Site Name</label
            >
            <UInput
              id="siteName"
              v-model="settingsInputs.siteName"
              class="mt-1"
              placeholder="Site Name"
            />
          </div>
          <div class="sm:col-span-3">
            <label
              for="copyright"
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >Copyright</label
            >
            <UInput
              id="copyright"
              v-model="settingsInputs.copyright"
              class="mt-1"
              placeholder="copyright"
            />
          </div>
          <div class="sm:col-span-3">
            <label
              for="seoDescription"
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >SEO Description</label
            >
            <UInput
              id="seoDescription"
              v-model="settingsInputs.seoDescription"
              class="mt-1"
              type="email"
              placeholder="SEO Description"
            />
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <UButton size="xl">Save</UButton>
      </div>
    </div>
  </section>
</template>
