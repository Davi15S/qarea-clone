import { configureStore } from '@reduxjs/toolkit'
import navbarActiveSlicer from './navbarActiveSlicer'

export const store = configureStore({
    reducer: {
        navbarActive: navbarActiveSlicer,
    },
  })