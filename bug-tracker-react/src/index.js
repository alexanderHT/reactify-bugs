import React from 'react';
import {render} from 'react-dom';
import {MainTitle} from './MainTitle'
import {FormBug} from './FormBug'
import {Footer} from './Footer'

class App extends React.Component {
  render(){
    return (
      <div>
        <MainTitle />
        <FormBug />
        <Footer />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
