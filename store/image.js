export const state = () => ({
  image: ''
})

export const mutations = {
  set(state, image) {
    state.image = image;
  }
}
