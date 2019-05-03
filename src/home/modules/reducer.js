export const defaultState = {
    level: 0,
    iconId: 0,
    name: 'goffreder',
};

const handlers = {
    SET_SUMMONER_INFO: (state, { payload }) => ({
        ...state,
        ...payload,
    }),
};

export default (state = defaultState, action = {}) => {
    if (typeof handlers[action.type] === 'undefined') {
        return state;
    }

    return handlers[action.type](state, action);
};

export const getSummonerName = state => state.home.name;
export const getSummonerLevel = state => state.home.level;
export const getSummonerIconId = state => state.home.iconId;
