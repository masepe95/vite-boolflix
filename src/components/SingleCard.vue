<script>
export default {
    data() {
        return {
        };

    },
    props: {
        titolo: String,
        originale: String,
        lingua: String,
        copertina: String,
        desc: String,
    },

};
</script>

<template>
    <div class="col-xxl-2 col-md-3 col-sm-6 py-2">
        <div class="myCard">
            <h1>{{ titolo }}</h1>
            <p>{{ lingua }}</p>
            <p>{{ desc }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>