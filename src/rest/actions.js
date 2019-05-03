import { RSAA } from 'redux-api-middleware';

import { setSummonerInfo } from '../home/modules/actions';

export const fetchSummonerInfo = name => async dispatch => {
    const fetchAction = {
        [RSAA]: {
            endpoint: `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=RGAPI-15b020b1-7932-4c9c-97c2-8c9d855c7d69`,
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
        payload: { profileIconId: iconId, summonerLevel: level },
        error,
    } = await dispatch(fetchAction);

    if (error) {
        return;
    }

    dispatch(
        setSummonerInfo({
            iconId,
            level,
        }),
    );
};
