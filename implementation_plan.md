# Redesign Contact Page based on Provided Designs

This plan outlines the redesign of the Contact page based on the 5 screenshots provided, including the removal of the global CTA banner.

## Proposed Changes

### 1. Remove Global CTA
- Remove `<CtaBanner />` from `src/app/layout.js`.

### 2. Contact Page Redesign (`src/app/contact/page.js` & new components)
We will restructure the Contact page into several distinct sections matching the images provided.

#### A. Hero Section (Queries & Contact Card)
- **UI:** A light background with floating elements/avatars.
- **Text:** "Contact us", "Have any queries? We're all ears!", "Our team is trained, equipped & ready to guide you from scratch to success."
- **Floating Card:** 
  - Left: "Ring us up", "Write to us", "Visit us" with the same dummy details as the image.
  - Right: A Google Maps iframe.

#### B. Support Banner
- **UI:** A wide gradient background (orange to purple).
- **Image:** A generated image of a woman looking at her phone.
- **Text:** "Oxavyn customer care is always here" and "Go to the Oxavyn customer care self-help page...".
- **Action:** An "Ask Now" button.

#### C. Grievance Policy Section
- **Header:** "How does our customer grievance policy work?"
- **Level 1 (Customer support):** Left-aligned text, right-aligned image (generated image of someone typing on a laptop).
- **Level 2 (Customer service escalation):** Right-aligned text block with escalation manager details.
- **Level 3 (Grievance Officer):** Left-aligned text block with officer details.

### 3. Asset Generation
We will use the `generate_image` tool to create the necessary assets with transparent backgrounds:
1. Woman looking at phone (for the Support banner).
2. Person typing on laptop (for Level 1).
3. 3-4 small floating avatars (for the Hero section).
These will be placed in the `/public` directory.

## Open Questions
- I will replace the brand name "Shiprocket" from the screenshots with "Oxavyn" to match your brand. Let me know if you want the exact text "Shiprocket" instead.
- For the map, I will use a standard Google Maps iframe pointing to New Delhi/Gurugram as per your previous contact details. Is this acceptable?
