import React, { useState } from 'react';
import { useSearchUsersQuery } from '../../store/github/github.api';
import { useLazyGetUserReposQuery } from '../../store/github/github.api';
import { useDebounce } from '../../hooks/debounce';
import { TextField } from '@mui/material';
import { Styled } from './HomePageStyled';
import { CircularProgress } from '@mui/material';
import { RepoCard } from '../../components/RepoCard/RepoCard';
const HomePage = () => {
    const [search, setSearch] = useState('');
    const debounced = useDebounce(search, 500);
    const { isFetching, data, isError } = useSearchUsersQuery(debounced, {
        skip: debounced.length < 1,
        refetchOnFocus: true,
    });
    const [fetchRepos, { data: repos, isFetching: areReposLoading, isError: isReposError }] = useLazyGetUserReposQuery();
    const clickHandler = (username: string) => {
        fetchRepos(username);
    };
    return (
        <Styled.Container>
            <TextField autoComplete='off' label='Find GitHub username...' value={search} onChange={e => setSearch(e.target.value)} variant='outlined' style={{ width: '400px' }} />
            {isError && <div>Something went wrong...</div>}
            {debounced.length > 0 ? (
                <>
                    {data?.length === 0 && !isFetching && <div>No results</div>}
                    {isFetching ? (
                        <div>
                            <CircularProgress />
                        </div>
                    ) : (
                        <Styled.List>
                            {data?.map(user => (
                                <Styled.ListElement key={user.id} onClick={() => clickHandler(user.login)}>
                                    {user.login}
                                </Styled.ListElement>
                            ))}
                        </Styled.List>
                    )}
                </>
            ) : (
                ''
            )}
            {areReposLoading && <CircularProgress />}
            {isReposError && <div>Failed to fetch repositories...</div>}
            <Styled.CardContainer>
                {repos?.map(repo => (
                    <RepoCard key={repo.id} repo={repo} />
                ))}
            </Styled.CardContainer>
            {repos?.length === 0 && !areReposLoading && <div style={{ fontFamily: 'cursive', fontSize: '24px' }}>No repos found...</div>}
        </Styled.Container>
    );
};

export default HomePage;
