import { createGlobalState } from 'react-hooks-global-state';

const {setGlobalState, useGlobalState} = createGlobalState({
    Gamestarted: false,
    Gamefinished: false,
    EndScore: 0, // New variable

});

export {setGlobalState, useGlobalState};