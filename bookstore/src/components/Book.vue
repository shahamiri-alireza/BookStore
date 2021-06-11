<template>
<div v-if="$store.state.book.length !=0 " class="w-4/5 h-96 flex my-20 mx-auto">
    <div class="w-1/2 order-2">
        <img :src="$store.state.book[0].image" class="w-1/2 mx-auto" alt="">
    </div>
    <div class="w-1/2 order-1">
        <h2 class="text-right font-bold text-2xl">{{$store.state.book[0].title}}</h2>
        <h3 class="text-right my-3" v-for="author in $store.state.book[0].authors" :key="$store.state.book[0].authors.indexOf(author)">{{author.first_name}} {{author.last_name}}</h3>
        <hr>
        <table class="w-full">
            <tr v-if="$store.state.book[0].publisher">
                <td>{{$store.state.book[0].publisher.name}}</td>
                <th>انتشارات</th>
            </tr>
            <tr>
                <td>{{$store.state.book[0].edition}}</td>
                <th>سری چاپ</th>
            </tr>
            <tr>
                <td>{{$store.state.book[0].page_count}}</td>
                <th>تعداد صفحه</th>
            </tr>
            <tr>
                <td>{{$store.state.book[0].final_price}}</td>
                <th>قیمت</th>
            </tr>
        </table>
        <div class="flex flex-col w-full my-10">
            <input class="mx-auto text-center" placeholder="Count" type="number" id="bookcount" min="1" :max="$store.state.book[0].count" v-model.number="count">
            <button @click="$store.commit('getCount', count)" class="mx-auto w-1/3 my-4 bg-blue-600 h-9 text-white rounded hover:bg-white hover:text-blue-600 border-blue-600 border-2 border-solid">
            <router-link :to="{name:'Checkout'}" class="w-full">خرید</router-link>
            </button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Book',

    mounted() {
        this.$store.dispatch('getBookData', this.$route.params.id)
        console.log(this.$store.state.book)
    },
}
</script>

<style>

</style>
