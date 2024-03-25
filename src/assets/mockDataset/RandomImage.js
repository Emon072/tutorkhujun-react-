const imageUrls = [
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg',
    'https://randomuser.me/api/portraits/men/3.jpg',
    'https://randomuser.me/api/portraits/men/4.jpg',
    'https://randomuser.me/api/portraits/men/5.jpg',
      'https://randomuser.me/api/portraits/men/6.jpg',
      'https://randomuser.me/api/portraits/men/7.jpg',
      'https://randomuser.me/api/portraits/men/8.jpg',
      'https://randomuser.me/api/portraits/men/9.jpg',
      'https://randomuser.me/api/portraits/men/10.jpg',
      'https://randomuser.me/api/portraits/men/11jpg',
      'https://randomuser.me/api/portraits/men/12.jpg',
      'https://randomuser.me/api/portraits/men/13.jpg',
     ' https://randomuser.me/api/portraits/men/14.jpg',
      'https://randomuser.me/api/portraits/men/15.jpg',
      'https://randomuser.me/api/portraits/men/16.jpg'
    // Add more real image URLs here',
  ];

  const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];

  export default randomImageUrl;