const LearnMoreAboutUs = () => {
    return (
        <div className="px-6 lg:px-24 bg-green-50 py-8">
            <h1 className="font-bold text-4xl mb-12 font-serif text-center text-green-800">
                Know More About Us
            </h1>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                <div className="w-1/2 overflow-hidden border-white border">
                    <iframe
                        width="100%"
                        src="https://www.youtube.com/embed/m5ASdVAcUqI?si=TUascX6540Fn9dm7"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-64"
                    ></iframe>
                </div>
                <div className="w-1/2 font-serif mt-6">
                    <h2 className="text-2xl mb-3 font-semibold text-green-800">
                        Importance of Nature
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-800">
                    Discover the profound impact of nature on our lives and the planet. This video explores why preserving our natural environment is crucial for the well-being of all living beings. Join us in understanding the vital role nature plays in sustaining life and how we can contribute to its protection.
                        </p>
                </div>
            </div>
        </div>
    );
};

export default LearnMoreAboutUs;
