import { config } from "components/js/opt/config";
import { getField } from "components/js/utils";

const isIndonesia = ({ lng, lat }) => {
  let { borderIndonesia } = config.map;
  return (
    lng > borderIndonesia.lngMin &&
    lng < borderIndonesia.lngMax &&
    lat > borderIndonesia.latMin &&
    lat < borderIndonesia.latMax
  );
};

const genPosition = (report) => {
  let pos = {
    ...config.map.centerIndonesia,
    valid: false,
  };

  if (report && report.frameID === config.frame.id.FULL) {
    pos.lng = getField(report.data, "gpsLongitude");
    pos.lat = getField(report.data, "gpsLatitude");
    pos.valid = isIndonesia(pos);
  }

  return pos;
};

const getHeading = (report) => {
  if (report)
    if (report.frameID === config.frame.id.FULL)
      return getField(report.data, "gpsHeading");
  return 0;
};

export { genPosition, getHeading };