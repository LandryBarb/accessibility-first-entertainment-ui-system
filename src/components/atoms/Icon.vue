<!-- <script lang="ts">
import {computed} from 'vue'
import { PlayIcon, StepForward, StepBack, Pause, Settings, Volume } from 'lucide-vue-next'


type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'destructive'
type ButtonSize =  'sm' | 'md' | 'g'

interface Props{
    variant?: ButtonVariant
    size?: ButtonSize
    icon: string
    disabled?: boolean
    type?: 'button'
    label: string
}

  const props = withDefaults(defineProps<Props>(),{
        variant: 'primary',
        size: 'sm',
        disabled:false,
        type: 'button',
        icon: PlayIcon
    });

    const isDisabled =  computed(()=> props.disabled)
</script>


<template>
    <button
    :type="type"
    class="button"
    :class="[`button--${variant}`, `icon-btn--${size}`]"
    >

    </button>
</template> -->