import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({  
    name: 'menu',  
    initialState: {
    menuActiveLinks: ['/login'],
  },
  reducers: {
    setMenuActiveLinks: (state, action) => {      
      state.menuActiveLinks = [...action.payload];
    },
  },
});

export const { setMenuActiveLinks } = slice.actions;
export const selectMenuActiveLinks = state => state.menu.menuActiveLinks;

export default slice.reducer;