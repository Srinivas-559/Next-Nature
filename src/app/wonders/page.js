import React from 'react';

const titleWithVideos = [
  {
      "title": "EARTH 4K - Relaxation Film - Peaceful Relaxing Music - Nature 4k Video UltraHD - OUR PLANET",
      "description": "Experience the serene beauty of Earth in stunning 4K resolution. This film combines peaceful, relaxing music with breathtaking visuals of nature. Perfect for unwinding and meditating. Let the soothing sounds and imagery transport you to a place of tranquility.",
      "videoLink": "https://www.youtube.com/watch?v=KJwYBJMSbPI"
  },
  {
      "title": "Amazon Jungle 4K/ Wild Animals of Rainforest/ Relaxation Film/ Meditation Music & Nature Sounds",
      "description": "Journey through the Amazon Jungle in 4K, showcasing its diverse wildlife and lush scenery. Accompanied by soothing meditation music and nature sounds, this film is ideal for relaxation. Enjoy an immersive experience that highlights the wonders of one of the world's most vibrant ecosystems.",
      "videoLink": "https://www.youtube.com/watch?v=ti6Ochpgxak"
  },
  {
      "title": "The Amazon River - Largest River in the World",
      "description": "Explore the grandeur of the Amazon River, the world's largest river by discharge volume. This documentary highlights its vital role in the ecosystem and the vibrant life it supports. Discover the unique species that inhabit its waters and the indigenous communities that rely on it.",
      "videoLink": "https://www.youtube.com/watch?v=WV1JNgctiC0"
  },
  {
      "title": "The Extraordinary Mummy | Lost Treasures of Egypt",
      "description": "Delve into the mysteries of ancient Egypt with a focus on an extraordinary mummy. This video reveals the secrets of its preservation and the historical significance of Egyptian mummies. Learn about the intricate burial practices and the scientific methods used to uncover these ancient stories.",
      "videoLink": "https://www.youtube.com/watch?v=vPkWmvh3kHU"
  },
  {
      "title": "THE DEEP OCEAN",
      "description": "Discover the enigmatic depths of the ocean, home to some of the most fascinating and bizarre creatures. This documentary provides an in-depth look at the ocean's mysterious and unexplored regions. Witness the incredible adaptations of deep-sea life and the ongoing efforts to study these remote areas.",
      "videoLink": "https://www.youtube.com/watch?v=LyKkyL1hPPs&t=2s"
  },
  {
      "title": "ANIMALS and NATURE",
      "description": "Celebrate the beauty and diversity of animals in their natural habitats. This video showcases various species, emphasizing the importance of wildlife conservation and environmental awareness. Experience the majesty of nature and the delicate balance that sustains it.",
      "videoLink": "https://www.youtube.com/watch?v=wjc97zpkBO4"
  },
  {
      "title": "India 4K",
      "description": "Immerse yourself in the vibrant culture and landscapes of India, captured in stunning 4K resolution. From bustling cities to serene countryside, experience the rich diversity of this incredible country. Explore India's historical landmarks and vibrant festivals that reflect its cultural richness.",
      "videoLink": "https://www.youtube.com/watch?v=FOvOxeb2TCg"
  },
  {
      "title": "Meghalaya: World’s Wettest Place",
      "description": "Visit Meghalaya, renowned as the wettest place on Earth, with its lush green landscapes and stunning waterfalls. This video highlights the region's unique climate and natural beauty. Learn about the local traditions and the lifestyle of the people living in this extraordinary environment.",
      "videoLink": "https://www.youtube.com/watch?v=_e8BFrAPedM"
  },
  {
      "title": "Kerala",
      "description": "Explore Kerala, often referred to as 'God's Own Country,' known for its serene backwaters, rich culture, and scenic beauty. This film captures the essence of Kerala's enchanting landscapes. Enjoy the state's culinary delights and its traditional art forms that add to its charm.",
      "videoLink": "https://www.youtube.com/watch?v=yLE5bDX7M3Y"
  },
  {
      "title": "Alaska",
      "description": "Witness the rugged wilderness of Alaska, with its majestic mountains, glaciers, and abundant wildlife. This video offers a glimpse into the awe-inspiring natural beauty of America's last frontier. Discover the adventure and solitude that make Alaska a unique destination for explorers.",
      "videoLink": "https://www.youtube.com/watch?v=CHSnz0bCaUk"
  },
  {
      "title": "Interlaken Switzerland🇨🇭 Walking in the Rain 🌧️",
      "description": "Take a peaceful walk through Interlaken, Switzerland, in the rain, experiencing its charming streets and picturesque scenery. The video captures the tranquil ambiance of this beautiful town. Enjoy the serenity of the Swiss Alps and the cozy atmosphere of this enchanting location.",
      "videoLink": "https://www.youtube.com/watch?v=mNzenfB3OuY"
  },
  {
      "title": "Bali - Paradise of Asia",
      "description": "Enjoy the tropical paradise of Bali, featuring its stunning beaches, vibrant culture, and lush landscapes. This film showcases why Bali is considered the 'Paradise of Asia.' Explore its rich traditions, vibrant arts scene, and the warm hospitality of its people.",
      "videoLink": "https://www.youtube.com/watch?v=BFS9n4B_2xA"
  },
  {
      "title": "Wonders of The Netherlands",
      "description": "Discover the wonders of the Netherlands, from its iconic windmills and tulip fields to its charming canals. This video highlights the unique beauty and cultural heritage of this European country. Learn about the innovative water management systems and the rich history of Dutch art and architecture.",
      "videoLink": "https://www.youtube.com/watch?v=QVoSgRbd69c"
  },
  {
      "title": "Japan - Land of The Rising Sun",
      "description": "Experience the rich traditions and modern wonders of Japan, known as the 'Land of the Rising Sun.' This film captures Japan's unique blend of ancient culture and cutting-edge technology. Enjoy the scenic beauty of its landscapes and the dynamic energy of its cities.",
      "videoLink": "https://www.youtube.com/watch?v=G5RpJwCJDqc"
  }
];


