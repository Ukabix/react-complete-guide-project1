# react-complete-guide
JSX na React
    // return (
    //   <div className="App">
    //     <h1>Hi, Im a react app</h1>
    //   </div>
    // );
    
    powyższe JSX renderuje się na react jak poniżej:
    
  return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This works now!'));
