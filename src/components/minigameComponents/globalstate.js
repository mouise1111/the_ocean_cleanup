import { createGlobalState } from 'react-hooks-global-state';

const {setGlobalState, useGlobalState} = createGlobalState({
    Gamestarted: false,
    Gamefinished: false,

});

export {setGlobalState, useGlobalState};