const titleWithImages = [
  {
    "title": "Angel Falls, Venezuela",
    "description": "Venezuela overflows with natural wonders, including the world’s highest waterfall: the 3,212-foot cascades (that’s 19 times higher than Niagara Falls) of Angel Falls, located in the UNESCO-protected Canaima National Park. Bonus: Pixar animators used the location as inspiration for Paradise Falls in Up—so you know it’s good.",
    "image": "https://media.cntraveler.com/photos/5cb63a087b743b471660a8da/master/w_1600%2Cc_limit/Angel-Falls-Venezuela_GettyImages-165513023.jpg"
  },
  {
    "title": "Antarctica",
    "description": "That’s right, we put an entire continent on here. Although 99 percent of Antarctica is covered with ice, the landscape still manages to be stunningly diverse—surreal blue glaciers, active volcanoes, the rough waterways of the Drake Passage, and 360-degree views of untouched snow. And those views are made even better when an emperor penguin or humpback whale makes an appearance.",
    "image": "https://media.cntraveler.com/photos/5cb63a087b743b350a60a8d9/master/w_1600%2Cc_limit/Antarctica-_GettyImages-148815908.jpg"
  },
  {
    "title": "The Azores, Portugal",
    "description": "Roughly 900 miles off the coast of Lisbon, this Portuguese archipelago can inspire wanderlust with a single photo. The verdant valleys, steep oceanside cliffs, rows of blue hydrangeas, and scattering of waterfalls make the Azores a paradise worth exploring. Just make sure you visit before everyone you know beats you to it.",
    "image": "https://media.cntraveler.com/photos/60595e75c685cfec854722a8/master/w_1600%2Cc_limit/Azores-GettyImages-1183442594.jpg"
  },
  {
    "title": "Cliffs of Moher, Ireland",
    "description": "Few places exemplify the raw, untamed beauty of Ireland’s west coast like this natural wonder, which tops 702 feet at the highest point. And while you might know them better as the Cliffs of Insanity from The Princess Bride, in reality, the cliffs are located just south of Galway.",
    "image": "https://media.cntraveler.com/photos/5cb63a163bf1dc1649de9aab/master/w_1600%2Cc_limit/Cliffs-of-Moher-Ireland_GettyImages-165186543.jpg"
  },
  {
    "title": "Denali National Park, Alaska",
    "description": "Despite controversies over name changes and a shrinking elevation, Denali’s beauty is worth braving the extreme low temperatures. Make a road trip out of your visit, seeing as much of the 6 million acres of shimmering lakes and jagged mountains as you can.",
    "image": "https://media.cntraveler.com/photos/6059636d8f4452dac88c59f4/master/w_1600%2Cc_limit/Denali-GettyImages-1132999090.jpg"
  },
  {
    "title": "Finnish Lapland",
    "description": "If your travel fantasies aren’t complete without a snowy setting, be sure to add Finnish Lapland to your list. While this northern region of Finland is lovely during the warmer months, try to plan your visit between November and March, when the trees are covered in thick layers of snow, huskies are eager to pull you around on a sled, and the Northern Lights are most likely to make an appearance.",
    "image": "https://media.cntraveler.com/photos/5c41fb9b21784e6dc7183cfd/master/w_1600%2Cc_limit/Lapland_Finland_GettyImages-640950904.jpg"
  },
  {
    "title": "Grand Canyon, Arizona",
    "description": "Grand Canyon National Park, often called one of the Seven Natural Wonders of the World, is on most travelers’ lists for a reason. Plan to hike some of the park’s most scenic loops—like Horseshoe Bend and the South Rim Trail—to get views of the rocky badlands of the Painted Desert, Navajo Nation, and even a waterfall or two.",
    "image": "https://media.cntraveler.com/photos/5cb63a18070025530388fa35/master/w_1600%2Cc_limit/Grand-Canyon-AZ_GettyImages-697996602.jpg"
  },
  {
    "title": "Machu Picchu, Peru",
    "description": "While the intricate stone ruins of Machu Picchu are the work of 15th-century Incans, the site’s natural setting makes it even more alluring. Perched atop the flattened peak of a mountain, the ancient Wonder of the World benefits from the famous backdrop of Huayna Picchu, lush green surfaces, and a barrier of Andean peaks that, despite the landmark’s fame, makes you feel like you've stumbled upon a secret.",
    "image": "https://media.cntraveler.com/photos/5cb63a273bf1dc125ade9aaf/master/w_1600%2Cc_limit/Machu-Picchu-Peru_GettyImages-109401484.jpg"
  },
  {
    "title": "Milford Sound, New Zealand",
    "description": "New Zealand is no stranger to breathtaking landscapes, particularly on the west coast of the South Island. Case in point: Milford Sound, a mountainous fjord where you can live out all of your Lord of the Rings fantasies.",
    "image": "https://media.cntraveler.com/photos/58adc278697d4a173a177e4e/master/w_1600%2Cc_limit/GettyImages-484752792.jpg"
  },
  {
    "title": "Mount Fuji, Japan",
    "description": "It’s hard to pick the single most beautiful place in Japan, but 12,388-foot Mount Fuji just might take the prize. Visit Lake Kawaguchiko in the spring for some of the best views of the mountain and cherry blossom trees—a postcard-worthy sight if we ever saw one. Or if you’re an avid hiker, plan a trip for mid-July until the end of August, when the snow melts enough to allow access to Fuji’s summit.",
    "image": "https://media.cntraveler.com/photos/60596b398f4452dac88c59f8/master/w_1600%2Cc_limit/MtFuji-GettyImages-959111140.jpg"
  },
  {
    "title": "Mount Kilimanjaro, Tanzania",
    "description": "Africa’s highest peak seems more striking than a lot of other famous mountains, because it’s an ancient stratovolcano that’s not part of any mountain range. That means the 19,000-foot summit drops down to vast, flat plains on all sides, making it a mirage-like blip on Tanzania’s widespread topography. As an added bonus, the peak requires no technical mountaineering skills to summit, so even novice hikers can cross this item off their bucket list.",
    "image": "https://media.cntraveler.com/photos/60596bca7ef97a43a1af2c99/master/w_1600%2Cc_limit/Kilimanjaro-GettyImages-1249566598.jpg"
  },
  {
    "title": "Na Pali Coast, Hawaii",
    "description": "Kauai has one of the world’s most gorgeous coastlines, with towering waterfalls and isolated crescent beaches. Just be prepared to put in a little effort to soak up its wonders: Na Pali can only be seen from a helicopter, catamaran, or a rather grueling hike.",
    "image": "https://media.cntraveler.com/photos/5cb63a2b1a7e7018aef70957/master/w_1600%2Cc_limit/Na-Pali-Coast_GettyImages-1124504102.jpg"
  },
  {
    "title": "The Pitons, St. Lucia",
    "description": "The scenery of St. Lucia can be summed up in one jaw-dropping site: a duo of striking spires known as the Pitons. The two volcanic peaks—Gros Piton and Petit Piton—are the most iconic landmarks on the island, and visitors can enjoy them in a variety of ways. A singular experience has to be actually hiking the mountains, an activity which takes the better part of a day. Or, if you prefer to keep your feet at sea level, plop a towel down at Sugar Beach, set dramatically (and conveniently) between the two Pitons.",
    "image": "https://media.cntraveler.com/photos/603c2f8099ab9b035e060edf/master/w_1600%2Cc_limit/StLucia-2021-GettyImages-166565984-2.jpg"
  },
  {
    "title": "Reynisfjara, Iceland",
    "description": "If the moon had a shoreline, it would probably look something like Reynisfjara. Just a 20-minute drive from Vik in southern Iceland, jet-black sand and spectacularly shaped basalt columns make this beach one of the most impressive sites in an already impressive country.",
    "image": "https://media.cntraveler.com/photos/60596df48f4452dac88c59fe/master/w_1600%2Cc_limit/Reynisfjara-GettyImages-1004089860.jpg"
  },
  {
    "title": "Sequoia National Park, California",
    "description": "This central-Californian park is home to some 8,000 colossal sequoia trees—the gentle giants of the tree world. “General Sherman,” a tree named for the Civil War general, is the hero of these treasured acres: It stands 275 feet tall and 25 feet wide, making it the largest known single-stem tree on the planet.",
    "image": "https://media.cntraveler.com/photos/5eb4171df52f4c0911cac292/master/w_1600%2Cc_limit/Sequoia-National-Park-GettyImages-131984902.jpg"
  },
  {
    "title": "Svalbard, Norway",
    "description": "Svalbard, the northern archipelago off the coast of Norway, is known for spectacular Northern Lights viewing opportunities—the sky is pitch black all day and night from October through February, due to its position within the Arctic Circle. Svalbard is also celebrated for its wildlife, including polar bears and arctic foxes who live out their days among the deep fjords and sheets of ice.",
    "image": "https://media.cntraveler.com/photos/605970847ef97a43a1af2c9f/master/w_1600%2Cc_limit/Svalbard-GettyImages-481931116.jpg"
  },
  {
    "title": "Ubud, Bali",
    "description": "As crowded as Ubud can get, the town is only minutes from dozens of quaint villages and peaceful countryside vistas. Rent a motorbike or bicycle at your hotel and get lost in the villages, tangerine groves, and rice paddies—all of which are kept alive by farmers who tend the terraces just as previous generations have done for millennia.",
    "image": "https://media.cntraveler.com/photos/6124596e792563ad9f9672c0/master/w_1600%2Cc_limit/LICENSE_Tjok%2520Gde%2520Kerthyasa-Bali-_(c)%2520Getty%2520Images_CNT%2520UK_Sophie%2520Knight.jpeg"
  },
  {
    "title": "Uluru, Australia",
    "description": "No matter how you choose to view the 700-million-year-old Uluru (or Ayers Rock)—from above by hot air balloon, across the desert on a motorcycle—witnessing its majesty should be on every traveler's list.",
    "image": "https://media.cntraveler.com/photos/6539d41824725ada6bbacb8a/master/w_1600%2Cc_limit/Uluru-antoine-fabre--lNJOUphtOQ-unsplash.jpg"
  },
  {
    "title": "Vaadhoo Island, Maldives",
    "description": "The beaches at Vaadhoo Island in the Maldives have received their fair share of online swooning, and for good reason. The bioluminescent phytoplankton in the water’s reefs emanate a dazzling blue glow, making it look as though the stars have somehow found their way down to earth for the night—a phenomenon that has aptly become known as the 'Sea of Stars.'",
    "image": "https://media.cntraveler.com/photos/5c5c74f6b122107d7ad1a861/master/w_1600%2Cc_limit/Vaadhoo-Island%2C-Raa-Atoll%2C-Maldives%2C-Indian-Ocean_GettyImages-590485956.jpg"
  },
  {
    "title": "Victoria Falls, Zambia and Zimbabwe",
    "description": "Nothing compares to standing in front of the world’s largest waterfall, which stretches in length for a full mile. Visit between February and May (after the region’s rainy season) for the clearest views of the 500 million liters of water that pour over the falls every 60 seconds.",
    "image": "https://media.cntraveler.com/photos/5cb63a516b5c4dca7b5ec156/master/w_1600%2Cc_limit/Victoria-Falls-Zambia-Zimbabwe_GettyImages-507449285.jpg"
  }
]

