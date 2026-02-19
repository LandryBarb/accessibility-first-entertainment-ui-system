<script lang="ts" setup>
import { ref, computed } from 'vue';

const props = withDefaults(defineProps<{
    label: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    hint?: string;
    modelValue?: string;
    id?: string;
}>(),{
    type: 'text',
    required: false,
    modelValue: '',
});

const emit = defineEmits<{
    'update:modelValue': [value: string];
}>();

//Generate unique IDs
const uniqueId =  computed(()=> props.id || 
`input-${Math.random().toString(36).substring(2, 9)}`);
const hintId = computed(()=> `${uniqueId.value}-hint`);
const errorId = computed(()=> `${uniqueId.value}-error`);

//Error state(reactive)
const errorMessage = ref<string>('');
const hasError = ref(false);

//Compute aria-describedby dynamically
const describedBy = computed(()=>{
    const ids = [];
    if(props.hint) ids.push(hintId.value);
    if(hasError) ids.push(errorId.value);
    return ids.length > 0 ? ids.join(' ') : undefined;
});

//Methods 
function showError(message: string){
    errorMessage.value = message;
    hasError.value = true;
}

function clearError(){
    errorMessage.value = '';
    hasError.value = false;
}

function getValue(){
    return props.modelValue;
}

function setValue(value: string){
    emit('update:modelValue', value);
}

// Expose methida to parent
defineExpose({
    showError,
    clearError,
    getValue,
    setValue
});

//Handle input chnages
function handleInput(event: Event){
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.value);
}
</script>
<template>

  <div class="input-control">
    <!-- Label -->
     <label for="uniqueId" class="input-control__label">
        {{ label }}
        <span v-if="required" class="input-control__required" aria-hidden="true">*</span>
     </label>

     <!-- Input -->
      <input
    :id="uniqueId"
    :type="type"
    :value="placeholder"
    :aria-required="required ? 'true' : undefined"
    :aria-describedby="describedBy"
    :aria-invalid="hasError ? 'true' : undefined"
    :class="[
        'input-control__input',
        { 'input-control__input--error' : hasError }
    ]"
    @input="handleInput"
/>



<!-- Hint -->
 <span v-if="hint" id="hintId" class="input-control__hint">
    {{  hint }}
 </span>

 <!-- Error -->
  <span v-if="hasError" :id="errorId" class="class" aria-live="polite">
  {{ errorMessage }}
  </span>
  </div>


</template>

<style lang="scss" scoped>
.input-control{
    display: flex;
    flex-direction: column;
    gap: map.get($space-scale, sm);
}
.input-control__label{
    display: block;
    font-weight: map.get($font-weight-scale, medium);
    font-size: map.get($font-size-scale, 2);
}
.input-control__required{
    color: var(--color-state-danger);
}

.input-control__input{
width: 100%;
padding: map.get($space-scale, sm);
background-color: var(--color-surface);
border: 2px solid var(--border-strong);
border-radius: var(--radius-sm);
}
</style>