<template>
<div class="my-5 mx-4 flex flex-col gap-20 text-orange-600 bg-gray-800 py-4 pt-20 px-7">
    <div class="border-b border-b-gray-700 pb-10">
        <img src="../assets/apple.jpg" class="mx-auto">
        <h1 class="text-3xl font-extrabold mt-4 ">{{ $t("apple") }}</h1>
        <div>
            <h2 class="text-xl font-semibold my-3">{{ $t("appleIntro") }}</h2>
            <span>{{ $t("appleInfo") }}</span>
        </div>
    </div>

    <div class="border-b border-b-gray-700 pb-10">
        <img src="../assets/jpmorgan.jpg" class="mx-auto">
        <h1 class="text-3xl font-extrabold mt-4 ">{{ $t("jpMorgan") }}</h1>
        <div>
            <h2 class="text-xl font-semibold my-3">{{ $t("jpMorganIntro") }}</h2>
            <span>{{ $t("jpMorganInfo") }}</span>
        </div>
    </div>

    <div class="border-b border-b-gray-700 pb-10">
        <img src="../assets/ibm.png" class="mx-auto">
        <h1 class="text-3xl font-extrabold mt-4 ">{{ $t("ibm") }}</h1>
        <div>
            <h2 class="text-xl font-semibold my-3">{{ $t("ibmIntro") }}</h2>
            <span>{{ $t("ibmInfo") }}</span>
        </div>
    </div>

    <div class=" pb-10">
        <img src="../assets/google.webp" class="mx-auto">
        <h1 class="text-3xl font-extrabold mt-4 ">{{ $t("google") }}</h1>
        <div>
            <h2 class="text-xl font-semibold my-3">{{ $t("googleIntro") }}</h2>
            <span>{{ $t("googleInfo") }}</span>
        </div>
    </div>

</div>
</template>