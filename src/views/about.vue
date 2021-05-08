<template>
    <div style="background: #000;">
        <dv-decoration-1 style="width:200px;height:50px;" />
        <!-- <dv-decoration-12 style="width:150px;height:150px;" /> -->
    </div>
</template>
<script lang="ts">
import DvDecoration1 from "/~/decoration1.vue"
// import DvDecoration12 from "/~/decoration12.vue"
export default {
    components: {
        "dv-decoration-1": DvDecoration1,
        // "dv-decoration-12": DvDecoration12,
    },
    data(){
        return {}
    },

}
</script>