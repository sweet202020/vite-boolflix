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
        LINGUA ORIGINALE: {{ original_language }}
        <img src="../assets/img/bandiera-inglese-png-6.png" alt="">

    </li>
    <li v-else-if="original_language === 'it'">
        LINGUA ORIGINALE: {{ original_language }}
        <img src="../assets/img/1200px-Bandiera_italiana_foto.svg.png" alt="">
    </li>
    <li v-else-if="original_language === 'de'">
        LINGUA ORIGINALE: {{ original_language }}
        <img src="../assets/img/Flag_of_Germany.svg.png" alt="">
    </li>
    <li v-else-if="original_language === 'es'">
        LINGUA ORIGINALE: {{ original_language }}
        <img src="../assets/img/1280px-Flag_of_Spain.svg.png" alt="">
    </li>
    <li v-else-if="original_language === 'fr'">
        LINGUA ORIGINALE: {{ original_language }}
        <img src="../assets/img/Flag_of_France_(1794–1815,_1830–1974,_2020–present).svg.png" alt="">
    </li>
    <li v-else>LINGUA ORIGINALE: {{ original_language }}</li>
</template>


<style lang="scss" scoped>
li {
    img {
        width: 20px;
    }
}
</style>