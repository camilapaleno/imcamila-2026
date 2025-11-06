// Case Study Data Structure
// Each case study can have multiple content blocks (text or images) in any order

// Import sample images
import comfyPreview from "@/image/preview-comfyui.jpg";
import comfyImage1 from "@/image/comfy-casestudy1.png";
import comfyImage2 from "@/image/comfy-casestudy2.png";
import comfyImage4 from "@/image/comfy-casestudy4.png";
import comfyImage5 from "@/image/comfy-casestudy5.png";
import sagePreview from "@/image/preview-sagesocial5.png";
import devonPreview from "@/image/preview-devon4.png";
import algoPreview from "@/image/preview-algo.jpg";
import algoImage1 from "@/image/algo-casestudy1.png";
import algoImage2 from "@/image/algo-casestudy2.png";
import algoImage3 from "@/image/algo-casestudy3.png";
import algoImage4 from "@/image/algo-casestudy4.png";
import jacoPreview from "@/image/preview-jacobeachluxe.png";
import jblImage1 from "@/image/jbl-casestudy-1.png";
import jblImage2 from "@/image/jbl-casestudy-2.png";
import jblImage3 from "@/image/jbl-casestudy-3.png";
import jblImage4 from "@/image/jbl-casestudy-4.png";
import jblImage5 from "@/image/jbl-casestudy-5.png";
import jblImage6 from "@/image/jbl-casestudy-6.png";
import jblImage7 from "@/image/jbl-casestudy-7.png";
import jblImage8 from "@/image/jbl-casestudy-8.png";

export interface CaseStudyContentBlock {
  type: 'text' | 'image';
  content: string; // For text: the actual text content. For images: the image path/import
  alt?: string; // For images: alt text
  caption?: string; // Optional caption for images
}

export interface CaseStudy {
  id: string; // URL-friendly slug (e.g., "japonica-restaurant")
  title: string; // Main title displayed on the case study page
  shortDescription: string; // Short description for homepage preview
  coverImage: any; // Cover image for homepage preview
  featured: boolean; // Toggle to show on homepage
  category?: string[]; // Optional categories
  client?: string; // Optional client name
  year?: string; // Optional year
  tools?: string; // Optional tools used
  contentBlocks: CaseStudyContentBlock[]; // Array of text and image blocks
}

