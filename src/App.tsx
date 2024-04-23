import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  const [showRequisites, setShowRequisites] = useState<boolean>(false);
  const [showSchedule, setShowSchedule] = useState<boolean>(true);

  const handleRequisitesClick = () => {
    setShowRequisites(!showRequisites);

    if (showSchedule) {
      setShowSchedule(!showSchedule);
    }
  };

  const handleScheduleClick = () => {
    setShowSchedule(!showSchedule);

    if (showRequisites) {
      setShowRequisites(!showRequisites);
    }
  };

  return (
    <>
      <div className='text-center mb-2'>
        <span className='mt-4 block'>
          <b>Розстановка запиту:</b> 5000 грн
        </span>
        <span className='mt-2 block'>
          Участь заступником: 300 грн
        </span>
        <span className='mt-2 block'>
          Записатись: <a
            className='text-blue-600 hover:underline'
            target='_blank'
            href='https://t.me/oleh_holovnykh'
          >
            t.me/oleh_holovnykh
          </a>
        </span>
        <div className='mt-4'>
        <NavLink to="/payment">
            <button
                onClick={handleRequisitesClick}
                className={`mr-2 text-sm text-gray-800 py-2 px-4 border border-gray-200 rounded ${
                  showRequisites ? 'hover:bg-white bg-gray-100' : 'bg-white hover:bg-gray-100 shadow'
                }`}
              >
                Реквізити
            </button>
          </NavLink>
            
          <NavLink to="/schedule">
            <button
                onClick={handleScheduleClick}
                className={`text-sm text-gray-800 py-2 px-4 border border-gray-200 rounded ${
                  showSchedule ?  'hover:bg-white bg-gray-100' : 'bg-white hover:bg-gray-100 shadow'
                }`}
              >
                Розклад
            </button>
          </NavLink>
        </div>
      </div>
      <div className='mt-6'><Outlet /></div>
    </>
  );
}

export default App;
