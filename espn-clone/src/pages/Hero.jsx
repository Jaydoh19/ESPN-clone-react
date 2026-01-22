import React from 'react'
import { Activity, Calendar, Trophy } from 'lucide-react'

const Hero = () => {
  return (
    <section className='flex justify-center items-center mt-35 overflow-hidden mb-10'>
      <div className='md:w-3/4 md:py-10 md:px-10 py-6 px-6 rounded-3xl overflow-hidden relative'>

        {/* Background image */}
        <div className="absolute inset-0 bg-[url('/background.png')] bg-center bg-cover">
        </div>

        {/* Fade overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0b0f1a]/90 via-[#0b0f1a]/90 to-transparent">
        </div>

        {/* Content */}

        <div className="relative py-10 px-10">
          <div className='md:block flex flex-col justify-center items-center'>
            <div className='flex gap-2 items-center bg-orange-400/10 rounded-full px-4 py-2 w-max '>
              <Activity className="w-5 h-5 md:w-5 md:h-5 text-orange-400 animate-pulse" />
              <p className='font-bold text-sm text-orange-400'>Live NBA Action</p>
            </div>
            <div className='mt-6 flex-nowrap max-w-lg text-center md:text-start'>
              <p className='font-bold text-6xl'>NBA Live</p>
              <span className='font-bold text-6xl bg-clip-text bg-linear-to-r from-orange-400 to-red-500 text-transparent'>Stats & Scores</span>
              <p className='mt-3 text-gray-400 text-xl '>Real-time scores, player statistics, team standings, and comprehensive NBA coverage all in one place.</p>
            </div>
          </div>
          <div className='flex gap-2 items-center justify-center md:justify-start '>
            <div className='mt-5 flex gap-2 items-center'>
              <div className='flex gap-2 items-center bg-[#1a1f2b] border-b border-gray-400/20 px-2 py-2 md:px-4 md:py-3 rounded-xl'>
                <div className='bg-red-500/20 mr-2 p-2 rounded-xl'>
                  <Activity className="w-5 h-5 md:w-5 md:h-5 text-red-400" />
                </div>
                <div className='gap-2 items-center justify-center flex flex-col pr-2'>
                  <p className='md:text-3xl text-lg text-nowrap font-bold'>0</p>
                  <p className='text-gray-400 text-nowrap text-sm'>Live Games</p>
                </div>
              </div>
            </div>
            <div className='mt-5 flex gap-2 items-center'>
              <div className='flex gap-2 items-center bg-[#1a1f2b] border-b border-gray-400/20 px-2 py-2 md:px-4 md:py-3 rounded-xl'>
                <div className='bg-green-500/20 mr-2 p-2 rounded-xl'>
                  <Calendar className="w-5 h-5 md:w-5 md:h-5 text-green-300" />
                </div>
                <div className='gap-2 items-center justify-center flex flex-col pr-2'>
                  <p className='md:text-3xl text-lg text-nowrap font-bold'>0</p>
                  <p className='text-gray-400 text-sm'>Scheduled</p>
                </div>
              </div>
            </div>
            <div className='mt-5 flex gap-2 items-center'>
              <div className='flex gap-2 items-center bg-[#1a1f2b] border-b border-gray-400/20 px-2 py-2 md:px-4 md:py-3 rounded-xl'>
                <div className='bg-yellow-500/20 mr-2 p-2 rounded-xl'>
                  <Trophy className="w-5 h-5 md:w-5 md:h-5 text-yellow-300" />
                </div>
                <div className='gap-2 items-center justify-center flex flex-col pr-2'>
                  <p className='md:text-3xl text-sm text-nowrap font-bold'>2025-2026</p>
                  <p className='text-gray-400'>Season</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero