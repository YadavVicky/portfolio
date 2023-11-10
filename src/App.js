import { useState } from 'react';
import './App.css';
import FirstHalf from './firstHalf/pages/firstHalf';
import SecondHalf from './secondHalf/pages/secondHalf';

import useWindowSize from './shared/windowSize';
import NavLinkCollapse from './shared/UIElements/NavLinkCollapse';

function App() {
  const size = useWindowSize();
  const [hideSecondHalf, setHideSecondHalf] = useState(false);
  const onClickMe = () => {
    setHideSecondHalf(!hideSecondHalf);
  }
  if (size.width >= 1200) {
    return (
      <div className="App row" style={{ margin: "0px" }}>
        {<FirstHalf />}
        {<SecondHalf  collapse={false} />}
      </div>
    );
  } else {
    return (
      <div className="App row" style={{ margin: "0px" }}>
        <NavLinkCollapse onClickMe={onClickMe} hideSecondHalf={hideSecondHalf} />
        {!hideSecondHalf && <FirstHalf />}
        {hideSecondHalf && <SecondHalf  collapse={true} />}
      </div>
    );
  }
}

export default App;
