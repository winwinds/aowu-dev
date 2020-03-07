import Vue from 'vue'; //在package.json中配置peerDependencies

const hasOwnProperty = Object.prototype.hasOwnProperty;

export function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
};
