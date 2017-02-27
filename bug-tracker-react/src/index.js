import React from 'react';
import {render} from 'react-dom';
import {MainTitle} from './MainTitle'
import {FormBug} from './FormBug'
import {Footer} from './Footer'
import {List} from './List'

class App extends React.Component {
  render(){
    return (
      <div>
        <MainTitle />
        <FormBug />
        <List />
        <Footer />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
