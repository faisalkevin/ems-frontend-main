import { Box, Heading } from '@chakra-ui/react'
import HeroSection from './components/hero'
import SearchBar from './components/SearchBar'
import { fetchEvent } from '../../constants'
import EventCard from './components/EventCard';

export default async function Home( searchParams: { manufacturer: any; year: any; fuel: any; limit: any; model: any; } ) {

  const allEvent = await fetchEvent({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  });

  const isDataEmpty = !Array.isArray(allEvent) || allEvent.length < 1 || !allEvent;

  return (
    <main className='overFlow-hidden'>
      <HeroSection/>
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className='home__text-container'>
          <h1 className="text-4xl font-extrabold">Events</h1>
          <p className='font-extrabold'>Explore events you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allEvent?.map((event) => (
              // eslint-disable-next-line react/jsx-key
              <EventCard event={event}/>
              ))}
            </div>
          </section>
        ): (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allEvent?.message}</p>
          </div>
        )}

      </div>
    </main>
  )
  }
