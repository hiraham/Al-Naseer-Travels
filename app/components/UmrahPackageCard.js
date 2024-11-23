// // app/components/UmrahPackages.js
"use client";
 import React from 'react';
 import UmrahPackageCard from './UmrahPackageCard';

 const UmrahPackages = () => {
   const packages = [
     {
      packageName: "Economy Umrah Package",
       price: "$500",
       description: "A budget-friendly option for a spiritual journey.",
       features: [
        "5 Days Accommodation",
        "Airport Transfers",
        "Guided Tours",
         "Breakfast Included"
      ],
       imageUrl: "/images/economy-umrah.jpg",
     },
     {
       packageName: "Luxury Umrah Package",
       price: "$1500",
      description: "Experience the comfort and luxury during your Umrah.",
       features: [
        "7 Days Accommodation in 5-Star Hotels",
         "Private Transportation",
         "Exclusive Guided Tours",
         "All Meals Included"
       ],
       imageUrl: "/images/luxury-umrah.jpg",
     },
     // Add more packages as needed
   ];

   return (
     <div className="py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#005f73]">Umrah Packages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
         {packages.map((pkg, index) => (
           <UmrahPackageCard key={index} {...pkg} />
         ))}
       </div>
     </div>
   );
 };

 export default UmrahPackages;
