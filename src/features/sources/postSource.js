import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const addSource = createAsyncThunk('users/signUp',
  async (sourceData) => {
    try {
      const response = await axios.post('http://localhost:4000/api/:source', sourceData);
      console.log(response.data);
    } catch (e) {
      console.log(e.data.message);
    }
  });

export default addSource;
