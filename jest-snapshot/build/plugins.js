'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.getSerializers = exports.addSerializer = undefined;










var _prettyFormat = require('pretty-format');var _prettyFormat2 = _interopRequireDefault(_prettyFormat);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                                                                                       * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                                                                                                                                                                       *
                                                                                                                                                                                                       * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                       * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                       *
                                                                                                                                                                                                       * 
                                                                                                                                                                                                       */var _prettyFormat$plugins = _prettyFormat2.default.plugins;const DOMElement = _prettyFormat$plugins.DOMElement,Immutable = _prettyFormat$plugins.Immutable,ReactElement = _prettyFormat$plugins.ReactElement,ReactTestComponent = _prettyFormat$plugins.ReactTestComponent;

let PLUGINS = [ReactTestComponent, ReactElement, DOMElement, Immutable];

// Prepend to list so the last added is the first tested.
const addSerializer = exports.addSerializer = plugin => {
  PLUGINS = [plugin].concat(PLUGINS);
};

const getSerializers = exports.getSerializers = () => PLUGINS;