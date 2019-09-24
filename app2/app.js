import React from 'react';
import { connect } from 'react-redux';

const App = p => {
  const s = {
    color: 'blue',
    fontSize: '48px',
    fontWeight: 'bold',
  };

  return (
    <div style={s}>
      Hello App2 World

      <div>
        ---- {p.txt2} ----
        ---- {p.txt3} ----
      </div>
      <input
        defaultValue={p.text}
        onChange={v => p.saveTxt2(v.currentTarget.value)}
      />
    </div>
  );
};

const mapState = s => {
  return {
    txt2: s.appManager.app2Txt,
    txt3: s.appManager.app3Txt,
  };
};

const mapDispatch = d => {
  return {

    saveTxt2: s => d(function () {
      return { type: 'SAVE_APP2_TXT', payload: s };
    }()),

  };
};

export default connect(mapState, mapDispatch)(App);
