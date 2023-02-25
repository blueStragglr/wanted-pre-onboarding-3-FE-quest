import { Form } from "react-router-dom"

export function Auth() {
  return (
    <div>
      <div>
        <Form>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            name='username'
          />
        </Form>
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          name='password'
        />
      </div>
      <button type='submit'>Login</button>
    </div>
  )
}
