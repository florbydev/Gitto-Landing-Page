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
    <div className="mx-auto w-full max-w-155 lg:ml-6 lg:mr-0">
      <h1 className="text-[40px] font-bold leading-[1.08] tracking-[-0.03em] text-[#211A16] px-4 sm:text-[48px] lg:text-left lg:px-0 lg:text-[52px] xl:text-[56px]">
        See the progress behind your code<span className="text-orange-500">.</span>
      </h1>

      <p className="mt-5 max-w-147.5 text-base font-medium leading-5 text-[#5D5650] px-4 text-center sm:mt-6 sm:text-lg sm:leading-8 lg:pl-2 lg:text-left lg:text-xl">
        Gitto turns your Git activity into weekly progress, reflections, and
        encouragement from your developer circle.
      </p>

      <form
        className="mt-8 flex w-full max-w-140 flex-col gap-3 rounded-[24px] border border-orange-200 bg-white p-3 shadow-[0_16px_40px_rgba(255,111,32,0.08)] sm:mt-10 sm:flex-row sm:items-center sm:gap-0 lg:mt-11"
        onSubmit={onSubmit}
      >
        <input
          className="min-w-0 flex-1 bg-transparent px-3 py-3 text-base text-[#5D5650] outline-none placeholder:text-[#5D5650] sm:py-0 sm:text-lg"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => onEmailChange(event.target.value)}
        />

        <button
          className={classNames(
            'w-full cursor-pointer whitespace-nowrap rounded-2xl bg-orange-500 px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-orange-600 sm:w-auto sm:px-6 sm:text-lg',
            { 'cursor-not-allowed opacity-70': isLoading }
          )}
          type="submit"
          disabled={isLoading}
        >
          {isLoading ?
            <span className="inline-flex items-center gap-3">
              Joining
              <span
                aria-hidden="true"
                className="h-5 w-5 animate-spin rounded-full border-3 border-white/40 border-t-white"
              />
            </span>
            :
            <span className='flex items-center justify-center gap-x-4'>
              Join the wishlist {" "}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.6666 10H3.33325" stroke="#FFFEFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.4883 11.3355L14.6829 11.9699C13.3781 12.9979 12.7257 13.5118 12.1962 13.2774C11.6667 13.0429 11.6667 12.2401 11.6667 10.6344V9.3656C11.6667 7.75995 11.6667 6.95713 12.1962 6.7227C12.7257 6.48827 13.3781 7.00222 14.6829 8.03012L15.4882 8.66452C16.2739 9.28344 16.6667 9.59294 16.6667 10C16.6667 10.4071 16.2739 10.7166 15.4883 11.3355Z" stroke="#FFFEFC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>

          }
        </button>
      </form>

      {statusCopy[status] && (
        <p className="mt-3 text-sm font-medium text-[#5D5650]" role="status">
          {statusCopy[status]}
        </p>
      )}
    </div>
  )
}

export default HeroSignup
