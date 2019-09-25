import React from 'react';
import { connect } from 'react-redux';

const App = p => {
  return (
    <div>
      Hello App3 World

      <div>
        <p>
          Message from app2: <span>{p.txt2}</span>
        </p>
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
