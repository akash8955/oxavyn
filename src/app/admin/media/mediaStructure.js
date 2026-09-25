export const mediaStructure = [
  {
    title: 'HOME',
    children: [
      { title: 'Banner', slots: Array.from({length: 5}, (_, i) => ({title: `Banner ${i+1}`, type: 'image'})) },
      { title: 'Why Oxavyn', slots: Array.from({length: 16}, (_, i) => ({title: `Image ${i+1}`, type: 'image'})) },
      { title: 'AI Powered Innovation', slots: [{title: 'Image 1', type: 'image'}, {title: 'Image 2', type: 'image'}] },
      { title: 'Our Core Strength', slots: Array.from({length: 6}, (_, i) => ({title: `Image ${i+1}`, type: 'image'})) },
      { title: 'Which Business', slots: Array.from({length: 4}, (_, i) => ({title: `Image ${i+1}`, type: 'image'})) },
      { title: 'Technology Solutions', slots: Array.from({length: 6}, (_, i) => ({title: `Image ${i+1}`, type: 'image'})) }
    ]
  },
  {
    title: 'ABOUT',
    children: [
      { title: 'About Banner', slots: [{title: 'Banner Image', type: 'image'}] },
      { title: 'About Oxavyn', slots: Array.from({length: 3}, (_, i) => ({title: `Image ${i+1}`, type: 'image'})) },
      { title: 'Why Us Better', slots: [{title: 'Image', type: 'image'}] },
      { title: 'Our 6D Approach', slots: [{title: 'Image', type: 'image'}] },
      { title: 'Our Team', slots: [{title: 'Image', type: 'image'}] }
    ]
  },
  {
    title: 'SERVICES',
    children: [
      {
        title: 'Web Development',
        slots: [
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
          { title: 'Transform Healthcare', type: 'image' },
          { title: 'Healthcare Is Complex', type: 'video' },
          { title: 'Healthcare Speaks Connected', type: 'video' },
          { title: 'Run Healthcare Operations', type: 'image' },
          { title: 'Turn Healthcare Data', type: 'image' },
          { title: 'Everything Connected', type: 'video' },
          { title: 'Implementation Approach', type: 'video' }
        ]
      },
      {
        title: 'E-Commerce',
        slots: [
          { title: 'Built Smarter', type: 'video' },
          { title: 'E-Commerce Moves Fast', type: 'video' },
          { title: 'Turn Every Customer', type: 'image' },
          { title: 'Manage Business', type: 'image' }
        ]
      },
      {
        title: 'Education',
        slots: [
          { title: 'Built Smarter', type: 'video' },
          { title: 'Education Is an Ecosystem', type: 'video' },
          ...Array.from({length: 5}, (_, i) => ({title: `Card Video ${i+1}`, type: 'video'})),
          { title: 'Turn Education Data', type: 'video' }
        ]
      },
      {
        title: 'Retail',
        slots: [
          { title: 'Built Smarter', type: 'video' },
          { title: 'Retail Is More Than', type: 'image' },
          ...Array.from({length: 5}, (_, i) => ({title: `Card Video ${i+1}`, type: 'video'})),
          { title: 'Turn Every Customer Interaction', type: 'video' },
          { title: 'Connect Business Better Every Sale', type: 'image' },
          { title: 'Turn Retail Data', type: 'video' }
        ]
      },
      {
        title: 'Agencies',
        slots: [
          { title: 'Run Your Agency', type: 'video' },
          { title: 'Your Client, Projects', type: 'image' },
          { title: 'Turn Every Client', type: 'video' },
          { title: 'Turn Project and Quotations', type: 'image' },
          { title: 'Turn Agency Data', type: 'image' },
          { title: 'Turn Fast Client Conversion', type: 'video' }
        ]
      }
    ]
  },
  {
    title: 'STUDENT',
    children: [
      {
        title: 'INTERNSHIP',
        slots: Array.from({length: 6}, (_, i) => ({title: `Card Video ${i+1}`, type: 'video'}))
      },
      {
        title: 'SKILL ENHANCEMENT',
        slots: [
          ...Array.from({length: 6}, (_, i) => ({title: `Card Video ${i+1}`, type: 'video'})),
          { title: 'Build Skills', type: 'image' },
          { title: 'Learn From Experts', type: 'image' },
          { title: 'Design Around Your Growth 1', type: 'image' },
          { title: 'Design Around Your Growth 2', type: 'image' },
          { title: 'Skills Today', type: 'image' }
        ]
      },
      {
        title: 'FOUNDATION',
        slots: [
          { title: 'Build Your Foundation', type: 'image' },
          { title: 'Your Career Is a Journey', type: 'image' },
          ...Array.from({length: 6}, (_, i) => ({title: `Choose Your Story ${i+1}`, type: 'video'})),
          { title: 'From Foundation to Opportunity', type: 'video' },
          { title: 'Build Skill Before 1', type: 'image' },
          { title: 'Build Skill Before 2', type: 'image' },
          { title: 'Professional Career Confidence', type: 'video' }
        ]
      }
    ]
  },
  {
    title: 'CAREERS',
    children: [
      { title: 'Careers Banner', slots: [{title: 'Career Banner Image', type: 'image'}] },
      { title: 'Careers Video', slots: [{title: 'A Career Built For', type: 'video'}] },
      { title: 'Why Join', slots: [{title: 'Why Join Oxavyn', type: 'image'}] }
    ]
  },
  {
    title: 'FAQ',
    children: [{ title: 'FAQ Banner', slots: [{title: 'Banner Image', type: 'image'}] }]
  },
  {
    title: 'CONTACT',
    children: [{ title: 'Contact Banner', slots: [{title: 'Banner Image', type: 'image'}] }]
  },
  {
    title: 'CASE STUDIES',
    children: [{ title: 'Case Studies Banner', slots: [{title: 'Banner Image', type: 'image'}] }]
  },
  {
    title: 'BLOG',
    children: [{ title: 'Blog Banner', slots: [{title: 'Banner Image', type: 'image'}] }]
  },
  {
    title: 'HELP CENTER',
    children: [{ title: 'Help Center Banner', slots: [{title: 'Banner Image', type: 'image'}] }]
  },
  {
    title: 'STUDENT REVIEWS',
    children: [{ title: 'Student Reviews Banner', slots: [{title: 'Banner Image', type: 'image'}] }]
  },
  {
    title: 'CLIENT SUCCESS STORIES',
    children: [{ title: 'Client Success Stories Banner', slots: [{title: 'Banner Image', type: 'image'}] }]
  },
  {
    title: 'TECHNOLOGY GUIDE',
    children: [{ title: 'Technology Guide Banner', slots: [{title: 'Banner Image', type: 'image'}] }]
  },
  {
    title: 'LEGAL',
    children: [
      { title: 'Terms & Conditions', slots: [{title: 'Banner Image', type: 'image'}] },
      { title: 'Privacy Policy', slots: [{title: 'Banner Image', type: 'image'}] },
      { title: 'Compliance', slots: [{title: 'Banner Image', type: 'image'}] },
      { title: 'Refund & Cancellation Policy', slots: [{title: 'Banner Image', type: 'image'}] }
    ]
  }
];
