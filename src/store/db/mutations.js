import * as mutations from "./mutation-types";
import initialState from "./state";
import config from "src/js/opt/config";
import moment from "moment";

export default {
  [mutations.CLEAR_DATABASE](state) {
    Object.assign(state, initialState());
  },

  [mutations.SET_UNITID](state, unitID) {
    state.unitID = unitID;
  },
  [mutations.SET_REPORT](state, payload) {
    state.report = payload;
  },
  [mutations.SET_COMMAND](state, command) {
    state.command = command;
  },

  [mutations.TAKE_DEV_FINGER](state, unitID) {
    let idx = state.devices.findIndex(dev => dev.unitID === unitID);

    if (idx >= 0)
      state.devices.splice(idx, 1, {
        ...state.devices[idx],
        fingerTime: moment().unix()
      });
  },
  [mutations.TAKE_DEV_STATUS](state, { unitID, status }) {
    let idx = state.devices.findIndex(dev => dev.unitID.toString() === unitID);

    if (idx >= 0)
      state.devices.splice(idx, 1, {
        ...state.devices[idx],
        status
      });
  },
  [mutations.ADD_BUFFERS](state, payload) {
    state.buffers.push(payload);
  },
  [mutations.DEL_BUFFER](state) {
    state.buffers.shift();
  },

  [mutations.ADD_DEVICES](state, payload) {
    let exist = state.devices.find(({ unitID }) => unitID === payload.unitID);
    if (!exist) state.devices.unshift(payload);
  },
  [mutations.ADD_REPORTS](state, payload) {
    state.reports.unshift(payload);
    if (state.reports.length > config.maxStorage.reports) state.reports.pop();
  },
  [mutations.ADD_RESPONSES](state, payload) {
    state.responses.unshift(payload);
    if (state.responses.length > config.maxStorage.responses)
      state.responses.pop();
  },

  [mutations.ADD_FINGERS](state, payload) {
    let exist = state.fingers.find(
      ({ unitID, fingerID }) =>
        unitID === payload.unitID && fingerID === payload.fingerID
    );
    if (!exist) state.fingers.unshift(payload);
  },
  [mutations.REMOVE_FINGERS](state, payload) {
    let index = state.fingers.findIndex(
      ({ unitID, fingerID }) =>
        unitID === payload.unitID && fingerID === payload.fingerID
    );
    state.fingers.splice(index, 1);
  },
  [mutations.CLEAR_FINGERS](state, payload) {
    state.fingers = state.fingers.filter(
      ({ unitID }) => unitID !== payload.unitID
    );
  }
};
