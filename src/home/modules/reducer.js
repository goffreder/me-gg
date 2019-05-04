export const defaultState = {
    summoner: { level: 0, iconId: 0, name: 'goffreder', accountId: 0 },
    lastMatches: [],
};

const handlers = {
    SET_SUMMONER_INFO: (state, { payload }) => ({
        ...state,
        summoner: {
            ...state.summoner,
            ...payload,
        },
    }),
};

export default (state = defaultState, action = {}) => {
    if (typeof handlers[action.type] === 'undefined') {
        return state;
    }

    return handlers[action.type](state, action);
};

export const getSummonerName = state => state.home.summoner.name;
export const getSummonerLevel = state => state.home.summoner.level;
export const getSummonerIconId = state => state.home.summoner.iconId;
export const getSummonerAccountId = state => state.home.summoner.accountId;

export const getSummonerLastMatches = state => state.home.lastMatches;
