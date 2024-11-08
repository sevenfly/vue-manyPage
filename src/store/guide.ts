import { defineStore } from 'pinia'

interface guideState {
  displayDiyGuide: object
}

export const guideStore = defineStore({
  id: 'gudieEnter',
  state(): guideState {
    return {
      displayDiyGuide: {}
    }
  },
  getters: {
    // IsphotoDIYGuideType: (state: photoDIYState) => !!state.photoDIYGuideType
  },
  actions: {}
})
