"use strict";

const homes =
[
    { address: "31700 Ocean Ave", home_type: "Single Level", rooms: "1 Bedroom, 1 Bathroom", price: "$2,800", description:"A lovely one bedroom apartment, across the street from Santa Monica Beach. Floor-to-Ceiling Windows. Elfa Closet Systems. Located in Santa Monica.", photo: "../client/public/images/beachfront.jpg" },
    { address: "849 S Broadway", home_type: "Single Level", rooms: "1 Bedroom, 1 Bathroom", price: "$3,200", description:"Ultra spacious apartment, centarlly located. Private backyard. Great city view. Located in Downtown Los Angeles.", photo: "../client/public/images/oneBedroom.jpg" },
    { address: "10 Washington Blvd", home_type: "Two Level", rooms: "2 Bedroom,	1 Bathroom", price: "$3,340", description:"Dreamy two bedroom house, 1 block from the Venice Board Walk. Central Air Conditioning and Heating. Easy Access to Freeways, Beach, and Entertainment. Located in Venice Beach.", photo: "../client/public/images/apartments.jpg" }, 
    { address: "1154 Westwood Blvd", home_type: "Single Level", rooms: "Studio, 1 Bathroom", price: "$1,800", description:"Spacious private studio, near restaurants and boutiques. Easy Access to Freeways, Beach, and Entertainment. Hardwood-style floors. Located in WestWood.", photo: "../client/public/images/duplex2.jpg" },
    { address: "13345 Fiji Way", home_type: "Two Level", rooms: "3 Bedroom, 2 Bathroom", price: "$4,800", description:"Beach view two bedroom house, walking distance to beach. New wooden floors and private backyard. Private pool. Located in Marina Del Rey.", photo: "../client/public/images/duplex.jpg" },
    { address: "9400 Culver Blvd", home_type: "Single Level", rooms: "2 Bedroom, 2 Bathroom", price: "$4,300", description:"Luxurious spacious apartment with amenities. Across the street from the local shops and restaurants. High ceilings, pool and full gym. Located in Culver City.", photo: "../client/public/images/losAngelesLoft.jpg" },
];

const users = 
[
    {name:"Griffin", password: "Griffin123"},
    {name: "Amber", password: "Amber123"},
    {name: "Rocio", password:"Rocio123"},
    {name: "Derek", password: "Derek123"}
];

module.exports = {
    homes,
    users 
};