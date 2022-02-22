<template>
    <!-- 
Soon to be a multi-menu. 
    -->
    <div>
        <div class="center">
            <vs-button @click.prevent="active = !active" id="nav" color="#572f7d" transparent>
                <i class="bx bx-menu-alt-left"></i>
                <template #animate>
                    <i class="bx bx-menu-alt-right"></i>
                </template>
            </vs-button>
            <vs-dialog not-close auto-width not-padding v-model="active">
                <div class="con-image">
                    <!-- <img src="/foto1.png" alt /> -->
                </div>
            </vs-dialog>
        </div>
    </div>
</template>



 <script>
export default {
    data: () => ({
        active: false
    })
}
</script>





<style lang="css">
#nav {
    bottom: 0;
    right: 0;
    display: block;
    position: fixed;
    margin-right: 40px;
    margin-bottom: 40px;
}
</style>

