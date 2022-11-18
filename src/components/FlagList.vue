<script>
export default {
    name: 'FlagList',
    props: {
        original_language: String
    }, data() {
        return {
            flags: ["it", "en", "es", "de", "fr"]
        }
    }, methods: {
        flagList(lang) {
            return new URL(`../assets/img/${lang}.png`, import.meta.url).href
        },
        isFlag(lang) {
            if (this.flags.includes(lang)) {
                return true
            } else {
                return false
            }
        }
    }

}
</script>

<template>
    <li v-if="isFlag(original_language)">
        <span>LINGUA ORIGINALE: {{ original_language }}</span>
        <img :src="flagList(original_language)" alt="">
    </li>
    <li v-else>{{ original_language }}</li>
</template>


<style lang="scss" scoped>
li {
    img {
        width: 20px;
    }
}
</style>