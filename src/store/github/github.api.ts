import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ServerResponse, IUser, IRepos } from '../../models/users.model';
export const githubApi = createApi({
    reducerPath: 'githubApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com',
        prepareHeaders: headers => {
            headers.set('Authorization', `token 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`);
            return headers;
        },
    }),
    endpoints: build => ({
        searchUsers: build.query<IUser[], string>({
            query: (search: string) => ({
                url: 'search/users',
                params: { q: search, per_page: 10 },
            }),
            transformResponse: (response: ServerResponse<IUser>) => response.items,
        }),
        getUserRepos: build.query<IRepos[], string>({
            query: (name: string) => ({
                url: `users/${name}/repos`,
                params: { per_page: 10 },
            }),
        }),
    }),
});

export const { useSearchUsersQuery, useLazyGetUserReposQuery } = githubApi;
