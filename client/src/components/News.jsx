import React from 'react';

function News({date, news}) {
  return (
    <div className='flex flex-row gap-8'>
      <li><span className='italic font-bold'>{date + '\t'}</span><span>{news}</span></li>
    </div>
  )
}

export default News;
