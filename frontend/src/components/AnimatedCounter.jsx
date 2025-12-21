import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({ end, duration = 2, suffix = '', prefix = '' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref}>
      {inView ? (
        <CountUp 
          end={end} 
          duration={duration} 
          suffix={suffix}
          prefix={prefix}
        />
      ) : (
        <span>0{suffix}</span>
      )}
    </div>
  );
};

export default AnimatedCounter;
