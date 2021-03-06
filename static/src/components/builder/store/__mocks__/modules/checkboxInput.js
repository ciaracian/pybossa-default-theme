/* eslint-disable no-undef */
import * as types from '../../types';
export const state = {
  checkboxInput: {
    label: 'testLabel',
    labelAdded: false,
    checkboxIdKeys: ['id1', 'id2'],
    checkboxListObj: {
      'id1': {
        id: 'id1',
        'pyb-answer': 'checkboxanswer',
        label: 'test checkbox1 label',
        labelAdded: false,
        'initial-value': { value: false },
        isVariable: true
      },
      'id2': {
        id: 'id2',
        'pyb-answer': 'checkboxanswer2',
        label: 'test checkbox2 label',
        labelAdded: false,
        'initial-value': { value: false },
        isVariable: true
      },
      isValidForm: true
    }

  }
};

export const getters = {
  [types.GET_CHECKBOX_INPUT_PROPS]: jest.fn().mockReturnValue({ label: state.checkboxInput.label,
    labelAdded: state.checkboxInput.labelAdded,
    isValidForm: state.checkboxInput.isValidForm,
    checkboxList: state.checkboxInput.checkboxIdKeys.map(id => (state.checkboxInput.checkboxListObj[id]))
  }),
  [types.GET_CHECKBOXLIST]: jest.fn().mockReturnValue(
    [{
      id: 'id1',
      'pyb-answer': 'checkboxanswer',
      label: 'test checkbox1 label',
      labelAdded: false,
      'initial-value': { value: false },
      isVariable: true
    },
    {
      id: 'id2',
      'pyb-answer': 'checkboxanswer',
      label: 'test checkbox2 label',
      labelAdded: false,
      'initial-value': { value: false },
      isVariable: true
    }]
  ),
  [types.GET_CHECKBOX_INPUT_PROPS_VALID]: jest.fn().mockReturnValue(true)
};

export const mutations = {
  [types.MUTATE_CLEAR_CHECKBOX_INPUT_FORM]: jest.fn(),
  [types.MUTATE_CHECKBOX_LABEL_ADDED]: jest.fn(),
  [types.MUTATE_CHECKBOX_LABEL]: jest.fn(),
  [types.MUTATE_CHECKBOX_UPDATE_LIST_ITEM]: jest.fn(),
  [types.MUTATE_CHECKBOX_DELETE_LIST_ITEM]: jest.fn(),
  [types.MUTATE_CHECKBOX_ADD_LIST_ITEM]: jest.fn()
};

export default {
  state,
  mutations,
  actions: {},
  getters
};
