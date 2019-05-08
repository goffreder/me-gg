import * as actions from '../home';

describe('home actions', () => {
    it('should create an action to set the summoner info', () => {
        const info = { foo: 'bar' };

        expect(
            actions.setSummonerInfo(info),
        ).toEqual({
            type: 'SET_SUMMONER_INFO',
            payload: { foo: 'bar' },
        });
    });

    it('should create an action to set the summoner ranked info', () => {
        const info = { foo: 'bar' };

        expect(
            actions.setSummonerRankedInfo(info),
        ).toEqual({
            type: 'SET_SUMMONER_RANKED_INFO',
            payload: { foo: 'bar' },
        });
    });

    it('should create an action to set the summoner last matches', () => {
        const matches = [];

        expect(
            actions.setSummonerLastMatches(matches),
        ).toEqual({
            type: 'SET_SUMMONER_LAST_MATCHES',
            payload: [],
        });
    });
});
