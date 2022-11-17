<script>
export default {
    name: 'FlagList',
    props: {
        original_language: String
    }
}
</script>

<template>
    <li v-if="original_language === 'en'">
        lingua originale: {{ original_language }}
        <img src="../assets/img/bandiera-inglese-png-6.png" alt="">

    </li>
    <li v-else-if="original_language === 'it'">
        lingua originale: {{ original_language }}
        <img src="../assets/img/1200px-Bandiera_italiana_foto.svg.png" alt="">
    </li>
    <li v-else-if="original_language === 'de'">
        lingua originale: {{ original_language }}
        <img src="../assets/img/Flag_of_Germany.svg.png" alt="">
    </li>
    <li v-else-if="original_language === 'es'">
        lingua originale: {{ original_language }}
        <img src="../assets/img/1280px-Flag_of_Spain.svg.png" alt="">
    </li>
    <li v-else-if="original_language === 'fr'">
        lingua originale: {{ original_language }}
        <img src="../assets/img/Flag_of_France_(1794–1815,_1830–1974,_2020–present).svg.png" alt="">
    </li>
    <li v-else>lingua originale: {{ original_language }}</li>
</template>


<style lang="scss" scoped>
li {
    img {
        width: 20px;
    }
}
</style>