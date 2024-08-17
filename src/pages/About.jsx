import React from 'react'
import { FaUserTie, FaCogs, FaSeedling } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-24">
      {/*<div className='py-20 bg-black text-center text-white px-4'>
      </div>*/}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Me</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          As a dedicated software engineer, my journey in the tech world has been driven by a relentless pursuit of excellence and a passion for creating impactful solutions. With a deep understanding of the latest technologies and best practices, I am committed to delivering high-quality software that not only meets but exceeds client expectations.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col items-center text-center">
            <FaUserTie className="text-blue-600 text-5xl mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Professionalism</h2>
            <p className="text-gray-600">
              My approach to software development is rooted in professionalism. I believe in clear communication, attention to detail, and a commitment to delivering projects on time and within budget.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaCogs className="text-indigo-600 text-5xl mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Technical Excellence</h2>
            <p className="text-gray-600">
              With expertise in modern web technologies such as React.js and Node.js, I build robust, scalable applications designed to solve complex problems and enhance user experiences.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaSeedling className="text-green-600 text-5xl mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Continuous Growth</h2>
            <p className="text-gray-600">
              I am a lifelong learner, constantly seeking new knowledge and skills to stay ahead in this fast-paced industry. My commitment to growth ensures that I am always equipped with the latest tools and techniques.
            </p>
          </div>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed">
          I believe that the key to successful software lies in the intersection of technology and human-centered design. By understanding the needs of users and the goals of businesses, I strive to create solutions that are not only functional but also intuitive and delightful to use. Let's build something amazing together.
        </p>
      </div>
    </div>
  )
}

export default About