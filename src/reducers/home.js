export const defaultState = {
    summoner: { id: '', level: 0, iconId: 0, name: 'goffreder', accountId: '' },
    lastMatches: [],
    ranked: {
        rank: '',
        tier: '',
        lp: 0,
        wins: 0,
        losses: 0,
    },
};

const handlers = {
    SET_SUMMONER_INFO: (state, { payload }) => ({
        ...state,
        summoner: {
            ...state.summoner,
            ...payload,
        },
    }),
    SET_SUMMONER_RANKED_INFO: (state, { payload }) => ({
        ...state,
        ranked: {
            ...state.ranked,
            ...payload,
        },
    }),
    SET_SUMMONER_LAST_MATCHES: (state, { payload }) => ({
        ...state,
        lastMatches: [...payload],
    }),
};

export default (state = defaultState, action = {}) => {
    if (typeof handlers[action.type] === 'undefined') {
        return state;
    }

    return handlers[action.type](state, action);
};

export const getSummonerId = state => state.home.summoner.id;
export const getSummonerName = state => state.home.summoner.name;
export const getSummonerLevel = state => state.home.summoner.level;
export const getSummonerIconId = state => state.home.summoner.iconId;
export const getSummonerAccountId = state => state.home.summoner.accountId;

export const getSummonerRankedInfo = state => state.home.ranked;

export const getSummonerLastMatches = state => state.home.lastMatches;
