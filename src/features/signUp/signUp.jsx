import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const signUp = createAsyncThunk('users/signUp',
  async (signUpData) => {
    try {
      const response = await axios.post('http://localhost:4000/api/auth/signup', signUpData);
      console.log(response.data);
    } catch (e) {
      console.log(e.data.message);
    }
  });

export default signUp;
