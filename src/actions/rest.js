import { RSAA } from 'redux-api-middleware';
import { API_KEY } from '../constants';

import {
    setSummonerInfo,
    setSummonerRankedInfo,
    setSummonerLastMatches,
} from './home';

export const fetchSummonerInfo = name => async dispatch => {
    const fetchAction = {
        [RSAA]: {
            endpoint: `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${API_KEY}`,
            method: 'GET',
            types: [
                'FETCH_SUMMONER_INFO_REQUEST',
                {
                    type: 'FETCH_SUMMONER_INFO_SUCCESS',
                    payload: (action, state, res) => res.json(),
                },
                'FETCH_SUMMONER_INFO_FAILURE',
            ],
        },
    };

    const {
        payload: { id, profileIconId: iconId, summonerLevel: level, accountId },
        error,
    } = await dispatch(fetchAction);

    if (error) {
        return;
    }

    dispatch(
        setSummonerInfo({
            id,
            iconId,
            level,
            accountId,
        }),
    );
};

export const fetchSummonerRankedInfo = id => async dispatch => {
    const fetchAction = {
        [RSAA]: {
            endpoint: `https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${API_KEY}`,
            method: 'GET',
            types: [
                'FETCH_SUMMONER_RANKED_INFO_REQUEST',
                {
                    type: 'FETCH_SUMMONER_RANKED_INFO_SUCCESS',
                    payload: (action, state, res) => res.json(),
                },
                'FETCH_SUMMONER_RANKED_INFO_FAILURE',
            ],
        },
    };

    const { payload: queues, error } = await dispatch(fetchAction);

    if (error) {
        return;
    }

    const queue = queues
        .filter(q => q.queueType === 'RANKED_SOLO_5x5')
        .map(q => ({
            rank: q.rank,
            tier: q.tier,
            lp: q.leaguePoints,
            wins: q.wins,
            losses: q.losses,
        }));

    dispatch(setSummonerRankedInfo(queue[0]));
};

export const fetchSummonerLastMatches = accountId => async dispatch => {
    const fetchAction = {
        [RSAA]: {
            endpoint: `https://euw1.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?queue=420&endIndex=3&api_key=${API_KEY}`,
            method: 'GET',
            types: [
                'FETCH_SUMMONER_LAST_MATCHES_REQUEST',
                {
                    type: 'FETCH_SUMMONER_LAST_MATCHES_SUCCESS',
                    payload: (action, state, res) => res.json(),
                },
                'FETCH_SUMMONER_LAST_MATCHES_FAILURE',
            ],
        },
    };

    const {
        payload: { matches },
        error,
    } = await dispatch(fetchAction);

    if (error) {
        return;
    }

    dispatch(
        setSummonerLastMatches(
            matches.map(({ gameId: id, champion: championId, timestamp }) => ({
                id,
                championId,
                timestamp,
            })),
        ),
    );
};
