import React, { useState } from 'react'
import { Activity, ArrowLeft, ArrowRight, Award, Calendar, RefreshCcw, Star, Trophy } from 'lucide-react'
import { GameCard } from '../components/GameCard'
import WesternStandings from '../components/WesternStandings'
import EasternStandings from '../components/EasternStandings'
import TopPoints from '../components/TopPoints'
import TopRebounds from '../components/TopRebounds'
import TopAssists from '../components/TopAssists'

const Hero = () => {

  const [conference, setConference] = useState('west') // 'west' | 'east'
  const [stats, setStats] = useState('points') //'rebounds' | 'assists' 

  

  return (
    <section className='flex flex-col justify-center items-center mt-36 overflow-hidden mb-10'>
      <div className='md:w-3/4 md:py-10 md:px-10 py-6 px-6 rounded-2xl overflow-hidden relative'>

        {/* Background image */}
        <div className="absolute inset-0 bg-[url('/nba-background.jpg')] bg-center bg-cover">
        </div>

        {/* Fade overlay */}
        <div className="absolute inset-0 bg-[#0b0f1a]/85">
        </div>

        {/* Content */}

        <div className="relative px-5 py-8 md:px-10 md:py-10">
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
                <div className=' items-center justify-center flex flex-col pr-2'>
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
                <div className=' items-center justify-center flex flex-col pr-2'>
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
                <div className='items-center justify-center flex flex-col pr-2'>
                  <p className='md:text-3xl text-sm text-nowrap font-bold'>2025-2026</p>
                  <p className='text-gray-400'>Season</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-10 mb-2 w-full md:w-3/4 rounded-2xl border border-gray-400/20 bg-linear-to-tr from-[#0d121d] to-[#1a1f2b] px-6 py-8 md:px-10 md:py-10 text-center'>
        <div className='flex flex-col justify-center items-center space-y-3'>
          <Star className='w-12 h-12 text-yellow-400' />
          <p className='text-lg font-bold'>No Favorites Yet</p>
          <p className='text-md text-gray-400'>Click the heart icon on teams or players to add them to your favorites!</p>
        </div>
      </div>

      <div className=' mb-8 w-full md:w-3/4 rounded-2xl px-6 py-8 md:px-10 md:py-10 text-center'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center text-center gap-2'>
            <p className='font-bold text-xl'>Today's Games</p>
            <div className="flex items-center gap-1 bg-red-500/20 py-1 px-3 rounded-2xl">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
              <p className="text-sm text-red-300">
                0 Live
              </p>
            </div>
          </div>
          <div className='flex items-center justify-center gap-2'>
            <button className='bg-gray-600/20 p-2 rounded-xl hover:bg-gray-600/40 transition-colors ease-out cursor-pointer'>
              <RefreshCcw className='w-5 h-5 text-gray-400' />
            </button>
            <button className='bg-gray-600/20 p-2 rounded-xl hover:bg-gray-600/40 transition-colors ease-out cursor-pointer'>
              <ArrowLeft className='w-5 h-5 text-gray-400' />
            </button>
            <button className='bg-gray-600/20 p-2 rounded-xl hover:bg-gray-600/40 transition-colors ease-out cursor-pointer'>
              <ArrowRight className='w-5 h-5 text-gray-400' />
            </button>
          </div>
        </div>

        {/*Game Cards */}
        <div className='mt-5 w-1/2 justify-center flex gap-3 mx-auto'>
          <GameCard />
          <GameCard />
        </div>

        <div className='flex grid-cols-2 items-center justify-center gap-5 mt-10'>
          {/*Standings */}
          <div className='rounded-xl bg-linear-to-tr from-[#0d121d] to-[#1a1f2b] border border-gray-400/20 p-5 w-full'>
            <div className='flex items-center justify-between'>
              <div className='flex gap-1 items-center'>
                <Trophy className='w-6 h-6 text-yellow-400 mr-2' />
                <p className='font-bold text-2xl'>Standings</p>
              </div>
              <div className='flex bg-slate-700/50 rounded-xl p-1'>
                <button
                  onClick={() => setConference('west')}
                  className={`font-semibold px-4 py-2 rounded-xl transition-colors cursor-pointer ${conference === 'west'
                    ? 'bg-blue-700 text-white'
                    : 'bg-transparent text-gray-400 hover:text-white'
                    }`}
                >Western</button>
                <button
                  onClick={() => setConference('east')}
                  className={`font-semibold px-4 py-2 rounded-xl transition-colors cursor-pointer ${conference === 'east'
                    ? 'bg-red-600 text-white'
                    : 'bg-transparent text-gray-400 hover:text-white'
                    }`}>Eastern</button>
              </div>
            </div>
            <div className='flex flex-col'>
              <hr className=' text-gray-400/20 mt-2' />
              <div className='flex justify-between mt-2 gap-8'>
                <div className='ml-3 flex gap-5 items-center'>
                  <p className='font-bold text-sm text-gray-400 uppercase'>Rank</p>
                  <p className='font-bold text-sm text-gray-400 uppercase'>Team</p>
                </div>
                <div className='flex mr-4 gap-5 items-center'>
                  <p className='font-bold text-sm text-gray-400 uppercase'>W</p>
                  <p className='font-bold text-sm text-gray-400 uppercase'>L</p>
                  <p className='font-bold text-sm text-gray-400 uppercase'>PCT</p>
                  <p className='font-bold text-sm text-gray-400 uppercase'>Home</p>
                  <p className='font-bold text-sm text-gray-400 uppercase'>Away</p>
                  <p className='font-bold text-sm text-gray-400 uppercase'>Streak</p>
                  <p className='font-bold text-sm text-gray-400 uppercase'>PPG</p>
                  <p className='font-bold text-sm text-gray-400 uppercase'>OPPG</p>
                </div>
              </div>
              <hr className=' text-gray-400/20 mt-2 mb-2' />
            </div>
            {/*Display Standings */}
            <div>
              {conference === 'west' ? <WesternStandings /> : <EasternStandings />}
            </div>
          </div>
          {/*Top Performers */}
          <div className='rounded-xl bg-linear-to-tr from-[#0d121d] to-[#1a1f2b] border border-gray-400/20 p-5 w-full'>
            <div className='flex flex-col'>
              <div className='flex items-center'>
                <Award className='w-6 h-6 text-yellow-400 mr-2'/>
                <p className='text-2xl font-bold'>Top Performers</p>
              </div>
              <div className='flex items-center mt-3'>
                <button 
                onClick={() => setStats('points')}
                className={`font-semibold px-4 py-2 rounded-xl transition-colors cursor-pointer ${stats === 'points'
                    ? 'bg-yellow-500/20 text-yellow-400'
                    : 'bg-transparent text-gray-400 hover:text-white'
                    }`}>Points</button>
                <button
                onClick={() => setStats('rebounds')}
                className={`font-semibold px-4 py-2 rounded-xl transition-colors cursor-pointer ${stats === 'rebounds'
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'bg-transparent text-gray-400 hover:text-white'
                    }`}>Rebounds</button>
                <button
                onClick={() => setStats('assists')}
                className={`font-semibold px-4 py-2 rounded-xl transition-colors cursor-pointer ${stats === 'assists'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-transparent text-gray-400 hover:text-white'
                    }`}>Assists</button>
              </div>
              <hr className=' text-gray-400/20 mt-2 mb-2' />
              {/*Display Top Stats */}
              {stats === 'points' ? <TopPoints /> : stats === 'rebounds' ? <TopRebounds /> : <TopAssists />}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero