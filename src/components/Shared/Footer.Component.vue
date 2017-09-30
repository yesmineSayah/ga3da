<template>
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-6 col-md-4">
                    <img src="../../assets/s.jpg" class="float-right">
                </div>
                <div class="col-6 col-md-4">
                    <ul>
                        <li>
                            Politique de confidentialité
                        </li>
                        <li>
                            Termes et conditions
                        </li>
                        <li>
                            Blog
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-4">
                    <a href="#">
                        <i class="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                        <i class="fa fa-instagram"></i>
                    </a>
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
@import '../../main.scss';
.footer {
    background-color: $footer;
    height: 200px;
    margin-top: 48px;
    padding-top: 16px;
}

ul {
    list-style-type: none;
}

.fa {
    font-size: 30px;
    background-color: $button;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    padding-left: 12px;
    padding-top: 8px;
    color: $text2;
}

.fa:hover {
    transform: scale(1.1);
    background-color: $color1Hover;
    transition: transform 200ms;
    transition: background-color 200ms;
}

.fa-facebook {
    padding-top: 10px;
    padding-left: 15px;
}
</style>
