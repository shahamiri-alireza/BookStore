<template>
<div class="w-1/4 flex flex-col my-10 mx-auto border-green-600 border-solid border-2 rounded-lg px-5" v-if="$store.state.book.length != 0">
    <div><img :src="$store.state.book[0].image" alt="bookImage" class="w-2/4 mx-auto my-3"></div>
    <div class="w-full flex justify-around">
        <table class="w-full">
            <tr>
                <td>
                    {{$store.state.book[0].title}}
                </td>
                <th scope="row">نام اثر</th>
            </tr>
            <tr>
                <td>{{$store.state.book[0].final_price}}</td>
                <th scope="row">قیمت</th>
            </tr>
            <tr>
                <td>{{$store.state.count}}</td>
                <th scope="row">تعداد</th>
            </tr>
            <tr>
                <td class="font-bold text-lg">{{$store.state.count * $store.state.book[0].final_price}}</td>
                <th scope="row">قیمت نهایی</th>
            </tr>
        </table>
    </div>
    <div class="w-full flex justify-around my-5">
        <button class="w-2/3 mx-auto bg-green-600 h-9 text-white rounded hover:bg-white hover:text-green-600 border-green-600 border-2 border-solid">
            انتقال به درگاه پرداخت
        </button>
    </div>
</div>
</template>

<script>
export default {
    name: 'Checkout',
}
</script>

<style>

</style>
