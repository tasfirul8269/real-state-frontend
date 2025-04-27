import React from 'react';

const Amenities = () => {

    const amenities = [
        {
          title: "Swimming pool",
          image: "https://ggfx-handh3.s3.eu-west-2.amazonaws.com/i/swimming_9fe46c8553.svg"
        },
        {
          title: "Club lounge and creative zone",
          image: "https://ggfx-handh3.s3.eu-west-2.amazonaws.com/i/house_rooms_b71d8c1b31.svg"
        },
        {
          title: "Fully equipped gym",
          image: "https://ggfx-handh3.s3.eu-west-2.amazonaws.com/i/gym_704876a269.svg"
        },
        {
          title: "Cinema",
          image: "https://ggfx-handh3.s3.eu-west-2.amazonaws.com/i/cinema_old_c0567f4d7c.svg"
        },
        {
          title: "Retail shops",
          image: "https://ggfx-handh3.s3.eu-west-2.amazonaws.com/i/hh_Icons_retail_shops_7e09600870.svg"
        },
        {
          title: "Padel",
          image: "	https://ggfx-handh3.s3.eu-west-2.amazonaws.com/i/hh_Icons_retail_shops_7e09600870.svg"
        }
      ];

    return (
        <div className='flex justify-around items-center gap-4'>
            {
                amenities.map((item, index) => <div className='flex flex-col items-center space-y-3 mt-5 w-2/3 mx-auto my-10' key={index}>

                    <img src={item.image} alt={item.title} />
                    <h3 className='text-sm font-semibold text-gray-800'>{item.title}</h3>
                    </div>)
            }
        </div>
    );
};

export default Amenities;