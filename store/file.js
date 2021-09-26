export const state = () => ({
    file: ''
})

export const mutations = {
    set(state, file) {
        state.file = file;
    }
}
