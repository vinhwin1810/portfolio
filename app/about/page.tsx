// app/about/page.tsx

export default function AboutPage() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>

        {/* Description */}
        <p className="text-lg max-w-2xl mx-auto text-center mb-8">
          Hi, I'm [Your Name], a passionate developer with experience in
          creating dynamic and responsive web applications. I specialize in both
          front-end and back-end development, and I love bringing creative ideas
          to life through code.
        </p>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="rounded-full w-48 h-48 object-cover border-4 border-white shadow-lg"
            />
          </div>

          {/* Additional Information */}
          <div className="max-w-lg text-center md:text-left">
            <p className="text-md mb-4">
              With a strong foundation in JavaScript, React, and Node.js, I have
              worked on numerous projects ranging from small business websites
              to large-scale web applications. I am dedicated to learning new
              technologies and improving my craft.
            </p>
            <p className="text-md mb-4">
              I thrive in collaborative environments and love tackling
              challenging problems. When I'm not coding, you'll find me playing
              chess, solving puzzles, or exploring the latest tech trends.
            </p>
            <p className="text-md">
              Let's connect and create something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
