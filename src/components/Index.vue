<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-12 ribbi">
                        <img class="img-fluid" src="../assets/ribbi.png">
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="div div1">
                    <img class="img-fluid fixedHeight" src="../assets/9a3dettes-logo-web-crop-u352.png">
                    <img class="img-fluid fixedPosition" src="../assets/u372-4.png">
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="div div2">
                    <img class="img-fluid fixedHeight" src="../assets/erreb7-logo-web.png">
                    <img class="img-fluid fixedPosition" src="../assets/u401-4.png">
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="div div3">
                    <img class="img-fluid fixedHeight" src="../assets/coupon-web.png">
                    <img class="img-fluid fixedPosition" src="../assets/u429-4.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../main.scss';
.div {
    width: 100%;
    text-align: center;
    height: 320px;
    margin-top: 12px;
}

.div:hover {
    transition: background-color 200ms;
}

.div1 {
    @extend .div;
    background-color: $color1;
}

.div1:hover {
    background-color: $color1Hover;
}

.div2 {
    @extend .div;
    background-color: $color2;
}

.div2:hover {
    background-color: $color2Hover;
}

.div3 {
    @extend .div;
    background-color: $color3;
}

.div3:hover {
    background-color: $color3Hover;
}

.fixedHeight {
    min-height: 250px;
}

.fixedPosition {
    top: 265px;
    position: absolute;
    left: 0px;
    right: 0px;
    margin-left: auto;
    margin-right: auto;
    width: 200px;
}

.ribbi {
    margin-top: 24px;
    margin-bottom: 24px;

    @media screen and (min-width: 579px) {
        max-width: 700px;
        position: relative;
        left: 0px;
        right: 0px;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>
