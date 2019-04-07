import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'unstated'
import Arrow from './Arrow'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider>
      <Arrow type="INCREMENT" value="10h"/>
    </Provider>
    , div
  )
  ReactDOM.unmountComponentAtNode(div)
})
