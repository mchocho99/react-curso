import { useState } from 'react'

const Form = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [errors, setErrors] = useState({
    name: { hasError: false, message: '' },
    email: { hasError: false, message: '' },
    password: { hasError: false, message: '' },
  })

  const validate = (event: React.FocusEvent<HTMLInputElement>) => {
    switch (event.target.id) {
      case 'name':
        if (event.target.value.length < 3) {
          setErrors({ ...errors, name: { hasError: true, message: 'Error en name' } })
        } else {
          setErrors({ ...errors, name: { hasError: false, message: '' } })
        }
        break
      case 'email':
        if (!event.target.value.includes('@')) {
          setErrors({ ...errors, email: { hasError: true, message: 'Error en email' } })
        } else {
          setErrors({ ...errors, email: { hasError: false, message: '' } })
        }
        break
      case 'password':
        if (event.target.value.length < 6) {
          setErrors({ ...errors, password: { hasError: true, message: 'Error en password' } })
        } else {
          setErrors({ ...errors, password: { hasError: false, message: '' } })
        }
        break
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target
    setForm({ ...form, [id]: value })
  }

  const handleDisabledButton = () => {
    return (
      form.name === '' ||
      form.email === '' ||
      form.password === '' ||
      errors.name.hasError ||
      errors.email.hasError ||
      errors.password.hasError
    )
  }

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log(`Name: ${form.name}`)
    console.log(`Email: ${form.email}`)
    console.log(`Password: ${form.password}`)

    setForm({ name: '', email: '', password: '' })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="name" onChange={handleChange} value={form.name} onBlur={validate} />
      <br />
      {errors.name.hasError && <p>{errors.name.message}</p>}
      <input
        type="email"
        id="email"
        onChange={handleChange}
        value={form.email}
        onBlur={validate}
      />{' '}
      <br />
      {errors.email.hasError && <p>{errors.email.message}</p>}
      <input
        type="password"
        id="password"
        onChange={handleChange}
        value={form.password}
        onBlur={validate}
      />
      <br />
      {errors.password.hasError && <p>{errors.password.message}</p>}
      <input type="submit" value="Submit" disabled={handleDisabledButton()} />
    </form>
  )
}

export default Form
