import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface SliceState {
  status: 'loading' | 'resolved' | 'rejected' | null;
  response: string | null;
}

const initialState: SliceState = {
  status: null,
  response: null,
}

export const sendData = createAsyncThunk(
  'form/sendData',
  async function (arg: string): Promise<string> {
    return new Promise((res) => {
      setTimeout(() => {
         res(arg) 
      }, 1000)
    })
  }
)

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendData.pending, (state) => {
      state.status = 'loading';
    })
    builder.addCase(sendData.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.response = action.payload;
    })
  }
})

export default formSlice.reducer;