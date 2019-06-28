import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
    addScore: ['value'],
    updateScore: ['id', 'newValue'],
    removeScore: ['id'],
    addRecord: ['record'],
    updateRecord: ['id', 'newRecord']
    removeRecord: ['id']
});

const INITIAL_STATE = [];

const addScore = (state = INITIAL_STATE, action) => [
    ...state,
    { id: Math.random(), action.value }
];


const updateScore = (state = INITIAL_STATE, action) => state.map(
    score => action.id === score.id
            ? {...score, value: action.value}
            : score
);

const removeScore = (state = INITIAL_STATE, action) => state.filter(score => score.id !== action.id);


export default createReducer(INITIAL_STATE, {
    [Types.ADD_SCORE]: addScore,
    [Types.UPDATE_SCORE]: updateScore,
    [Types.REMOVE_SCORE]: removeScore,
});

