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
      Hello App3 World

      <div>
        ---- {p.txt2} ----
        ---- {p.txt3} ----
      </div>
      <input
        defaultValue={p.text}
        onChange={v => p.saveTxt3(v.currentTarget.value)}
      />
    </div>
  );
};

const mapStateToProps = s => {
  return {
    txt2: s.appManager.app2Txt,
    txt3: s.appManager.app3Txt,
  };
};

const mapDispatchToProps = d => {
  return {

    saveTxt3: s => d(function () {
      return { type: 'SAVE_APP3_TXT', payload: s };
    }()),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
