import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders learn react link', () => {
  render(<Todo
    onClickDelete={() => console.log('delete')}
    onClickComplete={() => console.log('complete')}
    todo={{ text: 'foobar', done: false }}
  />)
  const todoText = screen.getByText('foobar')
  expect(todoText).toBeInTheDocument()
});
