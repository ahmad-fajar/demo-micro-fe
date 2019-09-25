const defaultState = {
  app2Txt: '',
  app3Txt: '',
};

const appReducer = (s = defaultState, action) => {
  const { type, payload: p } = action;
  switch(type) {
    case 'SAVE_APP2_TXT':
      return { ...s, app2Txt: p }

    case 'SAVE_APP3_TXT':
      return { ...s, app3Txt: p }

    default:
      return s
  }
};

export default appReducer;
