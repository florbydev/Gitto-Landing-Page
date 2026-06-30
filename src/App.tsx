import { useState, type SyntheticEvent } from 'react'
import Navbar from './pages/Navbar'
import { supabase } from './lib/supabase'
import mainVisual from './assets/main-visual.png'
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
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-[#070707] lg:h-screen lg:overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:url('data:image/svg+xml,%3Csvg_viewBox=%220_0_256_256%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22noiseFilter%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.8%22_numOctaves=%224%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />

      <Navbar />

      <main className="min-h-0 flex-1 lg:overflow-hidden">
        <section className="mx-auto flex w-full flex-col-reverse sm:flex-col gap-4 px-8 pb-8 sm:px-8 sm:py-14 sm:pt-28 md:px-10 md:py-16 lg:h-full lg:flex-row lg:gap-18 lg:px-8 lg:py-20 xl:pl-48 xl:pr-24 xl:py-24">
          <div className="w-full lg:flex-[0.5] xl:flex-[.50] pt-8">
            <HeroSignup
              email={email}
              status={status}
              onEmailChange={setEmail}
              onSubmit={handleSubmit}
            />
          </div>

          <div className="relative w-150 -translate-x-16 overflow-hidden lg:min-w-0 lg:flex-[1.1] xl:flex-1 mix-blend-lighten">
            <img
              src={mainVisual}
              alt=""
              className="relative z-10 w-full opacity-90 mix-blend-lighten"
            />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
