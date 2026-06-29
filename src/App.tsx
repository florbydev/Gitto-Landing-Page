import { useState, type SyntheticEvent } from 'react'
import classNames from 'classnames'
import Navbar from './pages/Navbar'
import { supabase } from './lib/supabase'

function App() {
  const [email, setEmail] = useState<string>('')
  const [activeSidebarItem, setActiveSidebarItem] = useState('home')
  const [_, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  )


  const appClassNames = classNames(
    'h-screen overflow-hidden bg-[#FFF9F3] flex flex-col'
  )

  const mainClassNames = classNames(
    'flex-1 overflow-hidden'
  )

  const heroSectionClassNames = classNames(
    'h-full mx-auto w-full max-w-[1720px] grid grid-cols-[0.95fr_1.05fr] py-36 gap-8'
  )

  const heroContentClassNames = classNames(
    'max-w-[620px] ml-6'
  )


  const heroTitleClassNames = classNames(
    'text-[56px] leading-[1.08] font-bold tracking-[-0.03em] text-[#211A16]'
  )

  const heroTitleDotClassNames = classNames(
    'text-orange-500'
  )

  const heroTextClassNames = classNames(
    'mt-6 max-w-[590px] text-xl leading-8 font-medium text-[#5D5650]'
  )

  const formClassNames = classNames(
    'mt-11 flex items-center w-[560px] rounded-[20px] border border-orange-200 bg-white p-3 shadow-[0_16px_40px_rgba(255,111,32,0.08)]'
  )

  const inputClassNames = classNames(
    'flex-1 bg-transparent px-3 text-lg text-[#5D5650] outline-none placeholder:text-[#5D5650]'
  )

  const submitButtonClassNames = classNames(
    'rounded-2xl bg-orange-500 px-7 py-4 text-lg font-semibold text-white transition-colors hover:bg-orange-600 cursor-pointer'
  )

  const dashboardWrapperClassNames = classNames(
    'relative flex h-full items-center justify-center overflow-visible'
  )

  const dashboardGlowClassNames = classNames(
    'absolute left-1/2 top-[44%] h-[620px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-200/45 blur-3xl'
  )

  const dashboardBrushClassNames = classNames(
    'absolute left-1/2 top-[44%] h-[430px] w-[780px] -translate-x-1/2 -translate-y-1/2 rotate-[-7deg] rounded-[42%] bg-orange-300/25 blur-xl'
  )

  const dashboardCardClassNames = classNames(
    'relative z-10 flex h-[500px] w-[720px] 2xl:h-[600px] 2xl:w-[840px] translate-x-[-28px] -translate-y-8 rotate-[3deg] overflow-hidden rounded-[32px] border border-orange-100 bg-white/95 shadow-[0_44px_110px_rgba(74,45,22,0.16)]'
  )

  const sidebarClassNames = classNames(
    'w-[108px] border-r border-orange-100 bg-white/70 px-6 py-8'
  )

  const sidebarLogoClassNames = classNames(
    'mb-8 text-2xl font-bold tracking-[-0.08em] text-[#211A16]'
  )

  const sidebarLogoDotClassNames = classNames(
    'text-orange-500'
  )

  const sidebarItemsClassNames = classNames(
    'flex flex-col items-center gap-5'
  )

  const sidebarIconClassNames = classNames(
    'h-5 w-5'
  )

  const dashboardContentClassNames = classNames(
    'flex-1 px-9 py-9'
  )

  const eyebrowClassNames = classNames(
    'text-sm font-semibold text-[#8B8178]'
  )

  const dashboardHeaderClassNames = classNames(
    'mt-2 flex items-start justify-between gap-6'
  )

  const dashboardTitleClassNames = classNames(
    'text-[30px] leading-tight font-bold tracking-[-0.04em] text-[#211A16]'
  )

  const orangeTextClassNames = classNames(
    'text-orange-500'
  )

  const dashboardSubtitleClassNames = classNames(
    'mt-2 text-sm font-medium text-[#6B625B]'
  )

  const streakCardClassNames = classNames(
    'flex min-w-[150px] items-center justify-center gap-4 rounded-2xl bg-orange-50 px-5 py-4'
  )

  const streakIconWrapperClassNames = classNames(
    'flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-500'
  )

  const streakIconClassNames = classNames(
    'h-5 w-5 fill-current'
  )

  const streakNumberClassNames = classNames(
    'text-3xl font-bold leading-none text-[#211A16]'
  )

  const streakLabelClassNames = classNames(
    'mt-1 text-xs font-semibold text-[#211A16]'
  )

  const weekClassNames = classNames(
    'mt-8 grid grid-cols-7 gap-x-4 gap-y-2'
  )

  const dayLabelClassNames = classNames(
    'mb-2 text-center text-xs font-semibold text-[#6B625B]'
  )

  const heatColumnClassNames = classNames(
    'grid grid-cols-1 gap-2 justify-items-center'
  )

  const cardsGridClassNames = classNames(
    'mt-8 grid grid-cols-2 gap-5'
  )

  const infoCardClassNames = classNames(
    'rounded-2xl border border-orange-100 bg-white p-6 shadow-[0_14px_35px_rgba(74,45,22,0.06)]'
  )

  const cardTitleClassNames = classNames(
    'mb-4 text-sm font-bold text-[#211A16]'
  )

  const statRowClassNames = classNames(
    'mb-3 flex items-start gap-3 last:mb-0'
  )

  const statIconClassNames = classNames(
    'flex h-5 w-5 items-center justify-center rounded-full border border-emerald-300 text-xs font-bold text-emerald-600'
  )

  const statTextClassNames = classNames(
    'text-xs font-bold text-[#211A16]'
  )

  const statMetaClassNames = classNames(
    'mt-0.5 text-[11px] font-medium text-[#6B625B]'
  )

  const reflectionListClassNames = classNames(
    'space-y-3 text-xs font-medium text-[#3B332D]'
  )

  const reflectionButtonClassNames = classNames(
    'mt-7 w-full rounded-xl border border-orange-400 px-4 py-3 text-sm font-semibold text-orange-500 transition-colors hover:bg-orange-50 cursor-pointer'
  )

  const getHeatCellClassNames = (level: number) =>
    classNames('h-5 w-7 rounded-md', {
      'bg-orange-50': level === 0,
      'bg-orange-100': level === 1,
      'bg-orange-200': level === 2,
      'bg-orange-300': level === 3,
      'bg-orange-500': level === 4,
    })

  const getSidebarButtonClassNames = (itemId: string) =>
    classNames(
      'flex h-11 w-11 items-center justify-center rounded-xl transition-colors cursor-pointer',
      {
        'bg-orange-100 text-orange-500': activeSidebarItem === itemId,
        'text-[#7B726A] hover:bg-orange-50 hover:text-orange-500':
          activeSidebarItem !== itemId,
      }
    )

  const sidebarItems = [
    { id: 'home', label: 'Home' },
    { id: 'stats', label: 'Stats' },
    { id: 'calendar', label: 'Calendar' },
    { id: 'notes', label: 'Notes' },
    { id: 'team', label: 'Team' },
    { id: 'settings', label: 'Settings' },
  ]

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  const activity = [
    [1, 0, 0, 0],
    [0, 1, 3, 0],
    [4, 0, 2, 4],
    [1, 1, 2, 1],
    [4, 4, 0, 1],
    [0, 1, 4, 0],
    [0, 0, 1, 0],
  ]

  const stats = [
    { label: '12 commits', meta: '16% vs last week' },
    { label: '3 pull requests', meta: '1 vs last week' },
    { label: '5 issues closed', meta: '25% vs last week' },
    { label: 'Worked in 2 repositories', meta: '' },
  ]


  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!email.trim()) return

    setStatus('loading')

    const { error } = await supabase.from('wishlist').insert({
      email: email.trim(),
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
    <div className={appClassNames}>
      <Navbar />

      <main className={mainClassNames}>
        <section className={heroSectionClassNames}>
          <div className={heroContentClassNames}>
            <h1 className={heroTitleClassNames}>
              See the progress behind your code
              <span className={heroTitleDotClassNames}>.</span>
            </h1>

            <p className={heroTextClassNames}>
              Gitto turns your Git activity into weekly progress, reflections,
              and encouragement from your developer circle.
            </p>

            <form className={formClassNames} onSubmit={handleSubmit}>
              <input
                className={inputClassNames}
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />

              <button className={submitButtonClassNames} type="submit">
                Join the wishlist →
              </button>
            </form>
          </div>

          <div className={dashboardWrapperClassNames}>
            <div className={dashboardGlowClassNames}></div>
            <div className={dashboardBrushClassNames}></div>

            <div className={dashboardCardClassNames}>
              <aside className={sidebarClassNames}>
                <div className={sidebarLogoClassNames}>
                  gitt<span className={sidebarLogoDotClassNames}>o</span>
                </div>

                <div className={sidebarItemsClassNames}>
                  {sidebarItems.map((item) => (
                    <button
                      key={item.id}
                      className={getSidebarButtonClassNames(item.id)}
                      type="button"
                      aria-label={item.label}
                      onClick={() => setActiveSidebarItem(item.id)}
                    >
                      <svg
                        className={sidebarIconClassNames}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <rect
                          x="6"
                          y="6"
                          width="12"
                          height="12"
                          rx="3"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </button>
                  ))}
                </div>
              </aside>

              <div className={dashboardContentClassNames}>
                <p className={eyebrowClassNames}>This week</p>

                <div className={dashboardHeaderClassNames}>
                  <div>
                    <h2 className={dashboardTitleClassNames}>
                      You showed up{' '}
                      <span className={orangeTextClassNames}>4</span> days
                    </h2>

                    <p className={dashboardSubtitleClassNames}>
                      Small steps. Real progress.
                    </p>
                  </div>

                  <div className={streakCardClassNames}>
                    <span className={streakIconWrapperClassNames}>
                      <svg
                        className={streakIconClassNames}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M13.5 2.5C13.5 7.5 7 8.4 7 15a5 5 0 0 0 10 0c0-2.9-1.5-4.9-3.2-6.7.2 2.2-.7 3.5-2.2 4.4.3-2.7-.7-5.2-2.7-7C10.8 5 12.4 4 13.5 2.5Z" />
                      </svg>
                    </span>

                    <div>
                      <p className={streakNumberClassNames}>4</p>
                      <p className={streakLabelClassNames}>day streak</p>
                    </div>
                  </div>
                </div>

                <div className={weekClassNames}>
                  {days.map((day, dayIndex) => (
                    <div key={day}>
                      <p className={dayLabelClassNames}>{day}</p>

                      <div className={heatColumnClassNames}>
                        {activity[dayIndex].map((level, index) => (
                          <div
                            key={`${day}-${index}`}
                            className={getHeatCellClassNames(level)}
                          ></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className={cardsGridClassNames}>
                  <div className={infoCardClassNames}>
                    <h3 className={cardTitleClassNames}>
                      This week in review
                    </h3>

                    {stats.map((stat) => (
                      <div key={stat.label} className={statRowClassNames}>
                        <span className={statIconClassNames}>✓</span>

                        <div>
                          <p className={statTextClassNames}>{stat.label}</p>

                          {stat.meta && (
                            <p className={statMetaClassNames}>
                              {stat.meta}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className={infoCardClassNames}>
                    <h3 className={cardTitleClassNames}>Reflection</h3>

                    <div className={reflectionListClassNames}>
                      <p>What went well this week?</p>
                      <p>What did you learn?</p>
                      <p>What will you focus on next?</p>
                    </div>

                    <button
                      className={reflectionButtonClassNames}
                      type="button"
                    >
                      Write a reflection
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App