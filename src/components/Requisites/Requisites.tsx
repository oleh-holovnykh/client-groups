import React from 'react'
import { CopyButton } from '../CopyButton';
import ie from '../../data/individualEntrepreneur.json';

const Requisites: React.FC = () => {
  return (
    <div className='text-left w-max mx-auto text-gray-600'>
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
    {`"Консультаційні послуги з психології відносин, *дата*"`} <CopyButton value={`Консультаційні послуги з психології відносин, *дата*`} /> 
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
  )
}

export default Requisites;