import { createGlobalState } from 'react-hooks-global-state';

const {setGlobalState, useGlobalState} = createGlobalState({
    Gamestarted: false,
    Gamefinished: false,
    EndScore: 0,
    CurrentScore: 0,
    Timer: 60, // Timer state

});

export {setGlobalState, useGlobalState};