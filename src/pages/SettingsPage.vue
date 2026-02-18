<script lang="ts">
import { ref } from 'vue';

import ToggleSwitch from '@/components/atoms/ToggleSwitch.vue';

const isAutoplayEnabled = ref(true);
const isHdEnabled = ref(false);
</script>

<template>
    <div class="settings-panel">
        <ToggleSwitch
       
        label="Autoplay Next Episode"
        />
<ToggleSwitch

label="Stream in HD"
/>
    </div>
</template>