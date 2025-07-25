 
import ImageCarousel from "./animata/carousel/image-carousel";
 

 

const Experience = () => {
   

  return (
    <div id="experience" className="py-10 bg-gradient-to-r from-[#10131a] to-[#0f212c]">
      <div className="container mx-auto px-4">
        <h1 className="text-[#EFF0F2] text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
          Professional  <span className="text-[#2EB2D3]">Experience</span>  
        </h1>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="text-[#EFF0F2] lg:w-1/2">
            <h2 className="text-[#EFF0F2] text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">CBS OffShore</h2>
            <div className="mb-8">
              <p className="text-base md:text-lg lg:text-xl pt-3 leading-relaxed tracking-wide">March 2024 -  July 2025</p>
              <p className="text-[#2EB2D3] font-bold text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
                Remote
              </p>
              <p className="text-[#2EB2D3] font-bold text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
                Front-End Developer
              </p>
              <p className="text-base md:text-lg lg:text-xl pt-3 leading-relaxed tracking-wide">
                 I worked as a front-end developer building multiple direct-to-sale e-commerce websites using HTML, Bootstrap, jQuery, and .NET. I converted Figma prototypes into responsive, mobile-friendly websites and optimized performance with GTmetrix, achieving an A+ score, 90% performance, and 1s load time. I integrated tools like Google Tag Manager, Facebook Pixel, TikTok Pixel, and Everflow for conversion tracking. We also used CRMs like Konnektive and Sticky.io to manage customer data, subscriptions, and streamline sales operations.
              </p>
            </div>
           
          </div>
          <div className="text-center lg:w-1/2">
            <h2 className="text-[#EFF0F2] text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">Certificates</h2>
            <ImageCarousel
              items={[
                {
                  id: 1,
                  image: "/images/bootstrap.jpg",
                  title: "",
                },
                {
                  id: 2, 
                   image: "/images/avion-certificate.jpg",
                   title: "",
                },
                {
                  id: 3,
                  image: "/images/jquery.jpg",
                   title: "",
                },
              ]}
            />
           {/* <Expandable className="w-full min-w-72 storybook-fix"  autoPlay={true} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
