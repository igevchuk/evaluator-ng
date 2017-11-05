import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import * as update from 'immutability-helper';

import * as appAction from './actions';
import { ApplicationModel } from "./../../repository/model";

export interface State {
    appState: ApplicationModel
};

const initialState: State = {
  appState: new ApplicationModel(true, 1, 'industry', 'name')
};

export function reducer(state = initialState, action: appAction.Actions): State {
    switch (action.type) {
        case appAction.ActionTypes.INITIALIZE: {
            return state;
        }
        case appAction.ActionTypes.LOAD_APPMODEL: {
            //if (state.appState.hasLoaded) {
            //    return state;
            //}

            //return Object.assign({}, state, {
            //    appState: Object.assign({}, action.payload, { hasLoaded: true })
            //});
        }
        case appAction.ActionTypes.CHANGE_SCOPE: {
            //let newState = Object.assign({}, state, {
            //    appState: Object.assign({}, {
            //        hasLoaded: true,
            //        scope: action.payload.scope,
            //        name: state.appState.name,
            //        industry: state.appState.industry
            //    })
            //});

            //const newState = update(state, { appState: { scope: { $set: action.payload.scope }}});
        return state;
        }
        default:
            return state;
    }

};