// Example case studies data
export const caseStudies: CaseStudy[] = [
  {
    id: "comfyui",
    title: "ComfyUI",
    shortDescription: "UX/UI design for an AI-powered image generation platform, creating an intuitive interface for complex workflows.",
    coverImage: comfyPreview,
    featured: true,
    category: ["ux/ui design", "ai", "interface design"],
    client: "ComfyUI",
    year: "2024",
    tools: "Figma, User Research, Prototyping",
    contentBlocks: [
      {
        type: 'text',
        content: 'ComfyUI is a powerful node-based interface for AI image generation using Stable Diffusion. The challenge was to design an intuitive user experience that would make complex AI workflows accessible to both beginners and advanced users, while maintaining the flexibility that power users require.'
      },
      {
        type: 'image',
        content: comfyPreview.src,
        alt: 'ComfyUI Interface Overview',
        caption: 'The main interface balances complexity with usability through careful information architecture'
      },
      {
        type: 'text',
        content: 'Through extensive user research and testing, I developed a design system that prioritizes discoverability and progressive disclosure. The interface guides new users through basic workflows while providing advanced features that don\'t clutter the experience for those who don\'t need them yet.'
      },
      {
        type: 'image',
        content: comfyImage1.src,
        alt: 'ComfyUI Node Editor',
        caption: 'Node-based workflow editor with clear visual hierarchy and connection feedback'
      },
      {
        type: 'text',
        content: 'Key UX improvements included redesigning the node connection system for better visual feedback, creating a more intuitive parameters panel, and developing onboarding flows that help users understand the node-based paradigm without overwhelming them with technical details.'
      },
      {
        type: 'image',
        content: comfyImage2.src,
        alt: 'ComfyUI Settings Panel',
        caption: 'Streamlined settings panel with logical grouping and tooltips for guidance'
      },
      {
        type: 'image',
        content: comfyImage4.src,
        alt: 'ComfyUI Workflow Templates',
        caption: 'Template system that helps users get started with pre-built workflows'
      },
      {
        type: 'image',
        content: comfyImage5.src,
        alt: 'ComfyUI Output Gallery',
        caption: 'Clean gallery view for reviewing and managing generated images'
      },
    ]
  },
  {
    id: "sage-social-marketing",
    title: "Sage Social",
    shortDescription: "A bold, modern website for a Los Angeles marketing agency specializing in social media strategy.",
    coverImage: sagePreview,
    featured: true,
    category: ["web design", "squarespace", "marketing"],
    client: "Sage Social",
    year: "2024",
    tools: "Squarespace, CSS, JavaScript",
    contentBlocks: [
      {
        type: 'text',
        content: 'Sage Social is a cutting-edge social media marketing agency based in Los Angeles. They needed a website that would reflect their innovative approach to digital marketing while showcasing their portfolio of successful campaigns and attracting new clients.'
      },
      {
        type: 'image',
        content: sagePreview.src,
        alt: 'Sage Social Website',
        caption: 'Bold typography and vibrant colors reflect the agency\'s dynamic personality'
      },
      {
        type: 'text',
        content: 'The website features an energetic design with bold typography, vibrant accent colors, and dynamic layouts that reflect the fast-paced nature of social media. Custom JavaScript interactions were implemented to create engaging scroll effects and portfolio presentations that demonstrate the agency\'s creative capabilities.'
      },
      {
        type: 'text',
        content: 'Key features include a portfolio showcase highlighting successful campaigns, service pages detailing their offerings, and a contact system for potential clients. The site was built to be easily maintainable by the Sage Social team, allowing them to regularly update their portfolio with new work.'
      },
    ]
  },
  {
    id: "algorhythm",
    title: "Algorhythm",
    shortDescription: "Frontend development and UI/UX design for a music discovery platform that analyzes user-uploaded tracks to recommend similar songs and artists.",
    coverImage: algoPreview,
    featured: true,
    category: ["frontend development", "ux/ui design", "music", "full-stack"],
    client: "Algorhythm",
    year: "2024-2025",
    tools: "React.js, Next.js, TypeScript, Supabase, Adobe XD",
    contentBlocks: [
      {
        type: 'text',
        content: 'Algorhythm is an innovative music discovery platform that analyzes user-uploaded tracks to recommend similar songs and artists. As the frontend developer, I was responsible for building the entire user interface from scratch, creating design frameworks, and collaborating closely with the backend team to integrate complex data processing workflows.'
      },
      {
        type: 'text',
        content: '## Project Overview\n\nKey Project Metrics:\n\n• Project Duration: October 2024 - January 2025 (4 months)\n\n• 35+ Pull Requests successfully merged\n\n• 30+ Jira tickets completed across frontend development\n\n• Full-stack integration with real-time data processing'
      },
      {
        type: 'image',
        content: algoImage1.src,
        alt: 'Algorhythm Campaign Management Interface',
        caption: 'Campaign management dashboard showing real-time processing states and analytics'
      },
      {
        type: 'text',
        content: '## Role & Responsibilities\n\n### Frontend Development\n\n• Built complete React.js application architecture from scratch\n\n• Implemented responsive UI components for music upload, campaign management, and results visualization\n\n• Developed real-time loading states and error handling for asynchronous music processing\n\n• Created dynamic dashboard for displaying campaign results and analytics\n\n### UI/UX Design & Prototyping\n\n• Created comprehensive design frameworks using Adobe XD\n\n• Designed mockups for the "Sound Overview" interface showing campaign analytics\n\n• Established visual design patterns and component library\n\n### Backend Integration & API Development\n\n• Collaborated with backend developer to design and implement REST API endpoints\n\n• Integrated Supabase authentication and database services\n\n• Implemented file upload functionality for audio processing\n\n• Designed data flow architecture for campaign management and results display'
      },
      {
        type: 'image',
        content: algoImage2.src,
        alt: 'Algorhythm Sound Overview Analytics',
        caption: 'Sound Overview interface displaying campaign results and similarity scores'
      },
      {
        type: 'text',
        content: '## Technical Implementation\n\n### Technology Stack\n\n• Frontend: React.js, Next.js, TypeScript\n\n• Styling: CSS3, responsive design principles\n\n• Backend Integration: Supabase, REST APIs\n\n• Design Tools: Adobe XD for prototyping and mockups\n\n• Development Tools: Git, GitHub, Chrome DevTools\n\n### Key Features Developed\n\n**1. User Authentication System**\n\n• Implemented secure login/register functionality with Supabase\n\n• Created protected routes and session management\n\n• Added error handling for authentication edge cases\n\n**2. Campaign Management Interface**\n\n• Built intuitive upload modal for music file submission\n\n• Implemented campaign creation and management workflows\n\n• Added campaign deletion functionality with proper confirmation flows\n\n**3. Real-time Processing States**\n\n• Developed dynamic loading indicators for music analysis\n\n• Implemented background job monitoring and status updates\n\n• Created error states and retry mechanisms for failed processes\n\n**4. Analytics Dashboard**\n\n• Built comprehensive "Sound Overview" interface displaying campaign results\n\n• Implemented data visualization for song recommendations and similarity scores\n\n• Created responsive layouts for different screen sizes'
      },
      {
        type: 'image',
        content: algoImage3.src,
        alt: 'Algorhythm Upload and Processing Flow',
        caption: 'Music upload interface with real-time processing states and progress indicators'
      },
      {
        type: 'text',
        content: '## Challenges & Solutions\n\n### Challenge 1: Complex Data Integration\n\nThe backend API returned complex nested data structures (campaigns, songs, videos) that needed to be efficiently displayed in the frontend.\n\n**Solution:**\n\n• Created detailed data mapping diagrams using Eraser.io to visualize data structure\n\n• Collaborated with backend developer to optimize API responses for frontend consumption\n\n• Implemented TypeScript interfaces to ensure type safety\n\n### Challenge 2: Asynchronous Music Processing\n\nMusic analysis could take several minutes, requiring sophisticated loading states and error handling.\n\n**Solution:**\n\n• Implemented background job polling system\n\n• Created dynamic UI states showing processing progress\n\n• Built automatic refresh mechanisms to update campaign status\n\n### Challenge 3: Cross-browser Compatibility Issues\n\nVisual inconsistencies appeared across different browsers and screen resolutions, particularly with CSS box shadows.\n\n**Solution:**\n\n• Established comprehensive testing protocol across Chrome and Safari\n\n• Used deployment previews to test fixes in production-like environments\n\n• Implemented fallback styling for browser-specific issues'
      },
      {
        type: 'image',
        content: algoImage4.src,
        alt: 'Algorhythm Design Framework',
        caption: 'Adobe XD design framework showing component library and visual design patterns'
      },
      {
        type: 'text',
        content: '## Results & Impact\n\n### Technical Achievements\n\n• Successfully delivered a complete, production-ready frontend application\n\n• Built robust authentication system handling edge cases and error states\n\n• Implemented complex data visualization for music analytics\n\n• Created responsive, cross-browser compatible user interface\n\n### Process Improvements\n\n• Established efficient frontend-backend collaboration workflow\n\n• Created reusable component library and design framework\n\n• Implemented comprehensive testing and deployment pipeline\n\n### Business Impact\n\n• Delivered MVP on schedule, enabling team to launch beta testing\n\n• Created intuitive user experience that simplified complex music discovery workflows\n\n• Built scalable architecture supporting future feature development'
      },
      {
        type: 'text',
        content: '## Conclusion\n\nThe Algorhythm project showcased my ability to build complex, user-facing applications from concept to production. Working closely with the backend team, I successfully translated technical requirements into intuitive user experiences while maintaining high code quality and meeting aggressive deadlines.\n\nThis project demonstrated my proficiency in modern frontend development practices, collaborative software development, and my ability to bridge the gap between design and implementation. The successful launch of the platform validated our technical architecture decisions and user experience design choices.\n\nKey takeaways from this project include the importance of clear communication in distributed teams, the value of iterative development with frequent user testing, and the critical role of robust error handling in user-facing applications dealing with complex backend processes.'
      },
    ]
  },
  {
    id: "jaco-beach-luxe",
    title: "Jaco Beach Luxe",
    shortDescription: "Complete branding package for a luxury vacation rental property in Costa Rica, capturing tropical elegance.",
    coverImage: jacoPreview,
    featured: true,
    category: ["branding", "luxury", "hospitality"],
    client: "Jaco Beach Luxe",
    year: "2024",
    tools: "Adobe Illustrator, Photoshop, InDesign",
    contentBlocks: [
      {
        type: 'text',
        content: 'Jaco Beach Luxe is a premier luxury vacation rental property located in the stunning coastal town of Jaco, Costa Rica. The client needed a complete brand identity that would communicate the property\'s upscale positioning while capturing the relaxed, tropical essence of the location.'
      },
      {
        type: 'image',
        content: jblImage1.src,
        alt: 'Jaco Beach Luxe Logo Design',
        caption: 'Primary logo design featuring coastal and tropical design elements'
      },
      {
        type: 'text',
        content: 'I developed a sophisticated brand identity that balances luxury with approachability. The visual language draws inspiration from coastal elements, tropical botanicals, and the natural beauty of Jaco Beach, creating a brand that feels both elevated and inviting.'
      },
      {
        type: 'image',
        content: jblImage2.src,
        alt: 'Jaco Beach Luxe Brand Identity System',
        caption: 'Complete brand identity system with color palette and typography'
      },
      {
        type: 'image',
        content: jblImage3.src,
        alt: 'Jaco Beach Luxe Visual Applications',
        caption: 'Brand applications across various marketing materials'
      },
      {
        type: 'text',
        content: 'The branding package included logo design, color palette, typography system, photography guidelines, and marketing collateral templates. The design system is flexible enough to work across digital platforms, print materials, and physical property signage, ensuring a cohesive brand experience at every touchpoint.'
      },
      {
        type: 'image',
        content: jblImage4.src,
        alt: 'Jaco Beach Luxe Icon Set',
        caption: 'Custom iconography designed for the brand'
      },
      {
        type: 'image',
        content: jblImage5.src,
        alt: 'Jaco Beach Luxe Pattern Design',
        caption: 'Branded patterns inspired by tropical elements'
      },
      {
        type: 'image',
        content: jblImage6.src,
        alt: 'Jaco Beach Luxe Stationery',
        caption: 'Business stationery and collateral design'
      },
      {
        type: 'image',
        content: jblImage7.src,
        alt: 'Jaco Beach Luxe Marketing Materials',
        caption: 'Print and digital marketing material designs'
      },
      {
        type: 'image',
        content: jblImage8.src,
        alt: 'Jaco Beach Luxe Brand Guide',
        caption: 'Comprehensive brand guidelines for consistent application'
      },
    ]
  },
];

export default caseStudies;
