import React from 'react';

const NewsInsightCard = ({newsInsight}) => {
    return (
        <div>
            <img className='w-full' src={newsInsight.image} alt="News Insight" />
            <h3 className='text-xl font-semibold mt-2'>{newsInsight.title}</h3>
            <p className='text-gray-600 mt-2'>{newsInsight.description}</p>
        </div>
    );
};

export default NewsInsightCard;