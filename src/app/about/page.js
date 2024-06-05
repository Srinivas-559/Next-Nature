import React from 'react'

const page = () => {
  return (
    <div className='absolute h-[100vh] w-[100vw] bg-white top-[60px] overflow-scroll'>
       <div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg">
            <h1 className="text-4xl font-bold text-green-700 mb-4">About Nature Saviors</h1>
            <p className="mb-4">Welcome to Nature Saviors, your dedicated platform for environmental conservation and sustainability. We are passionate about protecting our planet and empowering individuals and communities to make a positive impact.</p>
            
            <h2 className="text-3xl font-semibold text-green-700 mt-6 mb-2">Our Mission</h2>
            <p className="mb-4">Our mission is to inspire and facilitate environmental stewardship by providing accessible resources, actionable information, and a supportive community for anyone who wants to make a difference. We believe that every small action counts and together, we can create a more sustainable and harmonious world.</p>
            
            <h2 className="text-3xl font-semibold text-green-700 mt-6 mb-2">What We Do</h2>
            <ul className="list-disc list-inside mb-4">
                <li className="mb-2"><strong>Educational Resources:</strong> We offer a wide range of articles, guides, and tutorials to educate users on various environmental issues and sustainable practices.</li>
                <li className="mb-2"><strong>Community Initiatives:</strong> Connect with like-minded individuals through our community forums, local events, and volunteer opportunities.</li>
                <li className="mb-2"><strong>Sustainability Projects:</strong> Learn about and participate in ongoing sustainability projects that aim to reduce pollution, conserve wildlife, and promote renewable energy.</li>
                <li className="mb-2"><strong>Eco-friendly Products:</strong> Discover and purchase eco-friendly products from our curated selection, helping you to make greener choices in your daily life.</li>
            </ul>
            
            <h2 className="text-3xl font-semibold text-green-700 mt-6 mb-2">Our Values</h2>
            <p className="mb-4"><strong>Sustainability:</strong> We are committed to promoting practices that sustain and protect our environment for future generations.</p>
            <p className="mb-4"><strong>Community:</strong> We believe in the power of community and collaboration to drive meaningful change.</p>
            <p className="mb-4"><strong>Education:</strong> We strive to provide reliable, up-to-date information to help individuals make informed decisions.</p>
            <p className="mb-4"><strong>Empowerment:</strong> Our goal is to empower everyone to take action, no matter how small, to contribute to the health of our planet.</p>
            
            <h2 className="text-3xl font-semibold text-green-700 mt-6 mb-2">Join Us</h2>
            <p className="mb-4">Join Nature Saviors today and be part of a global movement to safeguard our environment. Together, we can make a lasting impact. Sign up for our newsletter, participate in our forums, or take part in one of our many initiatives to start making a difference now.</p>
            
            <p className="mb-4">Thank you for visiting Nature Saviors. Let’s work together to create a sustainable future for all.</p>
        </div>
    
    </div>
  )
}

export default page