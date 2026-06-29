import { useState, type ReactNode } from 'react'
import classNames from 'classnames'
import { activity, days, sidebarItems, stats } from '../data/dashboardPreview'
import logo from '../assets/logo.svg'


function DashboardPreview() {
  const [activeSidebarItem, setActiveSidebarItem] = useState('home')

  return (
    <div className="relative mx-auto flex min-h-97.5 w-full max-w-230 items-center justify-center overflow-visible sm:min-h-125 md:min-h-140 lg:h-full lg:min-h-0 lg:max-w-none">
      <div className="absolute left-1/2 top-1/2 h-75 w-75 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-200/45 blur-3xl sm:h-110 sm:w-140 md:h-140 md:w-180 lg:top-[44%] lg:h-155 lg:w-205" />
      <div className="absolute left-1/2 top-1/2 h-60 w-[320px] -translate-x-1/2 -translate-y-1/2 rotate-[-7deg] rounded-[42%] bg-orange-300/25 blur-xl sm:h-85 sm:w-130 md:h-102.5 md:w-170 lg:top-[44%] lg:h-107.5 lg:w-195" />

      <MobileDashboardPreview />

      <div className="relative z-10 hidden w-full max-w-140 overflow-hidden rounded-[28px] border border-orange-100 bg-white/95 shadow-[0_32px_80px_rgba(74,45,22,0.14)] sm:flex md:max-w-170 lg:h-[clamp(430px,42vw,500px)] lg:w-[clamp(560px,52vw,720px)] lg:max-w-none lg:-translate-x-7 lg:-translate-y-8 lg:rotate-3 lg:rounded-4xl xl:h-135 xl:w-190 2xl:h-150 2xl:w-210">
        <Sidebar
          activeItem={activeSidebarItem}
          onSelectItem={setActiveSidebarItem}
        />

        <div className="min-w-0 flex-1 px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-9 lg:py-9">
          <p className="text-xs font-semibold text-[#8B8178] sm:text-sm">
            This week
          </p>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <div className="min-w-0">
              <h2 className="text-[24px] font-bold leading-tight tracking-[-0.04em] text-[#211A16] sm:text-[28px] lg:text-[30px]">
                You showed up <span className="text-orange-500">4</span> days
              </h2>
              <p className="mt-2 text-sm font-medium text-[#6B625B]">
                Small steps. Real progress.
              </p>
            </div>

            <StreakCard />
          </div>

          <ActivityHeatmap />

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:mt-8">
            <ReviewCard />
            <ReflectionCard />
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileDashboardPreview() {
  const highlightedStats = stats.slice(0, 3)

  return (
    <div className="relative z-10 w-full max-w-90 rounded-[28px] border border-orange-100 bg-white/95 p-4 shadow-[0_28px_70px_rgba(74,45,22,0.14)] sm:hidden">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold text-[#8B8178]">This week</p>
          <h2 className="mt-1 text-[25px] font-bold leading-tight tracking-[-0.04em] text-[#211A16]">
            4 days of progress
          </h2>
        </div>

        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
          <FlameIcon />
        </span>
      </div>

      <div className="mt-5 rounded-2xl bg-orange-50 p-4">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-[34px] font-bold leading-none tracking-tighter text-[#211A16]">
              4
            </p>
            <p className="mt-1 text-xs font-semibold text-[#5D5650]">
              day streak
            </p>
          </div>

          <p className="max-w-37.5 text-right text-xs font-semibold leading-5 text-[#6B625B]">
            Small steps. Real progress.
          </p>
        </div>

        <MiniActivityHeatmap />
      </div>

      <div className="mt-4 space-y-2.5">
        {highlightedStats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center justify-between gap-3 rounded-2xl border border-orange-100 bg-white px-4 py-3"
          >
            <span className="text-xs font-bold text-[#211A16]">
              {stat.label}
            </span>
            {stat.meta && (
              <span className="shrink-0 rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-bold text-orange-500">
                {stat.meta}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-2xl border border-dashed border-orange-200 bg-orange-50/70 p-4">
        <p className="text-xs font-bold text-[#211A16]">Reflection prompt</p>
        <p className="mt-1 text-sm font-semibold leading-5 text-[#5D5650]">
          What helped you show up this week?
        </p>
      </div>
    </div>
  )
}

function MiniActivityHeatmap() {
  const weeklyTotals = activity.map((day) => Math.max(...day))

  return (
    <div className="mt-5 grid grid-cols-7 gap-1.5">
      {days.map((day, index) => (
        <div key={day} className="min-w-0">
          <div
            className={classNames(
              'mx-auto h-8 w-full max-w-8 rounded-xl',
              heatCellColors[weeklyTotals[index]]
            )}
          />
          <p className="mt-1.5 text-center text-[9px] font-bold text-[#6B625B]">
            {day.slice(0, 1)}
          </p>
        </div>
      ))}
    </div>
  )
}

type SidebarProps = {
  activeItem: string
  onSelectItem: (itemId: string) => void
}

function Sidebar({ activeItem, onSelectItem }: SidebarProps) {
  return (
    <aside className="w-17.5 shrink-0 border-r border-orange-100 bg-white/70 px-3 py-5 sm:w-22 sm:px-5 sm:py-6 md:w-27 md:px-6 md:py-8">
      <div className="mb-6 text-lg font-bold tracking-[-0.08em] text-[#211A16] sm:text-xl md:mb-8 md:text-2xl">
        <img src={logo} alt="Gitto logo" />
      </div>

      <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5">
        {sidebarItems.map((item) => (
          <button
            key={item.id}
            className={classNames(
              'flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl transition-colors sm:h-10 sm:w-10 md:h-11 md:w-11',
              activeItem === item.id
                ? 'bg-orange-100 text-orange-500'
                : 'text-[#7B726A] hover:bg-orange-50 hover:text-orange-500'
            )}
            type="button"
            aria-label={item.label}
            onClick={() => onSelectItem(item.id)}
          >
            <SquareIcon />
          </button>
        ))}
      </div>
    </aside>
  )
}

function StreakCard() {
  return (
    <div className="flex w-full min-w-0 items-center justify-start gap-3 rounded-2xl bg-orange-50 px-4 py-3 sm:w-auto sm:min-w-37.5 sm:justify-center sm:gap-4 sm:px-5 sm:py-4">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500 sm:h-9 sm:w-9">
        <FlameIcon />
      </span>

      <div>
        <p className="text-2xl font-bold leading-none text-[#211A16] sm:text-3xl">
          4
        </p>
        <p className="mt-1 text-xs font-semibold text-[#211A16]">day streak</p>
      </div>
    </div>
  )
}

function ActivityHeatmap() {
  return (
    <div className="mt-6 grid grid-cols-7 gap-x-1.5 gap-y-2 sm:gap-x-3 lg:mt-8 lg:gap-x-4">
      {days.map((day, dayIndex) => (
        <div key={day} className="min-w-0">
          <p className="mb-2 text-center text-[10px] font-semibold text-[#6B625B] sm:text-xs">
            {day}
          </p>

          <div className="grid grid-cols-1 justify-items-center gap-1.5 sm:gap-2">
            {activity[dayIndex].map((level, index) => (
              <div
                key={`${day}-${index}`}
                className={classNames(
                  'h-4 w-5 rounded-md sm:h-5 sm:w-6 md:w-7',
                  heatCellColors[level]
                )}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function ReviewCard() {
  return (
    <InfoCard title="This week in review">
      {stats.map((stat) => (
        <div key={stat.label} className="mb-3 flex items-start gap-3 last:mb-0">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-300 text-xs font-bold text-emerald-600">
            ✓
          </span>

          <div>
            <p className="text-xs font-bold text-[#211A16]">{stat.label}</p>
            {stat.meta && (
              <p className="mt-0.5 text-[11px] font-medium text-[#6B625B]">
                {stat.meta}
              </p>
            )}
          </div>
        </div>
      ))}
    </InfoCard>
  )
}

function ReflectionCard() {
  return (
    <InfoCard title="Reflection">
      <div className="space-y-3 text-xs font-medium text-[#3B332D]">
        <p>What went well this week?</p>
        <p>What did you learn?</p>
        <p>What will you focus on next?</p>
      </div>

      <button
        className="mt-5 w-full cursor-pointer rounded-xl border border-orange-400 px-4 py-3 text-sm font-semibold text-orange-500 transition-colors hover:bg-orange-50 lg:mt-7"
        type="button"
      >
        Write a reflection
      </button>
    </InfoCard>
  )
}

type InfoCardProps = {
  title: string
  children: ReactNode
}

function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-orange-100 bg-white p-4 shadow-[0_14px_35px_rgba(74,45,22,0.06)] sm:p-5 lg:p-6">
      <h3 className="mb-4 text-sm font-bold text-[#211A16]">{title}</h3>
      {children}
    </div>
  )
}

function SquareIcon() {
  return (
    <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" aria-hidden="true">
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
  )
}

function FlameIcon() {
  return (
    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.5 2.5C13.5 7.5 7 8.4 7 15a5 5 0 0 0 10 0c0-2.9-1.5-4.9-3.2-6.7.2 2.2-.7 3.5-2.2 4.4.3-2.7-.7-5.2-2.7-7C10.8 5 12.4 4 13.5 2.5Z" />
    </svg>
  )
}

const heatCellColors: Record<number, string> = {
  0: 'bg-orange-50',
  1: 'bg-orange-100',
  2: 'bg-orange-200',
  3: 'bg-orange-300',
  4: 'bg-orange-500',
}

export default DashboardPreview
