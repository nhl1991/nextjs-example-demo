'use client'

import { useEffect, useState } from 'react';
import Wrapper from './ui/Wrapper';
import ComponentName from './ui/ComponentName';

export default function ClientComponent1() {
  const [userAgent, setUserAgent] = useState<boolean>(false);
  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    setUserAgent(isMobile);
  }, []);

  return (
    <Wrapper>
      <ComponentName>CLIENT-COMPONENT</ComponentName>
      <p className='text-sm'>Only used <b>window.navigator.userAgent</b>.</p>
      <div className="flex items-center justify-center p-2">
        <p className="p-2">{userAgent ? 'MOBILE' : 'DESKTOP'} </p>
        <div className={`w-4 h-4 rounded-full ${userAgent ? `bg-green-500` : `bg-red-500`}`}>
        </div>
      </div>
    </Wrapper>
  );
}