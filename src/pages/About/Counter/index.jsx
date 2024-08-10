import React, { useRef, useEffect, useMemo } from 'react';
import counterAnimation from './animations';
import CounterItem from './CounterItem';

const Counter = () => {
  const itemsSoldRef = useRef(null);
  const happyCustomersRef = useRef(null);
  const collectionsLaunchedRef = useRef(null);

  const counters = useMemo(
    () => [
      { ref: itemsSoldRef, label: 'Items Sold', end: 5000 },
      { ref: happyCustomersRef, label: 'Happy Clients', end: 3000 },
      { ref: collectionsLaunchedRef, label: 'New Launches', end: 120 },
    ],
    []
  );

  useEffect(() => {
    const cleanup = counterAnimation(counters);
    return () => cleanup();
  }, [counters]);

  return (
    <section className="bg-gray-100 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Our Achievements</h2>
      <div className="flex flex-wrap justify-center space-y-8 sm:space-y-0 sm:space-x-8">
        {counters.map(({ ref, label }) => (
          <CounterItem key={label} innerRef={ref} label={label} />
        ))}
      </div>
    </section>
  );
};

export default Counter;
