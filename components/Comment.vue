<template>
<div class="flex space-x-3 w-full rounded-md border-1px border-l border-r border-candyPink bg-transparent py-4 px-4">
  <div class="flex-shrink-0">
    <UserAvatar class="h-10 w-10 rounded-full" :name="comment.name" :photoURL="comment.photoURL"/>
  </div>
  <div class="w-full">
    <div class="text-xs flex justify-between flex-row">
      <p class="font-medium text-caribGreen">{{ comment.name }}</p>
      <span class="text-white font-medium">{{ posted }}</span>
    </div>
    <div class="mt-1 text-sm text-gray-300">
      <p>{{ comment.text }}</p>
    </div>
  </div>
</div>
</template>

<script>
import { formatDistance } from 'date-fns'

export default {
  props: {
    comment: {
      type: Object
    }
  },
  computed: {
    posted() {
      return formatDistance(new Date(this.comment.created), new Date(), {addSuffix: true})
    }
  }
}
</script>

<style scoped>

</style>
