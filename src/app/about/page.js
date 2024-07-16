const Page = () => {
  return (
    <div className=' bg-white mt-24 font-serif'>
      <div className="max-w-6xl mx-auto mt-8 p-6 bg-white  ">
        <h1 className="text-5xl font-extrabold text-green-700 mb-6">About Nature Saviors</h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to Nature Saviors, your dedicated platform for environmental conservation and sustainability. We are passionate about protecting our planet and empowering individuals and communities to make a positive impact.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6   bg-green-50">
            <h2 className="text-3xl font-semibold text-green-700 mb-4">Our Mission</h2>
            <p className="text-gray-800 text-lg">
              Our mission is to inspire and facilitate environmental stewardship by providing accessible resources, actionable information, and a supportive community for anyone who wants to make a difference. We believe that every small action counts, and together, we can create a more sustainable and harmonious world.
            </p>
          </div>
          
          <div className="p-6 bg-green-50">
            <h2 className="text-3xl font-semibold text-green-700 mb-4">What We Do</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-800">
              <li className="text-lg"><strong>Educational Resources:</strong> We offer a wide range of articles, guides, and tutorials to educate users on various environmental issues and sustainable practices.</li>
              <li className="text-lg"><strong>Community Initiatives:</strong> Connect with like-minded individuals through our community forums, local events, and volunteer opportunities.</li>
              <li className="text-lg"><strong>Sustainability Projects:</strong> Learn about and participate in ongoing sustainability projects that aim to reduce pollution, conserve wildlife, and promote renewable energy.</li>
              <li className="text-lg"><strong>Eco-friendly Products:</strong> Discover and purchase eco-friendly products from our curated selection, helping you to make greener choices in your daily life.</li>
            </ul>
          </div>

          <div className="p-6   bg-green-50">
            <h2 className="text-3xl font-semibold text-green-700 mb-4">Our Values</h2>
            <p className="mb-4 text-gray-800 text-lg"><strong>Sustainability:</strong> We are committed to promoting practices that sustain and protect our environment for future generations.</p>
            <p className="mb-4 text-gray-800 text-lg"><strong>Community:</strong> We believe in the power of community and collaboration to drive meaningful change.</p>
            <p className="mb-4 text-gray-800 text-lg"><strong>Education:</strong> We strive to provide reliable, up-to-date information to help individuals make informed decisions.</p>
            <p className="text-gray-800 text-lg"><strong>Empowerment:</strong> Our goal is to empower everyone to take action, no matter how small, to contribute to the health of our planet.</p>
          </div>

          <div className="p-6   bg-green-50">
            <h2 className="text-3xl font-semibold text-green-700 mb-4">Join Us</h2>
            <p className="text-gray-800 text-lg">
              Join Nature Saviors today and be part of a global movement to safeguard our environment. Together, we can make a lasting impact. Sign up for our newsletter, participate in our forums, or take part in one of our many initiatives to start making a difference now.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-xl text-gray-800">Thank you for visiting Nature Saviors. Let’s work together to create a sustainable future for all.</p>
        </div>
      </div>
    </div>
  );
}

export default Page;