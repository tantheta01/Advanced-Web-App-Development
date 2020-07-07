import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leader';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';

export const initialState = {
	dishes : DISHES,
	comments : COMMENTS,
	promotions : PROMOTIONS,
	leaders : LEADERS      
};

export const Reducer = (state = initialState, action) => {
	return state;
}