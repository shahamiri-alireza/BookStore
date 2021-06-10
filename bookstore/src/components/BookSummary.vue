<template>
<div class="w-1/4 flex flex-col m-5 border-blue-600 border-solid border-2 rounded-lg px-5">
    <div><img :src="image" alt="bookImage" class="w-1/4 mx-auto my-3"></div>
    <div class="w-full flex justify-around">
        <table class="w-full">
            <caption class="font-bold my-3">{{title}}</caption>
            <tr>
                <td v-for="author in authors" :key="authors.indexOf(author)">
                    {{author.first_name}} {{author.last_name}}
                </td>
                <th scope="row">نویسندگان</th>
            </tr>
            <tr>
                <td>{{pages}}</td>
                <th scope="row">صفحات</th>
            </tr>
            <tr>
                <td>{{edition}}</td>
                <th scope="row">سری چاپ</th>
            </tr>
            <tr>
                <td>{{count}}/{{remaining}}</td>
                <th scope="row">تعداد</th>
            </tr>
            <tr>
                <td>{{finalPrice}}</td>
                <th scope="row">قیمت</th>
            </tr>
        </table>
    </div>
    <div class="w-full flex justify-around my-5">
        <button class="w-2/3 mx-auto bg-blue-600 h-9 text-white rounded">اطلاعات بیشتر و خرید</button>
    </div>
</div>
</template>

<script>
export default {
    name: 'BookSummary',
    props: {
        image: String,
        title: String,
        authors: Array,
        pages: Number,
        edition: String,
        count: Number,
        remaining: Number,
        price: Number,
        finalPrice: Number,
    },
}
</script>

<style>
td, th{
    padding: 0.5rem 1rem;
    border-top: 1px solid #eff2f5;
}
th{
    text-align: right;
}

</style>
