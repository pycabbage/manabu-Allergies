<template>
    <v-hover v-slot="{hover}">
        <v-icon :color="hover ? '#00B9FF' : '#565656'"
                size="50">
            mdi-arrow-left
        </v-icon>
    </v-hover>
</template>
