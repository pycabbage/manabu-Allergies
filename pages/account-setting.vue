<template>
    <Configs :User="User"/>
</template>

<script>
export default {
    data(){
        return {
            User: {
                id: 'tarou123',
                name:'太郎',
                age: 20,
                email: 'tarou@yamada',
                tel: 'xxx-xxxx',
                icon: 'AnonymousIcon.png',
            },
        };
    },
}
</script>
