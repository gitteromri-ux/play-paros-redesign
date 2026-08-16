// ============================================================
// PLAY PAROS — Content data (verbatim from live brownhotels.com
// capture, Aug 16 2026, with the King/Queen bed contradiction
// resolved toward the FAQ's authoritative "queen-size double
// beds only" answer — room copy below avoids the specific
// "King Size" claim and uses "double bed" language instead).
// ============================================================

const ROOMS = [
  {
    id: 'comfort-balcony',
    name: 'Comfort Balcony',
    occ: 'Up to 2 guests',
    bed: 'Double Bed',
    extra: '',
    img: './assets/images/real/room1.jpg',
    desc: "Our thoughtfully designed Comfort Double Rooms are made for cozy moments and effortless relaxation. Each room features a private bathroom with a walk-in shower and premium towels, creating a calm space to unwind after a day by the sea. Modern amenities complete the experience — everything you need for a stay that feels easy, comfortable, and just right."
  },
  {
    id: 'standard-pool-view',
    name: 'Standard Pool View & Balcony',
    occ: 'Up to 2 guests',
    bed: 'Double Bed',
    extra: 'Balcony',
    img: './assets/images/real/pool-swimmer.jpg',
    desc: "Unwind in our beautifully decorated Standard Rooms, designed for peaceful moments and effortless comfort. Overlooking our inviting pool, these rooms offer a calm setting to slow down and recharge. A private bathroom with a refreshing walk-in shower adds the perfect touch of relaxation after a full day on the island."
  },
  {
    id: 'classic-sea-view',
    name: 'Classic Sea View & Balcony',
    occ: 'Up to 2 guests',
    bed: 'Double Bed',
    extra: 'Balcony',
    img: './assets/images/real/rooftop.jpg',
    desc: "Wake up to stunning views in our Classic Sea View Rooms, where the beauty of the surrounding landscape becomes part of your stay. With generous space to unwind, these rooms are designed for slow mornings, easy afternoons, and relaxed evenings. Enjoy the comfort of your private bathroom with a refreshing walk-in shower, perfect after a day by the sea."
  },
  {
    id: 'deluxe-veranda',
    name: 'Deluxe With Veranda',
    occ: 'Up to 3 guests · 23–37 sqm',
    bed: 'Double Bed',
    extra: 'Balcony',
    img: './assets/images/real/room5-bed.jpg',
    desc: "Step outside onto your private veranda and soak up the sunshine by day or the gentle evening breeze as the island slows down. Designed with generous space and thoughtful details, these rooms offer a comfortable and inviting retreat for true relaxation."
  },
  {
    id: 'junior-suite',
    name: 'Junior Suite Sea View & Balcony',
    occ: 'Up to 2 + 2 children',
    bed: 'Double Bed',
    extra: 'Balcony',
    img: './assets/images/real/bathroom.jpg',
    desc: "Our Junior Sea View Suites invite you to wake up to panoramic views of the shimmering Aegean, setting the mood for a truly memorable stay. Spacious and effortlessly stylish, these suites are designed for slow mornings, relaxed afternoons, and moments that linger."
  }
];

const ROOM_TAGS = ['Air-condition', 'Nespresso Machine', 'Smart TV', 'Safe Box', 'Kettle', 'Mini Fridge', 'Hair Dryer', 'Walk-in Shower', 'Free Wi-Fi'];

const DEALS = [
  {
    pct: '15%',
    title: 'Your Summer Vacation, Flexible',
    window: 'Available 16.08.2026 – 31.08.2026',
    body: "Sun, pool, and a cocktail in hand. That's all you really need. Enjoy 15% off your summer getaway and guarantee yourself moments of pure pleasure — meticulous design, a true sense of freedom, and the signature Brown style. This summer is going to be hot — don't wait until the last minute.",
    fine: 'Valid for bookings until Aug 31, 2026 · stays until Sept 30, 2026 · subject to availability · off full rack rate · +5% extra on direct bookings · no double discounts.',
    code: null,
    offerId: '237679'
  },
  {
    pct: '25%',
    title: 'Tishrei Holiday Offer',
    window: 'Available 16.08.2026 – 30.09.2026',
    body: "Experience Paros, the PLAY way. Enjoy beautifully designed rooms and suites, sea-view balconies, a swimming pool, direct beach access and the laid-back atmosphere of Paros. Book now and enjoy up to 25% off with the flexibility to change your plans according to the rate's cancellation policy.",
    fine: 'Flexible rate, cancellation policy applies.',
    code: 'TISHREI26',
    offerId: '240809'
  }
];

