import { configureStore } from '@reduxjs/toolkit'
import authslicer from '../Features/auth'

const store = configureStore({
  reducer: {
    auth: authslicer,
  },
})

export default store