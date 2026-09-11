const Experience = () => {
  return (
    <div id="experience" className="py-10 bg-gradient-to-r from-[#10131a] to-[#0f212c]">
      <div className="container mx-auto px-4">
        <h1 className="text-[#EFF0F2] text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
          Professional <span className="text-[#2EB2D3]">Experience</span>
        </h1>
        <div className="flex flex-col  gap-10">
          <div className="text-[#EFF0F2] ">
            <h2 className="text-[#EFF0F2] text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">CurbPage</h2>
            <div className="mb-8">
              <p className="text-base md:text-lg lg:text-xl pt-3 leading-relaxed tracking-wide">
                August 2025 - September 2026
              </p>
              <p className="text-[#2EB2D3] font-bold text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
                Remote
              </p>
              <p className="text-[#2EB2D3] font-bold text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
                Front-End Developer
              </p>
              <p className="text-base md:text-lg lg:text-xl pt-3 leading-relaxed tracking-wide">
                I worked as a Front-End Developer at CurbPage, building and maintaining a role-based real estate web
                application using Next.js, TypeScript, Supabase, Drizzle ORM, TanStack Query, Zod, and Tailwind CSS. The
                platform supported three user roles -Admin, Agent, Client, and Teammate - with customized authorization
                and protected routing through middleware-based access control. I implemented Supabase authentication
                with magic link login for secure and seamless user access, integrated Stripe for payment processing, and
                utilized TanStack Query for efficient data fetching and caching. I also implemented Zod validation for
                scalable form handling and worked with Drizzle schemas for type-safe database management. Additionally,
                I transformed Figma designs into responsive, cross-browser compatible, and mobile-friendly interfaces,
                ensuring a smooth user experience across devices.
              </p>
            </div>
          </div>

          <div className="text-[#EFF0F2] ">
            <h2 className="text-[#EFF0F2] text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">CBS OffShore</h2>
            <div className="mb-8">
              <p className="text-base md:text-lg lg:text-xl pt-3 leading-relaxed tracking-wide">
                March 2024 - July 2025
              </p>
              <p className="text-[#2EB2D3] font-bold text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
                Remote
              </p>
              <p className="text-[#2EB2D3] font-bold text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
                Front-End Developer
              </p>
              <p className="text-base md:text-lg lg:text-xl pt-3 leading-relaxed tracking-wide">
                I worked as a front-end developer building multiple direct-to-sale e-commerce websites using HTML,
                Bootstrap, jQuery, and .NET. I converted Figma prototypes into responsive, mobile-friendly websites and
                optimized performance with GTmetrix, achieving an A+ score, 90% performance, and 1s load time. I
                integrated tools like Google Tag Manager, Facebook Pixel, TikTok Pixel, and Everflow for conversion
                tracking. We also used CRMs like Konnektive and Sticky.io to manage customer data, subscriptions, and
                streamline sales operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
