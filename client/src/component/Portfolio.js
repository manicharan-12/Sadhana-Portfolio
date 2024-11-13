// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, Instagram, Twitter, Mail } from "lucide-react";
// import bgimage1 from "../images/background/image1.jpg";
// import product1 from "../images/product/product 5.jpg";
// import product2 from "../images/product/product 1.jpg";
// import product3 from "../images/product/product 2.jpg";
// import product4 from "../images/product/product 3.jpg";
// import product5 from "../images/product/product 4.jpg";
// import nature1 from "../images/nature/nature 1.jpg";
// import nature2 from "../images/nature/nature 2.jpg";
// import nature3 from "../images/nature/nature 3.jpg";
// import nature4 from "../images/nature/nature 4.jpg";
// import nature5 from "../images/nature/nature 5.jpg";
// import nature6 from "../images/nature/nature 6.jpg";
// import nature7 from "../images/nature/nature 7.jpg";
// import nature8 from "../images/nature/nature 8.jpg";

// // Custom UI components
// const Button = ({ children, ...props }) => (
//   <button
//     {...props}
//     className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//   >
//     {children}
//   </button>
// );

// const Input = ({ ...props }) => (
//   <input
//     {...props}
//     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//   />
// );

// const Textarea = ({ ...props }) => (
//   <textarea
//     {...props}
//     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//   />
// );

// const TabsTrigger = ({ children, isActive, onClick }) => (
//   <button
//     className={`px-4 py-2 ${
//       isActive
//         ? "border-b-2 border-blue-500 text-blue-500"
//         : "text-gray-500 hover:text-gray-700"
//     }`}
//     onClick={onClick}
//   >
//     {children}
//   </button>
// );

// export default function Portfolio() {
//   const [activeImage, setActiveImage] = useState(null);
//   const [activeTab, setActiveTab] = useState("products");

//   const galleryData = {
//     products: [product1, product2, product3, product4, product5],
//     nature: [
//       nature2,
//       nature3,
//       nature4,
//       nature5,
//       nature6,
//       nature7,
//       nature8,
//       nature1,
//     ],
//     wildlife: [
//       "/placeholder.svg?height=400&width=600&text=Wildlife+1",
//       "/placeholder.svg?height=400&width=600&text=Wildlife+2",
//       "/placeholder.svg?height=400&width=600&text=Wildlife+3",
//       "/placeholder.svg?height=400&width=600&text=Wildlife+4",
//       "/placeholder.svg?height=400&width=600&text=Wildlife+5",
//     ],
//     unnamed: [
//       "/placeholder.svg?height=400&width=600&text=Unnamed+1",
//       "/placeholder.svg?height=400&width=600&text=Unnamed+2",
//     ],
//   };

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Hero Section */}
//       <section className="relative h-screen flex items-center justify-center">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="absolute inset-0 z-0"
//         >
//           <img
//             src={bgimage1}
//             alt="Hero"
//             className="w-full h-full object-cover"
//           />
//         </motion.div>
//         <div className="relative z-10 text-center">
//           <motion.h1
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//             className="text-6xl font-bold mb-4"
//           >
//             Sadhana Epuri
//           </motion.h1>
//           <motion.p
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.7, duration: 0.8 }}
//             className="text-xl px-4 md:px-8 max-w-3xl mx-auto"
//           >
//             <br />
//             <b>Wildlife Enthusiast and Photographer</b> <br />
//             While my journey has encompassed various photographic genres,
//             including product and creative photography, my true passion lies in
//             capturing the wild and untamed beauty of nature. I've honed my
//             skills in wildlife photography, immersing myself in documenting the
//             unique behaviors of animals in their natural environments.
//           </motion.p>
//         </div>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.5, duration: 0.5 }}
//           className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
//         >
//           <ChevronDown className="w-10 h-10 animate-bounce" />
//         </motion.div>
//       </section>

//       {/* Gallery Section */}
//       <section className="py-20 px-4 md:px-8">
//         <h2 className="text-4xl font-bold mb-10 text-center">Gallery</h2>
//         <div className="mb-4">
//           <div className="flex border-b border-gray-200">
//             {Object.keys(galleryData).map((category) => (
//               <TabsTrigger
//                 key={category}
//                 isActive={activeTab === category}
//                 onClick={() => setActiveTab(category)}
//               >
//                 {category.charAt(0).toUpperCase() + category.slice(1)}
//               </TabsTrigger>
//             ))}
//           </div>
//         </div>
//         {Object.entries(galleryData).map(([category, images]) => (
//           <div
//             key={category}
//             className={activeTab === category ? "block" : "hidden"}
//           >
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {images.map((src, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setActiveImage(src)}
//                   className="aspect-w-4 aspect-h-3 bg-gray-800 rounded-lg overflow-hidden"
//                 >
//                   <img
//                     src={src}
//                     alt={`${category} image ${index + 1}`}
//                     className="w-full h-full object-contain cursor-pointer"
//                   />
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </section>

//       {/* About Section */}
//       <section className="py-20 px-4 md:px-8 bg-gray-900">
//         <div className="max-w-3xl mx-auto">
//           <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-lg mb-6"
//           >
//             I'm Sadhana Epuri, a passionate wildlife photographer with a keen
//             eye for capturing the beauty and diversity of nature. My journey in
//             photography has taken me through various genres, but my heart truly
//             lies in documenting the wild and untamed.
//           </motion.p>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-lg"
//           >
//             Through my lens, I aim to bring awareness to the importance of
//             wildlife conservation and inspire others to appreciate and protect
//             our planet's incredible biodiversity. Each photograph is a testament
//             to the unique behaviors and habitats of animals in their natural
//             environments.
//           </motion.p>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-20 px-4 md:px-8">
//         <h2 className="text-4xl font-bold mb-10 text-center">Get in Touch</h2>
//         <form className="max-w-md mx-auto space-y-4">
//           <Input
//             type="text"
//             placeholder="Name"
//             className="bg-gray-800 border-gray-700 text-white"
//           />
//           <Input
//             type="email"
//             placeholder="Email"
//             className="bg-gray-800 border-gray-700 text-white"
//           />
//           <Textarea
//             placeholder="Message"
//             className="bg-gray-800 border-gray-700 text-white"
//           />
//           <Button type="submit" className="w-full">
//             Send Message
//           </Button>
//         </form>
//       </section>

//       {/* Footer */}
//       <footer className="py-6 px-4 md:px-8 bg-gray-900">
//         <div className="flex justify-center space-x-6">
//           <a href="#" className="hover:text-gray-400 transition-colors">
//             <Instagram />
//             <span className="sr-only">Instagram</span>
//           </a>
//           <a href="#" className="hover:text-gray-400 transition-colors">
//             <Twitter />
//             <span className="sr-only">Twitter</span>
//           </a>
//           <a href="#" className="hover:text-gray-400 transition-colors">
//             <Mail />
//             <span className="sr-only">Email</span>
//           </a>
//         </div>
//         <p className="mt-4 text-center text-sm">
//           © 2024 Sadhana Epuri Wildlife Photography. All rights reserved.
//         </p>
//       </footer>

//       {/* Lightbox */}
//       <AnimatePresence>
//         {activeImage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
//             onClick={() => setActiveImage(null)}
//           >
//             <motion.img
//               src={activeImage}
//               alt="Enlarged view"
//               className="max-w-[90%] max-h-[90vh] object-contain"
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Instagram,
  Twitter,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import bgimage1 from "../images/background/image1.jpg";
import product1 from "../images/product/product 5.jpg";
import product2 from "../images/product/product 1.jpg";
import product3 from "../images/product/product 2.jpg";
import product4 from "../images/product/product 3.jpg";
import product5 from "../images/product/product 4.jpg";
import nature1 from "../images/nature/nature 1.jpg";
import nature2 from "../images/nature/nature 2.jpg";
import nature3 from "../images/nature/nature 3.jpg";
import nature4 from "../images/nature/nature 4.jpg";
import nature5 from "../images/nature/nature 5.jpg";
import nature6 from "../images/nature/nature 6.jpg";
import nature7 from "../images/nature/nature 7.jpg";
import nature8 from "../images/nature/nature 8.jpg";
import wild1 from "../images/wildlife/wild1.jpg";
import wild2 from "../images/wildlife/wild2.jpg";
import wild3 from "../images/wildlife/wild3.jpg";
import wild4 from "../images/wildlife/wild4.jpg";
import wild5 from "../images/wildlife/wild5.jpg";
import wild6 from "../images/wildlife/wild6.jpg";
import wild7 from "../images/wildlife/wild7.jpg";
import wild8 from "../images/wildlife/wild8.jpg";

// Custom UI components
const Button = ({ children, ...props }) => (
  <button
    {...props}
    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
  >
    {children}
  </button>
);

const Input = ({ ...props }) => (
  <input
    {...props}
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
);

const Textarea = ({ ...props }) => (
  <textarea
    {...props}
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
);

const TabsTrigger = ({ children, isActive, onClick }) => (
  <button
    className={`px-4 py-2 ${
      isActive
        ? "border-b-2 border-blue-500 text-blue-500"
        : "text-gray-500 hover:text-gray-700"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

const CustomPrevArrow = ({ className, onClick }) => (
  <div className={`${className} custom-arrow custom-prev`} onClick={onClick}>
    <ChevronLeft size={24} />
  </div>
);

const CustomNextArrow = ({ className, onClick }) => (
  <div className={`${className} custom-arrow custom-next`} onClick={onClick}>
    <ChevronRight size={24} />
  </div>
);

export default function Portfolio() {
  const [activeImage, setActiveImage] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  const galleryData = {
    products: [product1, product2, product3, product4, product5],
    nature: [
      nature1,
      nature2,
      nature3,
      nature4,
      nature5,
      nature6,
      nature7,
      nature8,
    ],
    wildlife: [wild1, wild3, wild4, wild2, wild5, wild6, wild7, wild8],
    unnamed: [
      "/placeholder.svg?height=400&width=600&text=Unnamed+1",
      "/placeholder.svg?height=400&width=600&text=Unnamed+2",
    ],
  };

  const allImages = Object.values(galleryData).flat();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "100px",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={bgimage1}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-6xl font-bold mb-4"
          >
            Sadhana Epuri
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl px-4 md:px-8 max-w-3xl mx-auto"
          >
            <br />
            <b>Wildlife Enthusiast and Photographer</b> <br />
            While my journey has encompassed various photographic genres,
            including product and creative photography, my true passion lies in
            capturing the wild and untamed beauty of nature. I've honed my
            skills in wildlife photography, immersing myself in documenting the
            unique behaviors of animals in their natural environments.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-10 h-10 animate-bounce" />
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 md:px-8">
        <h2 className="text-6xl font-bold mb-10 text-center">My Work</h2>
        <div className="mb-4">
          <div className="flex justify-center border-b border-gray-200">
            <TabsTrigger
              isActive={activeTab === "all"}
              onClick={() => setActiveTab("all")}
            >
              All
            </TabsTrigger>
            {Object.keys(galleryData).map((category) => (
              <TabsTrigger
                key={category}
                isActive={activeTab === category}
                onClick={() => setActiveTab(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </TabsTrigger>
            ))}
          </div>
        </div>
        <div className="carousel-container">
          <Slider {...settings}>
            {(activeTab === "all" ? allImages : galleryData[activeTab]).map(
              (src, index) => (
                <div key={index} className="px-2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveImage(src)}
                    className="image-container bg-black-800 rounded-lg overflow-hidden cursor-pointer"
                  >
                    <img
                      src={src}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </motion.div>
                </div>
              )
            )}
          </Slider>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg mb-6"
          >
            I'm Sadhana Epuri, a passionate wildlife photographer with a keen
            eye for capturing the beauty and diversity of nature. My journey in
            photography has taken me through various genres, but my heart truly
            lies in documenting the wild and untamed.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg"
          >
            Through my lens, I aim to bring awareness to the importance of
            wildlife conservation and inspire others to appreciate and protect
            our planet's incredible biodiversity. Each photograph is a testament
            to the unique behaviors and habitats of animals in their natural
            environments.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8">
        <h2 className="text-4xl font-bold mb-10 text-center">Get in Touch</h2>
        <form className="max-w-md mx-auto space-y-4">
          <Input
            type="text"
            placeholder="Name"
            className="bg-gray-800 border-gray-700 text-white"
          />
          <Input
            type="email"
            placeholder="Email"
            className="bg-gray-800 border-gray-700 text-white"
          />
          <Textarea
            placeholder="Message"
            className="bg-gray-800 border-gray-700 text-white"
          />
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 md:px-8 bg-gray-900">
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-gray-400 transition-colors">
            <Instagram />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            <Twitter />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            <Mail />
            <span className="sr-only">Email</span>
          </a>
        </div>
        <p className="mt-4 text-center text-sm">
          © 2024 Sadhana Epuri Wildlife Photography. All rights reserved.
        </p>
      </footer>

      {/* Lightbox */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={() => setActiveImage(null)}
          >
            <motion.img
              src={activeImage}
              alt="Enlarged view"
              className="max-w-[90%] max-h-[90vh] object-contain"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronDown, Instagram, Twitter, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
// import bgimage1 from "../images/background/image1.jpg";
// import product1 from "../images/product/product 5.jpg";
// import product2 from "../images/product/product 1.jpg";
// import product3 from "../images/product/product 2.jpg";
// import product4 from "../images/product/product 3.jpg";
// import product5 from "../images/product/product 4.jpg";
// import nature1 from "../images/nature/nature 1.jpg";
// import nature2 from "../images/nature/nature 2.jpg";
// import nature3 from "../images/nature/nature 3.jpg";
// import nature4 from "../images/nature/nature 4.jpg";
// import nature5 from "../images/nature/nature 5.jpg";
// import nature6 from "../images/nature/nature 6.jpg";
// import nature7 from "../images/nature/nature 7.jpg";
// import nature8 from "../images/nature/nature 8.jpg";
// import wild1 from '../images/wildlife/wild1.jpg';
// import wild2 from '../images/wildlife/wild2.jpg';
// import wild3 from '../images/wildlife/wild3.jpg';
// import wild4 from '../images/wildlife/wild4.jpg';
// import wild5 from '../images/wildlife/wild5.jpg';
// import wild6 from '../images/wildlife/wild6.jpg';
// import wild7 from '../images/wildlife/wild7.jpg';
// import wild8 from '../images/wildlife/wild8.jpg';

// const Container = styled.div`
//   min-height: 100vh;
//   background-color: #000;
//   color: #fff;
// `;

// const Section = styled.section`
//   padding: 4rem 1rem;
//   @media (min-width: 768px) {
//     padding: 4rem 2rem;
//   }
// `;

// const HeroSection = styled(Section)`
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
// `;

// const HeroBackground = styled(motion.div)`
//   position: absolute;
//   inset: 0;
//   z-index: 0;
// `;

// const HeroImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

// const HeroContent = styled.div`
//   position: relative;
//   z-index: 10;
//   text-align: center;
// `;

// const HeroTitle = styled(motion.h1)`
//   font-size: 4rem;
//   font-weight: bold;
//   margin-bottom: 1rem;
// `;

// const HeroText = styled(motion.p)`
//   font-size: 1.25rem;
//   max-width: 48rem;
//   margin: 0 auto;
// `;

// const ScrollIndicator = styled(motion.div)`
//   position: absolute;
//   bottom: 2.5rem;
//   left: 50%;
//   transform: translateX(-50%);
// `;

// const GallerySection = styled(Section)``;

// const GalleryTitle = styled.h2`
//   font-size: 3rem;
//   font-weight: bold;
//   text-align: center;
//   margin-bottom: 2.5rem;
// `;

// const TabsContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   border-bottom: 1px solid #4a5568;
//   margin-bottom: 1rem;
// `;

// const Tab = styled.button`
//   padding: 0.5rem 1rem;
//   color: ${props => props.isActive ? '#3182ce' : '#a0aec0'};
//   border-bottom: ${props => props.isActive ? '2px solid #3182ce' : 'none'};
//   background: none;
//   border: none;
//   cursor: pointer;
//   font-size: 1rem;
//   transition: all 0.3s ease;

//   &:hover {
//     color: ${props => props.isActive ? '#3182ce' : '#718096'};
//   }
// `;

// const GalleryGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//   gap: 1rem;
// `;

// const GalleryItem = styled(motion.div)`
//   aspect-ratio: 1;
//   overflow: hidden;
//   border-radius: 0.5rem;
//   cursor: pointer;
// `;

// const GalleryImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// const AboutSection = styled(Section)`
//   background-color: #1a202c;
// `;

// const AboutContent = styled.div`
//   max-width: 48rem;
//   margin: 0 auto;
// `;

// const AboutTitle = styled.h2`
//   font-size: 2.5rem;
//   font-weight: bold;
//   text-align: center;
//   margin-bottom: 1.5rem;
// `;

// const AboutText = styled(motion.p)`
//   font-size: 1.125rem;
//   margin-bottom: 1.5rem;
// `;

// const ContactSection = styled(Section)``;

// const ContactTitle = styled.h2`
//   font-size: 2.5rem;
//   font-weight: bold;
//   text-align: center;
//   margin-bottom: 2.5rem;
// `;

// const ContactForm = styled.form`
//   max-width: 28rem;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem;
//   border: 1px solid #4a5568;
//   border-radius: 0.375rem;
//   background-color: #2d3748;
//   color: #fff;

//   &:focus {
//     outline: none;
//     border-color: #3182ce;
//     box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.5);
//   }
// `;

// const Textarea = styled.textarea`
//   width: 100%;
//   padding: 0.75rem;
//   border: 1px solid #4a5568;
//   border-radius: 0.375rem;
//   background-color: #2d3748;
//   color: #fff;
//   resize: vertical;

//   &:focus {
//     outline: none;
//     border-color: #3182ce;
//     box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.5);
//   }
// `;

// const Button = styled.button`
//   padding: 0.75rem 1rem;
//   background-color: #3182ce;
//   color: #fff;
//   border: none;
//   border-radius: 0.375rem;
//   font-weight: bold;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #2c5282;
//   }
// `;

// const Footer = styled.footer`
//   background-color: #1a202c;
//   padding: 1.5rem 1rem;
//   text-align: center;
// `;

// const SocialLinks = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 1.5rem;
//   margin-bottom: 1rem;
// `;

// const SocialLink = styled.a`
//   color: #fff;
//   transition: color 0.3s ease;

//   &:hover {
//     color: #a0aec0;
//   }
// `;

// const Copyright = styled.p`
//   font-size: 0.875rem;
//   color: #a0aec0;
// `;

// const Lightbox = styled(motion.div)`
//   position: fixed;
//   inset: 0;
//   background-color: rgba(0, 0, 0, 0.9);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 50;
// `;

// const LightboxImage = styled(motion.img)`
//   max-width: 90%;
//   max-height: 90vh;
//   object-fit: contain;
// `;

// export default function Portfolio() {
//   const [activeImage, setActiveImage] = useState(null);
//   const [activeTab, setActiveTab] = useState('all');

//   const galleryData = {
//     products: [product1, product2, product3, product4, product5],
//     nature: [
//       nature1,
//       nature2,
//       nature3,
//       nature4,
//       nature5,
//       nature6,
//       nature7,
//       nature8,
//     ],
//     wildlife: [wild1, wild3, wild4, wild2, wild5, wild6, wild7, wild8],
//     unnamed: [
//       "/placeholder.svg?height=400&width=600&text=Unnamed+1",
//       "/placeholder.svg?height=400&width=600&text=Unnamed+2",
//     ],
//   };

//   const allImages = Object.values(galleryData).flat();

//   return (
//     <Container>
//       <HeroSection>
//         <HeroBackground
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <HeroImage src={bgimage1} alt="Hero" />
//         </HeroBackground>
//         <HeroContent>
//           <HeroTitle
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//           >
//             Sadhana Epuri
//           </HeroTitle>
//           <HeroText
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.7, duration: 0.8 }}
//           >
//             Wildlife Enthusiast and Photographer
//           </HeroText>
//         </HeroContent>
//         <ScrollIndicator
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.5, duration: 0.5 }}
//         >
//           <ChevronDown size={40} />
//         </ScrollIndicator>
//       </HeroSection>

//       <GallerySection>
//         <GalleryTitle>My Work</GalleryTitle>
//         <TabsContainer>
//           <Tab isActive={activeTab === 'all'} onClick={() => setActiveTab('all')}>
//             All
//           </Tab>
//           {Object.keys(galleryData).map((category) => (
//             <Tab
//               key={category}
//               isActive={activeTab === category}
//               onClick={() => setActiveTab(category)}
//             >
//               {category.charAt(0).toUpperCase() + category.slice(1)}
//             </Tab>
//           ))}
//         </TabsContainer>
//         <GalleryGrid>
//           {(activeTab === 'all' ? allImages : galleryData[activeTab]).map((src, index) => (
//             <GalleryItem
//               key={index}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setActiveImage(src)}
//             >
//               <GalleryImage src={src} alt={`Gallery image ${index + 1}`} />
//             </GalleryItem>
//           ))}
//         </GalleryGrid>
//       </GallerySection>

//       <AboutSection>
//         <AboutContent>
//           <AboutTitle>About Me</AboutTitle>
//           <AboutText
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             I'm Sadhana Epuri, a passionate wildlife photographer with a keen eye for capturing the beauty and diversity of nature. My journey in photography has taken me through various genres, but my heart truly lies in documenting the wild and untamed.
//           </AboutText>
//           <AboutText
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Through my lens, I aim to bring awareness to the importance of wildlife conservation and inspire others to appreciate and protect our planet's incredible biodiversity. Each photograph is a testament to the unique behaviors and habitats of animals in their natural environments.
//           </AboutText>
//         </AboutContent>
//       </AboutSection>

//       <ContactSection>
//         <ContactTitle>Get in Touch</ContactTitle>
//         <ContactForm>
//           <Input type="text" placeholder="Name" />
//           <Input type="email" placeholder="Email" />
//           <Textarea placeholder="Message" rows={4} />
//           <Button type="submit">Send Message</Button>
//         </ContactForm>
//       </ContactSection>

//       <Footer>
//         <SocialLinks>
//           <SocialLink href="#" aria-label="Instagram">
//             <Instagram />
//           </SocialLink>
//           <SocialLink href="#" aria-label="Twitter">
//             <Twitter />
//           </SocialLink>
//           <SocialLink href="#" aria-label="Email">
//             <Mail />
//           </SocialLink>
//         </SocialLinks>
//         <Copyright>
//           © 2024 Sadhana Epuri Wildlife Photography. All rights reserved.
//         </Copyright>
//       </Footer>

//       <AnimatePresence>
//         {activeImage && (
//           <Lightbox
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setActiveImage(null)}
//           >
//             <LightboxImage
//               src={activeImage}
//               alt="Enlarged view"
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//             />
//           </Lightbox>
//         )}
//       </AnimatePresence>
//     </Container>
//   );
// }

// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, Instagram, Twitter, Mail, X } from "lucide-react";

// // Assume these imports are correct
// import bgimage1 from "../images/background/image1.jpg";
// import product1 from "../images/product/product 5.jpg";
// import product2 from "../images/product/product 1.jpg";
// import product3 from "../images/product/product 2.jpg";
// import product4 from "../images/product/product 3.jpg";
// import product5 from "../images/product/product 4.jpg";
// import nature1 from "../images/nature/nature 1.jpg";
// import nature2 from "../images/nature/nature 2.jpg";
// import nature3 from "../images/nature/nature 3.jpg";
// import nature4 from "../images/nature/nature 4.jpg";
// import nature5 from "../images/nature/nature 5.jpg";
// import nature6 from "../images/nature/nature 6.jpg";
// import nature7 from "../images/nature/nature 7.jpg";
// import nature8 from "../images/nature/nature 8.jpg";
// import wild1 from "../images/wildlife/wild1.jpg";
// import wild2 from "../images/wildlife/wild2.jpg";
// import wild3 from "../images/wildlife/wild3.jpg";
// import wild4 from "../images/wildlife/wild4.jpg";
// import wild5 from "../images/wildlife/wild5.jpg";
// import wild6 from "../images/wildlife/wild6.jpg";
// import wild7 from "../images/wildlife/wild7.jpg";
// import wild8 from "../images/wildlife/wild8.jpg";

// const Container = styled.div`
//   min-height: 100vh;
//   background-color: #000;
//   color: #fff;
// `;

// const Section = styled.section`
//   padding: 4rem 1rem;
//   @media (min-width: 768px) {
//     padding: 4rem 2rem;
//   }
// `;

// const HeroSection = styled(Section)`
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   background-image: url(${bgimage1});
//   background-size: cover;
//   background-position: center;
// `;

// const HeroContent = styled.div`
//   position: relative;
//   z-index: 10;
//   text-align: center;
// `;

// const HeroTitle = styled(motion.h1)`
//   font-size: 4rem;
//   font-weight: bold;
//   margin-bottom: 1rem;
// `;

// const HeroText = styled(motion.p)`
//   font-size: 1.25rem;
//   max-width: 48rem;
//   margin: 0 auto;
// `;

// const ScrollIndicator = styled(motion.div)`
//   position: absolute;
//   bottom: 2.5rem;
//   left: 50%;
//   transform: translateX(-50%);
// `;

// const WorkSection = styled(Section)``;

// const WorkTitle = styled.h2`
//   font-size: 3rem;
//   font-weight: bold;
//   text-align: center;
//   margin-bottom: 2.5rem;
// `;

// const FilterContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 1rem;
//   margin-bottom: 2rem;
// `;

