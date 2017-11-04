<template>
    <div class="row">
        <div v-if="beer" class="col-4">
            <div class="row">
                <div class="col-6 span">
                    <i class="fa fa-beer"></i>
                </div>
                <div class="col-6">
                    {{beer}}
                </div>
            </div>
        </div>
        <div v-if="wine" class="col-4">
            <div class="row">
                <div class="col-6 span">
                    <i class="fa fa-glass"></i>
                </div>
                <div class="col-6">
                     {{wine}}
                </div>
            </div>
        </div>
        <div v-if="bottle" class="col-4">
            <div class="row">
                <div class="col-6 span">
                    <i class="fa fa-check"></i>
                </div>
                <div class="col-6">
                     {{bottle}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:[
        "beer","wine","bottle"
    ]

}
</script>

<style lang="scss" scoped>
@import '../../../main.scss';
.span {
    background-color: $button;
    border-radius: 3px;
}
</style>
