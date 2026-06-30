import classNames from 'classnames'
import type { SyntheticEvent } from 'react'

export type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

type HeroSignupProps = {
  email: string
  status: SubmitStatus
  onEmailChange: (email: string) => void
  onSubmit: (event: SyntheticEvent<HTMLFormElement>) => void
}

const statusCopy: Partial<Record<SubmitStatus, string>> = {
  success: 'You’re on the wishlist.',
  error: 'Something went wrong. Please try again.',
}

function HeroSignup({
  email,
  status,
  onEmailChange,
  onSubmit,
}: HeroSignupProps) {
  const isLoading = status === 'loading'

  return (
    <section className="text-[#f7f3ef]">
      <div className="w-full">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-4 py-2 text-sm text-[#c9c0b8] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 text-orange-500"
            fill="none"
          >
            <path
              d="M15 4 9 20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M6 8s-4 2.95-4 4 4 4 4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 8s4 2.95 4 4-4 4-4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>For Developers</span>
        </div>

        <h1 className=" font-['Poppins'] text-[36px] font-semibold leading-[120%] tracking-tighter text-[#DED1C5] text-40px sm:text-[46px] lg:text-[56px]">
          See the progress behind your{' '}
          <span className="text-orange-500">code</span>.
        </h1>

        <p className="mt-5 text-[15px] sm:text-[17px] font-regular leading-7 text-[#9d9690]">
          Gitto turns your Git activity into weekly progress, reflections, and
          encouragement from your developer circle.
        </p>

        <form
          className="mt-18 inline-flex w-full items-center gap-2 rounded-[18px] border border-white/10 bg-white/6 p-2 shadow-[0_18px_50px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.04)]"
          onSubmit={onSubmit}
        >
          <input
            className="min-w-0 flex-1 bg-transparent px-4 py-3 text-md font-medium text-[#f7f3ef] outline-none placeholder:text-[#a39b94]"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => onEmailChange(event.target.value)}
          />

          <button
            className={classNames(
              'inline-flex cursor-pointer items-center justify-center rounded-xl bg-orange-500 px-4 py-3 text-md text-white font-light  hover:bg-orange-600',
              { 'cursor-not-allowed opacity-70': isLoading }
            )}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="inline-flex items-center gap-3">
                Joining
                <span
                  aria-hidden="true"
                  className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                />
              </span>
            ) : (
              <span className="inline-flex items-center gap-3">
                Join the wishlist
                <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none">
                  <path
                    d="M4 10h9"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                  <path
                    d="m10 6 4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
          </button>
        </form>

        {statusCopy[status] && (
          <p
            className={classNames('mt-3 text-sm font-medium', {
              'text-orange-300': status === 'success',
              'text-red-300': status === 'error',
            })}
            role="status"
          >
            {statusCopy[status]}
          </p>
        )}

        {/* <div className="mt-8 flex items-center justify-center gap-10">
          {features.map((feature) => (
            <div key={feature.title}>
              <div className="mb-1.5 flex items-start gap-2 text-orange-500">
                {feature.icon}
                <h3 className="text-sm font-semibold text-[#DED1C5]">
                  {feature.title}
                </h3>
              </div>

              <p className="text-sm leading-5 text-[#8f8882]">
                {feature.description}
              </p>
            </div>
          ))}
        </div> */}

        <div className="mt-6 ml-1">
          <p className="text-sm font-medium text-[#9d9690]">
            Trusted by developers building every day.
          </p>

          <div className="mt-3 flex items-center">
            <div className="flex -space-x-3">
              {['A', 'M', 'J', 'R'].map((initial) => (
                <div
                  key={initial}
                  className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#050505] bg-[#d8c0ad] text-xs font-bold text-[#211a16]"
                >
                  {initial}
                </div>
              ))}
            </div>

            <p className="ml-3 text-sm font-medium text-[#b7afa8]">
              +1.2K developers
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSignup