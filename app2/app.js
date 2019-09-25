import React from 'react';
import { connect } from 'react-redux';

const App = p => {
  return (
    <div>
      Hello App2 World

      <div>
        <p>
          Message from app3: <span>{p.txt3}</span>
        </p>
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