export default function Page() {
  return (
    <>
    {/* Header Section */}
    <div className='relative w-full h-[80vh]'>
      <img className='absolute w-full h-full object-cover' src={'wonders/Mount-Everest.jpeg'} alt='Mount Everest' />
      <div className='absolute top-0 w-full h-full bg-black opacity-50'></div>
      <div className='absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
        <h1 className='text-4xl font-bold'>Discover the Wonders of Nature</h1>
        <p className='text-xl mt-4'>Explore breathtaking landscapes and captivating documentaries</p>
        <div className='mt-8'>
          <a href='#images' className='border border-white hover:bg-white hover:text-black px-4 py-2 mr-2'>Images</a>
          <a href='#videos' className='border border-white hover:bg-white hover:text-black px-4 py-2'>Videos</a>
        </div>
      </div>
    </div>

    {/* Video Section */}
    <div className='my-10 px-4' id="videos">
      <h2 className='text-3xl font-bold text-center text-green-900'>Videos</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
        {titleWithVideos.map((video, index) => (
          <div key={index} className='border border-black  overflow-hidden'>
            <iframe
              className='w-full h-48'
              src={`https://www.youtube.com/embed/${video.videoLink.split('=')[1]}`}
              title={video.title}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
            <div className='p-4'>
              <h3 className='text-xl font-semibold'>{video.title}</h3>
              <p className='mt-2 text-gray-600'>{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Image Section */}
    <div className='my-10 px-4' id="images">
      <h2 className='text-3xl font-bold text-center text-green-900'>Images</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
        {titleWithImages.map((image, index) => (
          <div key={index} className='border border-black  overflow-hidden'>
            <img className='w-full h-48 object-cover' src={image.image} alt={image.title} />
            <div className='p-4'>
              <h3 className='text-xl font-semibold'>{image.title}</h3>
              <p className='mt-2 text-gray-600'>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
  );
}