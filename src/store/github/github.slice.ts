import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface GithubState {
    favorites: string[];
}
const LS_FV_KEY = 'rfk';
const initialState: GithubState = { favorites: JSON.parse(localStorage.getItem(LS_FV_KEY) ?? '[]') };
const githubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        addFavorite(state, action: PayloadAction<string>) {
            if (state.favorites.includes(action.payload)) {
                return;
            }
            state.favorites.push(action.payload);

            localStorage.setItem(LS_FV_KEY, JSON.stringify(state.favorites));
        },
        removeFavorite(state, action: PayloadAction<string>) {
            state.favorites = state.favorites.filter(username => username !== action.payload);
            localStorage.setItem(LS_FV_KEY, JSON.stringify(state.favorites));
        },
    },
});

export const githubActions = githubSlice.actions;
export const githubReducer = githubSlice.reducer;
