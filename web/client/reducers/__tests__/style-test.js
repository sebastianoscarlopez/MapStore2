/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import expect from 'expect';

import style from '../style';
import { SET_STYLE_PARAMETER } from '../../actions/style';

describe('Test the style reducer', () => {
    it('set a style parameter', () => {
        const state = style(undefined, {
            type: SET_STYLE_PARAMETER,
            name: 'param',
            value: 'val'
        });
        expect(state.param).toBe('val');
    });

});
