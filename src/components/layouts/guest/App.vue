<script setup></script>

<template>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 min-h-screen min-w-full divide-x bg-primary">
        <div class="hidden md:block lg:col-span-2 bg-accent"></div>
        <div class="lg:col-span-1">
            <RouterView />
        </div>
    </div>
</template>
