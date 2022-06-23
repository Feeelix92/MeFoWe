<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
})
</script>

<template>
    <Head title="Welcome" />

    <div class="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
        <div v-if="canLogin" class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
            <Link v-if="$page.props.auth.user" :href="route('dashboard')" class="text-sm underline">
                Dashboard
            </Link>

            <template v-else>
                <Link :href="route('login')" class="gap-2 underline">
                    Log in
                </Link>

                <Link v-if="canRegister" :href="route('register')" class="ml-2 underline">
                    Register
                </Link>
            </template>
        </div>
        <h1>GeoQuizR</h1>
    </div>
</template>


