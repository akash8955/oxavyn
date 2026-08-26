import React from 'react';
import './ConnectedEcosystems.css';

const partners = [
  "AWS", "Microsoft Azure", "Google Cloud", "Cloudflare", "Vercel", "DigitalOcean", "Firebase", "MongoDB",
  "GitHub", "GitLab", "Docker", "Kubernetes", "React", "Next.js", "Node.js", "Python", "Java", ".NET",
  "Salesforce", "HubSpot", "Zoho", "SAP", "Oracle", "Microsoft Dynamics 365", "ServiceNow",
  "Stripe", "Razorpay", "PayPal", "PayU", "Cashfree", "PhonePe", "Google Pay",
  "Shopify", "WooCommerce", "Magento", "BigCommerce", "Wix", "Amazon", "Flipkart",
  "DHL", "FedEx", "UPS", "Blue Dart", "Delhivery", "DTDC", "Ecom Express", "XpressBees", "Shadowfax", "Aramex", "India Post"
];

const row1 = partners.slice(0, 25);
const row2 = partners.slice(25, 50);

const getBrandStyle = (name) => {
  // A mapping of some brand colors to make it look diverse and premium like the image
  const brandColors = {
    "AWS": { bg: "#232F3E", color: "#FF9900" },
    "Microsoft Azure": { bg: "#0078D4", color: "#FFFFFF" },
    "Google Cloud": { bg: "#FFFFFF", color: "#4285F4" },
    "Cloudflare": { bg: "#F38020", color: "#FFFFFF" },
    "Vercel": { bg: "#000000", color: "#FFFFFF" },
    "Firebase": { bg: "#FFCA28", color: "#039BE5" },
    "MongoDB": { bg: "#00684A", color: "#00ED64" },
    "GitHub": { bg: "#24292E", color: "#FFFFFF" },
    "GitLab": { bg: "#FC6D26", color: "#FFFFFF" },
    "Docker": { bg: "#2496ED", color: "#FFFFFF" },
    "React": { bg: "#20232A", color: "#61DAFB" },
    "Next.js": { bg: "#000000", color: "#FFFFFF" },
    "Node.js": { bg: "#339933", color: "#FFFFFF" },
    "Python": { bg: "#3776AB", color: "#FFD43B" },
    "Salesforce": { bg: "#00A1E0", color: "#FFFFFF" },
    "Stripe": { bg: "#635BFF", color: "#FFFFFF" },
    "Razorpay": { bg: "#02042B", color: "#3395FF" },
    "PayPal": { bg: "#00457C", color: "#0079C1" },
    "Shopify": { bg: "#95BF47", color: "#FFFFFF" },
    "WooCommerce": { bg: "#96588A", color: "#FFFFFF" },
    "Amazon": { bg: "#232F3E", color: "#FF9900" },
    "DHL": { bg: "#FFCC00", color: "#D40511" },
    "FedEx": { bg: "#4D148C", color: "#FF6600" },
    "UPS": { bg: "#351C15", color: "#FFB500" },
    "Delhivery": { bg: "#000000", color: "#FFFFFF" },
    "Blue Dart": { bg: "#00529B", color: "#FFFFFF" },
    "XpressBees": { bg: "#F7931E", color: "#FFFFFF" },
  };

  if (brandColors[name]) {
    return {
      backgroundColor: brandColors[name].bg,
      color: brandColors[name].color,
      border: brandColors[name].bg === '#FFFFFF' ? '1px solid #E5E7EB' : 'none'
    };
  }

  // Fallback styling for an ultra-luxury modern feel
  return {
    backgroundColor: '#111111',
    color: '#FFFFFF',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  };
};

export default function ConnectedEcosystems() {
  return (
    <section className="connected-ecosystems-section">
      <div className="ce-container">
        <div className="ce-header">
          <h2 className="ce-title">
            Powering Growth Through <strong>Connected Ecosystems</strong>
          </h2>
        </div>
        
        <div className="ce-marquees-wrapper">
          {/* Row 1: Scrolling Left */}
          <div className="ce-marquee-container">
            <div className="ce-marquee-track scroll-left">
              {[...row1, ...row1].map((partner, index) => (
                <div 
                  className="ce-logo-box" 
                  key={`r1-${index}`}
                  style={getBrandStyle(partner)}
                >
                  <span className="ce-logo-text">{partner}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="ce-marquee-container">
            <div className="ce-marquee-track scroll-right">
              {[...row2, ...row2].map((partner, index) => (
                <div 
                  className="ce-logo-box" 
                  key={`r2-${index}`}
                  style={getBrandStyle(partner)}
                >
                  <span className="ce-logo-text">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
