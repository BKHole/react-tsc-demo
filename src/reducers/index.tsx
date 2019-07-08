import {EnthusiasmAction} from '../actions';
import {StoreState} from '../types';
import {INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM} from '../constants';

export function enthusiasm(state = 1, action: EnthusiasmAction): StoreState {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return state + 1;
        case DECREMENT_ENTHUSIASM:
            return Math.max(1, state - 1);
    }
    return state;
}