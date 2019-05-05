import { createAction } from 'redux-actions';

export const setSummonerInfo = createAction('SET_SUMMONER_INFO', info => info);

export const setSummonerRankedInfo = createAction(
    'SET_SUMMONER_RANKED_INFO',
    info => info,
);

export const setSummonerLastMatches = createAction(
    'SET_SUMMONER_LAST_MATCHES',
    matches => matches,
);
