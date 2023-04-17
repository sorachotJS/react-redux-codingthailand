import { RootState } from './../store';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface AuthState {
  profile: string,
  email: string
}

// Define the initial state using that type
const initialState: AuthState = {
  profile: 'Dong JS',
  email: 'sc.sorachot@gmail.com'

}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    updateProfileAction: (state) => {
        state.profile = 'Sorachot Dev'
        state.email = 'dongcyber02@gmail.com'
    },
  },
})

export const { updateProfileAction } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value
export const selectAuthState = (state: RootState) => state.authState

export default authSlice.reducer