const FACILITIES = [
  {
    name: 'Plunge Pool',
    hours: '09:00 – 21:00',
    icon: 'pool',
    desc: 'Sun on your skin and island calm all around. The pool at Play Paros is made for easy moments, refreshing dips, relaxed swims and laid-back lounging under the sky. Stretch out on a sun lounger, cool off, repeat.'
  },
  {
    name: 'Rooftop Terrace',
    hours: 'All day',
    icon: 'terrace',
    desc: 'Our rooftop terrace is the perfect spot to unwind while taking in the views. Enjoy the open skies, sea views, and a relaxed setting that invites you to slow down and make the most of every moment.'
  },
  {
    name: 'Lobby Lounge',
    hours: 'All day',
    icon: 'lounge',
    desc: 'A relaxed and stylish space designed for unwinding and connecting. Overlooking the sea on one side and the pool on the other, it blends contemporary design with a laid-back Cycladic atmosphere.'
  },
  {
    name: 'PLAY Paros Beach',
    hours: '09:00 – 20:00 daily',
    icon: 'beach',
    desc: "Sun, sea & a little more Play. Settle into a sun lounger, cool off with a swim in the Aegean and enjoy refreshing drinks and laid-back music throughout the day.",
    cta: { label: 'View Beach Menu', href: 'https://brownhotels.com/octopus/Upload/files/ParosMenu.pdf' }
  },
  {
    name: 'VIP Transfer Services',
    hours: 'On request',
    icon: 'transfer',
    desc: 'Your stay begins the moment you set off. We offer VIP transfer services with a private driver to and from the airport, ensuring you arrive in comfort, style, and without a worry.',
    cta: { label: 'More Information', href: 'https://brown-viptransfers.eu/index.php/en' }
  },
  {
    name: 'Parikia',
    hours: 'Steps away',
    icon: 'town',
    desc: "The destination itself becomes the main experience. Set in the heart of Parikia's vibrant seafront, the town is your extended living room — beaches, cafés, restaurants, bars, and boutiques just steps away."
  },
  {
    name: 'Reception & Concierge',
    hours: '08:00 – 23:00',
    icon: 'reception',
    desc: 'Reception service with self check-in for late arrivals, concierge and local tips, daily housekeeping, beach and pool towels, and luggage storage upon availability.'
  },
  {
    name: 'Neighborhood Breakfast',
    hours: '30m away · 1 min walk',
    icon: 'breakfast',
    desc: 'In keeping with a neighborhood-style approach, breakfast is served at a charming seafront café next door — start your day like a local, with the authentic rhythm of the island right outside your door.'
  }
];

const EXPERIENCES = [
  {
    title: 'Gorgeous Beaches',
    img: './assets/images/real/sunset-cocktails.jpg',
    desc: 'Relax on soft sand and swim in crystal-clear waters surrounded by the unique landscape of rocky coves. From beaches with water sports activities to untouched natural beauty — check out Kolymbithres, Santa Maria, Parasporos, and Monastiri Beach.'
  },
  {
    title: 'Sophisticated Yet Authentic — Hello, Naoussa',
    img: './assets/images/real/facade.jpg',
    desc: "Looking for vibrant nightlife and exquisite dining? Naoussa is the best place to start. This charming town has maintained its authentic Cycladic architecture and traditional feel, and is the second largest on the island."
  },
  {
    title: 'Parikia Village',
    img: './assets/images/real/lobby.jpg',
    desc: 'The port, the monastery, the atmosphere — welcome to Parikia village. As the capital town and main port, Parikia preserves its authentic Cycladic architecture, home to the renowned Panagia Ekatontapiliani monastery, boutiques, and museums.'
  },
  {
    title: "Paros Island's Cuisine",
    img: './assets/images/real/breakfast.jpg',
    desc: 'From traditional to cosmopolitan — charming local taverns serve freshly caught seafood, traditional pastries, salads, and Mediterranean delights across the island.'
  }
];

const GALLERY = [
  { src: './assets/images/real/facade.jpg', cat: 'public', big: true },
  { src: './assets/images/real/pool-aerial.jpg', cat: 'pool', big: true },
  { src: './assets/images/real/room1.jpg', cat: 'rooms' },
  { src: './assets/images/real/sunset-cocktails.jpg', cat: 'dining', big: true },
  { src: './assets/images/real/breakfast.jpg', cat: 'dining' },
  { src: './assets/images/real/lobby.jpg', cat: 'public' },
  { src: './assets/images/real/rooftop.jpg', cat: 'facilities', big: true },
  { src: './assets/images/real/pool-swimmer.jpg', cat: 'pool' },
  { src: './assets/images/real/room5-bed.jpg', cat: 'rooms', big: true },
  { src: './assets/images/real/bathroom.jpg', cat: 'rooms' },
  { src: './assets/images/real/lobby.jpg', cat: 'public' }
];

const FAQ = [
  { q: 'Do you offer breakfast?', a: 'Yes. Breakfast is served at a partner café approximately 30 meters away — about a 1-minute walk from the hotel.' },
  { q: 'Is there a 24-hour reception?', a: 'No, the reception operates from 08:00 to 23:00. After reception hours, self check-in is available.' },
  { q: 'Do you offer late check-out?', a: 'Late check-out is subject to availability and comes with an additional charge.' },
  { q: 'Do you provide beach or pool towels?', a: 'Yes, beach and pool towels are provided.' },
  { q: 'Do you offer airport or port transfer services?', a: 'Yes, transfer services are available at an extra cost, including private VIP transfer.' },
  { q: 'Do you have twin beds?', a: 'No, all rooms feature queen-size double beds only.' },
  { q: 'Is there an elevator?', a: 'Yes, there is a small elevator that fits one person with a suitcase or two people without luggage.' },
  { q: 'Which payment methods are accepted?', a: 'We accept all major credit and debit cards, except American Express (AMEX).' },
  { q: 'Is the hotel ADA accessible?', a: 'No, the hotel is not fully accessible for guests with disabilities.' },
  { q: 'Is there an accessible restroom?', a: 'Yes, there is an accessible WC available.' },
  { q: 'What are the pool operating hours?', a: 'The pool is open daily from 09:00 to 21:00.' },
  { q: 'Are pets allowed?', a: 'No, pets are not allowed.' },
  { q: 'Do you offer laundry service?', a: 'No, this service is not available.' }
];
