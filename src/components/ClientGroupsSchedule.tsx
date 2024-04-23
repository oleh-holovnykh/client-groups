import React from 'react';
import { ClientGroups } from '../types/events';

interface Props {
  groups: ClientGroups[];
}

export const ClientGroupsSchedule: React.FC<Props> = ({ groups }) => {
  const onlineGroups = groups
    .filter((group) => group.type === 'online')
    .filter((group) => {
      const startDate = new Date(group.startDate);
      return startDate.getTime() >= Date.now();
    })
    .sort((a, b) => {
      const dateA = new Date(a.startDate);
      const dateB = new Date(b.startDate);
      return dateA.getTime() - dateB.getTime();
    });

  const offlineGroups = groups
    .filter((group) => group.type === 'offline')
    .filter((group) => {
      const startDate = new Date(group.startDate);
      return startDate.getTime() >= Date.now();
    })
    .sort((a, b) => {
      const dateA = new Date(a.startDate);
      const dateB = new Date(b.startDate);
      return dateA.getTime() - dateB.getTime();
    });

  return (
    <div>
      <div className='flex justify-center items-center'>
        <div className='w-[300px] text-gray-600'>
          <span className='bg-yellow-100 p-1 inline-block'>🗓️ <b>Очно у Києві:</b></span> 
          <br />
          {offlineGroups.map((group, i) => {
            const startDate = new Date(group.startDate);
            const dateStr = `${startDate.getDate().toString().padStart(2, '0')}.${(
              startDate.getMonth() + 1
            )
              .toString()
              .padStart(2, '0')}`;
            return (
              <span key={i}>
                {dateStr}
                {i !== offlineGroups.length - 1 ? ', ' : ''}
              </span>
            );
          })}
          <br />
          <br />
          <a
            className='text-blue-600 hover:underline'
            target='_blank'
            href='https://maps.app.goo.gl/gpfjsssta7SDMBUC8'
          >вул. Кловський узвіз, 4а</a>
          
          <br />
          <span className='italic'>
            1 під'їзд зправа, у під'їзді білі двері зліва, код: 1301#, по сходах
            вниз, двері прямо
          </span>
          <br />
          <br />
          <span className='bg-yellow-100 p-1 inline-block'>  🗓️ <b>Online в Zoom:</b> </span>
          <br />
          {onlineGroups.map((group, i) => {
            const startDate = new Date(group.startDate);
            const dateStr = `${startDate.getDate().toString().padStart(2, '0')}.${(
              startDate.getMonth() + 1
            )
              .toString()
              .padStart(2, '0')}`;
            return (
              <span key={i}>
                {dateStr}
                {i !== onlineGroups.length - 1 ? ', ' : ''}
              </span>
            );
          })
          }
          <br />
          <br />
          Посилання для підключення, будь ласка, уточнюйте у <a
            className='text-blue-600 hover:underline'
            target='_blank'
            href='https://t.me/oleh_holovnykh'
          >
            t.me/oleh_holovnykh
          </a>
    </div></div></div>
  );
};
