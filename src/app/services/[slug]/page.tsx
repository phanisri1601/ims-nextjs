'use client';

import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import styles from './ServiceDetail.module.css';
import { useEffect, useRef, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import ScrollReveal from '@/components/ScrollReveal';


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
    faqs?: { q: string; a: string }[];
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
    title: 'Best SEO Service in Bangalore',
    description: 'IM Solutions is positioned as one of the Leading SEO Company in Bangalore, offering practical and transparent SEO strategies that fit your market and search intent.',
    longDescription: `
      <h2>Best SEO Company in Bangalore — IM Solutions</h2>
      <p>Search engines have changed how people discover businesses. If your brand isn’t visible on Google, potential customers will land on a competitor instead.</p>
      <h3>Why settle for average when you can aim for the top?</h3>
      <p>IM Solutions is positioned as one of the Leading SEO Company in Bangalore, offering practical and transparent SEO strategies that fit your market and search intent. Our team stays aligned with the latest updates, supported by insights like those covered in our guide on modern SEO and AI-powered search.</p>
      <h3>10+ Years of SEO Expertise Backed by Real Growth</h3>
      <p>For more than 10 years, IM Solutions has worked with brands across different industries as a trusted SEO agency in Bangalore. We study your ideal customers, how they search, and what influences their decisions. From there, we build a clear plan that positions your business at the right moment in their search path.</p>
      <p>Search visibility only works when users enjoy the experience on your site. That’s why we combine SEO with smart Search Engine Marketing to improve conversions and lead quality. Every project begins with a detailed audit—covering keywords, content structure, metadata, page performance, URL flows, schema setup, and other key on-site elements.</p>
      <h3>Staying Ahead in a Constantly Changing Search Landscape</h3>
      <p>Search behaviour changes often, and Google adjusts its systems just as quickly. IM Solutions keeps your SEO campaign ahead by adapting your plan to match current patterns. Our Digital Marketing Services evolve continuously, keeping your website aligned with what Google expects today—not last year.</p>
      <h3>Ethical SEO That Actually Works</h3>
      <p>Some agencies cut corners. We don’t. IM Solutions relies only on safe, ethical SEO practices that protect your brand and support long-term results. Most businesses notice early improvements in search visibility within the first month.</p>
    `,
    features: [
      'Keywords Research',
      'Competitive Analysis',
      'Rank Tracking',
      'Traffic Reporting',
      'Detailed Analysis',
      'Onsite Optimisation'
    ],
    benefits: [
      'Better Rankings',
      'Consistent Organic Traffic',
      'Higher Conversions',
      'Long-Term Results',
      'Cost-Effective Marketing',
      'Competitive Advantage'
    ],
    category: 'online'
  },
  'sem': {
    title: 'Search Engine Marketing (SEM) Agency',
    description: 'Your marketing strategy can lose its effectiveness without the right focus and direction. This is where Search Engine Marketing (SEM) becomes essential.',
    longDescription: `
      <h2>Search Engine Marketing (SEM) Agency Company In Bangalore</h2>
      <p>Your marketing strategy can lose its effectiveness without the right focus and direction. This is where Search Engine Marketing (SEM) becomes essential. It helps businesses generate targeted traffic, eliminating irrelevant clicks and improving conversion rates. As the number of online shoppers continues to grow, most users begin their journey with a search engine. If your brand isn’t visible there, you're missing out on a powerful opportunity to scale your reach and growth.</p>
      <h3>Don’t miss out anymore!</h3>
      <p>With IM Solutions, a professional and result-driven SEM Company in Bangalore, your business can gain unmatched online visibility and remain relevant in today’s competitive market. As a trusted Search Engine Marketing Company in Bangalore, IM Solutions offers comprehensive SEM services that give your business the advantage it needs. Our tailor-made SEM strategies are designed to maximize business leverage at minimal cost and risk.</p>
      <p>Our Search Engine Marketing Agency in Bangalore understands that SEO alone might not be enough to drive traffic quickly. That’s why our SEM services combine strategic SEO techniques with effective paid advertising campaigns to ensure fast and measurable results. Whether it’s Google Ads, display marketing, or remarketing strategies, we deliver consistent traffic and lead generation for your business.</p>
      <p>At IM Solutions, our goal is to drive meaningful traffic to your website using precise SEM techniques that increase your sales and elevate your brand presence. Unlike a one-size-fits-all approach, we develop a custom SEM roadmap based on your unique business goals, constraints, and target audience.</p>
    `,
    features: [
      'Search Engine Optimisation (SEO)',
      'Pay Per Click (PPC) Advertising',
      'Content Marketing',
      'CRO Services',
      'Google Analytics Consulting',
      'Geographical SEO Target'
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
    title: 'Online Reputation Management (ORM) Services',
    description: 'Build your brand image and proactively create a connection with your customers with our ORM services.',
    longDescription: `
      <h2>Online Reputation Management Company Bangalore</h2>
      <p>Are you looking ORM Agency in Bangalore to build your brand image and proactively create a connection with your customers? Whether you are a business house, individual, or any professional looking to expand your new popularity or counter negativity online, you have landed at the right place. Put your faith in IM Solutions ORM company Bangalore to create an impactful online reputation for you.</p>
      <p>IM Solutions is a leading Online Reputation Management Company Bangalore serving businesses of all sizes—big, midsize, small, and start-ups with a complete range of online public relations, brand management, and digital marketing solutions. We offer the best reputation repair solution and brand management services available in the market. Our goal is to showcase all the good things your brand has to offer, adding value to the lives of people.</p>
      <p>The Internet can be misused to trash your brand image and create a negative thread, like a garbage bin where anybody can post negative comments about you. Such negative comments are not only a nuisance but also can act like a garbage bin where anybody can post negative comments about you. In a crisis like this, IM Solutions comes to the rescue of your brand, business, and ultimately, fights back against all the false rumours on the web about your brand.</p>
      <p>IM Solutions, a leading Online Reputation Management Services Bangalore, specializes in Online Reputation Management (ORM) by effectively combating negativity such as bad reviews, hate blogs, unpleasant testimonials, and scam allegations that could harm your brand’s credibility.</p>
    `,
    features: [
      'Review Management',
      'Monitor Online Criticism',
      'Personal Reputation',
      'Brand Protection',
      'Push Down Negativity',
      'Repair Reputation'
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
    title: 'Website Design and Development Company',
    description: 'We design the right & interactive website for you that meets your requirements as well as your target audience.',
    longDescription: `
      <h2>Best Website Design Company in Bangalore</h2>
      <p>How many Customers do you have on your website? The first impression of your website can make a huge difference on your potential customers! A website is not just a digital presence. It is a channel that ‘talks’ to your visitors. That is why it takes just a second for visitors to judge if a website is professional and trustworthy. Don’t gamble on your brand’s website. It can cost you your customers! It can impact the conversion rate and prevent bouncing off from your website.</p>
      <p>As a leading web designing service Company, IM Solutions specialises in developing a website that is intuitive and functional to your visitors need. IM Solutions is no. 1 website located in Bangalore which not only builds unique marketable designs but also provides ultimate website development services and support. We design responsive websites for our clients that not only look aesthetically pleasant but also help you with better conversion rates and ultimately giving you a much higher return on your investment in getting a web presence for your business.</p>
      <p>Our websites are designed to enable surpassing the geographical limitations and attract customers from around the world. Thus, setting you site apart from the digital crowd for years to come. We have worked with hundreds of clients. Be it starting a new site, redesigning an existing site, adding new features to your present site, or improving the ranking of your site in search results, we are the first preference for most businesses.</p>
    `,
    features: [
      'Creative Graphics',
      'Mobile Ready Web Design',
      'Hosting And Support',
      'Conversion Focus Design',
      'Multi-Sector Websites',
      'Solid Content'
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
    title: 'Social Media Optimization Agency',
    description: 'Social media optimization is Search engine optimization (SEO) combined with Social Media. Walla! You get a Marketing Ginny.',
    longDescription: `
      <h2>Social Media Optimization Company</h2>
      <p>Social media optimization is Search engine optimization (SEO) combined with Social Media. Walla! You get a Marketing Ginny. Seeing is believing. Social media optimization makes people see your brand. As a Social Media Optimization Agency, we have the experience, insight, and knowledge to make your next social media campaign a winner. IM Solutions has orchestrated a few of the most viral marketing campaigns on the Internet. Data is the new oil, and we have the data.</p>
      <p>Specialising in Social Media Optimization Services, IM Solutions attempts to build your business’s stature and increase your branding. Presenting your business’s best brand value, we help design it in such a way that it becomes a buzzfeed on the social media platforms. Our social media optimization tools let you know when people start including your brand in the chatter. We provide an affordable Social Media Optimization Company in Bangalore for business enhancement that further enhances your visibility on the internet.</p>
      <p>Our Social Media Optimization Services in Bangalore include reports of the progress on social media monitoring from time to time to track the progress of your social media performance. The only thing that you have to do is to tell us about your requirements, and then it is our task to spread your platform widely on these social media sites.</p>
    `,
    features: [
      'Offsite SMO',
      'Onsite SMO',
      'Content And Profile',
      'Brand Awareness',
      'Communication',
      'Authentic And Publicized'
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
    title: 'Social Media Marketing Agency',
    description: 'Social media marketing is about connecting, interacting, and growing alongside your customers.',
    longDescription: `
      <h2>Social Media Marketing Agency in Bangalore</h2>
      <p>Over 90% of brands today market themselves on Facebook, and more than 6 million business-related images are uploaded online daily. Gone are the days when social media was purely for entertainment. It has evolved into a powerful business tool to showcase products, engage meaningfully with clients, increase sales, and establish a brand’s authority in its niche.</p>
      <p>In today’s digital age, platforms like Facebook, YouTube, Instagram, and others have transformed how people think, shop, and make decisions. Social media has completely reshaped the marketing landscape. If you're a business owner, investing in a Social Media Marketing Company in Bangalore can be the game-changer for your brand. Social media marketing is about connecting, interacting, and growing alongside your customers. If your business isn’t active and engaging on these platforms, you're missing out on a major opportunity for brand awareness and customer retention.</p>
      <p>At IM Solutions, a leading Social Media Management Company in Bangalore, we offer services that help brands understand what people are saying about their products and services online. We help you determine how and when to engage with your audience, manage conversations, and design strategies tailored to each social platform. As a full-service Social Media Agency in Bangalore, we understand that social media is at the heart of your online presence.</p>
    `,
    features: [
      'Market Targeting',
      'Content Creation',
      'Social Media Profile',
      'Analytic Monitoring',
      'Popular Social Media',
      'Graphics Creation'
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
    title: 'Software Development Company',
    description: 'IM Solutions is the best software development company providing premier custom software development services to clients from different sectors.',
    longDescription: `
      <h2>Software Development Company Bangalore</h2>
      <p>We live in an era of fast phase technology and technology has a lot of influence on the businesses and how they operate. For a successful business, online platforms and mobile apps have become a necessity since they provide a pathway for your clients to contact you and shop for your items and administrations. To create a flawless-running software product is an essential element of every business operations and the software transforms it into an organized development structure. But the foundation of the journey will depend on whether you’ll find the right team to do it.</p>
      <p>IM Solutions is the best software development company providing premier custom software development services to clients from different sectors. Software design and development is paramount to a successful business. We understand how important this process is. IM Solutions always remain frontier in catering to different types of software development to address the intricate needs of the high-tech era.</p>
      <p>As every business is different, so are its software requirements. IM Solution’s Software Development permits the businesses to create customized solutions to meet the specific needs of their organization. Although, Software development involves several tasks and includes some upfront costs, a standout amongst the most widely recognized purpose behind developing software is to meet the specific needs or demands of the client.</p>
    `,
    features: [
      'Software Solution',
      'Custom Software',
      'Maintenance And Support',
      'Software Development',
      'Software Consulting',
      'Software Integration'
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
    description: 'IM Solutions is a premier AI advertising agency transforming digital marketing through intelligent automation and data-driven strategies.',
    longDescription: `
      <h2>AI Advertising Agency in Bangalore</h2>
      <p>IM Solutions, based in Bangalore, is a premier AI advertising agency transforming digital marketing through intelligent automation and data-driven strategies. Leveraging artificial intelligence, the agency creates highly targeted, personalized campaigns that maximize engagement and return on investment for clients across industries.</p>
      <p>By harnessing machine learning, predictive analytics, and programmatic advertising, IM Solutions automates media buying, optimizes campaigns in real time, and delivers creative content tailored to audience behavior. This approach not only saves time but also ensures marketing budgets are spent efficiently.</p>
      <p>Serving startups and enterprises alike, IM Solutions combines Bangalore’s tech expertise with local market knowledge to help businesses scale rapidly and stay competitive in today’s dynamic digital landscape. With IM Solutions, brands gain smarter advertising solutions that adapt and evolve with changing consumer trends.</p>
    `,
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
    title: 'Creative Designing Services',
    description: 'Creativity is an ocean with limitless possibilities. It goes beyond mere artistic paintings. When creativity enters the professional world, it takes the form of graphic art.',
    longDescription: `
      <h2>Creative Ad Design Agencies In Bangalore</h2>
      <p>Creativity is an ocean with limitless possibilities. It goes beyond mere artistic paintings. When creativity enters the professional world, it takes the form of graphic art. Creative arts and design enhance businesses widely by giving a more aesthetically pleasant presentation and better brand value.</p>
      <p>At IM Solutions, we believe that Art is one of the aspects that add limitless imagination! We use the powerful tool of art to enhance the performance of your business. With the touch of creativity, we use it to grab the attention of the customers and even passive users that enhance the image of our brand which will result in better revenues and better business! IM Solutions encourages businesses to go beyond free online designs or templates. We want businesses irrespective of their size an industry to stay unique and stay beautiful. With IM Solutions professional creative design, we refuel your creative design needs and take it to the next level.</p>
      <p>Being in the advertising industry for long, IM Solutions has mastered the balance of art and science needed to offer exceptional artwork services to clients from different industries. Our creative design services include multiple sub-services such as Illustration, UI/UX Design and Image editing and much more. Every creative design we make are made to lure the audience’s attention and drawing in potential customers through visual communication.</p>
    `,
    features: [
      'Brochure Design',
      'Branding Identity',
      'Business Card Design',
      'App Design',
      'Print Design',
      'Banner Design'
    ],
    benefits: [
      'Strong Brand Identity',
      'Professional Image',
      'Increased Engagement',
      'Memorable Designs',
      'Consistent Branding',
      'Creative Excellence'
    ],
    category: 'online'
  },
  'api-integration': {
    title: 'API Integration Services',
    description: 'IM Solutions specializes in integrating custom API applications for your business websites or web applications for enhanced performance.',
    longDescription: `
      <h2>API Integration Service in Bangalore</h2>
      <p>By 2020, there will be more than 85 billion devices connected to the Internet of Things. In the evolving business scenario, cloud services, mobile apps, analytical tools and other embedded devices including wearables have become imperative. However, if these systems work disparately, it is only going to be futile and complex exercise. For them to interact with each other coherently there has to be a communication gateway. As a leading API integration company, IM Solutions build such communication gateways through Application Programming Interfaces (APIs) and manage them across their lifecycle.</p>
      <p>All kinds of enterprises has to link disparate applications and databases to optimize the value of existing system. Any kind of enterprise applications that amalgamate useful APIs provides enhanced functionality than those that work in isolation. IM Solutions leverage the rich API economy for integrations and also secures communication and accelerates outreach across digital channels. We specialise in building custom API integration that perfectly matches your enterprise system requirements. We enable clients in aligning business processes and achieve better connectivity through standard and custom APIs linking to third-party applications and websites</p>
    `,
    features: [
      'Accelerating Businesses with API',
      'Connecting Enterprise Applications',
      'Secure Ecosystem',
      'Custom API Integration',
      'API Implementation Services',
      'API Consultancy'
    ],
    benefits: [
      'Enhanced Functionality',
      'Better Integration',
      'Improved Efficiency',
      'Scalability',
      'Cost Reduction',
      'Seamless Operation'
    ],
    category: 'online'
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
    description: 'IM Solutions is a reputed Bus Branding Agency offering services in Bangalore, Karnataka. We do interior/exterior branding on BMTC, KSRTC, Volvo buses.',
    longDescription: `
      <h2>Bus Branding</h2>
      <h3>Bus advertisement</h3>
      <p>The good thing about bus advertisement is that it offers various options for you to choose from like Parisaravahini buses that are usually very cost effective option and there are AC buses such as VayuVajra buses, offering premium bus advertisement option. Bus branding in Bangalore is right option for businesses which are focusing on a specific region or location to achieve the right visibility.</p>
      <p>Bus advertisement brings with it innovative, color, and large designs which draw attention of commuters and the best thing is that it is a type of advertisement that no one can switch off. Moreover, it provides brands complete exclusivity in advertising space they are targeting and delivers the right results.</p>
    `,
    features: [
      'Non AC Buses',
      'AC Buses',
      'KSRTC',
      'Full Bus Interior',
      'Full Bus Exterior',
      'Full Bus'
    ],
    benefits: [
      'Target the right commuters across localities',
      'Inform about offers and discounts using large ad space',
      'Deliver your branding message to the masses at low cost',
      'High exposure (people cannot switch it off)',
      'Round-the-clock visibility as buses commute daily',
      'Reach a large audience base across the city'
    ],
    faqs: [
      {
        q: 'Why bus branding is so popular?',
        a: 'There are various reasons behind popularity of bus branding. First of all, people cannot turn it off, as happens with TV or radio ads, giving your ads greater exposure. Secondly, buses commute on daily basis, which ensure round-the-clock visibility of your ads. Lastly, buses reach every part of the city, helping you reach a large audience base.'
      },
      {
        q: 'What are the dimension details for interior branding on AC Buses?',
        a: 'The following are the dimension details: Driver Seat Back – 20 W x 30 H Inches; Passenger Seat Back – 11 W x 8 H Inches.'
      },
      {
        q: 'What is the duration for bus advertisement?',
        a: 'Campaign duration can be 1 month/ 2 months/ 3 months, depending upon your requirement and budget.'
      },
      {
        q: 'What are the different media options?',
        a: 'Media options include Full Bus Interior/ Full Bus Exterior/ Full Bus.'
      },
      {
        q: 'How can I know that my bus ad has been executed?',
        a: 'We will be sharing the execution pictures within two working days after the campaign goes live.'
      },
      {
        q: 'What are the marketing goals that bus advertisement can help us achieve?',
        a: 'Bus branding can help you accomplish different marketing goals such as promotion of seasonal specials, announcement of new products, and also for general branding.'
      }
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

  // Core Services Slider
  const coreServicesRef = useRef<HTMLDivElement>(null);
  const [coreServicesActiveIndex, setCoreServicesActiveIndex] = useState(0);

  useEffect(() => {
    const grid = coreServicesRef.current;
    if (!grid) return;

    const handleScroll = () => {
      const cardWidth = 380 + 32; // card width (380) + gap (2rem = 32px)
      const scrollLeft = grid.scrollLeft;
      const index = Math.round(scrollLeft / cardWidth);
      setCoreServicesActiveIndex(Math.min(index, totalServices - 1));
    };

    grid.addEventListener("scroll", handleScroll);
    return () => grid.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollCoreServicesCard = (index: number) => {
    if (coreServicesRef.current) {
      const cardWidth = 380 + 32;
      coreServicesRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth"
      });
      setCoreServicesActiveIndex(index);
    }
  };

  const scrollCoreServicesLeft = () => {
    scrollCoreServicesCard(Math.max(0, coreServicesActiveIndex - 1));
  };

  const scrollCoreServicesRight = () => {
    scrollCoreServicesCard(Math.min(totalServices - 1, coreServicesActiveIndex + 1));
  };

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

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Related Services Logic
  const allServices = Object.entries(serviceData).map(([s, d]) => ({
    slug: s,
    title: d.title,
    category: d.category,
    image: d.heroImage || d.collageMain || '/services/pro-thumb-1.svg'
  }));

  const relatedServices = allServices.filter(s => s.category === service.category && s.slug !== slug);
  // Keep a short, focused list for Related Services — show up to 4 items
  const limitedRelated = relatedServices.slice(0, 4);
  const displayRelated = limitedRelated;

  const defaultFaqs = [
    { 
      q: 'How long until we see results?', 
      a: 'Depending on the channel, initial impact can be seen within a few weeks; measurable outcomes typically within 60-90 days.'
    },
    { 
      q: 'Do you handle creative and media buying?', 
      a: 'Yes — we do end-to-end campaign management including creative, media planning, buying, and optimization.'
    },
    { 
      q: 'Can you work with our internal team?', 
      a: 'Absolutely. We work as an extension of your team and integrate with internal stakeholders.'
    },
    {
      q: 'What makes your agency different from competitors?',
      a: 'We combine data-driven strategy with creative excellence. Our team brings hands-on expertise across online and offline channels, transparent reporting, and a focus on measurable ROI. We treat your business goals as our own.'
    },
    {
      q: 'How do you determine the right marketing channels for my business?',
      a: 'We start with in-depth discovery: understanding your target audience, competitor landscape, budget, and goals. We then recommend a channel mix tailored to your specific needs, with flexibility to pivot based on performance data.'
    },
    {
      q: 'What kind of results can I expect?',
      a: 'Results vary by industry and service type. However, our clients typically see 20-40% improvement in lead generation, 2-3x ROI on ad spend, and significant improvements in brand visibility within 3-6 months.'
    },
    {
      q: 'Do you offer flexible contracts or trial periods?',
      a: 'Yes. We work with businesses of all sizes and offer flexible engagement models. Many clients start with a pilot campaign to test our approach before committing to longer-term partnerships.'
    },
    {
      q: 'How do you keep campaigns optimized and relevant?',
      a: 'We continuously monitor performance metrics, A/B test creative and targeting, and provide weekly or monthly optimization reports. Your dedicated account manager reviews performance with you regularly.'
    },
    {
      q: 'What if I have a tight budget?',
      a: 'We work with businesses at all budget levels. We help you prioritize high-impact activities and channels that deliver the best ROI for your specific constraints. Starting lean and scaling up is always an option.'
    }
  ];

  const displayFaqs = (service.faqs ?? defaultFaqs).slice(0, 7);

  const coreServices = [
    {
      title: 'Strategic Planning',
      desc: 'We develop comprehensive marketing strategies tailored to your business goals, analyzing market trends and competitor landscape to position your brand for success.',
      icon: '/services/pro-feature-1-left.svg'
    },
    {
      title: 'Creative Design',
      desc: 'Our creative team crafts visually stunning campaigns that capture attention and communicate your brand message effectively across all mediums.',
      icon: '/services/pro-feature-2-left.svg'
    },
    {
      title: 'Digital Excellence',
      desc: 'From SEO to social media, we deliver integrated digital solutions that drive traffic, engagement, and conversions for your business online.',
      icon: '/services/pro-feature-3-left.svg'
    },
    {
      title: 'Offline Impact',
      desc: 'We create powerful offline campaigns including hoarding, bus branding, and experiential activations that build brand presence in the physical world.',
      icon: '/services/pro-feature-4-left.svg'
    },
    {
      title: 'Data-Driven Results',
      desc: 'Every campaign is backed by analytics and insights. We track performance metrics and optimize continuously to deliver measurable ROI for your investment.',
      icon: '/services/pro-feature-5-left.svg'
    },
    {
      title: 'Industry Expertise',
      desc: 'With experience across multiple industries, our team brings specialized knowledge to tackle unique challenges and opportunities in your market.',
      icon: '/services/pro-thumb-6.svg'
    }
  ];

  const totalServices = coreServices.length;
  const progressPercentage = ((coreServicesActiveIndex + 1) / totalServices) * 100;

  return (
    <main className={styles.serviceDetail}>
      <div className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <img ref={bgRef} src="/services/advertising-agency-1.svg" alt="Service background" className={styles.backgroundImage} />
        </div>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div ref={heroRef} className={`${styles.heroInner} ${styles.stagger} ${heroRevealed ? styles.isRevealed : ''}`}>
            {/* Minimal hero for service detail: only show service title at left-bottom */}
            <div className={styles.serviceLabel}>{service.title}</div>
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
              <div className={`${styles.revealChild} ${styles.grid2}`}>
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

          {/* Additional Brand Content */}
          <section className={`${styles.buildBrandSection} revealOnScroll`} data-reveal="true" style={{marginTop: '2rem', marginBottom: '0', paddingBottom: '0'}}>
            <div className="container">
              <div className="revealChild" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center'}}>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                   <img 
                     src="/services/advertising-agency-1.svg" 
                     alt="Advertising Agency" 
                     className={styles.collageImage}
                     style={{
                       position: 'relative', 
                       width: '100%', 
                       maxWidth: '500px', 
                       height: 'auto', 
                       borderRadius: '20px', 
                       boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                     }} 
                   />
                </div>
                <div>
                   <div style={{color: 'var(--color-text-secondary)', lineHeight: '1.7', fontSize: '1.05rem'}}>
                    <p style={{marginBottom: '1rem'}}>
                      With the right advertising, you don't just get results but you multiply your profits. IM Solutions delivers just that. We are a team of experts creating unconventional ads that truly makes an impression. Our ads are short, simple and straight to the point targeting ideal customers for a faster outcome. From digital space to every nook and corner of the offline market, we cover it all.
                    </p>
                    <p>
                      IM Solutions connects people and businesses across the digital and physical world, powering people-based marketing. Presentation matters! We help brands present themselves better and reach their customers with our advertising expertise. In simple, we amplifying your business and enhance your branding. Why wait when you can start now? Contact us for more details..
                    </p>
                   </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Services Section */}
          <section className={`${styles.coreServicesSection} revealOnScroll`} data-reveal="true">
            <div className="container">
              <div className={styles.revealChild}>
                <h2 className={styles.showcaseTitle} style={{marginBottom: '3rem', textAlign: 'center'}}>Our Core Services</h2>
                
                <div className={styles.coreServicesGrid} ref={coreServicesRef}>
                  {coreServices.map((service, index) => (
                    <div 
                      key={index} 
                      className={`${styles.coreServiceCard} ${coreServicesActiveIndex === index ? styles.active : ''}`}
                    >
                      <div className={styles.serviceIconWrapper}>
                        <img src={service.icon} alt={service.title} className={styles.serviceIcon} />
                      </div>
                      <h3 className={styles.serviceCardTitle}>{service.title}</h3>
                      <p className={styles.serviceCardDesc}>{service.desc}</p>
                    </div>
                  ))}
                </div>

                <div className={styles.progressBarContainer}>
                  <div 
                    className={styles.progressBar} 
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>

                <div className={styles.arrowControls}>
                  <button 
                    className={styles.arrowButton} 
                    onClick={scrollCoreServicesLeft}
                    aria-label="Previous service"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                  </button>
                  <button 
                    className={styles.arrowButton} 
                    onClick={scrollCoreServicesRight}
                    aria-label="Next service"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className={`${styles.whyChooseUsSection} revealOnScroll`} data-reveal="true">
            <div className="container">
              <div className={styles.revealChild}>
                {/* Row 1: Intro and Impact */}
                <div className={styles.whyChooseUsContent}>
                  <div className={styles.whyChooseUsText}>
                    <h2 className={styles.showcaseTitle}>WHY US?</h2>
                    <div className={styles.whyChooseUsBody}>
                      <p>Want to increase your online visibility and generate more leads for your business? IM Solutions is among the best and leading Marketing Companies in Bangalore excelling in providing top notch digital marketing services. As a leading Digital Marketing Agency in India our clientele is spread across the country. Having years of experience in advertising niche, IM Solutions is an expert navigating the fast-evolving digital landscape and delivering quality digital marketing services.Agency in India our clientele is spread across the country. Having years of experience in advertising niche, IM Solutions is an expert navigating the fast-evolving digital landscape and delivering quality digital marketing services.</p>
                      
                      
                    </div>
                  </div>

                  <div className={styles.whyChooseUsImage}>
                    <img src={service.heroImage ?? '/services/digital-marketing-1.svg'} alt="Why Choose IM Solutions" className={styles.whyChooseUsImg} />
                  </div>
                </div>

                {/* Row 2: Reputation and Advantages (Reversed) */}
                <div className={`${styles.whyChooseUsContent} ${styles.reverseRow}`}>
                  <div className={styles.whyChooseUsText}>
                    <div className={styles.whyChooseUsBody}>
                      
                      
                      <h3 className={styles.whyChooseUsSubtitle}>IM Solutions offers the following advantages:</h3>
                      
                      <ul className={styles.whyChooseUsList}>
                        <li>Proactive online reputation management solutions</li>
                        <li>In-house outsourcing solution by experts</li>
                        <li>Receive notifications Trusted Alerts and Reports</li>
                        <li>Customisable scalable solutions</li>
                        <li>Strengthening and building reputation</li>
                      </ul>
                    </div>
                  </div>

                  <div className={styles.whyChooseUsImage}>
                    <img src={service.collageTop ?? '/services/advertising-agency-1.svg'} alt="Our Advantages" className={styles.whyChooseUsImg} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Services Section */}
          <section className={`${styles.relatedServicesSection} revealOnScroll`} data-reveal="true">
            <div className="container">
              <div className={styles.revealChild}>
                <h2 className={styles.relatedServicesTitle}>Related Services</h2>
              </div>
            </div>
            <div className={styles.marqueeContainer}>
              <div className={styles.marqueeContent}>
                {displayRelated.map((item, idx) => (
                  <Link 
                    key={idx} 
                    href={`/services/${item.slug}`} 
                    className={styles.relatedServiceCard}
                  >
                    <div 
                      className={styles.relatedServiceImageWrapper}
                    >
                      <img src={item.image} alt={item.title} className={styles.relatedServiceImage} />
                      <div className={styles.relatedServiceArrow}>
                        <FiArrowRight />
                      </div>
                    </div>
                    <div className={styles.relatedServiceInfo}>
                      <h3 className={styles.relatedServiceName}>{item.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section data-reveal="true" className={styles.revealOnScroll}>
            <div className="container">
              <div className={styles.revealChild}>
                <ScrollReveal delay={0.2}>
                  <h3 className={styles.showcaseTitle}>Frequently Asked Questions</h3>
                </ScrollReveal>
                <div className={styles.faqList}>
                  {displayFaqs.map((f, i) => (
                    <ScrollReveal key={i} delay={0.3 + i * 0.15}>
                      <div className={`${styles.faqItem} ${openFaq === i ? styles.open : ''}`}>
                        <button
                          className={styles.faqQuestion}
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        >
                          <span>{f.q}</span>
                          <span className={styles.faqIcon}>
                            {openFaq === i ? <FaMinus /> : <FaPlus />}
                          </span>
                        </button>
                        <div className={styles.faqAnswer}>
                          <p>{f.a}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
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
