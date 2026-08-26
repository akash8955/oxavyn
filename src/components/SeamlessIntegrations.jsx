import React from 'react';
import './SeamlessIntegrations.css';

const integrationsRow1 = [
  { name: 'AWS', color: '#232F3E' },
  { name: 'Azure', color: '#0089D6' },
  { name: 'Google Cloud', color: '#4285F4' },
  { name: 'Salesforce', color: '#00A1E0' },
  { name: 'OpenAI', color: '#10A37F' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'GitHub', color: '#181717' },
  { name: 'Adobe', color: '#FF0000' },
  { name: 'HubSpot', color: '#FF7A59' },
  { name: 'Oracle', color: '#F80000' },
  { name: 'IBM', color: '#0530AD' },
  { name: 'Shopify', color: '#95BF47' },
  { name: 'WooCommerce', color: '#96588A' },
  { name: 'Stripe', color: '#008CDD' },
  { name: 'Razorpay', color: '#02042B' },
];

const integrationsRow2 = [
  { name: 'Zoho', color: '#111111' },
  { name: 'Meta', color: '#0668E1' },
  { name: 'Analytics', color: '#F4B400' },
  { name: 'Firebase', color: '#FFCA28', textColor: '#111' },
  { name: 'Cloudflare', color: '#F38020' },
  { name: 'Vercel', color: '#000000' },
  { name: 'Netlify', color: '#00C7B7' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Kubernetes', color: '#326CE5' },
  { name: 'Figma', color: '#F24E1E' },
  { name: 'Slack', color: '#4A154B' },
  { name: 'Twilio', color: '#F22F46' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'MySQL', color: '#4479A1' },
  { name: 'Redis', color: '#DC382D' },
];

const SeamlessIntegrations = () => {
  return (
    <section className="si-section">
      <div className="si-container">
        <h2 className="si-title">
          Seamless Technology Integrations<br />for Modern Businesses
        </h2>
      </div>
      
      <div className="si-marquee-container">
        {/* Row 1 */}
        <div className="si-marquee-track si-track-left">
          {[...integrationsRow1, ...integrationsRow1, ...integrationsRow1].map((item, index) => (
            <div 
              key={`row1-${index}`} 
              className="si-box"
              style={{ 
                backgroundColor: item.color, 
                color: item.textColor || '#fff',
                border: item.textColor ? '1px solid #eaeaea' : 'none'
              }}
            >
              {item.name}
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="si-marquee-track si-track-right">
          {[...integrationsRow2, ...integrationsRow2, ...integrationsRow2].map((item, index) => (
            <div 
              key={`row2-${index}`} 
              className="si-box"
              style={{ 
                backgroundColor: item.color, 
                color: item.textColor || '#fff',
                border: item.textColor ? '1px solid #eaeaea' : 'none'
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeamlessIntegrations;