// const FilterButton = styled.button`
//   padding: 0.5rem 1rem;
//   background-color: ${(props) => (props.active ? "#3182ce" : "transparent")};
//   color: ${(props) => (props.active ? "#fff" : "#a0aec0")};
//   border: 1px solid #3182ce;
//   border-radius: 9999px;
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     background-color: #3182ce;
//     color: #fff;
//   }
// `;

// const MasonryGrid = styled(motion.div)`
//   display: grid;
//   grid-template-columns: repeat(12, 1fr);
//   grid-gap: 1rem;
// `;

// const MasonryItem = styled(motion.div)`
//   position: relative;
//   cursor: pointer;
//   overflow: hidden;
//   border-radius: 0.5rem;
//   grid-column: span ${(props) => props.spanColumns};
//   grid-row: span ${(props) => props.spanRows};
//   min-height: 200px; /* Set a minimum height to avoid tiny boxes */

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: ${(props) => (props.isPortrait ? "contain" : "cover")};
//     object-position: center; /* Ensure the image stays centered */
//     transition: transform 0.3s ease; /* Add some smoothness */
//   }

//   &:hover img {
//     transform: scale(1.05); /* Slight zoom on hover for a dynamic feel */
//   }
// `;

// const MasonryImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// const AboutSection = styled(Section)`
//   background-color: #1a202c;
// `;

