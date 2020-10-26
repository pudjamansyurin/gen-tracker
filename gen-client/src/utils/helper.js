// const { Buffer } = require('buffer')
import { Buffer } from "buffer";
import _ from "lodash";
import TABLE from "./mpeg2";

const CRC32 = buf => {
  // split hex string into 32 bit chunk (8 chars)
  buf = buf
    .match(/.{1,8}/g)
    .map(word => ChangeEndian(word.padEnd(8, "0")))
    .join("");

  // convert hex string to buffer
  buf = Buffer.from(buf, "hex");

  // initial value
  let crc = 0xffffffff;

  // calculating
  for (let index = 0; index < buf.length; index++) {
    const byte = buf[index];
    crc = (crc << 8) ^ TABLE[((crc >> 24) ^ byte) & 0xff];
  }

  return (crc >>> 0)
    .toString(16)
    .toUpperCase()
    .padStart(8, "0");
};

const Dot = (val, digit = 0) => {
  return Number(val).toLocaleString("id", {
    minimumFractionDigits: digit,
    maximumFractionDigits: digit
  });
};

const HexToAscii = hexx => {
  let hex = hexx.toString(); // force conversion
  let str = "";
  for (let i = 0; i < hex.length && hex.substr(i, 2) !== "00"; i += 2) {
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return str;
};

const HexToUnsignedInt = hex => {
  return parseInt(hex, 16);
};

const HexToSignedInt32 = hex => {
  if (hex.length % 2 !== 0) {
    hex = "0" + hex;
  }
  let num = parseInt(hex, 16);
  let maxVal = Math.pow(2, (hex.length / 2) * 8);
  if (num > maxVal / 2 - 1) {
    num = num - maxVal;
  }
  return num;
};

const HexToSignedInt8 = hex => {
  let num = parseInt(hex, 16);
  if (num > 127) {
    num -= 256;
  }
  return num;
};

const ChangeEndian = string => {
  const result = [];
  let len = string.length - 2;
  while (len >= 0) {
    result.push(string.substr(len, 2));
    len -= 2;
  }
  return result.join("");
};

const IntToHex = (num, len) => {
  return num.toString(16).padStart(len, "0");
};

const FlowFilter = (array, substr) => {
  return _.filter(
    array,
    _.flow(
      _.identity,
      _.values,
      _.join,
      _.toLower,
      _.partialRight(_.includes, substr)
    )
  );
};

const AsciiToHex = str => {
  let arr1 = [];
  for (let n = 0, l = str.length; n < l; n++) {
    let hex = Number(str.charCodeAt(n)).toString(16);
    arr1.push(hex);
  }
  return arr1.join("");
};

export {
  Dot,
  HexToAscii,
  HexToUnsignedInt,
  HexToSignedInt8,
  HexToSignedInt32,
  ChangeEndian,
  IntToHex,
  AsciiToHex,
  CRC32,
  FlowFilter
};