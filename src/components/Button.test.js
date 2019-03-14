import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'unstated'
import Button from './Button'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider>
      <Button type='START' />
    </Provider>
    , div
  )
  ReactDOM.unmountComponentAtNode(div)
})