// const AboutContent = styled.div`
//   max-width: 48rem;
//   margin: 0 auto;
// `;

// const AboutTitle = styled.h2`
//   font-size: 2.5rem;
//   font-weight: bold;
//   text-align: center;
//   margin-bottom: 1.5rem;
// `;

// const AboutText = styled(motion.p)`
//   font-size: 1.125rem;
//   margin-bottom: 1.5rem;
// `;

// const ContactSection = styled(Section)``;

// const ContactTitle = styled.h2`
//   font-size: 2.5rem;
//   font-weight: bold;
//   text-align: center;
//   margin-bottom: 2.5rem;
// `;

// const ContactForm = styled.form`
//   max-width: 28rem;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem;
//   border: 1px solid #4a5568;
//   border-radius: 0.375rem;
//   background-color: #2d3748;
//   color: #fff;

//   &:focus {
//     outline: none;
//     border-color: #3182ce;
//     box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.5);
//   }
// `;

// const Textarea = styled.textarea`
//   width: 100%;
//   padding: 0.75rem;
//   border: 1px solid #4a5568;
//   border-radius: 0.375rem;
//   background-color: #2d3748;
//   color: #fff;
//   resize: vertical;

//   &:focus {
//     outline: none;
//     border-color: #3182ce;
//     box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.5);
//   }
// `;

// const Button = styled.button`
//   padding: 0.75rem 1rem;
//   background-color: #3182ce;
//   color: #fff;
//   border: none;
//   border-radius: 0.375rem;
//   font-weight: bold;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #2c5282;
//   }
// `;

// const Footer = styled.footer`
//   background-color: #1a202c;
//   padding: 1.5rem 1rem;
//   text-align: center;
// `;

// const SocialLinks = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 1.5rem;
//   margin-bottom: 1rem;
// `;

// const SocialLink = styled.a`
//   color: #fff;
//   transition: color 0.3s ease;

//   &:hover {
//     color: #a0aec0;
//   }
// `;

// const Copyright = styled.p`
//   font-size: 0.875rem;
//   color: #a0aec0;
// `;

// const Lightbox = styled(motion.div)`
//   position: fixed;
//   inset: 0;
//   background-color: rgba(0, 0, 0, 0.9);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 50;
// `;

// const LightboxImage = styled(motion.img)`
//   max-width: 90%;
//   max-height: 90vh;
//   object-fit: contain;
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 1rem;
//   right: 1rem;
//   background: none;
//   border: none;
//   color: #fff;
//   font-size: 2rem;
//   cursor: pointer;
// `;

// export default function Portfolio() {
//   const [activeImage, setActiveImage] = useState(null);
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [items, setItems] = useState([]);

//   const galleryData = {
//     products: [product1, product2, product3, product4, product5],
//     nature: [
//       nature1,
//       nature2,
//       nature3,
//       nature4,
//       nature5,
//       nature6,
//       nature7,
//       nature8,
//     ],
//     wildlife: [wild1, wild2, wild3, wild4, wild5, wild6, wild7, wild8],
//   };

//   const allImages = Object.values(galleryData).flat();

