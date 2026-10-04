export const mediaStructure = [
  {
    title: 'HOME',
    children: [
      { title: 'Banner', slots: Array.from({ length: 5 }, (_, i) => ({ title: `Banner ${i + 1}`, type: 'image' })) },
      { title: 'Why Oxavyn', slots: Array.from({ length: 16 }, (_, i) => ({ title: `Image ${i + 1}`, type: 'image' })) },
      { title: 'AI Powered Innovation', slots: [{ title: 'Image 1', type: 'image' }, { title: 'Image 2', type: 'image' }] },
      { title: 'Our Core Strength', slots: Array.from({ length: 6 }, (_, i) => ({ title: `Image ${i + 1}`, type: 'image' })) },
      { title: 'Which Business', slots: Array.from({ length: 4 }, (_, i) => ({ title: `Image ${i + 1}`, type: 'image' })) },
      { title: 'Technology Solutions', slots: Array.from({ length: 6 }, (_, i) => ({ title: `Image ${i + 1}`, type: 'image' })) }
    ]
  },
  {
    title: 'ABOUT',
    children: [
      { title: 'About Banner', slots: [{ title: 'Banner Image', type: 'image' }] },
      { title: 'About Oxavyn', slots: Array.from({ length: 3 }, (_, i) => ({ title: `Image ${i + 1}`, type: 'image' })) },
      { title: 'Why Us Better', slots: [{ title: 'Image', type: 'image' }] },
      { title: 'Our 6D Approach', slots: [{ title: 'Image', type: 'image' }] },
      { title: 'Our Team', slots: [{ title: 'Image', type: 'image' }] }
    ]
  },
  {
    title: 'SERVICES',
    children: [
      {
        title: 'Web Development',
        slots: [
          { title: "Digital Experiences Built for What's Next.", type: 'image' },
          { title: 'The Digital Experience', type: 'image' },
          { title: 'Technology', type: 'image' },
          { title: 'User Experience', type: 'image' },
          { title: 'More Than Development', type: 'image' }
        ]
      },
      {
        title: 'Mobile App Development',
        slots: [
          { title: 'Built for Mobile', type: 'image' },
          { title: 'Design to Be Remembered 1', type: 'image' },
          { title: 'Design to Be Remembered 2', type: 'image' },
          { title: 'Design to Be Remembered 3', type: 'image' },
          { title: 'Why Businesses Choose', type: 'image' }
        ]
      },
      {
        title: 'AI Development',
        slots: [
          { title: 'Build With Intelligence', type: 'video' },
          { title: 'See Intelligence in Motion', type: 'video' }
        ]
      }
    ]
  },
  {
    title: 'INDUSTRIES',
    children: [
      {
        title: 'Healthcare',
        slots: [
          { title: 'Transform Healthcare', type: 'video' },
          { title: 'Run Healthcare Operations', type: 'image' },
          { title: 'Turn Healthcare Data', type: 'image' }
        ]
      },
      {
        title: 'E-Commerce',
        slots: [
          { title: 'Built Smarter', type: 'video' },
          { title: 'Turn Every Customer', type: 'image' },
          { title: 'Manage Business', type: 'image' }
        ]
      },
      {
        title: 'Education',
        slots: [
          { title: 'Education Connects', type: 'video' },
          { title: 'Education Is an Ecosystem', type: 'image' },
          { title: 'Turn Education Data', type: 'image' }
        ]
      },
      {
        title: 'Retail',
        slots: [
          { title: 'The Modern Retail', type: 'video' },
          { title: 'Operations Behind', type: 'image' },
          { title: 'Turn Every Customer Interaction', type: 'image' },
          { title: 'Foundation For Growth', type: 'image' },
          { title: 'Turn Retail Data', type: 'image' }
        ]
      },
      {
        title: 'Agencies',
        slots: [
          { title: 'Connected Agency', type: 'video' },
          { title: 'Beyond Projects', type: 'image' },
          { title: 'Turn Every Client', type: 'image' },
          { title: 'Client Relationships', type: 'image' },
          { title: 'Financial Intelligence', type: 'image' }
        ]
      }
    ]
  },
  {
    title: 'STUDENT',
    children: [
      {
        title: 'INTERNSHIP',
        slots: Array.from({ length: 2 }, (_, i) => ({ title: `Card Video ${i + 1}`, type: 'video' }))
      },

      {
        title: 'FOUNDATION',
        slots: [
          { title: 'Build Your Foundation', type: 'image' },
          { title: 'Your Career Is a Journey', type: 'image' },
          ...Array.from({ length: 2 }, (_, i) => ({ title: `Choose Your Story ${i + 1}`, type: 'video' }))
        ]
      }
    ]
  },
  {
    title: 'CAREERS',
    children: [
      { title: 'Careers Banner', slots: [{ title: 'Career Banner Image', type: 'image' }] },
      { title: 'Careers Video', slots: [{ title: 'A Career Built For', type: 'video' }] },
      { title: 'Why Join', slots: [{ title: 'Why Join Oxavyn', type: 'image' }] }
    ]
  },
  {
    title: 'FAQ',
    children: [{ title: 'FAQ Banner', slots: [{ title: 'Banner Image', type: 'image' }] }]
  },
  {
    title: 'CONTACT',
    children: [{ title: 'Contact Banner', slots: [{ title: 'Banner Image', type: 'image' }] }]
  },
  {
    title: 'CASE STUDIES',
    children: [{ title: 'Case Studies Banner', slots: [{ title: 'Banner Image', type: 'image' }] }]
  },
  {
    title: 'BLOG',
    children: [{ title: 'Blog Banner', slots: [{ title: 'Banner Image', type: 'image' }] }]
  },
  {
    title: 'HELP CENTER',
    children: [{ title: 'Help Center Banner', slots: [{ title: 'Banner Image', type: 'image' }] }]
  },
  {
    title: 'STUDENT REVIEWS',
    children: [{ title: 'Student Reviews Banner', slots: [{ title: 'Banner Image', type: 'image' }] }]
  },
  {
    title: 'CLIENT SUCCESS STORIES',
    children: [{ title: 'Client Success Stories Banner', slots: [{ title: 'Banner Image', type: 'image' }] }]
  },
  {
    title: 'TECHNOLOGY GUIDE',
    children: [{ title: 'Technology Guide Banner', slots: [{ title: 'Banner Image', type: 'image' }] }]
  },
  {
    title: 'LEGAL',
    children: [
      { title: 'Terms & Conditions', slots: [{ title: 'Banner Image', type: 'image' }] },
      { title: 'Privacy Policy', slots: [{ title: 'Banner Image', type: 'image' }] },
      { title: 'Compliance', slots: [{ title: 'Banner Image', type: 'image' }] },
      { title: 'Refund & Cancellation Policy', slots: [{ title: 'Banner Image', type: 'image' }] }
    ]
  }
];
