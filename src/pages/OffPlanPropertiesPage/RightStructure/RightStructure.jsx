import React from 'react';



const RightStructure = () => {


    const info =[
        {
        image: "https://i.ibb.co.com/xSfmXX5Y/jason-dent-w3e-Fhq-Xjk-ZE-unsplash.jpg",
        title: "Hotel style living",
        description: "Welcome to Fairmont Residences Solara Tower – a luxurious 55-storey landmark in Downtown Dubai offering 1 to 4 bedroom apartments and spacious duplex penthouses. From state-of-the-art finishes to branded services by Fairmont Hotels & Resorts, this lavish collection aims to redefine the living experience. Let us show you around. "
        },
        {
        image: "https://i.ibb.co.com/xSfmXX5Y/jason-dent-w3e-Fhq-Xjk-ZE-unsplash.jpg",
        title: "Excitement awaits",
        description: "It can be hard to decide on a location for your new home, maybe you want to be close to the beach or stay connected to the central business hubs. That's the beauty of Downtown – you can live in a major community while staying close to Dubai's hotspots.From world class facilities at your doorstep to exceptional entertainment, there's something extraordinary about living in the heart of the city. "
        },
]

    return (
        <div className='flex flex-col items-center justify-center gap-10 p-10'>
            {
                info.map((item, index) => <div className="grid grid-cols-2 gap-4" key={index}>
                <img src={item.image} className={`w-full h-full ${index % 2 !== 0 ? "order-2" : ""}`} alt={item.title} />
               <div className={`text-start ${index % 2 !== 0 ? "order-1" : ""}`}>
               <h3 className='text-xl font-semibold text-gray-800 px-10 py-5'>{item.title}</h3>
               <h3 className='text-sm font-light text-gray-500 px-10'>{item.description}</h3>
               </div>
            </div>)
            }
        </div>
    );
};

export default RightStructure;