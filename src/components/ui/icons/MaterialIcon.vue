<script setup>
import { computed } from 'vue'
import * as MaterialIcons from '@vicons/material'
import { h } from 'vue'

const props = defineProps({
    icon: {
        type: String,
        required: true
    }
})

const iconComponent = computed(() => {
    return MaterialIcons[props.icon] || null
})
</script>

<template>
    <component :is="iconComponent" />
</template>
