import React from 'react';

// Common SVG style props to keep it clean
const iconProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "mega-item-icon-svg"
};

export const generateSlug = (title) => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
};

const rawNavLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Services", 
    isDropdown: true,
    megaMenuType: "full",
    rows: [
      {
        id: "row-1",
        columns: [
          {
            title: "SOFTWARE DEVELOPMENT",
            items: [
              { title: "Web Development", desc: "Scalable, high-performance web applications", icon: <svg {...iconProps}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg> },
              { title: "Mobile App Development", desc: "Modern iOS & Android applications", icon: <svg {...iconProps}><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg> },
              { title: "Custom Software", desc: "Tailored software built around your business", icon: <svg {...iconProps}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg> },
              { title: "SaaS Development", desc: "Secure and scalable SaaS products", icon: <svg {...iconProps}><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> }
            ]
          },
          {
            title: "AI & MACHINE LEARNING",
            items: [
              { title: "AI Development", desc: "Intelligent solutions powered by modern AI", icon: <svg {...iconProps}><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg> },
              { title: "Generative AI", desc: "AI-powered products, copilots & assistants", icon: <svg {...iconProps}><path d="M12 2v4"></path><path d="M12 18v4"></path><path d="M4.93 4.93l2.83 2.83"></path><path d="M16.24 16.24l2.83 2.83"></path><path d="M2 12h4"></path><path d="M18 12h4"></path><path d="M4.93 19.07l2.83-2.83"></path><path d="M16.24 7.76l2.83-2.83"></path></svg> },
              { title: "Machine Learning", desc: "Predictive models and intelligent systems", icon: <svg {...iconProps}><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg> }
            ]
          },
          {
            title: "DATA & ANALYTICS",
            items: [
              { title: "Data Analytics", desc: "Turn business data into actionable insights", icon: <svg {...iconProps}><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg> },
              { title: "Business Intelligence", desc: "Interactive dashboards and reporting", icon: <svg {...iconProps}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg> },
              { title: "Data Science", desc: "Discover patterns and make smarter decisions", icon: <svg {...iconProps}><circle cx="10" cy="10" r="7"></circle><line x1="21" y1="21" x2="15" y2="15"></line></svg> }
            ]
          },
          {
            title: "BUSINESS AUTOMATION",
            items: [
              { title: "Workflow Automation", desc: "Simplify repetitive business processes", icon: <svg {...iconProps}><path d="M4 4v16h16"></path><path d="M4 12h10"></path><path d="M4 8h14"></path></svg> },
              { title: "CRM Automation", desc: "Automate customer and sales workflows", icon: <svg {...iconProps}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> },
              { title: "Business Process Automation", desc: "Reduce manual work and improve efficiency", icon: <svg {...iconProps}><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg> },
              { title: "Third-Party Integrations", desc: "Connect the tools your business already uses", icon: <svg {...iconProps}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> }
            ]
          }
        ]
      }
    ]
  },
  { 
    name: "Portfolio", 
    isDropdown: true,
    items: [
      { title: "Success Stories", desc: "See how we've helped others", icon: "📈" },
      { title: "Case Studies", desc: "Deep dives into our solutions", icon: "📚" }
    ]
  },
  { name: "Careers", href: "/careers" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" }
];

// Process links to attach dynamic slugs and hrefs to all services
export const navLinks = rawNavLinks.map(link => {
  if (link.megaMenuType === "full") {
    link.rows.forEach(row => {
      row.columns.forEach(col => {
        col.items.forEach(item => {
          // Force all items to use dynamic slugs
          item.slug = generateSlug(item.title);
          item.href = `/services/${item.slug}`;
        });
      });
    });
  }
  return link;
});

// Helper to look up a service by its slug for the dynamic page
export const getServiceBySlug = (slug) => {
  let foundService = null;
  let categoryName = "";
  
  navLinks.forEach(link => {
    if (link.megaMenuType === "full") {
      link.rows.forEach(row => {
        row.columns.forEach(col => {
          col.items.forEach(item => {
            if (item.slug === slug) {
              foundService = item;
              categoryName = col.title;
            }
          });
        });
      });
    }
  });
  
  return { service: foundService, category: categoryName };
};