//   useEffect(() => {
//     const filteredImages =
//       activeFilter === "all" ? allImages : galleryData[activeFilter];
//     const newItems = filteredImages.map((src, index) => ({
//       id: index,
//       src,
//       spanRows: Math.floor(Math.random() * 3) + 3, // Random span between 3 and 5
//     }));
//     setItems(newItems);
//   }, [activeFilter]);

//   const shuffleArray = (array) => {
//     return array
//       .map((value) => ({ value, sort: Math.random() }))
//       .sort((a, b) => a.sort - b.sort)
//       .map(({ value }) => value);
//   };

//   const getRandomSpan = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   };

//   const shuffledItems = shuffleArray(items);

//   const isPortrait = (image) => {
//     return image.height > image.width;
//   };
  

//   return (
//     <Container>
//       <HeroSection>
//         <HeroContent>
//           <HeroTitle
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//           >
//             Sadhana Epuri
//           </HeroTitle>
//           <HeroText
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.7, duration: 0.8 }}
//           >
//             Wildlife Enthusiast and Photographer
//           </HeroText>
//         </HeroContent>
//         <ScrollIndicator
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.5, duration: 0.5 }}
//         >
//           <ChevronDown size={40} />
//         </ScrollIndicator>
//       </HeroSection>

//       <WorkSection>
//         <WorkTitle>My Work</WorkTitle>
//         <FilterContainer>
//           <FilterButton
//             active={activeFilter === "all"}
//             onClick={() => setActiveFilter("all")}
//           >
//             All
//           </FilterButton>
//           {Object.keys(galleryData).map((category) => (
//             <FilterButton
//               key={category}
//               active={activeFilter === category}
//               onClick={() => setActiveFilter(category)}
//             >
//               {category.charAt(0).toUpperCase() + category.slice(1)}
//             </FilterButton>
//           ))}
//         </FilterContainer>
//         <MasonryGrid
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           {shuffledItems.map((item) => (
//             <MasonryItem
//               key={item.id}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//               onClick={() => setActiveImage(item.src)}
//               spanColumns={getRandomSpan(2, 3)} /* Limit column span range */
//               spanRows={getRandomSpan(2, 3)} /* Limit row span range */
//               isPortrait={isPortrait(
//                 item
//               )} /* Pass whether the image is portrait */
//             >
//               <MasonryImage src={item.src} alt={`Work ${item.id + 1}`} />
//             </MasonryItem>
//           ))}
//         </MasonryGrid>
//       </WorkSection>

//       <AboutSection>
//         <AboutContent>
//           <AboutTitle>About Me</AboutTitle>
//           <AboutText
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             I'm Sadhana Epuri, a passionate wildlife photographer with a keen
//             eye for capturing the beauty and diversity of nature. My journey in
//             photography has taken me through various genres, but my heart truly
//             lies in documenting the wild and untamed.
//           </AboutText>
//           <AboutText
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Through my lens, I aim to bring awareness to the importance of
//             wildlife conservation and inspire others to appreciate and protect
//             our planet's incredible biodiversity. Each photograph is a testament
//             to the unique behaviors and habitats of animals in their natural
//             environments.
//           </AboutText>
//         </AboutContent>
//       </AboutSection>

//       <ContactSection>
//         <ContactTitle>Get in Touch</ContactTitle>
//         <ContactForm>
//           <Input type="text" placeholder="Name" />
//           <Input type="email" placeholder="Email" />
//           <Textarea placeholder="Message" rows={4} />
//           <Button type="submit">Send Message</Button>
//         </ContactForm>
//       </ContactSection>

//       <Footer>
//         <SocialLinks>
//           <SocialLink href="#" aria-label="Instagram">
//             <Instagram />
//           </SocialLink>
//           <SocialLink href="#" aria-label="Twitter">
//             <Twitter />
//           </SocialLink>
//           <SocialLink href="#" aria-label="Email">
//             <Mail />
//           </SocialLink>
//         </SocialLinks>
//         <Copyright>
//           © 2024 Sadhana Epuri Wildlife Photography. All rights reserved.
//         </Copyright>
//       </Footer>

//       <AnimatePresence>
//         {activeImage && (
//           <Lightbox
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setActiveImage(null)}
//           >
//             <LightboxImage
//               src={activeImage}
//               alt="Enlarged view"
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//             />
//             <CloseButton onClick={() => setActiveImage(null)}>
//               <X size={24} />
//             </CloseButton>
//           </Lightbox>
//         )}
//       </AnimatePresence>
//     </Container>
//   );
// }
