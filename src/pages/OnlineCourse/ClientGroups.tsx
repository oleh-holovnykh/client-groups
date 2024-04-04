import React, { useState } from 'react';
import { CopyButton } from '../../components/CopyButton';
import { findEuro } from '../../helpers/findEuro';
import { normalizeCurrency } from '../../helpers/normalizeCurrency';
import useCurrencyData from '../../hooks/useCurrencyData';
import groups from '../../data/clientGroupsSchedule.json';
import ie from '../../data/individualEntrepreneur.json';
import { ClientGroupsSchedule } from '../../components/ClientGroupsSchedule';

export const OnlineCourse: React.FC = () => {
  const { currencies, loading, error } = useCurrencyData();
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

  if (loading) {
    return <div className='text-center'>Завантаження даних...</div>;
  }
  console.log(['error:', error]);
  if (error !== null) {
    return (
      <div exchange-container>
        Помилка при завантажені данних: {error.message}.{' '}
        <a
          href='https://minfin.com.ua/ua/company/monobank/currency/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:text-blue-700 underline'
        >
          Подивитись поточний курс Монобанку на сайті minfin.com.ua
        </a>
      </div>
    );
  }

  const euroRate = findEuro(currencies);

  if (euroRate) {
    console.log(['test', euroRate]);
    normalizeCurrency(euroRate);
  }

  return (
    <>
      <div className='text-center mb-2'>
        <span className='mb-2 block'>
          <b>Розстановка запиту:</b> 5000 грн
        </span>
        <span className='mb-2 block'>
          <b>Участь заступником:</b> 300 грн
        </span>
        <div className='mb-2'>
          <button
            onClick={handleRequisitesClick}
            className={`mr-2 text-sm text-gray-800 py-1 px-2 border border-gray-200 rounded ${
              showRequisites
                ? 'hover:bg-white bg-gray-100'
                : 'bg-white hover:bg-gray-100 shadow'
            }`}
          >
            {showRequisites ? 'Cховати реквізити' : 'Показати реквізити'}
          </button>

          <button
            onClick={handleScheduleClick}
            className={`text-sm text-gray-800 py-1 px-2 border border-gray-200 rounded ${
              showSchedule
                ? 'hover:bg-white bg-gray-100'
                : 'bg-white hover:bg-gray-100 shadow'
            }`}
          >
            {showSchedule ? 'Cховати розклад' : 'Показати розклад'}
          </button>
        </div>
      </div>
      {showRequisites && (
        <div className='text-left w-max mt-1 mx-auto text-gray-600'>
          <br />
          {ie.recipient} <CopyButton value={ie.recipient} />
          <br />
          IBAN: {ie.iban} <CopyButton value={ie.iban} />
          <br />
          ІПН/ЄДРПОУ: {ie.id} <CopyButton value={ie.id} />
          <br />
          Акціонерне товариство: {ie.bank} <CopyButton value={ie.bank} />
          <br />
          МФО: {ie.mfo} <CopyButton value={ie.mfo} />
          <br />
          ОКПО Банку: {ie.okpo} <CopyButton value={ie.okpo} />
          <br />
          <br />
          🔸Призначення платежу:
          <br />
          "Консультаційні послуги"
          <br />
          <br />
          Після оплати, будь ласка, надішліть скрін
          <br />
          квитанції{' '}
          <a
            className='text-blue-600 hover:underline'
            target='_blank'
            href='https://t.me/oleh_holovnykh'
          >
            t.me/oleh_holovnykh
          </a>
          <br />
          <br />
          🔥Важливо вказати призначення платежу
          <br />
          🔥Важливо, щоб платіж був від фізособи.
          <br />А не від ФОП, чи організації
        </div>
      )}

      {showSchedule && (
        <div className='flex justify-center items-center mt-5'>
          <div className='w-[300px] text-gray-600'>
            <ClientGroupsSchedule groups={groups} />
          </div>
        </div>
      )}
    </>
  );
};
