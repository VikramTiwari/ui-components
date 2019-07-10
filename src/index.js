import React from 'react'
import { render } from 'react-dom'
import { Button } from './lib'

const App = () => (
  <div>
    <h1>Hello React</h1>
    <Button />
  </div>
)

render(<App />, document.getElementById('root'))
