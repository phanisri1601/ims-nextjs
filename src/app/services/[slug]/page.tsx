'use client';

import { notFound } from 'next/navigation';
import styles from './ServiceDetail.module.css';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';


const serviceData: {
  [key: string]: {
    title: string;
    description: string;
    longDescription: string;
    features: string[];
    benefits: string[];
    category: 'online' | 'offline';
    heroImage?: string;
    heroDecor?: string;
    collageMain?: string;
    collageTop?: string;
    collageBottom?: string;
  };
} = {



  'advertising-agency-bangalore': {
    title: 'Advertising Agency In Bangalore',
    description: 'Premier advertising solutions for businesses in Bangalore.',
    longDescription: `
      <h2>Advertising Agency in Bangalore</h2>
      <p>As a leading advertising agency in Bangalore, we specialize in creating comprehensive marketing strategies tailored to your business needs. We combine creative excellence with data-driven insights to deliver measurable results that exceed expectations.</p>

      <h3>Who are we?</h3>
      <p>We are a full-service advertising and digital marketing agency based in Bangalore, delivering end-to-end solutions across online and offline channels. Our team comprises experienced strategists, creative designers, media planners and performance marketers committed to building brands and driving growth.</p>

      <h3>Our Strengths</h3>
      <ul>
        <li>In-house creative and campaign execution</li>
        <li>Data-driven planning and measurable reporting</li>
        <li>Experienced media buying across digital and traditional channels</li>
        <li>Transparent pricing and timely project delivery</li>
        <li>Solutions tailored to startups, SMEs and enterprises</li>
      </ul>

      <h3>360&deg; Digital Marketing Solution</h3>
      <p>We provide a comprehensive digital marketing suite covering SEO, SEM, social media marketing, content strategy, email marketing and performance advertising. Our campaigns are designed to increase visibility, generate qualified leads and improve conversions.</p>

      <h3>Creative Design & Branding</h3>
      <p>Our creative team delivers compelling design across branding, print, digital creatives and product launches. We build strong visual identities that resonate with your target audience and support brand recall.</p>

      <h3>Maximise Your Lead Generation</h3>
      <p>We combine targeted digital campaigns with offline activations to drive high-quality leads for your business. From paid campaigns to experiential marketing, we ensure enquiries convert into customers.</p>

      <h3>Our Advertising Services</h3>
      <p>We offer a wide range of online and offline advertising services to meet diverse marketing objectives:</p>
      <h4>Online Services</h4>
      <ul>
        <li>Search Engine Optimization (SEO)</li>
        <li>Search Engine Marketing (PPC)</li>
        <li>Social Media Marketing & Paid Social</li>
        <li>Display & Programmatic Advertising</li>
        <li>Online Reputation Management (ORM)</li>
        <li>Email Marketing & Automation</li>
      </ul>

      <h4>Offline Services</h4>
      <ul>
        <li>Hoardings & Billboards</li>
        <li>Bus Branding & Transit Ads</li>
        <li>Airport Advertising</li>
        <li>Mall & Multiplex Advertising</li>
        <li>RWA Activations & Ground Events</li>
        <li>Product Sampling & Brand Activations</li>
      </ul>

      <h3>Industry Solutions</h3>
      <p>We specialise in marketing for multiple sectors including real estate, retail, startups and product launches. Our campaigns are customized for sector-specific KPIs and buyer journeys.</p>

      <h3>Why Choose Us</h3>
      <ul>
        <li>Strategic planning with measurable outcomes</li>
        <li>Integrated online + offline campaign capabilities</li>
        <li>Creative excellence that drives attention</li>
        <li>Dedicated account management and transparent reporting</li>
      </ul>

      <h3>Product Launch & Brand Activation</h3>
      <p>We plan and execute product launches and brand activations that create buzz and meaningful consumer engagement — from pre-launch hype to on-ground activations and post-launch analysis.</p>

      <h3>Real Estate & Start-up Marketing</h3>
      <p>For real estate developers, we provide targeted property marketing, virtual tours and lead nurturing. For startups, we offer lean, scalable marketing strategies to accelerate traction and growth.</p>

      <h3>Contact & Next Steps</h3>
      <p>If you want to discuss how our advertising services can help your brand in Bangalore, reach out to us:</p>
      <ul>
        <li><strong>Phone:</strong> +91 888 056 4488</li>
        <li><strong>Email:</strong> info@imsolutions.mobi</li>
        <li><strong>Corporate Office:</strong> #122, 8th Main Road, Bangalore</li>
      </ul>

      <p>We'd love to understand your objectives and propose a campaign that delivers results. Contact us today for a free consultation.</p>
    `,
    features: [
      'Strategic Campaign Planning',
      'Creative Design & Execution',
      'Media Planning & Buying',
      'Digital & Traditional Media',
      'Performance Analytics',
      'Brand Positioning'
    ],
    benefits: [
      'Increased Brand Visibility',
      'Higher Engagement Rates',
      'Better ROI on Marketing Spend',
      'Targeted Audience Reach',
      'Measurable Results',
      'Expert Guidance'
    ],
    category: 'online'
  },
  'digital-marketing-service': {
    title: 'Digital Marketing Service',
    description: 'Comprehensive digital marketing strategies to boost your online presence.',
    longDescription: 'Our digital marketing services encompass all aspects of online promotion, from SEO to social media marketing. We help businesses establish a strong digital footprint and engage with their target audience effectively.',
    features: [
      'SEO Optimization',
      'Social Media Marketing',
      'Email Marketing',
      'Content Marketing',
      'PPC Advertising',
      'Analytics & Reporting'
    ],
    benefits: [
      'Enhanced Online Visibility',
      'Increased Website Traffic',
      'Higher Conversion Rates',
      'Cost-Effective Marketing',
      'Real-Time Performance Tracking',
      'Scalable Solutions'
    ],
    category: 'online'
  },
  'seo': {
    title: 'Search Engine Optimization',
    description: 'Improve your search engine rankings and increase organic traffic.',
    longDescription: 'Our SEO services are designed to improve your website\'s visibility in search engine results. We use proven techniques and best practices to increase organic traffic and enhance your online presence.',
    features: [
      'Keyword Research',
      'On-Page Optimization',
      'Off-Page Optimization',
      'Technical SEO',
      'Link Building',
      'SEO Audits'
    ],
    benefits: [
      'Higher Search Rankings',
      'Increased Organic Traffic',
      'Better User Experience',
      'Long-Term Results',
      'Cost-Effective Marketing',
      'Competitive Advantage'
    ],
    category: 'online'
  },
  'sem': {
    title: 'Search Engine Marketing',
    description: 'Strategic paid search advertising to reach your target audience.',
    longDescription: 'Our SEM services help you reach potential customers through targeted paid search campaigns. We optimize every aspect of your campaigns to maximize ROI and drive qualified traffic to your website.',
    features: [
      'PPC Campaign Management',
      'Keyword Selection & Bidding',
      'Ad Copy Optimization',
      'Landing Page Optimization',
      'Conversion Tracking',
      'Budget Management'
    ],
    benefits: [
      'Immediate Results',
      'Highly Targeted Reach',
      'Measurable ROI',
      'Quick Market Testing',
      'Complete Control',
      'Scalable Campaigns'
    ],
    category: 'online'
  },
  'online-reputation-management': {
    title: 'Online Reputation Management',
    description: 'Protect and enhance your brand image across digital platforms.',
    longDescription: 'We help you manage and improve your online reputation across all digital channels. Our proactive approach ensures your brand maintains a positive image and credibility online.',
    features: [
      'Brand Monitoring',
      'Review Management',
      'Content Creation',
      'Crisis Management',
      'Social Listening',
      'Reputation Analysis'
    ],
    benefits: [
      'Enhanced Brand Trust',
      'Positive Online Presence',
      'Crisis Prevention',
      'Customer Confidence',
      'Competitive Edge',
      'Business Growth'
    ],
    category: 'online'
  },
  'website-design-development': {
    title: 'Website Designing and Development',
    description: 'Create stunning, functional websites that drive conversions.',
    longDescription: 'Our web design and development team creates responsive, user-friendly websites that not only look great but also perform exceptionally well in driving business results.',
    features: [
      'Responsive Design',
      'User Experience Optimization',
      'E-Commerce Integration',
      'CMS Integration',
      'Performance Optimization',
      'Security Implementation'
    ],
    benefits: [
      'Professional Online Presence',
      'Improved User Engagement',
      'Higher Conversion Rates',
      'Mobile-Friendly Experience',
      'SEO-Optimized',
      'Scalable Architecture'
    ],
    category: 'online'
  },
  'social-media-optimization': {
    title: 'Social Media Optimization',
    description: 'Maximize your social media presence and engagement.',
    longDescription: 'We optimize your social media profiles and content strategy to increase visibility, engagement, and follower growth across all major platforms.',
    features: [
      'Profile Optimization',
      'Content Strategy',
      'Community Management',
      'Analytics & Reporting',
      'Trend Analysis',
      'Engagement Optimization'
    ],
    benefits: [
      'Increased Followers',
      'Higher Engagement Rates',
      'Brand Awareness',
      'Community Building',
      'Social Proof',
      'Customer Insights'
    ],
    category: 'online'
  },
  'social-media-marketing': {
    title: 'Social Media Marketing',
    description: 'Comprehensive social media marketing strategies for brand growth.',
    longDescription: 'Our social media marketing services help you reach and engage your target audience through strategic content and campaigns across Facebook, Instagram, LinkedIn, Twitter, and more.',
    features: [
      'Content Creation',
      'Campaign Management',
      'Paid Social Advertising',
      'Influencer Partnerships',
      'Community Management',
      'Performance Analytics'
    ],
    benefits: [
      'Brand Visibility',
      'Customer Engagement',
      'Lead Generation',
      'Sales Growth',
      'Brand Loyalty',
      'Cost-Effective Marketing'
    ],
    category: 'online'
  },
  'software-design-development': {
    title: 'Software Design & Development',
    description: 'Custom software solutions tailored to your business needs.',
    longDescription: 'We develop robust, scalable software solutions that help you streamline operations, improve efficiency, and achieve your business objectives.',
    features: [
      'Custom Development',
      'Web Applications',
      'Mobile Apps',
      'API Integration',
      'Cloud Solutions',
      'Maintenance & Support'
    ],
    benefits: [
      'Tailored Solutions',
      'Improved Efficiency',
      'Cost Savings',
      'Scalability',
      'Reliable Support',
      'Future-Proof Technology'
    ],
    category: 'online'
  },
  'geolocation-sms': {
    title: 'Geolocation Analytical SMS',
    description: 'Targeted SMS campaigns using geolocation data.',
    longDescription: 'Reach your customers with location-based SMS messages that drive immediate action and engagement. Our geolocation SMS platform provides precise targeting and analytics.',
    features: [
      'Location-Based Targeting',
      'Real-Time Messaging',
      'Analytics Dashboard',
      'Campaign Management',
      'Compliance Tracking',
      'Integration Options'
    ],
    benefits: [
      'Targeted Messaging',
      'High Open Rates',
      'Immediate Response',
      'Cost-Effective',
      'Better Targeting',
      'Measurable Results'
    ],
    category: 'online'
  },
  'ai-advertising-agency': {
    title: 'AI Advertising Agency',
    description: 'Leverage artificial intelligence for smarter advertising strategies.',
    longDescription: 'Our AI-powered advertising platform uses machine learning and data analytics to optimize your campaigns and deliver superior results.',
    features: [
      'AI Campaign Optimization',
      'Predictive Analytics',
      'Automated Bidding',
      'Smart Targeting',
      'Performance Prediction',
      'Continuous Learning'
    ],
    benefits: [
      'Better Campaign Performance',
      'Improved ROI',
      'Faster Optimization',
      'Better Insights',
      'Competitive Advantage',
      'Future-Ready Strategy'
    ],
    category: 'online'
  },
  'creative-designing': {
    title: 'Creative Designing',
    description: 'Professional creative design services for all your marketing needs.',
    longDescription: 'Our creative design team produces stunning visual content that captures attention and communicates your brand message effectively.',
    features: [
      'Logo Design',
      'Branding Materials',
      'Marketing Collaterals',
      'Packaging Design',
      'Illustration',
      'Animation'
    ],
    benefits: [
      'Strong Brand Identity',
      'Professional Image',
      'Increased Engagement',
      'Memorable Designs',
      'Consistent Branding',
      'Creative Excellence'
    ],
    category: 'offline'
  },
  'api-integration': {
    title: 'API Integration',
    description: 'Seamless API integration for enhanced functionality.',
    longDescription: 'We provide expert API integration services to connect your systems with third-party applications and services.',
    features: [
      'API Development',
      'Third-Party Integration',
      'Data Synchronization',
      'Custom Solutions',
      'Security Implementation',
      'Ongoing Support'
    ],
    benefits: [
      'Enhanced Functionality',
      'Better Integration',
      'Improved Efficiency',
      'Scalability',
      'Cost Reduction',
      'Seamless Operation'
    ],
    category: 'offline'
  },
  'ecommerce-solutions': {
    title: 'Ecommerce Solutions',
    description: 'Complete e-commerce solutions to grow your online business.',
    longDescription: 'We provide end-to-end e-commerce solutions including platform setup, payment integration, and optimization for maximum sales.',
    features: [
      'Platform Setup',
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Tracking',
      'Customer Portal',
      'Analytics Dashboard'
    ],
    benefits: [
      'Increased Sales',
      'Better Customer Experience',
      'Reduced Cart Abandonment',
      'Improved Conversion',
      'Easy Management',
      'Scalable Growth'
    ],
    category: 'offline'
  },
  'email-marketing': {
    title: 'Email Marketing',
    description: 'Effective email marketing campaigns to reach your audience.',
    longDescription: 'Our email marketing services help you build relationships with customers through targeted, personalized email campaigns.',
    features: [
      'Email Campaign Design',
      'List Management',
      'Automation',
      'Personalization',
      'A/B Testing',
      'Analytics & Reporting'
    ],
    benefits: [
      'High ROI',
      'Direct Customer Communication',
      'Customer Retention',
      'Lead Nurturing',
      'Cost-Effective',
      'Measurable Results'
    ],
    category: 'offline'
  },
  'mobile-app-development': {
    title: 'Mobile Application Development',
    description: 'Custom mobile app development for iOS and Android.',
    longDescription: 'We develop feature-rich mobile applications that provide excellent user experience and drive business results.',
    features: [
      'iOS Development',
      'Android Development',
      'Cross-Platform Solutions',
      'UI/UX Design',
      'App Store Optimization',
      'Maintenance Support'
    ],
    benefits: [
      'Wider Audience Reach',
      'Better Engagement',
      'Brand Loyalty',
      'Additional Revenue',
      'Competitive Edge',
      'Future Growth'
    ],
    category: 'offline'
  },
  'real-estate-marketing': {
    title: 'Real Estate Online Marketing Service',
    description: 'Specialized marketing solutions for real estate businesses.',
    longDescription: 'Our real estate marketing services help you reach qualified buyers and sellers through targeted online campaigns.',
    features: [
      'Property Listings',
      'Virtual Tours',
      'Lead Generation',
      'Email Campaigns',
      'Social Media Marketing',
      'Analytics'
    ],
    benefits: [
      'More Qualified Leads',
      'Faster Sales',
      'Better Pricing',
      'Wider Exposure',
      'Cost Savings',
      'Market Analysis'
    ],
    category: 'offline'
  },
  'display-advertisement': {
    title: 'Display Advertisement',
    description: 'Strategic display advertising across premium networks.',
    longDescription: 'Reach your target audience through eye-catching display ads on relevant websites and platforms.',
    features: [
      'Banner Design',
      'Network Placement',
      'Audience Targeting',
      'Performance Tracking',
      'Optimization',
      'Campaign Management'
    ],
    benefits: [
      'Brand Awareness',
      'Targeted Reach',
      'Professional Appearance',
      'Flexible Placement',
      'Measurable Results',
      'Cost Control'
    ],
    category: 'offline'
  },
  'blog-articles': {
    title: 'Blog Articles',
    description: 'High-quality blog content that engages and converts.',
    longDescription: 'We create compelling blog articles that attract traffic, establish authority, and convert readers into customers.',
    features: [
      'Content Writing',
      'SEO Optimization',
      'Topic Research',
      'Editorial Calendar',
      'Publishing Support',
      'Performance Analysis'
    ],
    benefits: [
      'Increased Traffic',
      'SEO Benefits',
      'Thought Leadership',
      'Customer Engagement',
      'Lead Generation',
      'Brand Authority'
    ],
    category: 'offline'
  },
  'classified-portal': {
    title: 'Classified Portal Management',
    description: 'Complete classified portal development and management.',
    longDescription: 'We develop and manage classified portals that connect buyers and sellers efficiently.',
    features: [
      'Portal Development',
      'User Management',
      'Listing Management',
      'Payment Integration',
      'Search Functionality',
      'Mobile Responsive'
    ],
    benefits: [
      'Reliable Platform',
      'User-Friendly Interface',
      'Revenue Generation',
      'Scalability',
      'Reduced Support Costs',
      'Growth Potential'
    ],
    category: 'offline'
  },
  'press-releases': {
    title: 'Press Releases Services',
    description: 'Professional press release writing and distribution.',
    longDescription: 'Our press release services help you communicate important news and announcements to media and stakeholders.',
    features: [
      'Press Release Writing',
      'Media Distribution',
      'Press Kit Development',
      'Media Relations',
      'Coverage Tracking',
      'PR Strategy'
    ],
    benefits: [
      'Media Coverage',
      'Brand Visibility',
      'Thought Leadership',
      'Crisis Communication',
      'Stakeholder Trust',
      'Market Awareness'
    ],
    category: 'offline'
  },
  'bus-branding': {
    title: 'Bus Branding',
    description: 'High-impact bus advertising solutions.',
    longDescription: 'Reach thousands of commuters with our comprehensive bus branding and advertising solutions.',
    features: [
      'Interior & Exterior Wraps',
      'Strategic Placement',
      'Design Services',
      'Installation Support',
      'Wide Coverage',
      'Long Visibility'
    ],
    benefits: [
      'High Visibility',
      'Daily Impressions',
      'Local Targeting',
      'Cost-Effective',
      'Brand Recall',
      'Continuous Exposure'
    ],
    category: 'offline'
  },
  'rwa-activation': {
    title: 'RWA Activation',
    description: 'Community-focused RWA activation campaigns.',
    longDescription: 'We design and execute RWA activation campaigns that engage residents and build community relationships.',
    features: [
      'Community Events',
      'Product Sampling',
      'Resident Engagement',
      'Newsletter Distribution',
      'Community Building',
      'Feedback Collection'
    ],
    benefits: [
      'Direct Community Reach',
      'High Engagement',
      'Brand Trust',
      'Local Market Penetration',
      'Word-of-Mouth',
      'Community Loyalty'
    ],
    category: 'offline'
  },
  'btl-advertising': {
    title: 'BTL Advertising',
    description: 'Below-the-line advertising solutions for direct engagement.',
    longDescription: 'Our BTL advertising services create direct engagement opportunities with your target audience.',
    features: [
      'Ground Activations',
      'Sampling Programs',
      'Event Marketing',
      'Guerrilla Marketing',
      'Experiential Marketing',
      'Direct Sales Support'
    ],
    benefits: [
      'Direct Consumer Engagement',
      'High Participation',
      'Immediate Feedback',
      'Sales Boost',
      'Brand Experience',
      'Customer Conversion'
    ],
    category: 'offline'
  },
  'mall-advertising': {
    title: 'Advertising Activities In Malls & Multiplex',
    description: 'Premium advertising at high-traffic mall locations.',
    longDescription: 'Reach affluent consumers with targeted advertising placements in malls and multiplex cinemas.',
    features: [
      'Display Boards',
      'Digital Screens',
      'Kiosk Placement',
      'Sampling Zones',
      'Event Sponsorships',
      'Premium Locations'
    ],
    benefits: [
      'High-Value Audience',
      'Premium Locations',
      'Multiple Touch Points',
      'Brand Prestige',
      'Sales Opportunities',
      'Weekend Traffic'
    ],
    category: 'offline'
  },
  'tech-park-ads': {
    title: 'Advertisements In Tech Parks',
    description: 'Targeted advertising in technology parks and IT hubs.',
    longDescription: 'Reach tech-savvy professionals and IT companies with strategic advertising in technology parks.',
    features: [
      'Office Building Ads',
      'Digital Displays',
      'Cafeteria Advertising',
      'Parking Lot Placement',
      'Professional Targeting',
      'High-Value Audience'
    ],
    benefits: [
      'Tech-Savvy Audience',
      'Professional Demographic',
      'B2B Opportunities',
      'High Purchasing Power',
      'Brand Association',
      'Qualified Leads'
    ],
    category: 'offline'
  },
  'airport-advertising': {
    title: 'Advertising in Airports',
    description: 'Premium airport advertising to reach affluent travelers.',
    longDescription: 'Capture attention of high-value travelers with strategic advertising placements throughout airport facilities.',
    features: [
      'Terminal Advertising',
      'Baggage Claim Display',
      'Gate Advertising',
      'Digital Screens',
      'Premium Locations',
      'High-Value Audience'
    ],
    benefits: [
      'Affluent Audience',
      'Premium Exposure',
      'International Reach',
      'High-Frequency Viewing',
      'Brand Association',
      'Business Travelers'
    ],
    category: 'offline'
  },
  'paper-insertion': {
    title: 'Paper Insertion',
    description: 'Newspaper and magazine insertion services.',
    longDescription: 'Distribute your promotional materials through newspaper and magazine insertions to reach broad audiences.',
    features: [
      'Newspaper Insertion',
      'Magazine Insertion',
      'Targeted Publications',
      'Design Support',
      'Bulk Distribution',
      'Wide Reach'
    ],
    benefits: [
      'Broad Audience Reach',
      'Demographic Targeting',
      'High Credibility',
      'Multiple Formats',
      'Print + Digital',
      'Cost-Effective'
    ],
    category: 'offline'
  },
  'cafe-gym-ads': {
    title: 'Advertisements In Cafes Gyms & Super Markets',
    description: 'Strategic advertising in fitness and retail locations.',
    longDescription: 'Reach health-conscious and shopping audiences with ads in cafes, gyms, and supermarkets.',
    features: [
      'Location Selection',
      'Display Setup',
      'Promotional Stands',
      'Sampling Support',
      'High Traffic Areas',
      'Lifestyle Targeting'
    ],
    benefits: [
      'Lifestyle-Focused Audience',
      'Health-Conscious Demographic',
      'High Engagement',
      'Multiple Touchpoints',
      'Impulse Purchase Opportunity',
      'Regular Exposure'
    ],
    category: 'offline'
  },
  'atm-ads': {
    title: 'Advertisement in ATMs',
    description: 'Advertising on ATM screens and kiosks.',
    longDescription: 'Reach customers during their financial transactions with targeted ATM advertising.',
    features: [
      'Screen Advertising',
      'Receipt Advertising',
      'Display Options',
      'Multiple Placements',
      'Captive Audience',
      'Financial Segment'
    ],
    benefits: [
      'Captive Attention',
      'Financial Segment Targeting',
      'Multiple Impressions',
      'Brand Recall',
      'Cost-Effective',
      'Unique Placement'
    ],
    category: 'offline'
  },
  'auto-rickshaw-ads': {
    title: 'Auto Rickshaw Advertising',
    description: 'Mobile advertising on auto-rickshaws.',
    longDescription: 'Advertise on auto-rickshaws that cover extensive routes and reach local audiences daily.',
    features: [
      'Vehicle Wraps',
      'Mobile Advertising',
      'Route Coverage',
      'Local Targeting',
      'Multiple Vehicles',
      'Daily Exposure'
    ],
    benefits: [
      'Mobile Reach',
      'Local Market Penetration',
      'Daily Impressions',
      'Cost-Effective',
      'Wide Coverage',
      'Quick Response'
    ],
    category: 'offline'
  },
  'magazine-ads': {
    title: 'Advertisement in Magazines',
    description: 'Premium magazine advertising for targeted readership.',
    longDescription: 'Reach magazine readers with strategic full-page or partial advertisements in leading publications.',
    features: [
      'Magazine Selection',
      'Ad Design',
      'Multiple Placements',
      'Demographic Targeting',
      'Long Shelf Life',
      'Premium Positioning'
    ],
    benefits: [
      'Targeted Readership',
      'Premium Association',
      'Long Shelf Life',
      'High-Quality Audience',
      'Detailed Messaging',
      'Professional Credibility'
    ],
    category: 'offline'
  },
  'parking-ads': {
    title: 'Advertising in Public & Private Parking Lots',
    description: 'Strategic advertising in parking facilities.',
    longDescription: 'Reach car owners with targeted advertising in public and private parking lots.',
    features: [
      'Parking Lot Banners',
      'Wall Advertising',
      'Floor Displays',
      'Gate Signage',
      'Captive Audience',
      'Premium Placement'
    ],
    benefits: [
      'Affluent Audience',
      'Vehicle Owners',
      'Extended Viewing Time',
      'Urban Market',
      'Local Targeting',
      'Multiple Exposures'
    ],
    category: 'offline'
  },
  'branding-rebranding': {
    title: 'Branding Re-Branding',
    description: 'Complete branding and rebranding solutions.',
    longDescription: 'We help you create or refresh your brand identity with comprehensive branding and rebranding strategies.',
    features: [
      'Brand Strategy',
      'Logo Design',
      'Brand Guidelines',
      'Visual Identity',
      'Brand Messaging',
      'Launch Strategy'
    ],
    benefits: [
      'Strong Brand Identity',
      'Market Differentiation',
      'Customer Recognition',
      'Brand Evolution',
      'Market Positioning',
      'Growth Foundation'
    ],
    category: 'offline'
  },
  'corporate-gifts': {
    title: 'Corporate Gifts',
    description: 'Customized corporate gift solutions.',
    longDescription: 'We provide thoughtfully curated corporate gifts that strengthen client and employee relationships.',
    features: [
      'Gift Selection',
      'Customization',
      'Branding Options',
      'Packaging Design',
      'Bulk Orders',
      'Delivery Support'
    ],
    benefits: [
      'Client Appreciation',
      'Brand Recall',
      'Relationship Building',
      'Professional Image',
      'Employee Morale',
      'Loyalty Enhancement'
    ],
    category: 'offline'
  },
  'corporate-training': {
    title: 'Corporate Training Services',
    description: 'Professional corporate training and development programs.',
    longDescription: 'We provide tailored corporate training programs to develop employee skills and competencies.',
    features: [
      'Training Design',
      'Expert Trainers',
      'Customized Programs',
      'On-Site or Virtual',
      'Assessment & Feedback',
      'Certification Options'
    ],
    benefits: [
      'Improved Productivity',
      'Employee Skill Development',
      'Better Performance',
      'Team Building',
      'Reduced Turnover',
      'Competitive Advantage'
    ],
    category: 'offline'
  },
  'event-management': {
    title: 'Event Management',
    description: 'Full-service event management and execution.',
    longDescription: 'We plan and execute memorable events that leave lasting impressions on your audience.',
    features: [
      'Event Planning',
      'Venue Selection',
      'Vendor Coordination',
      'On-Site Management',
      'Audio/Visual Setup',
      'Post-Event Analysis'
    ],
    benefits: [
      'Professional Execution',
      'Brand Experience',
      'Audience Engagement',
      'Network Building',
      'Market Buzz',
      'Measurable Results'
    ],
    category: 'offline'
  },
  'fm-campaigns': {
    title: 'FM Campaigns',
    description: 'Radio advertising campaigns on FM channels.',
    longDescription: 'Reach audiences through engaging FM radio advertising campaigns.',
    features: [
      'Radio Spot Creation',
      'Channel Selection',
      'Time Slot Booking',
      'Creative Production',
      'Campaign Management',
      'Listener Analytics'
    ],
    benefits: [
      'Mass Reach',
      'Frequency Building',
      'Audio Branding',
      'Cost-Effective',
      'Listener Engagement',
      'Quick Launch'
    ],
    category: 'offline'
  },
  'fabrications': {
    title: 'Fabrications',
    description: 'Custom fabrication services for marketing materials.',
    longDescription: 'We create custom fabricated structures and displays for your marketing and branding needs.',
    features: [
      'Custom Design',
      'Material Selection',
      'Structural Engineering',
      'Installation Support',
      'Quality Assurance',
      'Maintenance Support'
    ],
    benefits: [
      'Unique Displays',
      'Brand Differentiation',
      'Long-Lasting',
      'Professional Appeal',
      'Customization',
      'Durable Materials'
    ],
    category: 'offline'
  },
  'hoarding-services': {
    title: 'Hoarding Services',
    description: 'Strategic billboard and hoarding advertising.',
    longDescription: 'Maximize brand visibility with strategically placed billboards and hoardings in high-traffic areas.',
    features: [
      'Prime Locations',
      'Design Services',
      'Installation',
      'Maintenance',
      'Size Options',
      'Long-Term Placements'
    ],
    benefits: [
      'Maximum Visibility',
      'High Traffic Areas',
      'Brand Awareness',
      'Large Format Impact',
      'Long-Term Exposure',
      'Cost-Effective'
    ],
    category: 'offline'
  },
  'marketing-collaterals': {
    title: 'Marketing Collaterals',
    description: 'Professional marketing collateral materials.',
    longDescription: 'We design and produce comprehensive marketing collateral materials that represent your brand professionally.',
    features: [
      'Brochure Design',
      'Business Cards',
      'Letterheads',
      'Flyers & Posters',
      'Packaging Design',
      'Printing Services'
    ],
    benefits: [
      'Professional Image',
      'Brand Consistency',
      'Increased Credibility',
      'Marketing Effectiveness',
      'Print Quality',
      'Comprehensive Solutions'
    ],
    category: 'offline'
  },
  'startup-marketing': {
    title: 'Marketing Services for Start-ups',
    description: 'Tailored marketing solutions for startups.',
    longDescription: 'We provide cost-effective, growth-focused marketing services designed specifically for startups.',
    features: [
      'Growth Strategy',
      'Digital Marketing',
      'Brand Building',
      'Social Media',
      'Content Marketing',
      'Analytics'
    ],
    benefits: [
      'Affordable Solutions',
      'Rapid Growth',
      'Market Traction',
      'Brand Awareness',
      'Cost Efficiency',
      'Scalability'
    ],
    category: 'offline'
  },
  'photographic-services': {
    title: 'Photographic Services',
    description: 'Professional photography for all occasions.',
    longDescription: 'Our photography services capture your brand, products, and events in stunning visual detail.',
    features: [
      'Product Photography',
      'Event Photography',
      'Corporate Photography',
      'Editing Services',
      'Photo Retouching',
      'Digital Delivery'
    ],
    benefits: [
      'Professional Quality',
      'High-Impact Visuals',
      'Brand Representation',
      'Engagement Increase',
      'Versatile Usage',
      'Premium Feel'
    ],
    category: 'offline'
  },
  'pr-services': {
    title: 'PR Services',
    description: 'Comprehensive public relations services.',
    longDescription: 'We manage your public image and media relations to build brand credibility and positive reputation.',
    features: [
      'Media Relations',
      'Press Releases',
      'Crisis Management',
      'Event Publicity',
      'Media Pitch',
      'Coverage Tracking'
    ],
    benefits: [
      'Media Coverage',
      'Brand Credibility',
      'Crisis Management',
      'Thought Leadership',
      'Stakeholder Trust',
      'Market Awareness'
    ],
    category: 'offline'
  },
  'printing-services': {
    title: 'Printing Services',
    description: 'High-quality printing services for all materials.',
    longDescription: 'We provide professional printing services for business collaterals, promotional materials, and packaging.',
    features: [
      'Offset Printing',
      'Digital Printing',
      'Large Format Printing',
      'Finishing Services',
      'Quality Assurance',
      'Fast Turnaround'
    ],
    benefits: [
      'Professional Quality',
      'Cost-Effective',
      'Multiple Options',
      'Fast Delivery',
      'Bulk Capabilities',
      'Premium Finishes'
    ],
    category: 'offline'
  },
  'retail-advertising': {
    title: 'Retail Advertising',
    description: 'Point-of-sale advertising and retail promotions.',
    longDescription: 'We create impactful in-store advertising that drives retail sales and increases product visibility.',
    features: [
      'POS Display',
      'Shelf Talkers',
      'Danglers',
      'Floor Graphics',
      'Promotional Stands',
      'Sampling Setup'
    ],
    benefits: [
      'Impulse Purchases',
      'Product Visibility',
      'Sales Increase',
      'Customer Attention',
      'Promotional Support',
      'Brand Presence'
    ],
    category: 'offline'
  },
  'real-estate-videography': {
    title: 'Real Estate Videography',
    description: 'Professional real estate video production.',
    longDescription: 'We create compelling video content that showcases properties and attracts qualified buyers.',
    features: [
      'Property Walkthroughs',
      '360 Videos',
      'Drone Footage',
      'Virtual Tours',
      'Professional Editing',
      'Listing Optimization'
    ],
    benefits: [
      'Increased Inquiries',
      'Better Property Showcase',
      'Faster Sales',
      'Competitive Edge',
      'Modern Presentation',
      'Higher Engagement'
    ],
    category: 'offline'
  },
  'signage': {
    title: 'Signage',
    description: 'Professional signage design and installation.',
    longDescription: 'We design and install eye-catching signage that effectively communicates your brand message.',
    features: [
      'Signage Design',
      'Various Materials',
      'Installation Services',
      'Maintenance Support',
      'Custom Solutions',
      'Lighting Options'
    ],
    benefits: [
      'Brand Visibility',
      'Wayfinding',
      'Professional Image',
      'Customer Attraction',
      'Long-Term Investment',
      'Durable Materials'
    ],
    category: 'offline'
  },
  'washroom-advertising': {
    title: 'Washroom Advertising',
    description: 'Strategic advertising in washroom facilities.',
    longDescription: 'Reach audiences in a captive environment with targeted washroom advertising.',
    features: [
      'Mirror Advertising',
      'Wall Displays',
      'Dispenser Advertising',
      'Premium Locations',
      'Targeted Audience',
      'Frequent Exposure'
    ],
    benefits: [
      'Captive Attention',
      'High Visibility',
      'Frequent Exposure',
      'Targeted Demographics',
      'Premium Placement',
      'Cost-Effective'
    ],
    category: 'offline'
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const service = serviceData[slug];

  if (!service) {
    notFound();
  }

  const heroRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLImageElement | null>(null);
  const [heroRevealed, setHeroRevealed] = useState(false);

  // parallax for hero background
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (!bgRef.current || !heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const winH = window.innerHeight || document.documentElement.clientHeight;
      // how far hero is from center (-1 to 1)
      const progress = (rect.top + rect.height / 2 - winH / 2) / (winH / 2);
      const translate = Math.max(-30, Math.min(30, -progress * 20));
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (bgRef.current) bgRef.current.style.transform = `translateY(${translate}px) scale(1.02)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Brand collage hover (for Build Your Brand section)
  const [brandHover, setBrandHover] = useState<number | null>(null);

  // Predefined transform presets for each list item
  const mainTransforms = [
    'translate(-8px,-6px) rotate(-2deg) scale(1.02)',
    'translate(6px,-8px) rotate(2deg) scale(1.03)',
    'translate(-6px,8px) rotate(-1deg) scale(1.01)',
    'translate(8px,6px) rotate(3deg) scale(1.04)'
  ];
  const topTransforms = [
    'translate(12px,-14px) rotate(-8deg) scale(1.06)',
    'translate(-8px,-8px) rotate(6deg) scale(1.04)',
    'translate(10px,6px) rotate(-4deg) scale(1.03)',
    'translate(-12px,8px) rotate(8deg) scale(1.06)'
  ];
  const bottomTransforms = [
    'translate(-10px,12px) rotate(6deg) scale(1.05)',
    'translate(8px,10px) rotate(-6deg) scale(1.04)',
    'translate(-6px,-10px) rotate(4deg) scale(1.03)',
    'translate(12px,-6px) rotate(-8deg) scale(1.06)'
  ];

  const mainStyle = brandHover !== null ? { transform: mainTransforms[brandHover % mainTransforms.length] } : undefined;
  const topStyle = brandHover !== null ? { transform: topTransforms[brandHover % topTransforms.length] } : undefined;
  const bottomStyle = brandHover !== null ? { transform: bottomTransforms[brandHover % bottomTransforms.length] } : undefined;

  // Stats
  const statsRef = useRef<HTMLElement | null>(null);
  const [counts, setCounts] = useState<number[]>([0, 0, 0]);
  const statsTarget = [128, 8120, 4];

  // Reveal on scroll helper
  useEffect(() => {
    // Hero stagger reveal on mount
    const t = setTimeout(() => setHeroRevealed(true), 240);

    // RevealOnScroll observer
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.15 });

    // Use data attribute so we can reliably select elements even with CSS modules
    const els = document.querySelectorAll('[data-reveal="true"]');
    els.forEach(el => io.observe(el));

    return () => {
      clearTimeout(t);
      io.disconnect();
    };
  }, []);

  // Stats count up
  useEffect(() => {
    if (!statsRef.current) return;
    let observer: IntersectionObserver | null = null;
    const el = statsRef.current;

    const startCounting = () => {
      const start = performance.now();
      const duration = 1000;
      const update = (now: number) => {
        const progress = Math.min(1, (now - start) / duration);
        setCounts(statsTarget.map((target) => Math.round(target * progress)));
        if (progress < 1) requestAnimationFrame(update);
        else setCounts(statsTarget);
      };
      requestAnimationFrame(update);
    };

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) startCounting();
      });
    }, { threshold: 0.3 });

    observer.observe(el);

    return () => observer && observer.disconnect();
  }, []);

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [
    { q: 'How long until we see results?', a: 'Depending on the channel, initial impact can be seen within a few weeks; measurable outcomes typically within 60-90 days.' },
    { q: 'Do you handle creative and media buying?', a: 'Yes — we do end-to-end campaign management including creative, media planning, buying, and optimization.' },
    { q: 'Can you work with our internal team?', a: 'Absolutely. We work as an extension of your team and integrate with internal stakeholders.' }
  ];

  return (
    <main className={styles.serviceDetail}>
      <div className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <img ref={bgRef} src="/services/advertising-agency-1.svg" alt="Service background" className={styles.backgroundImage} />
        </div>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div ref={heroRef} className={`${styles.heroInner} ${styles.stagger} ${heroRevealed ? styles.isRevealed : ''}`}>
            <div className={`${styles.heroText} ${styles.staggerItem}`}>
              <h1 className={`${styles.title} ${styles.staggerItem}`}>{service.title}</h1>
              <p className={`${styles.description} ${styles.staggerItem}`}>{service.description}</p>
              <div className={styles.heroActions}>
                <button className={`${styles.ctaButton} ${styles.pulse}`}>Get a Free Audit</button>
                <button className={styles.ctaSecondary}>View Packages</button>
              </div>
            </div>

            <div className={styles.heroDecor} aria-hidden>
              <div className={styles.heroBadge}>
                <div className={styles.badgeNumber}>120+</div>
                <div className={styles.badgeLabel}>Campaigns Delivered</div>
              </div>

              <img src="/services/advertising-agency-2.svg" alt="Decor" className={styles.heroDecorImage} />
            </div>
          </div>
        </div>
      </div>

      {/* Creative Animated Showcase Section */}
      <section data-reveal="true" className={`${styles.showcaseSection} ${styles.revealOnScroll}`}>
        <div className="container">
          <div className={`${styles.showcaseHeader} revealChild`}>
            <h2 className={styles.showcaseTitle}>Creative Showcase</h2>
            <p className={styles.showcaseDesc}>Explore our creative work and service highlights.</p>
          </div>
          <div className={`${styles.showcaseGrid} revealChild`}>
            {/* Example animated cards - replace with real images/content as needed */}
            {['/services/pro-thumb-1.svg', '/services/digital-marketing-1.svg', '/services/advertising-agency-2.svg'].map((img, idx) => (
              <div key={idx} className={styles.showcaseCard}>
                <img src={img} alt={`Showcase ${idx+1}`} className={styles.showcaseImage} />
                <div className={styles.showcaseCardOverlay}></div>
                <div className={styles.showcaseCardText}>Creative Idea {idx + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.contentSection}>
        <div className="container">
          <div className={styles.longDescription} dangerouslySetInnerHTML={{ __html: service.longDescription }} />

          {/* New creative section: Build Your Brand */}
          <section className={`${styles.buildBrandSection} revealOnScroll`} data-reveal="true">
            <div className="container">
              <div className="revealChild" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center'}}>
                <div>
                  <h2 className={styles.showcaseTitle}>Our Advertising Agency Helps You Build Your Brand</h2>
                  <p className="smallMuted">We combine strategic thinking, creativity and media precision to craft campaigns that build visibility, preference and sales. Below are some ways we help brands grow.</p>
                  <ul className={styles.list}>
                    <li onMouseEnter={() => setBrandHover(0)} onMouseLeave={() => setBrandHover(null)}><span className={styles.itemIcon}></span>Brand Strategy & Positioning</li>
                    <li onMouseEnter={() => setBrandHover(1)} onMouseLeave={() => setBrandHover(null)}><span className={styles.itemIcon}></span>Creative Campaign Development</li>
                    <li onMouseEnter={() => setBrandHover(2)} onMouseLeave={() => setBrandHover(null)}><span className={styles.itemIcon}></span>Multi-channel Media Planning</li>
                    <li onMouseEnter={() => setBrandHover(3)} onMouseLeave={() => setBrandHover(null)}><span className={styles.itemIcon}></span>Data-driven Optimization</li>
                  </ul>
                  <div style={{marginTop: '1rem'}}>
                    <button className={`${styles.ctaButton} ${styles.pulse}`}>Request Case Studies</button>
                    <button className={styles.ctaSecondary} style={{marginLeft: '0.75rem'}}>Speak to an Expert</button>
                  </div>
                </div>

                <div className={styles.collage} aria-hidden>
                  <img src="/services/advertising-agency-1.svg" alt="Ad hero" className={`${styles.collageImage} ${styles.collageMain}`} style={mainStyle} />
                  <img src="/services/pro-thumb-1.svg" alt="Campaign" className={`${styles.collageImage} ${styles.collageTop}`} style={topStyle} />
                  <img src="/services/pro-thumb-2.svg" alt="Creative" className={`${styles.collageImage} ${styles.collageBottom}`} style={bottomStyle} />

                  <div className={styles.spark} style={{left: '18%', top: '12%'}}></div>
                  <div className={styles.spark2} style={{right: '12%', bottom: '14%'}}></div>
                </div>
              </div>
            </div>
          </section>

          <div className={styles.gridContainer}>
            <div className={styles.featureBox}>
              <h2 className={styles.boxTitle}>Key Features</h2>
              <ul className={styles.list}>
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className={styles.benefitBox}>
              <h2 className={styles.boxTitle}>Benefits</h2>
              <ul className={styles.list}>
                {service.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats Section */}
          <section ref={statsRef} data-reveal="true" className={`${styles.revealOnScroll} ${styles.statsSection}`}>
            <div className="container">
              <div className={styles.revealChild} style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem'}}>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>{counts[0]}</div>
                  <div className={styles.statLabel}>Campaigns Delivered</div>
                </div>

                <div className={styles.stat}>
                  <div className={styles.statNumber}>{counts[1]}</div>
                  <div className={styles.statLabel}>Leads Generated</div>
                </div>

                <div className={styles.stat}>
                  <div className={styles.statNumber}>{counts[2]}x</div>
                  <div className={styles.statLabel}>Avg. ROI</div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section data-reveal="true" className={styles.revealOnScroll}>
            <div className="container">
              <div className={styles.revealChild}>
                <h3 className={styles.showcaseTitle}>Frequently Asked Questions</h3>
                <ul className={styles.faqList}>
                  {faqs.map((f, i) => (
                    <li key={i} className={`${styles.faqItem} ${openFaq === i ? 'open' : ''}`}>
                      <div
                        className={styles.faqQuestion}
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setOpenFaq(openFaq === i ? null : i)}
                      >
                        <span>{f.q}</span>
                        <span>{openFaq === i ? '−' : '+'}</span>
                      </div>
                      <div className={styles.faqAnswer}>
                        <p className="smallMuted">{f.a}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <div className={styles.ctaSection}>
            <h3 className={styles.ctaTitle}>Ready to Get Started?</h3>
            <p className={styles.ctaText}>Let's discuss how our {service.title.toLowerCase()} can benefit your business.</p>
            <button className={`${styles.ctaButton} ${styles.pulse}`}>Contact Us Today</button>
          </div>
        </div>
      </div>
    </main>
  );
}
