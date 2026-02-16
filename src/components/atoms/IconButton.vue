<script setup >


defineProps({
    label:{
        type:String,
        required: true,
    },
    variant: {
        type: String,
        default: 'default',
        validator: (value) =>['primary', 'default', 'small'].includes(value)
    },
    disabled:{
        type:Boolean,
        default: false
    }
});
defineEmits(['click'])
</script>

<template>
    <button
    type="button"
    :class="['icon-btn', `icon-btn--${variant}`]"
    :aria-label="label"
    :disabled="disabled"
    @click="$emit('click')"
    >
    <slot />
    </button>
</template>

<style scoped lang="css">
/* Same CSS as vanilla quest-5.html */
.icon-btn {
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.icon-btn:focus {
  outline: 3px solid #fff;
  outline-offset: 2px;
}

.icon-btn:active:not(:disabled) {
  transform: scale(0.95);
}

.icon-btn--primary {
  width: 64px;
  height: 64px;
  background: #e50914;
  font-size: 1.5rem;
}

.icon-btn--primary:hover:not(:disabled) {
  background: #f40612;
  transform: scale(1.15);
}

.icon-btn--small {
  width: 36px;
  height: 36px;
  font-size: 1rem;
}

.icon-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  transform: none !important;
}
</style>