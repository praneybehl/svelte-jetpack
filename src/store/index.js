import { Store } from 'svelte/store';
import methods from './methods';

const initialState = {
  routePath: '',
  count: 0,
  username: 'Derek'
};

class AppState extends Store {}
Object.assign(AppState.prototype, methods);

const store = new AppState(initialState);

export default store;
