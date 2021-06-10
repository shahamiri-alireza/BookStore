<template>
<div v-if="$store.state.books.length != 0" class="flex justify-around flex-wrap">
<BookSummary 
v-for="item in $store.state.books[0]" :key="$store.state.books.indexOf(item)"
:image = "item.image"
:title="item.title"
:authors="item.authors"
:pages="item.page_count"
:edition="item.edition"
:count="item.count"
:remaining="item.count"
:price="item.price"
:finalPrice="item.final_price"
/>
</div>
</template>

<script>
import BookSummary from '@/components/BookSummary.vue'

export default {
  name: 'Home',
  components: {
    BookSummary,
  },
  mounted(){
    this.$store.dispatch('getBooksData')
  }
}
</script>
