import { INSERT_RESPONSE } from "src/store/db/action-types";
import { getValue } from "src/js/utils";
import { notify } from "src/js/framework";
import {
  notifyResponse,
  makeResponse,
  parseResponse,
  validResponse,
  RESCODES
} from "src/js/response";

import { get } from "lodash";
import { watch } from "@vue/composition-api";
import { createNamespacedHelpers } from "vuex-composition-helpers";
const { useGetters, useActions } = createNamespacedHelpers("db");

export default function({ publisher, awaitCommand, handleFinger }) {
  const { devDevice, getDeviceByUnitID } = useGetters([
    "devDevice",
    "getDeviceByUnitID"
  ]);
  const { [INSERT_RESPONSE]: insertResponse } = useActions([INSERT_RESPONSE]);

  const processResponse = (command, response) => {
    if (!awaitCommand.value) return;

    const resp = makeResponse(response);
    notifyResponse(resp);

    const { unitID, sendDatetime, code, subCode, payload, status } = command;

    insertResponse({
      unitID,
      sendDatetime,
      code,
      subCode,
      payload,
      ...resp
    });
  };
  const handleResponse = hex => {
    const response = parseResponse(hex);
    const unitID = getValue(response, "unitID");

    const device = getDeviceByUnitID.value(unitID);
    if (!device) return;

    if (!awaitCommand.value) return console.error(`RESPONSE ${hex}`);
    console.warn(`RESPONSE ${hex}`);

    const { lastCommand } = device;
    if (!validResponse(lastCommand, response)) return;
    processResponse(lastCommand, response);
    publisher(unitID, null);
  };
  const ignoreResponse = resCode => {
    const lastCommand = get(devDevice.value, "lastCommand");
    const { unitID } = devDevice.value;

    processResponse(lastCommand, resCode || RESCODES.CANCELLED);
    publisher(unitID, null);
  };

  watch(
    () => devDevice.value,
    device => {
      const lastCommand = get(device, "lastCommand");
      if (!lastCommand) return;

      if (awaitCommand.value) return;
      if (lastCommand.resCode != RESCODES.OK) return;

      handleFinger(lastCommand);
    },
    { deep: true }
  );

  return {
    ignoreResponse,
    handleResponse
  };
}
