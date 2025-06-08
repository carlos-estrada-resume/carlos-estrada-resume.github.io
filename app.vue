<template>
  <transition
    enter-active-class="transition-all duration-1000 ease-in-out"
    leave-active-class="transition-all duration-1000 ease-in-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
    appear>
    <div class="h-screen p-2 flex flex-col items-center justify-center">
      <UApp>
        <div class="flex flex-row p-4 w-full justify-between">
          <span>
            {{ name }}
          </span>
          <ClientOnly v-if="!colorMode?.forced">
            <UButton
              class="cursor-pointer"
              color="neutral"
              variant="ghost"
              @click="isDark = !isDark">
              <Icon v-if="isDark" name="lucide-moon" />
              <Icon v-else name="lucide-sun" />
            </UButton>
            <template #fallback>
              <div class="size-8" />
            </template>
          </ClientOnly>
        </div>
        <UTabs
          :unmount-on-hide="false"
          :items="items"
          class="h-full w-200"
          color="secondary">
          <template #about="{ item }">
            <UCard class="h-full mt-5">
              <template #header>
                <div class="flex justify-center">
                  {{ item.label }}
                </div>
              </template>

              <div class="flex justify-center">this is the content inside</div>

              <template #footer>
                <div class="flex justify-center">
                  Ill be putting content soon!
                </div>
              </template>
            </UCard>
          </template>
          <template #skills="{ item }">
            <UCard class="h-full mt-5">
              <template #header>
                <div class="flex justify-center">
                  {{ item.label }}
                </div>
              </template>

              <div class="flex justify-center">this is the content inside</div>

              <template #footer>
                <div class="flex justify-center">
                  Ill be putting content soon!
                </div>
              </template>
            </UCard>
          </template>
          <template #projects="{ item }">
            <UCard class="h-full mt-5">
              <template #header>
                <div class="flex justify-center">
                  {{ item.label }}
                </div>
              </template>

              <div class="flex justify-center">this is the content inside</div>

              <template #footer>
                <div class="flex justify-center">
                  Ill be putting content soon!
                </div>
              </template>
            </UCard>
          </template>
          <template #contact="{ item }">
            <UCard class="h-full mt-5">
              <template #header>
                <div class="flex justify-center">
                  {{ item.label }}
                </div>
              </template>

              <div class="flex justify-center">this is the content inside</div>

              <template #footer>
                <div class="flex justify-center">
                  Ill be putting content soon!
                </div>
              </template>
            </UCard>
          </template>
        </UTabs>
      </UApp>
    </div>
  </transition>
</template>
<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui";

const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(_isDark) {
    colorMode.preference = _isDark ? "dark" : "light";
  },
});

const name = ref("</>");
const items = ref<TabsItem[]>([
  {
    label: "About",
    icon: "i-lucide-user",
    content: "This is the about content.",
    slot: "about" as const,
  },
  {
    label: "Skills",
    icon: "i-lucide-medal",
    content: "This is the skill content.",
    slot: "skills" as const,
  },
  {
    label: "Projects",
    icon: "i-lucide-folder",
    content: "This is the projects content.",
    slot: "projects" as const,
  },
  {
    label: "Contact",
    icon: "i-lucide-phone",
    content: "This is the contact content.",
    slot: "contact" as const,
  },
]);
</script>
