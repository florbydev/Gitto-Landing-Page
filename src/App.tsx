import { useState, type SyntheticEvent } from 'react'
import Navbar from './pages/Navbar'
import { supabase } from './lib/supabase'
import DashboardPreview from './components/DashboardPreview'
import HeroSignup, { type SubmitStatus } from './components/HeroSignup'

function App() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedEmail = email.trim()
    if (!trimmedEmail) return

    setStatus('loading')

    const { error } = await supabase.from('wishlist').insert({
      email: trimmedEmail,
      source: 'hero',
    })

    if (error) {
      console.error(error.message)
      setStatus('error')
      return
    }

    setEmail('')
    setStatus('success')
  }

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-[#FFF9F3] lg:h-screen lg:overflow-hidden">
      <Navbar />

      <main className="min-h-0 flex-1 lg:overflow-hidden">
        <section className="mx-auto flex w-full max-w-[1720px] flex-col gap-12 px-5 py-10 pt-24 sm:px-8 sm:py-14 sm:pt-28 md:px-10 md:py-16 lg:h-full lg:flex-row lg:gap-8 lg:px-8 lg:py-20 xl:px-10 xl:py-28 2xl:py-36">
          <div className="w-full lg:flex-[0.9] xl:flex-[0.95]">
            <HeroSignup
              email={email}
              status={status}
              onEmailChange={setEmail}
              onSubmit={handleSubmit}
            />
          </div>

          <div className="w-full lg:min-w-0 lg:flex-[1.1] xl:flex-[1.05]">
            <DashboardPreview />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
