import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Card() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [          
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        
        <div className="w-full mt-8 ">
            <Slider {...settings}>
                {data.map((d, index) => (
                    <div key={index} >
                        <div className="border rounded-lg py-8 w-11/12 mx-auto p-4">
                            <div className="grid grid-cols-12">
                                <div className="col-span-2">
                                    <img src={d.image} alt="" className="w-full h-auto" />
                                </div>
                                <div className="col-span-10 ml-4">
                                    <div>
                                        {d.about}
                                    </div>
                                    <div className="mt-4 font-bold">
                                        {d.name}
                                    </div>
                                    <div className="mt-2">
                                        {d.position}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

const data = [
    {
        image: "person1.webp",
        about: "Before Zenskar, our usage tracking and invoicing were manual. Zenskar automated the process, giving real-time visibility into consumption, and enabled us to invoice automatically based on usage.",
        name: "Ming Lui",
        position: "VP Finance, Yembo"
    },
    {
        image: "person2.webp",
        about: "We needed indefinite contracts for our long term offering. You only realize how restrictive billing tools can be when your requirements get specific. Fortunately, we found Zenskar to tailor fit to our billing needs and more.",
        name: "Cory Linton",
        position: "CEO, Edify"
    },
    {
        image: "person3.webp",
        about: "We never imagined that our AR process could go from fully manual to completely automated with a single platform. We're saving 200+ hours every quarter by removing the grunt work with Zenskar.",
        name: "Noy Kalansky",
        position: "Finance Controller, Pontera"
    },
    {
        image: "person4.webp",
        about: "Usage based billing was turning into a nightmare for us. We had to devote engineering resources to billing for months, lacking better options. But with Zenskar, we can focus on serving our customers and expanding our product capabilities.",
        name: "Shalini Aggarwal",
        position: "VP Engineering, Squadstack"
    },
    {
        image: "person5.jpeg",
        about: "If not for Zenskar, we would have built an in-house system for our usage-based model, delayed the launch by at least 4 months and we would still be force-fitting our use case on clunky old tools.",
        name: "Kshitij Gupta",
        position: "CEO, 100ms"
    }
];
