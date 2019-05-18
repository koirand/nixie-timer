import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'unstated'
import Digit from './Digit'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider>
      <Digit value='0' />
    </Provider>
    , div
  )
  ReactDOM.unmountComponentAtNode(div)
})
