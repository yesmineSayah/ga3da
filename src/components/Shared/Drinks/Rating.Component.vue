<template>
    <div class="row">
        <div class="col-6 like">
            <!-- <i class="hidden-md-up fa fa-thumbs-o-up"></i>  -->
            {{likes}}
        </div>
        <div class="col-6 red">
            <!-- <i class="hidden-md-up fa fa-thumbs-o-down"></i>  -->
            {{dislikes}}
        </div>
    </div>
</template>

<script>
export default {
    props: [
        "likes", "dislikes"
    ]

}
</script>

<style lang="scss" scoped>
@import '../../../main.scss';

.like {
    background-color: $green;
    border-radius: 3px;
}

.red {
    background-color: $red;
    border-radius: 3px;
}
</style>
