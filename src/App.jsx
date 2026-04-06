import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { Button, TextButton } from '@shipt/design-system-buttons'
import { TextInput } from '@shipt/design-system-inputs'
import { Headline, Body } from '@shipt/design-system-typography'
import { Stack, Box } from '@shipt/design-system-layouts'
import { Checkbox } from '@shipt/design-system-checkbox'
import WaysToEarn from './pages/WaysToEarn'
import LearningModule from './pages/LearningModule'
import './App.css'

function LoginForm() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!email) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Enter a valid email'
    if (!password) newErrors.password = 'Password is required'
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate('/ways-to-earn')
    }, 1000)
  }

  return (
    <Box padding="xl" style={{ maxWidth: '420px', margin: '4rem auto' }}>
      <form onSubmit={handleSubmit}>
        <Stack spacing="lg" direction="column">
          <Stack spacing="xs" direction="column">
            <Headline as="h1" size="xl">Sign in</Headline>
            <Body size="md" variant="secondary">
              Welcome back! Enter your credentials to continue.
            </Body>
          </Stack>

          <TextInput
            name="email"
            label="Email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            errorMessage={errors.email}
            size="lg"
          />

          <TextInput
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            errorMessage={errors.password}
            size="lg"
          />

          <Stack spacing="md" direction="row" align="center" justify="space-between">
            <Checkbox
              name="remember"
              label="Remember me"
              aria-label="Remember me"
              checked={remember}
              onChange={() => setRemember(!remember)}
              size="md"
            />
            <TextButton type="button" concept="action">
              Forgot password?
            </TextButton>
          </Stack>

          <Button
            type="submit"
            concept="action"
            variant="primary"
            fullWidth
            size="lg"
            loading={loading}
          >
            Sign in
          </Button>

          <Body size="sm" align="center" variant="secondary">
            Don't have an account?{' '}
            <TextButton type="button" concept="action">
              Sign up
            </TextButton>
          </Body>
        </Stack>
      </form>
    </Box>
  )
}

function RoutedWaysToEarn() {
  const navigate = useNavigate()
  const handleNavigate = (target) => {
    if (target === 'back') navigate('/')
    else if (target === 'learning') navigate('/learning-module')
    else navigate(`/${target}`)
    window.scrollTo(0, 0)
  }
  return <WaysToEarn onNavigate={handleNavigate} />
}

function RoutedLearningModule() {
  const navigate = useNavigate()
  const handleNavigate = (target) => {
    if (target === 'back') navigate('/ways-to-earn')
    else navigate(`/${target}`)
    window.scrollTo(0, 0)
  }
  return <LearningModule onNavigate={handleNavigate} />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/ways-to-earn" element={<RoutedWaysToEarn />} />
        <Route path="/learning-module" element={<RoutedLearningModule />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
