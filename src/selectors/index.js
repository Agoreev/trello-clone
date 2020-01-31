import {createSelector} from 'reselect';

const getDesk = (state, id) => {
    return state.deskList.desks.find(desk => desk.id === id);
}

export const getDeskState = createSelector([getDesk], (desk => desk));