<template>
  <div>
    <common-card title="今日交易用户数" value="509,951"></common-card>
  </div>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
  name: 'TodayUsers',
  mixins: [commonCardMixin]
}
</script>

<style>

</style>
