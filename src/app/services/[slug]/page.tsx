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
    title: 'Best SEO Company in Bangalore',
    description: 'Leading SEO services in Bangalore with 10+ years of expertise in ethical, results-driven search engine optimization.',
    longDescription: `
      <h2>Best SEO Company in Bangalore — IM Solutions</h2>
      <p>Search engines have changed how people discover businesses. If your brand isn't visible on Google, potential customers will land on a competitor instead. Why settle for average when you can aim for the top?</p>
      
      <p>IM Solutions is positioned as one of the Leading SEO Company in Bangalore, offering practical and transparent SEO strategies that fit your market and search intent. Our team stays aligned with the latest updates, ensuring your business stays competitive in the evolving search landscape.</p>

      <h3>10+ Years of SEO Expertise Backed by Real Growth</h3>
      <p>For more than 10 years, IM Solutions has worked with brands across different industries as a trusted SEO agency in Bangalore. We study your ideal customers, how they search, and what influences their decisions. From there, we build a clear plan that positions your business at the right moment in their search path.</p>
      
      <p>Search visibility only works when users enjoy the experience on your site. That's why we combine SEO with smart Search Engine Marketing to improve conversions and lead quality. Every project begins with a detailed audit—covering keywords, content structure, metadata, page performance, URL flows, schema setup, and other key on-site elements.</p>

      <h3>Staying Ahead in a Constantly Changing Search Landscape</h3>
      <p>Search behaviour changes often, and Google adjusts its systems just as quickly. IM Solutions keeps your SEO campaign ahead by adapting your plan to match current patterns. Our Digital Marketing Services evolve continuously, keeping your website aligned with what Google expects today—not last year.</p>

      <h4>What sets us apart:</h4>
      <ul>
        <li>Flexible engagement models</li>
        <li>A dedicated in-house team managing your work</li>
        <li>Clear communication on tasks, timelines, and progress</li>
        <li>Transparent monthly reporting with actionable insights</li>
      </ul>

      <h3>Ethical SEO That Actually Works</h3>
      <p>Some agencies cut corners. We don't. IM Solutions relies only on safe, ethical SEO practices that protect your brand and support long-term results. Most businesses notice early improvements in search visibility within the first month.</p>
      
      <p>If you're looking for the Best SEO Service in Bangalore that helps you dominate your market and stay competitive, IM Solutions is built for you.</p>

      <h3>Our Core SEO Services</h3>
      
      <h4>Rank Tracking</h4>
      <p>Rank tracking is one of our prime compositions of SEO packages. We measure your targeted keyword's current ranking positions on Search Engines and provide detailed comparisons over time to track progress and identify opportunities.</p>
      
      <h4>Traffic Reporting</h4>
      <p>We use Google Analytics to continuously monitor the traffic projection on your website and provide reports on how your website is performing. You'll receive comprehensive organic traffic progress reports on a schedule that suits your needs (weekly, monthly, or quarterly).</p>
      
      <h4>Detailed Analysis</h4>
      <p>Our SEO starts with competitor analysis followed by keyword research. We analyze everything from competitor websites to backlink profiles. We identify each page that needs improvement and create a roadmap for SEO-friendly optimizations that drive results.</p>
      
      <h4>Onsite Optimization</h4>
      <p>Onsite optimization is important for your business to rank high in the search engine sites. We work on optimizing every element with the best strategies—from Meta tags and alt attributes to images, site load time, headings, and content structure—all focused on delivering the best user experience.</p>
      
      <h4>Keywords Research</h4>
      <p>We work to research highly efficient keywords to increase the opportunity for your website to reach a wider market. Starting with competitor analysis, we collect information about your services or products and identify the correct set of keywords that will drive the success of your campaign.</p>
      
      <h4>Competitive Analysis</h4>
      <p>To have an edge in the market, competitor analysis is an essential task. Our competitor analysis allows us to provide you with the finest optimization tactics that beat all competition in your niche. We analyze your competitor's keywords, backlinks, and strategies to position your brand effectively.</p>

      <h3>Why Choose Us - The Best SEO Service in Bangalore</h3>
      <p>We deliver top tier SEO services that focus on outcomes: better rankings, more consistent organic traffic and higher conversions. With over ten years of focused experience, our team runs a proven process that begins with a complete website audit and ends with regular performance reporting.</p>

      <h4>What We Do:</h4>
      <ul>
        <li><strong>Technical SEO:</strong> Site structure, crawlability, schema, site speed, and mobile performance</li>
        <li><strong>On-page SEO:</strong> Title tags, headings, content quality, internal linking, and overall user experience</li>
        <li><strong>Local SEO:</strong> Google Business Profile optimization, local citations, and review strategy</li>
        <li><strong>Content Strategy:</strong> Keyword mapping, content planning, and conversion-focused copy</li>
        <li><strong>Link Building:</strong> Outreach and authority-building tailored to your niche</li>
        <li><strong>Data-driven SEO:</strong> Insights from analytics, heatmaps, click patterns, and user behavior to guide every decision</li>
        <li><strong>Programmatic SEO:</strong> Scalable landing page creation, automated templates, and structured content systems for high-volume keyword targeting</li>
        <li><strong>Reporting:</strong> Transparent monthly reports with clear next-step recommendations</li>
      </ul>

      <h3>Our Approach</h3>
      <p>Every campaign starts with a comprehensive audit covering keywords, content, headings, URL structure, schema and page speed. We prioritize fixes that move the needle quickly and build a roadmap for long-term gains. Contracts are flexible and our experts work in-house so you always know who's doing the work.</p>
      
      <p>We offer scalable packages for local shops, growing SMEs and larger brands. Contact us for a custom plan—we'll send a tailored proposal after a free site analysis.</p>

      <h3>Industry Benefits</h3>
      <p>SEO is beneficial for every type of industry. If you have a website and want to showcase your products and services online, SEO will be important for you. Whether you're a large organization or a small business trying to build online visibility, our strategies are designed to deliver measurable results.</p>
      
      <p>If you're trying to develop brand recognition for your business, SEO helps ensure your website is always visible in top rankings, and people will start considering it as a reliable source of information. Better rankings translate into higher sales, more inquiries, and sustained business growth.</p>

      <h3>Contact & Next Steps</h3>
      <p>Ready to dominate search results and drive qualified traffic to your website? Reach out to us:</p>
      <ul>
        <li><strong>Phone:</strong> +91 888 056 4488</li>
        <li><strong>Email:</strong> info@imsolutions.mobi</li>
        <li><strong>Corporate Office:</strong> #122, 8th Main Road, Bangalore</li>
      </ul>
      
      <p>We'd love to understand your objectives and propose an SEO strategy that delivers results. Contact us today for a free consultation and comprehensive site audit.</p>
    `,
    features: [
      'Keyword Research & Strategy',
      'Technical SEO Optimization',
      'On-Page & Off-Page SEO',
      'Local SEO & GMB Optimization',
      'Content Strategy & Development',
      'Link Building & Outreach',
      'Programmatic SEO',
      'SEO Audits & Analysis',
      'Rank Tracking & Reporting',
      'Competitor Analysis'
    ],
    benefits: [
      'Higher Search Rankings',
      'Increased Organic Traffic',
      'Better User Experience',
      'Long-Term Sustainable Results',
      'Cost-Effective Marketing',
      'Competitive Advantage',
      'Improved Conversion Rates',
      'Enhanced Brand Credibility',
      'Measurable ROI',
      'Ethical White-Hat Practices'
    ],
    category: 'online'
  },
  'sem': {
    title: 'Search Engine Marketing Agency in Bangalore',
    description: 'Professional SEM and PPC services in Bangalore delivering targeted traffic, high conversion rates, and maximum ROI with minimal risk.',
    longDescription: `
      <h2>Search Engine Marketing (SEM) Agency Company in Bangalore</h2>
      <p>Your marketing strategy can lose its effectiveness without the right focus and direction. This is where Search Engine Marketing (SEM) becomes essential. It helps businesses generate targeted traffic, eliminating irrelevant clicks and improving conversion rates. As the number of online shoppers continues to grow, most users begin their journey with a search engine. If your brand isn't visible there, you're missing out on a powerful opportunity to scale your reach and growth.</p>

      <h3>Don't Miss Out Anymore!</h3>
      <p>With IM Solutions, a professional and result-driven SEM Company in Bangalore, your business can gain unmatched online visibility and remain relevant in today's competitive market. As a trusted Search Engine Marketing Company in Bangalore, IM Solutions offers comprehensive SEM services that give your business the advantage it needs. Our tailor-made SEM strategies are designed to maximize business leverage at minimal cost and risk.</p>
      
      <p>Our Search Engine Marketing Agency in Bangalore understands that SEO alone might not be enough to drive traffic quickly. That's why our SEM services combine strategic SEO techniques with effective paid advertising campaigns to ensure fast and measurable results. Whether it's Google Ads, display marketing, or remarketing strategies, we deliver consistent traffic and lead generation for your business.</p>

      <h3>Strategic SEM Approach</h3>
      <p>At IM Solutions, our goal is to drive meaningful traffic to your website using precise SEM techniques that increase your sales and elevate your brand presence. Unlike a one-size-fits-all approach, we develop a custom SEM roadmap based on your unique business goals, constraints, and target audience. As a responsive SEM Agency in Bangalore, we stay updated with evolving search engine algorithms to ensure your campaigns remain effective and ROI-focused.</p>
      
      <p>Our team of SEM experts handles everything from detailed keyword research and ad creation to performance tracking and conversion optimization. Whether you need deep technical SEO audits or engaging ad creatives, we have the tools and expertise to deliver superior results. As a reputed PPC Agency in Bangalore, our paid search campaigns are tailored to generate maximum clicks with minimal spending.</p>
      
      <p>IM Solutions Social Media Marketing Agency in Bangalore ensures your brand gets noticed by the right audience at the right time. By combining creativity, analytics, and performance, our Search Engine Marketing Agency in Bangalore becomes your strategic partner for growth.</p>

      <h3>Our Core SEM Services Include</h3>
      
      <h4>Content Marketing</h4>
      <p>Our SEM service includes content marketing to reach a highly engaged audience. Our content marketing services increase website traffic from your online marketing channels. We do this through blog posts, articles, social media content and others to build brand awareness and ultimately grow your user base. Strategic content helps position your brand as an industry authority.</p>
      
      <h4>CRO Services (Conversion Rate Optimization)</h4>
      <p>Conversion is the lifeline of an online business as it defines their ability to drive buyers to complete the transaction. We offer effective conversion rate optimization (CRO) Services that convert traffic into revenue for your website. Our CRO services include tailored calls-to-action, navigation features, and more to encourage sales and maximize your return on ad spend.</p>
      
      <h4>Google Analytics Consulting</h4>
      <p>As part of our SEM, we also provide Google Analytics consultancy. Google Analytics helps you understand your customers better. We factor in your unique business goals to configure your account, provide easy access to performance data, and build confidence in your marketing decisions. We offer marketing solutions that benefit businesses of all sizes with data-driven insights.</p>
      
      <h4>Geographical SEO Targeting</h4>
      <p>IM Solutions' professional geographical targeting provides your business the opportunity to geographically target future customers and get more inquiries and sales. We generate store visits and sales with local SEO. Increased visibility in search results is one of the best ways for businesses to reach nearby shoppers. We consolidate targeting within the website to maximize local impact.</p>
      
      <h4>Search Engine Optimization (SEO)</h4>
      <p>We offer flexible and comprehensive online marketing plans and strategies so you can take advantage of our full spectrum of digital marketing services to dominate the competition. Our SEO services will skyrocket your online visibility, generate traffic, brand awareness, and revenue. Attract tons of natural links and increase your website traffic organically.</p>
      
      <h4>Pay Per Click (PPC) Advertising</h4>
      <p>Reach your targeted audience by driving the right traffic to your website with PPC advertising and enable the business to reach its prospective customers. With IM Solutions' hyper-targeted and effective PPC campaign management, experience increased sales through better conversion rates. This search marketing service is a must for businesses looking for immediate visibility and results.</p>

      <h3>Why Choose IM Solutions? Best Search Engine Marketing Company</h3>
      <p>To grow your business in the online world, one has to harness the power of online search engines through SEM. This way you generate the sales that you deserve for your business and enable new potential customers to discover your website. IM Solution is a Creatively Led, Strategically Driven, Techno-Friendly Full Service Digital Marketing Agency with 7+ years of expertise.</p>
      
      <p>With years of experience in the online advertising field, IM Solutions knows all the right tactics to impact your website's ranking and get it to the very top. We incorporate the process of ethical PPC advertising that drives more traffic, which automatically leads to reaching more end users by harnessing today's online marketing options.</p>
      
      <p>Catering to clients from diverse domains, we have created many powerful brand experiences for our clients worldwide. As a Digital Marketing company, we offer Technical SEO Audits, Search Engine Optimization Strategies, Google AdWords Advertising (Search Engine Marketing, Pay Per Click Management & Video Advertising), Social Media Strategies and Creative Content resulting in fully managed and highly successful online marketing campaigns.</p>

      <h3>Our SEM Expertise</h3>
      <p>Our exclusive SEM service offers a means to add value or drive traffic simultaneously while building organic SEO rankings. We enhance your business's opportunity to appear within the search results and provide complete control over the keywords and budget. We work to deliver high ROI through our best practice of constant monitoring, testing and better targeting of keywords.</p>
      
      <p>We are the most preferred SEM Company in Bangalore to manage and enhance online presence. Our SEM specialization includes:</p>
      <ul>
        <li>Online Marketing Plan Development</li>
        <li>Campaign Management & Execution</li>
        <li>Keyword Research and Analysis</li>
        <li>Ad Creation and Management</li>
        <li>Bid Management & Optimization</li>
        <li>Landing Page Consultation</li>
        <li>Localization and Optimization</li>
        <li>Search Analytics Implementation</li>
        <li>Conversion Path Analysis</li>
        <li>ROI Tracking and Reporting</li>
        <li>Advanced AdWords Support</li>
      </ul>

      <h3>Results You Can Expect</h3>
      <p>Search engine marketing will have a direct effect on the leads you are able to generate for your business. Moreover, visitor traffic on your website will increase manifold and you will be getting more calls on the phone number used in your ad campaigns. Our campaigns are designed for measurable impact and sustainable growth.</p>

      <h3>Contact & Next Steps</h3>
      <p>Ready to reshape your digital strategies and experience result-oriented digital marketing for your company? Contact us now:</p>
      <ul>
        <li><strong>Phone:</strong> +91 888 056 4488</li>
        <li><strong>Email:</strong> info@imsolutions.mobi</li>
        <li><strong>Corporate Office:</strong> #122, 8th Main Road, Bangalore</li>
      </ul>
      
      <p>Contact us today to discuss a custom SEM strategy tailored to your business goals and budget. Let's drive targeted traffic and maximize your ROI together!</p>
    `,
    features: [
      'PPC Campaign Management',
      'Google Ads & Display Marketing',
      'Keyword Research & Analysis',
      'Ad Copy Creation & Testing',
      'Bid Management & Optimization',
      'Landing Page Consultation',
      'Conversion Rate Optimization',
      'Google Analytics Consulting',
      'Geographical Targeting',
      'ROI Tracking & Reporting',
      'Remarketing Campaigns',
      'Advanced AdWords Support'
    ],
    benefits: [
      'Immediate Visibility & Results',
      'Highly Targeted Traffic',
      'Measurable ROI',
      'Complete Budget Control',
      'Increased Lead Generation',
      'Better Conversion Rates',
      'Quick Market Testing',
      'Scalable Campaigns',
      'Demographic Targeting',
      'Performance Analytics',
      'Cost-Effective Advertising',
      'Ethical PPC Practices'
    ],
    category: 'online'
  },
  'online-reputation-management': {
    title: 'Online Reputation Management Company Bangalore',
    description: 'Leading ORM services in Bangalore to build, protect, and repair your brand image with proactive reputation management solutions.',
    longDescription: `
      <h2>Online Reputation Management Company Bangalore</h2>
      <p>Are you looking for an ORM Agency in Bangalore to build your brand image and proactively create a connection with your customers? Whether you are a business house, individual, or any professional looking to expand your online popularity or counter negativity online, you have landed at the right place. Put your faith in IM Solutions ORM company Bangalore to create an impactful online reputation for you. You don't have to apprehend any negativity online now onwards within our watch.</p>
      
      <p>IM Solutions is a leading Online Reputation Management Company Bangalore serving businesses of all sizes—big, midsize, small, and start-ups with a complete range of online public relations, brand management, and digital marketing solutions. We offer the best reputation repair solution and brand management services available in the market. Our goal is to showcase all the good things your brand has to offer, adding value to the lives of people.</p>

      <h3>Why Online Reputation Management Matters</h3>
      <p>The Internet can be misused to trash your brand image and create a negative thread, like a garbage bin where anybody can post negative comments about you. Such negative comments are not only a nuisance but also can severely damage your brand's credibility and business opportunities. In a crisis like this, IM Solutions comes to the rescue of your brand, business, and ultimately, fights back against all the false rumours on the web about your brand.</p>
      
      <p>IM Solutions, a leading Online Reputation Management Services Bangalore, specializes in Online Reputation Management (ORM) by effectively combating negativity such as bad reviews, hate blogs, unpleasant testimonials, and scam allegations that could harm your brand's credibility. Our comprehensive ORM services in Bangalore are designed to promote, protect, and defend your online reputation using advanced techniques trusted by top global PR firms.</p>

      <h3>Comprehensive ORM Solutions</h3>
      <p>As a trusted Social Media Marketing Agency in Bangalore, we offer end-to-end Online Reputation Management Services tailored to shape public perception across digital platforms. From social media to Search Engine Result Pages (SERPs), we ensure your brand consistently puts its best foot forward.</p>
      
      <p>Our ORM Services Bangalore include Brand Reputation Management, where we focus on amplifying positive content, creating new engaging media, managing active social profiles, and participating in forums and blogs. We also specialize in addressing and mitigating negative online feedback effectively.</p>
      
      <p>We continuously track and monitor all online conversations around your brand, providing timely responses and strategic campaigns that help maintain a strong digital presence. With clients across various industries, IM Solutions empowers businesses to maintain a stellar online image with the expertise of a top-tier Social Media Optimization Company.</p>

      <h3>Our ORM Services</h3>
      
      <h4>Personal Reputation Management</h4>
      <p>If you exist, you exist online too today! We cover Online reputation management services for everyone—Be it politicians, bureaucrats, lawyers, celebrities, business executives, world leaders, and almost everyone on this earth. Our personal reputation management solutions include protection against search result disasters, online reputation repair, Wikipedia management, and much more.</p>
      
      <h4>Brand Protection</h4>
      <p>Your brand is your biggest and most valuable asset. We don't just repair, we shield your brand's reputation. We understand that your brand symbolizes all the core values of the foundation of your business. We offer a complete list of solutions for its proper maintenance and protection to safeguard your digital assets.</p>
      
      <h4>Push Down Negativity</h4>
      <p>With our top-notch solutions for negative reviews, we counter negative reviews and other forms of online negativity with strategic tactics that push down negativity from the online space. We ensure that your business or brand won't get impacted by the negative Google search results in the due course of time.</p>
      
      <h4>Repair Reputation</h4>
      <p>Fixing your online reputation can make an enormous difference in the quality and quantity of opportunities that come your way. Online reputation repair requires a strategic and thoughtful execution. We are experts in online reputation repair, creating a positive brand image for your business and brand. We assist in rebuilding trust and credibility in the digital space.</p>
      
      <h4>Review Management</h4>
      <p>We handle all the collected reviews online and manage the scaling reviews by classifying them. After the classification, each review is analyzed and acted upon. We respond to all the queries of customers and respond to all their feedback appropriately, which is very integral for your business. Our goal is to turn negative experiences into positive outcomes.</p>
      
      <h4>Monitor Online Criticism</h4>
      <p>We centralize all reviews from different platforms across all industries, providing enterprises with a simple, comprehensive solution for their review management. We monitor reviews from the top review sites on the web on a daily basis. We notify you as soon as there is any review and respond to it promptly. Our monitoring ensures no conversation about your brand goes unnoticed.</p>

      <h3>Why Choose IM Solutions? Best Online Reputation Management Company</h3>
      <p>Our Online Reputation Management (ORM) proactively builds brands and creates a better connection with your customers, establishing an impactful online reputation for your business. IM Solutions, being a premier digital advertising agency, has the knowledge to deal with publicity quietly yet very effectively. Our experts work to creatively douse unfavorable situations with tactful processes so that there is no trail whatsoever about the activity.</p>
      
      <p>We have become one of the best in the Online Reputation Management industry over the years because we work to ensure result-oriented digital marketing solutions and develop online reputation for your brand. We understand each brand is unique and their requirements are also different. That is why we provide customizable solutions for your business. We negate the negative with online strategies. We start by identifying the problem source, monitoring reviews, analyzing feedback and then building a reputation.</p>

      <h3>IM Solutions Advantages</h3>
      <p>IM Solutions offers the following advantages over other reputation management companies:</p>
      <ul>
        <li>Proactive online reputation management solutions</li>
        <li>In-house outsourcing solution by experts</li>
        <li>Receive notifications through trusted alerts and reports</li>
        <li>Customizable scalable solutions</li>
        <li>Strengthening and building reputation continuously</li>
        <li>24/7 monitoring and rapid response</li>
      </ul>

      <h3>Our Work Process for ORM</h3>
      <p>We assist businesses in developing the respect and trust they have gained. Trust is a very perishable asset and we help you preserve it through our comprehensive approach:</p>
      <ul>
        <li>We help you stay transparent in your online as well as offline activities, so that critics do not get any chance to spread bad remarks against your business</li>
        <li>Our team reacts politely and quickly to ensure small issues do not become major concerns</li>
        <li>We strive to understand sentiments of your detractors so that your business can create better brand messages</li>
        <li>We take stern action against illegal behavior and against those who put false information on the web against your business, preventing such incidents from happening again</li>
      </ul>

      <h3>ORM Techniques We Use</h3>
      <p>We use various methods to improve your brand's online reputation:</p>
      <ul>
        <li><strong>Removal of Negative Content:</strong> Strategic suppression of harmful content</li>
        <li><strong>Review Improvement:</strong> Systematic approach to improve ratings and reviews</li>
        <li><strong>Content Design and Development:</strong> Creating positive, engaging content</li>
        <li><strong>Influencer Publications:</strong> Leveraging influencer networks</li>
        <li><strong>Profile Development:</strong> Building strong, positive online profiles</li>
        <li><strong>Social Media Management:</strong> Active presence across platforms</li>
      </ul>

      <h3>Contact & Next Steps</h3>
      <p>Ready to protect and enhance your online reputation? Let IM Solutions be your partner in building a stellar digital presence. Contact us now:</p>
      <ul>
        <li><strong>Phone:</strong> +91 888 056 4488</li>
        <li><strong>Email:</strong> info@imsolutions.mobi</li>
        <li><strong>Corporate Office:</strong> #122, 8th Main Road, Bangalore</li>
      </ul>
      
      <p>Don't let negative content define your brand. Contact us today for a free reputation audit and customized ORM strategy that protects and elevates your online presence!</p>
    `,
    features: [
      'Brand Monitoring & Alerts',
      'Review Management & Response',
      'Negative Content Suppression',
      'Personal Reputation Management',
      'Brand Protection Services',
      'Crisis Management',
      'Social Media Monitoring',
      'Reputation Repair & Recovery',
      'Wikipedia Management',
      'SERP Management',
      'Influencer Outreach',
      'Content Creation & Publishing'
    ],
    benefits: [
      'Enhanced Brand Trust & Credibility',
      'Positive Online Presence',
      'Crisis Prevention & Mitigation',
      'Increased Customer Confidence',
      'Competitive Edge in Market',
      'Improved Search Results',
      'Business Growth & Opportunities',
      'Proactive Reputation Building',
      '24/7 Monitoring & Protection',
      'Customizable Scalable Solutions',
      'Expert In-House Team',
      'Transparent Reporting'
    ],
    category: 'online'
  },
  'website-design-development': {
    title: 'Best Website Design & Development Company in Bangalore',
    description: 'Leading website design and development company in Bangalore creating responsive, SEO-friendly, conversion-focused websites that drive business growth.',
    longDescription: `
      <h2>Website Design Company In Bangalore</h2>
      <p>We design the right & interactive website for you that meets your requirements as well as your target audience. How many customers do you have on your website? The first impression of your website can make a huge difference on your potential customers! A website is not just a digital presence. It is a channel that 'talks' to your visitors. That is why it takes just a second for visitors to judge if a website is professional and trustworthy. Don't gamble on your brand's website. It can cost you your customers! It can impact the conversion rate and prevent bouncing off from your website.</p>

      <h3>Web Design Company and Web Development Company</h3>
      <p>As a leading web designing service Company, IM Solutions specializes in developing a website that is intuitive and functional to your visitors' needs. IM Solutions is the no. 1 website design company located in Bangalore which not only builds unique marketable designs but also provides ultimate website development services and support. We design responsive websites for our clients that not only look aesthetically pleasant but also help you with better conversion rates and ultimately giving you a much higher return on your investment in getting a web presence for your business.</p>
      
      <p>Your business is unique, so why have a website that is just like any other website? Each client's demands are different and we deliver accordingly. Each website we design for our clients is strategically crafted. To provide users an immersive digital brand experience, our websites have the best blend of aesthetics and quality content telling your visitors about the amazing things your brand has to offer.</p>

      <h3>Our Web Design Services Include</h3>
      <p>In short, our web design services are:</p>
      <ul>
        <li>Custom made for you</li>
        <li>SEO friendly websites</li>
        <li>User-friendly navigation</li>
        <li>100% responsive websites</li>
        <li>HD quality web design and graphics</li>
        <li>Up to date on the latest technologies</li>
      </ul>

      <h3>Web Design Services and Development Services</h3>
      
      <h4>Hosting And Support</h4>
      <p>We specialize in cloud hosting. Our service has more to offer in terms of speed and advanced search engine optimization techniques. We offer a complete website support system to keep your website safe and secure and updated regularly. Thus, our website design service includes a complete host of care from start to finish.</p>
      
      <h4>Conversion Focus Design</h4>
      <p>Our goal is always to create a really great user experience, optimized for maximum conversion. We also provide websites that are super optimized for search traffic on both desktop and mobile. Using the right strategy of SEO combined with content, we work to get the website right to the top and drive meaningful conversions.</p>
      
      <h4>Multi-Sector Websites</h4>
      <p>As a premier website design and development company, we have worked with various clients from across different sectors and made websites for real estate, hospitality, education, corporate websites, etc. We have experience in developing websites from diverse domains. We consult the best in the industry to deliver tailored solutions.</p>
      
      <h4>Solid Content</h4>
      <p>With IM Solutions content service, you gain an upper hand not only in terms of highly appealing and readable content but also in the search rankings, helping you attract and convert more of your prospects. We provide solid content for your website through our team of content writers working on creating engaging, SEO-optimized copy.</p>
      
      <h4>Creative Graphics</h4>
      <p>Visuals speak louder than words. That's why we provide a bespoke & creative solution for every new web design. We aim to design a site which stands above the competition in creative graphics and functionality. Our creative design includes going out of the box to create unique, effective iconography and visual elements.</p>
      
      <h4>Mobile Ready Web Design</h4>
      <p>More than desktops, people these days prefer using mobile and tablet browsing. Because of this shift in consumer online behavior, your digital marketing strategy needs to shift to focus on mobile as well. It is important that your new website design performs on all devices. Our websites are built responsive from the ground up, ensuring perfect performance across all screen sizes.</p>

      <h3>Why Choose IM Solutions? Best Website Design and Development Company</h3>
      <p>Your website is the most important part of your online identity. It represents the first impression of your company and speaks volumes about your work, not just in terms of the information that it carries but more importantly through the experience it gives to website visitors. So your business cannot neglect its website.</p>
      
      <p>We aim to make your online business experience smooth, speedy and efficient. With our strategic marketing approach, we make your business stand out from the competition and increase sales. Our mission is to make you the market leader by designing fully customized and responsive websites that are valuable and economical at the same time. We provide the best professional website designs and offer the best E-commerce website designing services as per the need of the client. Our dedicated and expert team of professionals with insurmountable knowledge will surely help you to live your dream and serve your purpose.</p>

      <h3>Our Portfolio for Website Designing in Bangalore</h3>
      <p>Check out our most recent projects to see why we are the Best Web Design Company in Bangalore in the following fields:</p>
      <ul>
        <li><strong>Real Estate:</strong> Property showcase websites with virtual tours and lead capture</li>
        <li><strong>Interiors:</strong> Visual portfolio websites for interior designers</li>
        <li><strong>Photography:</strong> Gallery-focused websites for photographers</li>
        <li><strong>School/Education:</strong> Educational platforms with student portals</li>
        <li><strong>Industry:</strong> Corporate and manufacturing websites</li>
        <li><strong>E-Commerce:</strong> Full-featured online stores with payment integration</li>
      </ul>

      <h3>What Does a Web Design Company Do?</h3>
      <p>Here is a list of what our Web Design Company does:</p>
      <ul>
        <li><strong>Programming:</strong> The programmer will create the website with clean, efficient code</li>
        <li><strong>Technical Support:</strong> The technician will provide support for easy navigation and coordination of the front and back ends of the site</li>
        <li><strong>Content Development:</strong> Content developers will fill in the website content with engaging copy</li>
        <li><strong>Graphic Design:</strong> Graphic designers will add graphics for visual appeal and brand consistency</li>
        <li><strong>SEO Optimization:</strong> Search engine optimization specialists will enhance your website's online visibility</li>
      </ul>

      <h3>How to Choose a Web Development Company</h3>
      <p>Here are some basic tips to choose a web development company:</p>
      <ul>
        <li>Start by deciding what type of website is required for your business. Your objective should be clear and it should communicate well to your customers/viewers</li>
        <li>Work with a credible website developer. This includes intensive research and reviews</li>
        <li>Pick a company that will allow non-obligatory maintenance. Many companies develop websites but also make it mandatory for clients to maintain their website with them. Be aware of the policy terms. Choose a developer that will allow flexible maintenance options</li>
      </ul>

      <h3>Contact & Next Steps</h3>
      <p>Ready to create a stunning website that drives results? Let IM Solutions transform your digital presence. Contact us now:</p>
      <ul>
        <li><strong>Phone:</strong> +91 888 056 4488</li>
        <li><strong>Email:</strong> info@imsolutions.mobi</li>
        <li><strong>Corporate Office:</strong> #122, 8th Main Road, Bangalore</li>
      </ul>
      
      <p>Contact us today for a free consultation and let's discuss how we can create the perfect website for your business. We're committed to delivering websites that not only look great but drive real business results!</p>
    `,
    features: [
      'Responsive Web Design',
      'User Experience Optimization',
      'E-Commerce Integration',
      'CMS Development',
      'Performance Optimization',
      'Security Implementation',
      'SEO-Friendly Architecture',
      'Cloud Hosting Solutions',
      'Custom Graphics & UI',
      'Mobile-First Design',
      'Content Management',
      'Ongoing Support & Maintenance'
    ],
    benefits: [
      'Professional Online Presence',
      'Improved User Engagement',
      'Higher Conversion Rates',
      'Mobile-Friendly Experience',
      'SEO-Optimized Structure',
      'Scalable Architecture',
      'Enhanced Brand Credibility',
      'Faster Load Times',
      'Better Search Rankings',
      'Reduced Bounce Rates',
      'Maximum ROI',
      'Multi-Device Compatibility'
    ],
    category: 'online'
  },
  'social-media-optimization': {
    title: 'Social Media Optimization Company Bangalore',
    description: 'Leading SMO agency in Bangalore providing expert social media optimization services to increase brand visibility, engagement, and drive traffic.',
    longDescription: `
      <h2>Social Media Optimization Agency</h2>
      <p>Social media optimization is Search Engine Optimization (SEO) combined with Social Media. Walla! You get a Marketing Genie. Seeing is believing. Social media optimization makes people see your brand. As a Social Media Optimization Agency, we have the experience, insight, and knowledge to make your next social media campaign a winner. IM Solutions has orchestrated a few of the most viral marketing campaigns on the Internet. Data is the new oil, and we have the data.</p>

      <h3>Expert Social Media Optimization Services</h3>
      <p>Specializing in Social Media Optimization Services, IM Solutions attempts to build your business's stature and increase your branding. Presenting your business's best brand value, we help design it in such a way that it becomes a buzzfeed on the social media platforms. Our social media optimization tools let you know when people start including your brand in the chatter. We provide an affordable Social Media Optimization Company in Bangalore for business enhancement that further enhances your visibility on the internet. To make a footprint in the competitive market, we develop improved brand awareness that your business can rely upon. Our SMO management services for business are the best in the industry.</p>
      
      <p>Our Social Media Optimization Services in Bangalore include reports of the progress on social media monitoring from time to time to track the progress of your social media performance. The only thing that you have to do is to tell us about your requirements, and then it is our task to spread your platform widely on these social media sites.</p>
      
      <p>Our SMO Agency Bangalore services cover an array of activities that can be engineered around your brand to make the customers hit the link to your website and compulsively make a purchasing decision. With our integrated communication system, we multiply social media visitors and divert them to your website. Our Social Media Marketing Agency in Bangalore is designed for age-specific, demography-specific, as well as different themes that can create a magnetic pull towards your website.</p>

      <h3>Our Core SMO Services</h3>
      
      <h4>Content And Profile Optimization</h4>
      <p>Our social media optimization services include content optimization which ensures that you get quality content with engaging concepts and designs. Profile optimization includes presenting your company or business's profile in the best way to enhance your brand presence. We craft compelling content that resonates with your target audience and drives engagement across all platforms.</p>
      
      <h4>Brand Awareness Building</h4>
      <p>Social Media Optimization is also a great tool to build your brand awareness. Since people can easily find what people are saying about a product or a service, building a stronger brand for your business becomes a crucial part of our Social media optimization service. We create campaigns that increase visibility and establish your brand as an authority in your industry.</p>
      
      <h4>Strategic Communication</h4>
      <p>Social Media is the most used form of communication online. People use it for all kinds of communication—from business to personal via text, pictures, videos and many more. IM Solutions makes best use of Social Media Optimization for effective communication, ensuring your message reaches the right audience at the right time.</p>
      
      <h4>Authentic And Publicized Campaigns</h4>
      <p>IM Solutions works to make authentic social media campaigns and deliver them to the right audience. We want our ads to speak to customers so that they can relate to them. Thereby creating genuine ads for everyone and not just marketing. Our campaigns focus on building real connections with your audience.</p>
      
      <h4>Offsite SMO</h4>
      <p>Off-page SEO is equally important and necessary. Off Site SEO refers to actions you can take to promote your website on the web. We use proven methods such as links pointing to your website from other websites and social media marketing. This helps build authority and drives referral traffic to your site.</p>
      
      <h4>Onsite SMO</h4>
      <p>Our onsite SMO is designed to optimize the social media presence of your website and to hold the attention of website visitors. To make your website more user-friendly, we include added features such as blogs, attractive content, and provide share and bookmarking buttons that encourage social sharing.</p>

      <h3>Why IM Solutions? Best Social Media Optimization Service in Bangalore</h3>
      <p>As a top Social Media Optimization Company, IM Solutions works to provide the best service in promoting your business through popular Social Media Platforms. We work to give 100% positive leads towards active sales. Irrespective of the size of your business, we help you boost your presence and performance on various social media platforms.</p>
      
      <p>We use our specialization in social media optimization services to draw the attention of massive internet users who log into social networking sites for different purposes towards your businesses. Our social media optimization services not only assist you by maximizing the traffic and site rankings of your website but it creates a perfect marriage between Social Media Optimization and SEO.</p>
      
      <p>With our integrated communication system, we multiply social media visitors and divert them to your website. IM Solutions' social media marketing campaigns are designed for age-specific, demography-specific as well as different themes that can create a magnetic pull towards your website.</p>

      <h3>When You Hire Us, You Will Have:</h3>
      <ul>
        <li>Your SER-search rankings increase</li>
        <li>Website traffic will increase</li>
        <li>Increase in visitor to lead conversion ratio</li>
        <li>Increase in your marketing budget's ROI-Return on Investment</li>
      </ul>

      <h3>How We Optimize Social Media Marketing</h3>
      <p>To optimize social media marketing, here are the crucial things we do:</p>
      <ul>
        <li><strong>Strategy Development:</strong> Develop a social media advertising strategy with clearly defined goals and objectives</li>
        <li><strong>Keyword Research:</strong> Identify the phrases and topics your target audience is searching for on the internet. This helps in creating relevant content for them</li>
        <li><strong>Profile Optimization:</strong> Optimize your website social media profile by making it easily accessible and informative</li>
        <li><strong>Quality Content:</strong> Create quality content because it is what drives social media. Quality content is important in social media marketing to succeed</li>
      </ul>

      <h3>What is Social Media Optimization in SEO?</h3>
      <p>Search engine optimization and social media optimization are two different things. While SEO helps in gaining overall online visibility, SMO is about engaging with customers on the social media platforms. In Search Engine Optimization, Social Media Optimization means:</p>
      <ul>
        <li>Your company or business's social media profile ranking comes up early in search engine results. Thus you gain visibility</li>
        <li>Social Media Optimization gives a better image to your company's profile. Thus when people look up to know more about your company in the search engine, they will have a good impression about your company</li>
        <li>In SEO, SMO helps increase brand or product awareness by using social media channels and communities. It includes the use of social media sites, video sites, RSS feeds, bookmarking sites and blogging sites for driving traffic to the website and improving the site's organic search results</li>
      </ul>

      <h3>Contact & Next Steps</h3>
      <p>Ready to amplify your social media presence and drive meaningful engagement? Let IM Solutions transform your social media strategy. Contact us now:</p>
      <ul>
        <li><strong>Phone:</strong> +91 888 056 4488</li>
        <li><strong>Email:</strong> info@imsolutions.mobi</li>
        <li><strong>Corporate Office:</strong> #122, 8th Main Road, Bangalore</li>
      </ul>
      
      <p>Contact us today for a free consultation and let's discuss how we can optimize your social media presence to drive traffic, increase engagement, and boost your brand visibility across all platforms!</p>
    `,
    features: [
      'Profile Optimization',
      'Content Strategy & Creation',
      'Community Management',
      'Analytics & Reporting',
      'Trend Analysis',
      'Engagement Optimization',
      'Onsite & Offsite SMO',
      'Brand Awareness Campaigns',
      'Social Media Monitoring',
      'Keyword Research',
      'Multi-Platform Management',
      'ROI Tracking'
    ],
    benefits: [
      'Increased Followers & Reach',
      'Higher Engagement Rates',
      'Enhanced Brand Awareness',
      'Community Building',
      'Social Proof & Credibility',
      'Customer Insights',
      'Improved Search Rankings',
      'Increased Website Traffic',
      'Better Lead Conversion',
      'Cost-Effective Marketing',
      'Real-Time Communication',
      'Competitive Advantage'
    ],
    category: 'online'
  },
  'social-media-marketing': {
    title: 'Social Media Marketing Agency in Bangalore',
    description: 'Leading social media marketing company in Bangalore offering comprehensive SMM services to boost visibility, engagement, and drive business growth.',
    longDescription: `
      <h2>Social Media Marketing Agency in Bangalore</h2>
      <p>Over 90% of brands today market themselves on Facebook, and more than 6 million business-related images are uploaded online daily. Gone are the days when social media was purely for entertainment. It has evolved into a powerful business tool to showcase products, engage meaningfully with clients, increase sales, and establish a brand's authority in its niche.</p>
      
      <p>In today's digital age, platforms like Facebook, YouTube, Instagram, and others have transformed how people think, shop, and make decisions. Social media has completely reshaped the marketing landscape. If you're a business owner, investing in a Social Media Marketing Company in Bangalore can be the game-changer for your brand. Social media marketing is about connecting, interacting, and growing alongside your customers. If your business isn't active and engaging on these platforms, you're missing out on a major opportunity for brand awareness and customer retention.</p>

      <h3>Expert Social Media Management</h3>
      <p>At IM Solutions, a leading Social Media Management Company in Bangalore, we offer services that help brands understand what people are saying about their products and services online. We help you determine how and when to engage with your audience, manage conversations, and design strategies tailored to each social platform. As a full-service Social Media Agency in Bangalore, we understand that social media is at the heart of your online presence.</p>
      
      <p>Our dedicated team of experts—strategists, content creators, and "social" consultants—ensures that your website, mobile app, PR, SEO, media, and digital advertising all contribute to a seamless, ongoing dialogue with your customers.</p>
      
      <p>Being a top-tier Social Media Advertising Company in Bangalore, we provide comprehensive social media marketing services that boost visibility, engagement, and leads. We advertise your brand at the right place and at the right time with carefully crafted campaigns. From content creation and community management to ad strategy and analytics, we take care of everything.</p>

      <h3>Tailored Social Media Strategies</h3>
      <p>We tailor our social media strategies to align with your brand goals and target audience. Our services include content curation (graphics, blogs, videos), brand mention monitoring, customer interaction (comments, reviews, Q&As), post scheduling, and calendar management for publishing. As a trusted Social Media Marketing Agency in Bangalore, we consistently track your social media performance, analyze metrics, and run experiments to fine-tune content and strategy for better results.</p>

      <h3>Our Core SMM Services Include</h3>
      
      <h4>Social Media Profile Management</h4>
      <p>Enhance your social media profile and polish your public profile. IM Solutions helps keep your social media presence available to customers 24/7. We do it automatically and also manage hundreds of social media accounts efficiently, ensuring consistent brand messaging across all platforms.</p>
      
      <h4>Analytics Monitoring</h4>
      <p>Social media accounts involve a lot of data. Handling it can become complex. As a social media marketing agency, IM Solutions also does analytic monitoring to know if the contents are effective and makes active adjustments of content if necessary. We track metrics that matter and optimize campaigns for maximum ROI.</p>
      
      <h4>Popular Social Media Platform Coverage</h4>
      <p>61% of the population has at least one social media profile, and over half have two or more. Investing in Social Media sites will give a high chance of reaching customers that you may not have reached otherwise. IM Solutions will create the best advertising on popular platforms including Facebook, Instagram, Twitter, LinkedIn, Pinterest, and YouTube.</p>
      
      <h4>Graphics Creation</h4>
      <p>Graphics are popular methods of communication on social media. Attractive visuals are important to catch the users' attention. IM Solutions has a team of expert graphic designers to create and share the most attractive graphics online, ensuring your content stands out in crowded social feeds.</p>
      
      <h4>Market Targeting</h4>
      <p>After content is created and shared, the next step is identifying market audiences. Marketing strategies are executed through social media platforms and it involves creating more content that target audiences need and consume. We use advanced targeting to reach the right people at the right time.</p>
      
      <h4>Content Creation</h4>
      <p>Right social media marketing requires right content. As a social media agency, we create engaging and attractive content related and connected to your business goals. These contents are posted regularly on different social media platforms for business-client engagement and conversion.</p>

      <h3>Why Choose IM Solutions? Best Social Media Marketing Company in Bangalore</h3>
      <p>Most businesses miss the true potential social media can bring for them. Don't miss out on the true value that social media brings to the table for your business. As one of the top Social Media Marketing Companies in Bangalore, IM Solution's social media marketing campaigns act as a lead generator and a great engagement strategy to increase your brand awareness.</p>
      
      <p>We design social media marketing campaigns in a way that will accelerate your lead generation and client retention and ensure that your audience is tuned into your message and is constantly engaging with a brand that offers them additional value and interest beyond the initial point of connection.</p>
      
      <p>With IM Solutions Social Media Marketing services, your business will grow and your brand awareness will increase. It will boost website traffic. Social media marketing also allows for a more meaningful and engaging relationship between business and customers. With our Social Media Marketing strategy, we can assure you will get 100% successful social media marketing results.</p>

      <h3>Comprehensive Platform Coverage</h3>
      <p>Our in-house expertise includes the best Social Media Marketing strategies to improve your company's social media presence. Our Social Media Marketing campaigns cover Facebook, Instagram, Pinterest, YouTube, Twitter, LinkedIn and many more. Depending on your requirement, we also design customized social media marketing specifically developed for your brand and your market. We provide complete social media marketing coverage.</p>
      
      <p>We therefore can say we offer the most impeccable marketing with active social media providing the best social media marketing. As a team of social media experts, we create the most direct and effective strategy for you to connect with your target audience, increase sales and gain publicity. As the best Social Media Marketing service company, we help you advertise at the right place and at the right time!</p>

      <h3>Benefits of Social Media for Business</h3>
      <p>Let's start with one simple fact—All businesses need a social media presence. Social media is an essential piece of your business digital marketing strategy. It helps in connecting with your customers, increase awareness about your brand, and boost your leads and sales. With more than five billion people around the world using social media every month, it's no passing trend. Benefits include:</p>
      <ul>
        <li>Social media boosts your online visibility among potential customers. It connects you to a wide audience by using a large amount of time and effort</li>
        <li>With relevant content, it will build your brand's authority and give a positive first impression through social media, showing that your business is trustworthy, knowledgeable, and approachable</li>
        <li>It helps build authenticity of your brand and business. Customers aren't interested in businesses that publish dry, corporate-style social media posts</li>
      </ul>

      <h3>Contact & Next Steps</h3>
      <p>Ready to transform your social media presence and drive real business results? Let IM Solutions create a winning social media strategy for your brand. Contact us now:</p>
      <ul>
        <li><strong>Phone:</strong> +91 888 056 4488</li>
        <li><strong>Email:</strong> info@imsolutions.mobi</li>
        <li><strong>Corporate Office:</strong> #122, 8th Main Road, Bangalore</li>
      </ul>
      
      <p>Contact us today for a free consultation and let's discuss how we can accelerate your lead generation, boost brand awareness, and create meaningful engagement with your customers across all major social media platforms!</p>
    `,
    features: [
      'Content Creation & Curation',
      'Campaign Management',
      'Paid Social Advertising',
      'Influencer Partnerships',
      'Community Management',
      'Performance Analytics',
      'Graphics & Visual Design',
      'Multi-Platform Coverage',
      'Brand Mention Monitoring',
      'Post Scheduling & Calendar',
      'Customer Interaction Management',
      'Strategy Development'
    ],
    benefits: [
      'Enhanced Brand Visibility',
      'Increased Customer Engagement',
      'Lead Generation & Sales',
      'Brand Authority Building',
      'Customer Retention',
      'Cost-Effective Marketing',
      'Wider Audience Reach',
      'Improved Brand Loyalty',
      'Real-Time Customer Insights',
      'Competitive Advantage',
      'Authentic Brand Connection',
      'Measurable ROI'
    ],
    category: 'online'
  },
  'software-design-development': {
    title: 'Software Development Company Bangalore',
    description: 'Premier custom software development company in Bangalore providing end-to-end software solutions from concept to code and development to deployment.',
    longDescription: `
      <h2>Software and Website Development Company</h2>
      <p>We live in an era of fast-paced technology and technology has a lot of influence on the businesses and how they operate. For a successful business, online platforms and mobile apps have become a necessity since they provide a pathway for your clients to contact you and shop for your items and administrations. To create a flawless-running software product is an essential element of every business operation and the software transforms it into an organized development structure. But the foundation of the journey will depend on whether you'll find the right team to do it.</p>

      <h3>Premier Custom Software Development Services</h3>
      <p>IM Solutions is the best software development company providing premier custom software development services to clients from different sectors. Software design and development is paramount to a successful business. We understand how important this process is. IM Solutions always remains at the frontier in catering to different types of software development to address the intricate needs of the high-tech era.</p>
      
      <p>As such, we are able to keep our services technologically advanced, competitive, and result-oriented. We work to speed up our client's processes, improve business relationships, and enhance their business growth using myriads of custom software solutions from small to large-scale.</p>

      <h3>We Are With You – From Concept to Code</h3>
      <ul>
        <li>Our focus is on protecting your intellectual property rights (IPR) and for that we create a stringent non-disclosure act (NDA)</li>
        <li>We have mastered agile development techniques</li>
        <li>Technologies we use include .NET Technologies - C#, ASP.NET, VB.NET, Flex, Silverlight & Ajax, SOA & SaaS, BizTalk Server / MS CRM, SharePoint server/ MOSS, LAMP/WAMP - PHP, MySQL, and JAVA & J2EE</li>
        <li>We have the expertise to offer software which is scalable and customized</li>
        <li>Databases we are proficient working with: Microsoft SQL Server, MySQL, Oracle, SQL Azure, PostgreSQL, MongoDB</li>
      </ul>

      <h3>Our Software Development Process</h3>
      
      <h4>Maintenance And Support</h4>
      <p>Apart from software development services, we offer a full range of support services to meet your company's needs. We provide real-time software maintenance and support service for all our clients to resolve all the technical issues. The software maintenance and support prioritizes Proactive software maintenance, On-going bug fixes and DevOps.</p>
      
      <h4>Software Development</h4>
      <p>IM Solution offers a blend of technology knowledge, data mining and analytical tools to help you create and transform applications, processes and operations in line with your unique possibilities. Our top-notch and innovative software solutions are economical, with priority on On-time delivery, Privacy and a dedicated staff.</p>
      
      <h4>Software Consulting</h4>
      <p>We have numerous years of experience in software consulting services undertaking a comprehensive analysis of your existing business system and designing software adapting to the complex market dynamics. We map out plans of new components that include flexibility and cost-effectiveness for your business goals and IT strategy.</p>
      
      <h4>Software Integration</h4>
      <p>As technology develops, competition also develops in the market. Adopting new technologies and processes means overcoming new challenges, often requiring complicated software integration challenges. We have the best software integration engineers to handle your integration obstacles, from architecture design to testing to execution.</p>
      
      <h4>Software Solution</h4>
      <p>Based on the needs of every business, we identify the required software and deliver end-to-end software products & solutions from concept to code and development to deployment. We have a team of well-versed software development experts that will design custom software solutions to accelerate workflow optimization and boost revenue.</p>
      
      <h4>Custom Software</h4>
      <p>IM Solutions specializes in delivering high-grade custom software to a wide range of clients. We help businesses solve complex challenges with reliable and agile digital solutions. Our strong technical team is strongly focused on developing customer-oriented software solutions like Web application solutions, Mobile application solutions and UI/UX.</p>

      <h3>Why Choose IM Solutions? Best Software Design and Development Company in Bangalore</h3>
      <p>As a leading software development company, we combine technical expertise with business acumen to deliver solutions that drive growth and efficiency. Our agile methodology ensures flexibility, transparency, and on-time delivery while our dedicated teams work closely with you throughout the development lifecycle.</p>

      <h3>Frequently Asked Questions</h3>
      
      <h4>Is it necessary for me to be tech-savvy if I want to order development of a software application?</h4>
      <p>You need not have any experience in software development to get your project done. However, if you are aware of the process, it would certainly be welcomed. But, we are always prepared to guide you through the whole process so that you fully understand how it works. All you will have to do is provide us insight into the software product you want to develop.</p>
      
      <h4>What is the benefit of using your services instead of using my own team?</h4>
      <p>Using your own team for software development work would be an excellent option but it will also be a time-consuming endeavor where you will have to initiate the recruitment process and the cost that you will have to bear for maintaining your own development team will also be relatively high. By appointing us for software development work you will be able to save money on the same and get the product completed within set timeframe.</p>
      
      <h4>Will I be provided with a demo version of the software that I can test?</h4>
      <p>We will be using Agile technology for creating an operating software and new additions in the software will be done as and when required. As such, you will always be able to test as well as examine the software at your end.</p>
      
      <h4>Can I share observations for improving the software that you will be making?</h4>
      <p>Yes certainly. Due to use of Agile methodology we will be able to easily make changes in the software product right during the development phase itself. We encourage you to share your feedback so that we can further enhance the product.</p>
      
      <h4>How you safeguard confidentiality and protect intellectual property rights?</h4>
      <p>We sign NDA and IP contract with our clients and the same is also signed by our employees. Moreover, we invest time on auditing processes we have in place and also take time to train employees so that they remain abreast with all the required guidelines. Thus, you can rest assured about security of your intellectual property.</p>
      
      <h4>Do you provide documentation?</h4>
      <p>You will be provided with SRS documentation. In addition, the code that will be made available will have comments that will make it easy to comprehend what the code does. You can rest assured that the documentation we will provide will be completely self-explanatory and comprehensive.</p>

      <h3>Contact & Next Steps</h3>
      <p>Ready to transform your business with custom software solutions? Let IM Solutions bring your vision to life with our expertise and dedication. Contact us now:</p>
      <ul>
        <li><strong>Phone:</strong> +91 888 056 4488</li>
        <li><strong>Email:</strong> info@imsolutions.mobi</li>
        <li><strong>Corporate Office:</strong> #122, 8th Main Road, Bangalore</li>
      </ul>
      
      <p>Contact us today for a free consultation and let's discuss how we can develop custom software solutions that accelerate your workflow, boost revenue, and solve your complex business challenges!</p>
    `,
    features: [
      'Custom Development',
      'Web Applications',
      'Mobile Apps (iOS & Android)',
      'API Integration',
      'Cloud Solutions',
      'Maintenance & Support',
      'Software Consulting',
      'Agile Development',
      'UI/UX Design',
      'DevOps Implementation',
      'Database Management',
      'Software Integration'
    ],
    benefits: [
      'Tailored Solutions',
      'Improved Efficiency',
      'Cost Savings',
      'Scalability',
      'Reliable Support',
      'Future-Proof Technology',
      'IP Protection & NDA',
      'On-Time Delivery',
      'Agile Flexibility',
      'Comprehensive Documentation',
      'Expert Technical Team',
      'End-to-End Solutions'
    ],
    category: 'online'
  },
  'geolocation-sms': {
    title: 'Geolocation Analytical SMS Services Bangalore',
    description: 'Advanced geolocation analytical SMS services in Bangalore for targeted messaging, wider audience reach, and effective customer communication.',
    longDescription: `
      <h2>Geolocation Analytical SMS</h2>
      <p>In the modern competitive business world, having a wide customer base is the key. To build a customer base, businesses need to maximize their outreach. Outreach can be made by targeting the right audience who are interested in your product or service and are looking out for it. This is truer for businesses with multiple departments with different target audiences. With the help of Geo-Analytical SMS, marketers can maximize their chance of reaching out to the right audience faster and have more effective communication. With the help of multiple operator-based filters to choose from, Geo-Analytical SMS lets you target the right audience at the right Geo-Location.</p>

      <h3>Our Core Analytical SMS Services</h3>
      
      <h4>Wider Audience Reach</h4>
      <p>The wider the audience, the better are the chances of finding potential clients. Our SMS services are designed for wider audience useful for Schools, Doctors and hospitals, Travel companies, Retailers, Agents, Banks, Tour operators, hosting and other service provider companies. We ensure your message reaches the maximum number of potential customers.</p>
      
      <h4>Automatic Bulk SMS Facility</h4>
      <p>Our automatic bulk SMS facility is fully computerized and can handle multiple inquiries so that you can focus on your core business. This allows you to deliver timely updates and news to your customers without manual intervention, ensuring efficiency and consistency in your communications.</p>
      
      <h4>Weekly Performance Report</h4>
      <p>IM Solutions provides weekly performance reports of the analytical SMS service. Reports are metrics and analysis to keep you informed of progress and returns. These detailed insights help you understand campaign performance and make data-driven decisions for optimization.</p>
      
      <h4>Target Specific Messages</h4>
      <p>We understand that each business is unique and has a different client base. We use extensive research to categorize data into different groups. Each message is target-specific based on business demands and customer base, ensuring maximum relevance and engagement.</p>
      
      <h4>Databases of Carrier-Wise Subscriber</h4>
      <p>Our carrier-wise subscriber database is exhaustive and computerized. It is further sub-categorized according to various parameters such as gender-based, personal, economic parameters, city-wise, social demographics, rural subscribers, and business numbers. This comprehensive segmentation allows for precise targeting.</p>
      
      <h4>Response Evoking SMS Messages</h4>
      <p>We have an in-house team of experts that work to develop highly effective and response-evoking SMS messages. We design each of our SMS with the best strategy and execute them in words that are bound to get the response from the audience, driving action and engagement.</p>

      <h3>Why Choose Us?</h3>
      <p>As a leading analytical SMS service provider in Bangalore, we are equipped with meeting the needs of multiple businesses irrespective of all sizes. We use data from reliable and authentic sources to maximize our customer outreach. Each analytical SMS service is based on market research and use of different types of segmentation while creating bulk SMS campaigns.</p>

      <h3>Advanced Targeting Capabilities</h3>
      <ul>
        <li>Intelligent filters operating in multiple platforms</li>
        <li>National and international travelers especially frequent flyers</li>
        <li>Shoppers from Tier 2 & 3 cities</li>
        <li>High income target group</li>
        <li>Target In-market Smartphone Buyers</li>
        <li>Affluent Fashionistas from metro cities</li>
        <li>Families in metro cities that live a modern urban life</li>
        <li>In-market App Downloaders</li>
      </ul>

      <h3>What is SMS Marketing?</h3>
      <p>SMS marketing or short message service marketing is a technique that uses text messaging to spread promotional messages based on permission. It provides updates on any new product in the market, any new updates. Customers are required to opt in to an automated system. The user's phone number is then stored. Promotional texts are sent to them. It also has links to an advertisement. A confirmation response is sent for opting in and out option included for potential future unsubscribing.</p>

      <h3>How Does SMS Marketing Work?</h3>
      <p>SMS marketing works by building a database of potential customers/subscribers. SMS marketing is an effective way of notifying people of any promotional offers, discounts and advertisements. It is also a great way to send reminders for any upcoming events and to engage your customers. SMS marketing is preferred to other email marketing and push-notification services for more than 60% of the customers because it reaches out to people without smartphones and internet. It is also preferable because it is a cheaper and cost-effective means of distribution.</p>

      <h3>SMS Campaign Tracking</h3>
      <p>SMS Campaign can be tracked to analyze its performance. IM Solutions has the right analytical tools. The tools give data on how many new subscribers have taken interest in your campaign, the number of users clicking links in your texts and the number of SMS sent. Our expertise provides you the right data and tools, so that you can tweak your campaigns for optimum performance. We provide reports categorized into Subscribers report, Campaigns report and Billing stats.</p>

      <h3>Benefits of SMS Marketing</h3>
      <p>SMS (or Short Message Service) is just as important to marketing as social media or brochures. The benefits of SMS marketing are:</p>
      <ul>
        <li>SMS marketing or Texts are opened up to 98% of the time and received by customers</li>
        <li>SMS marketing is cheaper and cost-effective and reaches a wider customer base</li>
        <li>SMS marketing is a mobile-friendly way of reaching out to a wider audience</li>
        <li>The number of cell phone users has increased. You can have a wider customer demographic through the benefits of SMS marketing</li>
        <li>SMS Marketing gives two-way business-customer engagements</li>
      </ul>

      <h3>Contact & Next Steps</h3>
      <p>Ready to maximize your customer outreach with geolocation analytical SMS? Let IM Solutions help you reach the right audience at the right location. Contact us now:</p>
      <ul>
        <li><strong>Phone:</strong> +91 888 056 4488</li>
        <li><strong>Email:</strong> info@imsolutions.mobi</li>
        <li><strong>Corporate Office:</strong> #122, 8th Main Road, Bangalore</li>
      </ul>
      
      <p>Contact us today for a free consultation and let's discuss how our geolocation analytical SMS services can help you build a wider customer base with targeted, effective communication!</p>
    `,
    features: [
      'Location-Based Targeting',
      'Real-Time Messaging',
      'Analytics Dashboard',
      'Campaign Management',
      'Compliance Tracking',
      'Integration Options',
      'Automatic Bulk SMS',
      'Carrier-Wise Database',
      'Multiple Platform Filters',
      'Weekly Performance Reports',
      'Target Segmentation',
      'Response Tracking'
    ],
    benefits: [
      'Targeted Messaging',
      'High Open Rates (98%)',
      'Immediate Response',
      'Cost-Effective',
      'Better Targeting',
      'Measurable Results',
      'Wider Audience Reach',
      'Two-Way Engagement',
      'Mobile-Friendly',
      'No Internet Required',
      'Timely Updates',
      'Data-Driven Insights'
    ],
    category: 'online'
  },
  'ai-advertising-agency': {
    title: 'AI Advertising Agency in Bangalore',
    description: 'Premier AI advertising agency in Bangalore transforming digital marketing through intelligent automation, machine learning, and data-driven strategies.',
    longDescription: `
      <h2>AI Advertising Agency Services in Bangalore</h2>
      <p>IM Solutions, based in Bangalore, is a premier AI advertising agency transforming digital marketing through intelligent automation and data-driven strategies. Leveraging artificial intelligence, the agency creates highly targeted, personalized campaigns that maximize engagement and return on investment for clients across industries.</p>
      
      <p>By harnessing machine learning, predictive analytics, and programmatic advertising, IM Solutions automates media buying, optimizes campaigns in real time, and delivers creative content tailored to audience behavior. This approach not only saves time but also ensures marketing budgets are spent efficiently.</p>
      
      <p>Serving startups and enterprises alike, IM Solutions combines Bangalore's tech expertise with local market knowledge to help businesses scale rapidly and stay competitive in today's dynamic digital landscape. With IM Solutions, brands gain smarter advertising solutions that adapt and evolve with changing consumer trends.</p>

      <h3>Our AI-Powered Services</h3>
      
      <h4>Print Design</h4>
      <p>We combine use of modern technology with meticulous execution for producing stylish cover designs, custom banners, flyer designs, outdoor billboards, brochures, marketing material, merchandise, and labels. Our AI-enhanced design process ensures optimal visual impact and brand consistency.</p>
      
      <h4>Banner Design</h4>
      <p>We design all types of banners in all sizes as per client's requirement. Each professionally designed banner informs your audience about who you are and the services or products you offer to clients in a visually appealing way. AI algorithms help us determine the most effective layouts and color schemes.</p>
      
      <h4>Brochure Design</h4>
      <p>Our brochures are designed creatively, attractively and present the required information crystal clear. We have the best in-house designing expertise to design brochures which are quad-folds, gate-folds, tri-folds, and bi-folds. Data-driven insights inform our design decisions for maximum reader engagement.</p>
      
      <h4>Branding Identity</h4>
      <p>Our creative design service includes building your logos for your brand that are bound to make an impact on the customers. We execute brand strategies to ensure the authenticity and wellness of your business with unique and powerful brand identity. AI-powered market analysis helps us create brands that resonate with your target audience.</p>
      
      <h4>App Design</h4>
      <p>Creativity goes beyond the physical world. We deliver creativity on print as well as on apps. We beautify apps with colorful and appealing designs. Our creativity adds value to your apps making them visually stunning and user-friendly through AI-enhanced UX optimization.</p>

      <h3>AI-Driven Advertising Capabilities</h3>
      <ul>
        <li><strong>Machine Learning Optimization:</strong> Automated campaign optimization using advanced algorithms</li>
        <li><strong>Predictive Analytics:</strong> Forecast customer behavior and campaign performance</li>
        <li><strong>Programmatic Advertising:</strong> Real-time automated media buying and placement</li>
        <li><strong>Audience Targeting:</strong> AI-powered audience segmentation and targeting</li>
        <li><strong>Creative Personalization:</strong> Dynamic content tailored to individual user behavior</li>
        <li><strong>Budget Optimization:</strong> Intelligent allocation of marketing spend for maximum ROI</li>
        <li><strong>Real-Time Analytics:</strong> Instant insights and performance monitoring</li>
        <li><strong>Trend Adaptation:</strong> AI systems that evolve with changing consumer trends</li>
      </ul>

      <h3>Why Choose Us? Best Creative Design Company in Bangalore</h3>
      <p>We stand one step ahead of the competition because we have a team with a high level of proficiency who work to complete even the most complex projects within tight and stringent deadlines. We ensure that we address the unique needs of each client and project through the deployment of appropriate strategies. You get the best creative design for what you pay when you outsource your most demanding assignments with IM Solutions.</p>
      
      <p>Our AI-powered approach ensures that every campaign is optimized for performance, every creative decision is backed by data, and every marketing dollar is spent efficiently. We combine cutting-edge technology with creative excellence to deliver results that exceed expectations.</p>

      <h3>Serving All Business Types</h3>
      <p>Whether you're a startup looking to make your mark or an enterprise seeking to maintain competitive advantage, IM Solutions provides AI advertising solutions that scale with your business. Our Bangalore-based team brings together deep technical expertise and local market insights to create campaigns that resonate with your target audience.</p>

      <h3>The Future of Advertising is Here</h3>
      <p>Artificial intelligence is revolutionizing the advertising industry, and IM Solutions is at the forefront of this transformation. By automating repetitive tasks, optimizing campaigns in real time, and personalizing content at scale, we help businesses achieve results that were previously impossible with traditional advertising methods.</p>

      <h3>Contact & Next Steps</h3>
      <p>Ready to transform your advertising with the power of AI? Let IM Solutions create smarter, more effective campaigns that adapt and evolve with your customers. Contact us now:</p>
      <ul>
        <li><strong>Phone:</strong> +91 888 056 4488</li>
        <li><strong>Email:</strong> info@imsolutions.mobi</li>
        <li><strong>Corporate Office:</strong> #122, 8th Main Road, Bangalore</li>
      </ul>
      
      <p>Don't delay, hurry and contact us today to get a lightning-fast turnaround for your business through our AI-powered creative design and advertising solutions!</p>
    `,
    features: [
      'AI Campaign Optimization',
      'Predictive Analytics',
      'Automated Bidding',
      'Smart Targeting',
      'Performance Prediction',
      'Continuous Learning',
      'Machine Learning Algorithms',
      'Programmatic Advertising',
      'Real-Time Optimization',
      'Creative Personalization',
      'Budget Automation',
      'Data-Driven Insights'
    ],
    benefits: [
      'Better Campaign Performance',
      'Improved ROI',
      'Faster Optimization',
      'Better Insights',
      'Competitive Advantage',
      'Future-Ready Strategy',
      'Time Savings',
      'Efficient Budget Spending',
      'Personalized Campaigns',
      'Real-Time Adaptation',
      'Scalable Solutions',
      'Trend-Responsive Marketing'
    ],
    category: 'online'
  },
  'creative-designing': {
    title: 'Creative Designing Services | Logo Designing Company Bangalore',
    description: 'Professional creative design services in Bangalore including graphic design, logo design, branding, UI/UX design, and visual communication solutions.',
    longDescription: `
      <h2>Creative Ad Agency / Company in Bangalore</h2>
      <p>Creativity is an ocean with limitless possibilities. It goes beyond mere artistic paintings. When creativity enters the professional world, it takes the form of graphic art. Creative arts and design enhance businesses widely by giving a more aesthetically pleasant presentation and better brand value.</p>
      
      <p>At IM Solutions, we believe that Art is one of the aspects that add limitless imagination! We use the powerful tool of art to enhance the performance of your business. With the touch of creativity, we use it to grab the attention of the customers and even passive users that enhance the image of our brand which will result in better revenues and better business! IM Solutions encourages businesses to go beyond free online designs or templates. We want businesses irrespective of their size and industry to stay unique and stay beautiful. With IM Solutions professional creative design, we refuel your creative design needs and take it to the next level.</p>

      <h3>Exceptional Artwork Services</h3>
      <p>Being in the advertising industry for long, IM Solutions has mastered the balance of art and science needed to offer exceptional artwork services to clients from different industries. Our creative design services include multiple sub-services such as Illustration, UI/UX Design and Image editing and much more. Every creative design we make is made to lure the audience's attention and draw in potential customers through visual communication.</p>
      
      <p>We specialize in graphic design, art illustrations, branding and packaging designs, logo designs, infographics, social media posters, print, pamphlets brochures, flyers, brochures, newsletters, magazines, banners and many more.</p>

      <h3>Our Creative Design Services</h3>
      
      <h4>Business Card Design</h4>
      <p>One thing that is still relevant in this digital age is the business card and works as a means of highlighting your brand. Our designers ensure that business cards they design are creative and exude professionalism. A well-designed business card makes a lasting first impression.</p>
      
      <h4>App Design</h4>
      <p>Creativity goes beyond the physical world. We deliver creativity on print as well as on apps. We beautify apps with colorful and appealing designs. Our creativity adds value to your apps making them visually stunning and user-friendly.</p>
      
      <h4>Print Design</h4>
      <p>We combine use of modern technology with meticulous execution for producing stylish cover designs, custom banners, flyer designs, outdoor billboards, brochures, marketing material, merchandise, and labels. Our print designs ensure your brand stands out in the physical world.</p>
      
      <h4>Banner Design</h4>
      <p>We design all types of banners in all sizes as per client's requirement. Each professionally designed banner informs your audience about who you are and the services or products you offer to clients in a visually appealing way. From web banners to outdoor displays, we create impactful designs.</p>
      
      <h4>Brochure Design</h4>
      <p>Our brochures are designed creatively, attractively and present the required information crystal clear. We have the best in-house designing expertise to design brochures which are quad-folds, gate-folds, tri-folds, and bi-folds. Our brochures tell your brand story effectively.</p>
      
      <h4>Branding Identity</h4>
      <p>Our creative design service includes building your logos for your brand that are bound to make an impact on the customers. We execute brand strategies to ensure the authenticity and wellness of your business with unique and powerful brand identity. From logo design to complete brand guidelines, we create cohesive brand experiences.</p>

      <h3>Why Choose Us? Best Creative Design Company in Bangalore</h3>
      <p>We stand one step ahead of the competition because we have a team with a high level of proficiency who work to complete even the most complex projects within tight and stringent deadlines. We ensure that we address the unique needs of each client and project through the deployment of appropriate strategies. You get the best creative design for what you pay when you outsource your most demanding assignments with IM Solutions.</p>

      <h3>Why is Creative Design Important for Your Business?</h3>
      <p>Creative design tells stories of business and brands. Communication plays an important role in business. Creative visuals are easy and immediate ways to communicate instantly to people. Good creative designs make audiences understand what your organization is doing and what it's all about across every touch point. Organizations that can't achieve this fail to generate leads and thereby drive sales and growth. Human mind processes visuals faster. Visuals are often the most striking way to leave a lasting impression in the viewer's mind.</p>

      <h3>Industries We Serve</h3>
      <p>All Industries need creative design services to communicate about their business strategy. Creative design helps get the message of the brand clearly and effectively. It also helps reach large audiences instantly because human brains register images more effectively than other communication mediums. We serve:</p>
      <ul>
        <li>E-Commerce</li>
        <li>Finance and Banking services</li>
        <li>Health care services</li>
        <li>Fast food chains</li>
        <li>Automobile services</li>
        <li>Food and beverage brands</li>
        <li>Clothing line</li>
        <li>Electronics</li>
        <li>Pharmacy and Academics</li>
        <li>And many more industries</li>
      </ul>

      <h3>Creative Design for Small Businesses</h3>
      <p>Small businesses should use Creative design services because creative design services can be an invaluable tool to help you pitch your business promotion through attractive visuals. For small businesses, creative design gets all of the important information across in an engaging manner. It is one of the most cost-effective means of communication for small businesses operating in the market.</p>

      <h3>Contact & Next Steps</h3>
      <p>Ready to elevate your brand with stunning creative design? Let IM Solutions bring your vision to life with our artistic expertise and professional execution. Contact us now:</p>
      <ul>
        <li><strong>Phone:</strong> +91 888 056 4488</li>
        <li><strong>Email:</strong> info@imsolutions.mobi</li>
        <li><strong>Corporate Office:</strong> #122, 8th Main Road, Bangalore</li>
      </ul>
      
      <p>Don't delay, hurry and contact us today to get a lightning-fast turnaround for your business through our creative design services. Stay unique, stay beautiful with IM Solutions!</p>
    `,
    features: [
      'Logo Design',
      'Branding Materials',
      'Marketing Collaterals',
      'Packaging Design',
      'Illustration',
      'Animation',
      'Graphic Design',
      'UI/UX Design',
      'Business Card Design',
      'Brochure Design',
      'Banner Design',
      'Print Design'
    ],
    benefits: [
      'Strong Brand Identity',
      'Professional Image',
      'Increased Engagement',
      'Memorable Designs',
      'Consistent Branding',
      'Creative Excellence',
      'Visual Communication',
      'Better Brand Recall',
      'Cost-Effective Solutions',
      'Fast Turnaround',
      'Unique & Beautiful',
      'Lasting Impressions'
    ],
    category: 'offline'
  },
  'api-integration': {
    title: 'API Integration Services Bangalore',
    description: 'Expert API integration services connecting your systems with third-party applications for seamless functionality and enhanced business operations.',
    longDescription: `
      <h2>API Integration Services</h2>
      <p>In today's interconnected digital landscape, seamless communication between different software systems is crucial for business success. IM Solutions provides expert API integration services to connect your systems with third-party applications and services, enabling smooth data flow and enhanced functionality across your entire technology stack.</p>
      
      <p>API (Application Programming Interface) integration allows different software applications to communicate and share data efficiently. Whether you need to connect your CRM with marketing automation tools, integrate payment gateways into your e-commerce platform, or synchronize data across multiple business systems, our API integration expertise ensures reliable, secure, and scalable solutions.</p>

      <h3>Our API Integration Services</h3>
      
      <h4>API Development</h4>
      <p>We design and develop custom APIs tailored to your specific business requirements. Our API development services ensure that your applications can communicate effectively with internal and external systems, providing the flexibility and scalability your business needs to grow.</p>
      
      <h4>Third-Party Integration</h4>
      <p>Connect your business systems with popular third-party platforms and services. From payment gateways and shipping providers to CRM systems and marketing tools, we handle all aspects of third-party API integration to streamline your operations and improve efficiency.</p>
      
      <h4>Data Synchronization</h4>
      <p>Ensure your data remains consistent and up-to-date across all platforms with our data synchronization solutions. We implement real-time or scheduled data syncing between your applications, eliminating data silos and reducing manual data entry errors.</p>
      
      <h4>Custom Solutions</h4>
      <p>Every business has unique requirements. We develop custom API integration solutions that address your specific workflow needs, whether it's automating business processes, creating custom dashboards, or building complex data pipelines between multiple systems.</p>
      
      <h4>Security Implementation</h4>
      <p>Security is paramount in API integrations. We implement industry-standard security protocols including OAuth 2.0, API keys, encryption, and secure token-based authentication to protect your data during transmission and ensure only authorized access to your systems.</p>
      
      <h4>Ongoing Support</h4>
      <p>Our relationship doesn't end with integration deployment. We provide ongoing support and maintenance to ensure your API integrations continue to function optimally. We monitor performance, handle updates, and quickly resolve any issues that arise.</p>

      <h3>Why Choose IM Solutions for API Integration?</h3>
      <p>With years of experience in software development and system integration, IM Solutions brings technical expertise and business acumen to every API integration project. Our team stays current with the latest API technologies and best practices to deliver solutions that are robust, scalable, and future-proof.</p>
      
      <p>We understand that downtime is costly. That's why we follow rigorous testing procedures and implement fail-safe mechanisms to ensure your integrations are reliable and maintain business continuity. Our agile approach allows us to adapt quickly to changing requirements and deliver solutions on time and within budget.</p>

      <h3>Common API Integration Use Cases</h3>
      <ul>
        <li><strong>Payment Gateway Integration:</strong> Connect payment processors like Stripe, PayPal, Razorpay for seamless transactions</li>
        <li><strong>CRM Integration:</strong> Sync customer data with Salesforce, HubSpot, or custom CRM systems</li>
        <li><strong>E-commerce Integration:</strong> Connect inventory, shipping, and order management systems</li>
        <li><strong>Social Media Integration:</strong> Automate posting and analytics across social platforms</li>
        <li><strong>Marketing Automation:</strong> Integrate email marketing, analytics, and lead management tools</li>
        <li><strong>Accounting Software:</strong> Sync financial data with QuickBooks, Tally, or other accounting systems</li>
        <li><strong>Cloud Services:</strong> Integrate with AWS, Azure, Google Cloud services</li>
        <li><strong>Communication Tools:</strong> Connect with Slack, Microsoft Teams, Twilio for notifications</li>
      </ul>

      <h3>Our Integration Process</h3>
      <ol>
        <li><strong>Requirements Analysis:</strong> Understanding your business needs and integration objectives</li>
        <li><strong>API Documentation Review:</strong> Studying the APIs to be integrated and planning the architecture</li>
        <li><strong>Development:</strong> Building the integration with clean, maintainable code</li>
        <li><strong>Testing:</strong> Rigorous testing to ensure data accuracy and system reliability</li>
        <li><strong>Deployment:</strong> Smooth rollout with minimal disruption to operations</li>
        <li><strong>Monitoring & Support:</strong> Continuous monitoring and ongoing optimization</li>
      </ol>

      <h3>Technologies We Work With</h3>
      <p>Our team is proficient in working with various API technologies and protocols including REST APIs, SOAP APIs, GraphQL, Webhooks, and more. We have experience integrating with hundreds of popular platforms and can handle custom API integrations for proprietary systems.</p>

      <h3>Contact & Next Steps</h3>
      <p>Ready to streamline your business operations with seamless API integration? Let IM Solutions connect your systems for enhanced functionality and improved efficiency. Contact us now:</p>
      <ul>
        <li><strong>Phone:</strong> +91 888 056 4488</li>
        <li><strong>Email:</strong> info@imsolutions.mobi</li>
        <li><strong>Corporate Office:</strong> #122, 8th Main Road, Bangalore</li>
      </ul>
      
      <p>Contact us today for a free consultation and let's discuss how our API integration services can transform your business operations and drive digital transformation!</p>
    `,
    features: [
      'API Development',
      'Third-Party Integration',
      'Data Synchronization',
      'Custom Solutions',
      'Security Implementation',
      'Ongoing Support',
      'REST API Integration',
      'SOAP API Integration',
      'GraphQL Integration',
      'Webhook Implementation',
      'OAuth Authentication',
      'Real-Time Data Sync'
    ],
    benefits: [
      'Enhanced Functionality',
      'Better Integration',
      'Improved Efficiency',
      'Scalability',
      'Cost Reduction',
      'Seamless Operation',
      'Automated Workflows',
      'Data Consistency',
      'Reduced Manual Work',
      'Business Agility',
      'Secure Data Exchange',
      'Future-Proof Solutions'
    ],
    category: 'offline'
  },
  'ecommerce-solutions': {
    title: 'Ecommerce Website Development Services Bangalore',
    description: 'Complete e-commerce solutions in Bangalore including platform setup, payment integration, and optimization for maximum online sales and business growth.',
    longDescription: `
      <h2>Best Ecommerce Solutions Bangalore, India</h2>
      <p>In today's digital-first economy, having a robust e-commerce platform is essential for business success. IM Solutions provides end-to-end e-commerce solutions that help businesses establish a powerful online presence, streamline operations, and maximize sales. Our comprehensive e-commerce services cover everything from platform selection and development to payment integration, inventory management, and ongoing optimization.</p>
      
      <p>Whether you're launching a new online store or upgrading your existing e-commerce platform, our team of experienced developers and e-commerce specialists will create a solution tailored to your unique business needs. We build scalable, secure, and user-friendly e-commerce websites that deliver exceptional shopping experiences and drive conversions.</p>

      <h3>Our Ecommerce Solutions</h3>
      
      <h4>Platform Setup & Development</h4>
      <p>We help you choose the right e-commerce platform for your business and handle the complete setup and development. Whether it's Shopify, WooCommerce, Magento, or a custom-built solution, we ensure your online store is built on a solid foundation that supports your business goals and scales with your growth.</p>
      
      <h4>Payment Gateway Integration</h4>
      <p>Seamless and secure payment processing is crucial for e-commerce success. We integrate multiple payment gateways including credit/debit cards, UPI, net banking, digital wallets, and international payment options. Our integration ensures PCI-DSS compliance and provides customers with a safe and convenient checkout experience.</p>
      
      <h4>Inventory Management</h4>
      <p>Efficient inventory management is key to running a successful online store. We implement robust inventory management systems that track stock levels in real-time, automate reorder processes, manage multiple warehouses, and prevent overselling. Our solutions integrate seamlessly with your accounting and fulfillment systems.</p>
      
      <h4>Order Tracking & Management</h4>
      <p>Keep your customers informed and your operations running smoothly with comprehensive order tracking and management systems. We implement features that allow customers to track their orders in real-time, automate order processing workflows, and provide you with powerful dashboards to manage all aspects of order fulfillment.</p>
      
      <h4>Customer Portal</h4>
      <p>Enhance customer engagement with personalized customer portals that allow users to manage their profiles, view order history, track shipments, save wishlists, and access exclusive deals. We create intuitive customer portals that improve satisfaction and encourage repeat purchases.</p>
      
      <h4>Analytics Dashboard</h4>
      <p>Make data-driven decisions with comprehensive analytics dashboards that provide insights into sales performance, customer behavior, product trends, and marketing effectiveness. We integrate powerful analytics tools that help you understand your business and identify opportunities for growth.</p>

      <h3>Key E-commerce Features We Implement</h3>
      <ul>
        <li><strong>Responsive Design:</strong> Mobile-optimized stores that work perfectly on all devices</li>
        <li><strong>Product Management:</strong> Easy-to-use interfaces for managing products, categories, and variants</li>
        <li><strong>Shopping Cart:</strong> Intuitive cart functionality with save-for-later options</li>
        <li><strong>Checkout Optimization:</strong> Streamlined checkout process to reduce cart abandonment</li>
        <li><strong>Search & Filtering:</strong> Advanced search and filtering capabilities for better product discovery</li>
        <li><strong>Customer Reviews:</strong> Built-in review and rating systems to build trust</li>
        <li><strong>Wishlist Functionality:</strong> Allow customers to save products for future purchase</li>
        <li><strong>Email Notifications:</strong> Automated emails for orders, shipping, and promotions</li>
        <li><strong>Multi-currency Support:</strong> Sell globally with multiple currency options</li>
        <li><strong>SEO Optimization:</strong> Built-in SEO features to improve search rankings</li>
        <li><strong>Security Features:</strong> SSL certificates, secure hosting, and fraud protection</li>
        <li><strong>Social Media Integration:</strong> Connect your store with social platforms</li>
      </ul>

      <h3>Why Choose IM Solutions for E-commerce Development?</h3>
      <p>With extensive experience in building successful e-commerce platforms for businesses across various industries, IM Solutions brings a unique combination of technical expertise and business understanding to every project. We don't just build websites; we create complete e-commerce ecosystems designed to drive sales and growth.</p>
      
      <p>Our team stays current with the latest e-commerce trends, technologies, and best practices. We understand the importance of user experience, conversion optimization, and seamless integration with business systems. From initial consultation to post-launch support, we're committed to your e-commerce success.</p>

      <h3>E-commerce Platforms We Work With</h3>
      <ul>
        <li><strong>Shopify:</strong> Perfect for businesses seeking quick setup and ease of use</li>
        <li><strong>WooCommerce:</strong> Ideal for WordPress users wanting flexible customization</li>
        <li><strong>Magento:</strong> Enterprise-level solution for large-scale operations</li>
        <li><strong>Custom Solutions:</strong> Fully tailored platforms built from scratch</li>
        <li><strong>BigCommerce:</strong> Scalable platform with built-in features</li>
        <li><strong>PrestaShop:</strong> Open-source solution with extensive modules</li>
      </ul>

      <h3>Our E-commerce Development Process</h3>
      <ol>
        <li><strong>Discovery & Planning:</strong> Understanding your business model and requirements</li>
        <li><strong>Platform Selection:</strong> Choosing the best technology for your needs</li>
        <li><strong>Design & Development:</strong> Creating your unique online store</li>
        <li><strong>Integration:</strong> Connecting payment, shipping, and business systems</li>
        <li><strong>Testing:</strong> Ensuring everything works flawlessly</li>
        <li><strong>Launch:</strong> Going live with full support</li>
        <li><strong>Optimization:</strong> Continuous improvement for better performance</li>
      </ol>

      <h3>Contact & Next Steps</h3>
      <p>Ready to launch or upgrade your e-commerce store? Let IM Solutions build a powerful online selling platform that drives growth and maximizes revenue. Contact us now:</p>
      <ul>
        <li><strong>Phone:</strong> +91 888 056 4488</li>
        <li><strong>Email:</strong> info@imsolutions.mobi</li>
        <li><strong>Corporate Office:</strong> #122, 8th Main Road, Bangalore</li>
      </ul>
      
      <p>Contact us today for a free consultation and let's discuss how we can create an e-commerce solution that transforms your business and delivers exceptional results!</p>
    `,
    features: [
      'Platform Setup',
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Tracking',
      'Customer Portal',
      'Analytics Dashboard',
      'Mobile Responsive Design',
      'SEO Optimization',
      'Multi-currency Support',
      'Secure Checkout',
      'Product Management',
      'Shipping Integration'
    ],
    benefits: [
      'Increased Sales',
      'Better Customer Experience',
      'Reduced Cart Abandonment',
      'Improved Conversion',
      'Easy Management',
      'Scalable Growth',
      '24/7 Online Presence',
      'Global Reach',
      'Automated Operations',
      'Data-Driven Insights',
      'Competitive Advantage',
      'Cost-Effective Solution'
    ],
    category: 'offline'
  },
  'email-marketing': {
    title: 'Email Marketing Company in Bangalore',
    description: 'Professional email marketing services in Bangalore to connect with customers, drive engagement, and boost conversions through targeted email campaigns.',
    longDescription: `
      <h2>Email Marketing Agency</h2>
      <p>Email marketing is a vibrant and powerful way to connect with people. Today, almost everyone has access to emails and it serves as a great platform to connect with customers. Almost 3 billion people use emails to communicate and about 200 billion emails are sent daily worldwide. Out of this 200 billion emails the majority, 110 billion emails are business emails. Emails are a big part of our everyday lives impacting businesses globally.</p>

      <h3>Our Core Email Marketing Services</h3>
      
      <h4>Emailer Management</h4>
      <p>Apart from the above-mentioned services, we also professionally manage your emails. We schedule your emails on routine. We ensure they are sent at the right time and keep your clients updated with all the latest information. We also attend to their queries, ensuring seamless communication between your business and customers.</p>
      
      <h4>Emailer Content Writing</h4>
      <p>Emails are representation of your business in words. We write professional email content for your business and deliver the message of your brand clearly. We tell through email what your business wants to say with well-curated words that engage readers and drive action.</p>
      
      <h4>Email Database</h4>
      <p>We have a variety of databases to meet your target audience. We classify them on categories such as demography, business to business, psychology wise, product specific email, industry specific, business to customer and many more email databases. Our comprehensive database ensures your message reaches the right people.</p>
      
      <h4>Automated Emails</h4>
      <p>Our email marketing services are automated and delivered timely. Our automated workflow enables you to pre-set the details of your email campaign. The emails are then sent automatically, making it a hassle-free process. Set it once and let our automation handle the rest.</p>
      
      <h4>Bulk Emails</h4>
      <p>Our bulk email service presents your products and services to the target audience effectively. Our bulk emails are not just words but come with visual descriptions with graphics. We have a great email delivery system to send out spam-free bulk emails that reach inboxes, not spam folders.</p>
      
      <h4>Promotional Emails</h4>
      <p>We send promotional emails for businesses and update their customers on the latest updates of the brands. We make it easier for businesses to communicate with ease with our email services in innovative and extensive planning to boost conversion rates.</p>

      <h3>Why Email Marketing Matters</h3>
      <p>Email marketing remains one of the most effective digital marketing channels with an impressive ROI. It allows you to reach your audience directly in their inbox, build relationships, nurture leads, and drive conversions. Unlike social media where algorithms control visibility, email gives you direct access to your subscribers.</p>

      <h3>Our Email Marketing Approach</h3>
      <ul>
        <li><strong>Strategic Planning:</strong> We develop comprehensive email marketing strategies aligned with your business goals</li>
        <li><strong>Audience Segmentation:</strong> Divide your audience into targeted segments for personalized messaging</li>
        <li><strong>Compelling Design:</strong> Create visually appealing email templates that reflect your brand</li>
        <li><strong>Engaging Content:</strong> Write persuasive copy that drives action and engagement</li>
        <li><strong>A/B Testing:</strong> Test different elements to optimize performance</li>
        <li><strong>Analytics & Reporting:</strong> Track metrics and provide detailed performance reports</li>
        <li><strong>List Management:</strong> Build and maintain healthy email lists with proper hygiene</li>
        <li><strong>Compliance:</strong> Ensure all campaigns comply with anti-spam regulations</li>
      </ul>

      <h3>Types of Email Campaigns We Create</h3>
      <ul>
        <li><strong>Welcome Emails:</strong> Engage new subscribers with strong first impressions</li>
        <li><strong>Newsletter Campaigns:</strong> Keep your audience informed and engaged</li>
        <li><strong>Promotional Campaigns:</strong> Drive sales with special offers and discounts</li>
        <li><strong>Abandoned Cart Emails:</strong> Recover lost sales with timely reminders</li>
        <li><strong>Re-engagement Campaigns:</strong> Win back inactive subscribers</li>
        <li><strong>Drip Campaigns:</strong> Nurture leads with automated email sequences</li>
        <li><strong>Transactional Emails:</strong> Order confirmations, shipping updates, receipts</li>
        <li><strong>Event Invitations:</strong> Promote webinars, product launches, special events</li>
      </ul>

      <h3>Email Marketing Best Practices</h3>
      <p>We follow industry best practices to ensure your email campaigns deliver maximum results:</p>
      <ul>
        <li>Mobile-responsive designs that look great on all devices</li>
        <li>Compelling subject lines that improve open rates</li>
        <li>Clear calls-to-action that drive conversions</li>
        <li>Personalization to increase engagement</li>
        <li>Optimal sending times for maximum impact</li>
        <li>Clean, professional templates that load quickly</li>
        <li>Regular list cleaning to maintain deliverability</li>
        <li>Compliance with GDPR and CAN-SPAM regulations</li>
      </ul>

      <h3>Measurable Results</h3>
      <p>We provide detailed analytics and reporting on key metrics including:</p>
      <ul>
        <li>Open rates and click-through rates</li>
        <li>Conversion rates and revenue generated</li>
        <li>Bounce rates and unsubscribe rates</li>
        <li>List growth and engagement trends</li>
        <li>Device and geographic insights</li>
        <li>ROI tracking and performance benchmarks</li>
      </ul>

      <h3>Contact & Next Steps</h3>
      <p>Ready to harness the power of email marketing to grow your business? Let IM Solutions create targeted email campaigns that connect with your audience and drive results. Contact us now:</p>
      <ul>
        <li><strong>Phone:</strong> +91 888 056 4488</li>
        <li><strong>Email:</strong> info@imsolutions.mobi</li>
        <li><strong>Corporate Office:</strong> #122, 8th Main Road, Bangalore</li>
      </ul>
      
      <p>Contact us today for a free consultation and let's discuss how our email marketing services can help you build relationships, nurture leads, and boost conversions!</p>
    `,
    features: [
      'Email Campaign Design',
      'List Management',
      'Automation',
      'Personalization',
      'A/B Testing',
      'Analytics & Reporting',
      'Bulk Email Service',
      'Promotional Campaigns',
      'Drip Campaigns',
      'Email Database',
      'Content Writing',
      'Mobile Optimization'
    ],
    benefits: [
      'High ROI',
      'Direct Customer Communication',
      'Customer Retention',
      'Lead Nurturing',
      'Cost-Effective',
      'Measurable Results',
      'Targeted Messaging',
      'Increased Conversions',
      'Brand Awareness',
      'Automated Workflows',
      'Detailed Analytics',
      'Spam-Free Delivery'
    ],
    category: 'offline'
  },
  'mobile-app-development': {
    title: 'Mobile Application Development Company Bangalore',
    description: 'Leading mobile app development company in Bangalore specializing in iOS, Android, and cross-platform applications for enhanced customer engagement.',
    longDescription: `
      <h2>Mobile Application Development Company</h2>
      <p>In today's ever-changing technology-driven society, the mobile market has witnessed an abrupt rise because of digital transformation. It has become vital for businesses to adapt to mobile applications to increase communication with customers and gain an edge in the market by giving the best customer user experience. From start-ups to big companies, every company wants to retain a good position in the app development market.</p>
      
      <p>IM Solutions is a leading mobile application development company located in the Silicon Valley of India—Bangalore. Being a top mobile app development company, IM Solutions specializes in mobile app development solutions for mobile plus web that will retain the target audience, also increase customer engagement on the website and mobile app.</p>

      <h3>Our Vision & Approach</h3>
      <p>At IM Solutions, we are driven with the goal of aiming to develop mobile applications that are highly engaging and develop the best web solutions that can increase customer engagement and result in maximum return on investment. We work to develop experiences for the world in the form of mobile and web applications. The mobile market has witnessed an abrupt rise because of digital transformation. IM Solutions has an expert and qualified team to catch up with the latest technological trends and use it to make mobile applications more user-friendly, giving our clients an advantage of being very receptive in the market.</p>
      
      <p>Although there are many mobile application development companies in the market, IM Solutions stands out because of our expertise in platforms such as iOS app development, Android app development, PHP web app development along with designing capabilities in HTML5, making us an experienced firm for IT-based solutions. IM Solutions works on a diverse spectrum of technologies including Cloud Computing, Cross-Platform mobile app development, Virtual Reality, Augmented Reality, IoT and many more. Our ideology is to make a customer-oriented environment and provide our service with utmost veracity and creativity.</p>

      <h3>Our Core Mobile App Development Services</h3>
      
      <h4>CRM Solutions</h4>
      <p>Our CRM Software is the best to manage company's interactions and relationships with customers. It enhances customer relationships through improving interaction, tracking leads, and streamlining processes and increases sales by improving business relationships. Our mobile CRM solutions keep your team connected wherever they are.</p>
      
      <h4>UI & UX Design</h4>
      <p>We design the best UI and UX for your mobile application. It covers all the packages that make the user experience smooth including transitions, interface animations and every single micro-interaction. Our UI and UX design also specializes in user operations across various platforms, ensuring consistency and delight.</p>
      
      <h4>All Device Apps</h4>
      <p>We design all types of mobile apps for all devices. Starting from consulting, building prototypes, building the whole thing from scratch or fixing your existing non-working app, we do it all. We design mobile apps for mobile, tablets and all wearables. Our apps fit all types of changing technology.</p>
      
      <h4>Hybrid Application Development</h4>
      <p>Our team includes qualified UX designers, visual designers and software engineers. We develop the best Hybrid Application Development employing native app features and its capabilities while serving to help companies adopt HTML5 mobile app development for cross-platform compatibility.</p>
      
      <h4>E-Commerce Application</h4>
      <p>We develop the most responsive E-Commerce Applications for your business. Our E-Commerce covers business-to-business, business-to-consumer, customer-to-customer and business-to-administration. We cater to all types of industries such as retail and wholesale, marketing, finance, manufacturing, auctions and many more.</p>
      
      <h4>Custom Application Development</h4>
      <p>We design all types of custom application development. We cater to different industries. Our custom application development services provide the IT backbone for our clients' businesses. Our expert technical team understands your application requirements thoroughly, prepares architecture, develops, tests and finally implements it.</p>

      <h3>Why Choose IM Solutions? Best Mobile Application Development Company</h3>
      <p>Let's face it, mobiles are ubiquitous. They are here to stay and have a major influence on our lives. From basic functions to solving high-tech tasks with Artificial Intelligence, mobile applications play a huge role in how we manage our day-to-day life. With years of experience in mobile application development, IM Solutions has extensive experience in creating high-performing, digitally transformative and feature-packed native mobile applications for Android and iOS devices. IM Solutions specializes in delivering mobile solutions to clients that are sleek, productive and easy-to-use.</p>
      
      <p>The experts at IM Solutions build cross-platform mobile applications that will work on any device or platform. We assure our clients that our mobile application development solutions are result-oriented, secure, scalable and sustainable. IM Solutions takes a holistic approach to every project we take and employs mobile, web, embedded and cloud technologies, helping businesses benefit from better focus on integrated and streamlined technology ecosystem set-up.</p>

      <h3>Why Businesses Need Mobile Application Development Services</h3>
      <p>In the fiercely competitive market, multi-channel communication with potential customers is the key. Almost every adult in the world has a smartphone and the importance of smartphones in our lives cannot be ignored. Therefore, in business, mobile apps are considered to be one of the most powerful tools for contacting the target audience. Benefits include:</p>
      <ul>
        <li>Sales growth and revenue increase</li>
        <li>Audience building and expansion</li>
        <li>Marketing and communication channels</li>
        <li>Business process optimization</li>
        <li>Customer loyalty growth</li>
        <li>Analytical source and insights</li>
        <li>Edge over your competition</li>
      </ul>

      <h3>Why Hire a Mobile Application Development Company?</h3>
      <p>It is important to hire a mobile application development company because they are professionals that specialize in smoothening the communication between your business and your potential clients—important to grow sales and expand business. One of the key benefits of hiring a mobile app development company is that you benefit from a wide range of professional services:</p>
      <ul>
        <li>Business consulting and strategy</li>
        <li>Business analysis and planning</li>
        <li>Idea evaluation and validation</li>
        <li>Complete development lifecycle</li>
        <li>Aftercare and maintenance services</li>
        <li>24/7 support team access</li>
      </ul>

      <h3>Critical Role of Mobile Applications in the Market</h3>
      <p>Mobile applications play a critical role in the market and their influence on customers is accelerating day by day. Mobile apps are an important part of businesses' marketing plans to boost downloads and attract users. Many companies dedicate 31-50% of their total app development budget to marketing. Many businesses say their app is profitable and has made back its development and launch budget. 60% of businesses consider their app a financial success.</p>

      <h3>Why Choose IM Solutions?</h3>
      <p>IM Solutions is a leading mobile app development company having started in 2013. With over 100+ successful projects under our belt, we have catered to different industries over the years. We offer full-cycle development services tailored to individual business needs, honing our app development skills in a wealth of industries and domains.</p>

      <h3>Contact & Next Steps</h3>
      <p>Ready to transform your business with a powerful mobile application? Let IM Solutions create feature-rich, user-friendly apps that drive engagement and growth. Contact us now:</p>
      <ul>
        <li><strong>Phone:</strong> +91 888 056 4488</li>
        <li><strong>Email:</strong> info@imsolutions.mobi</li>
        <li><strong>Corporate Office:</strong> #122, 8th Main Road, Bangalore</li>
      </ul>
      
      <p>Contact us today for a free consultation and let's discuss how our mobile app development services can help you reach your target audience, increase engagement, and achieve your business goals!</p>
    `,
    features: [
      'iOS Development',
      'Android Development',
      'Cross-Platform Solutions',
      'UI/UX Design',
      'App Store Optimization',
      'Maintenance Support',
      'Hybrid App Development',
      'E-Commerce Apps',
      'Custom App Development',
      'CRM Solutions',
      'Cloud Integration',
      'AR/VR Applications'
    ],
    benefits: [
      'Wider Audience Reach',
      'Better Engagement',
      'Brand Loyalty',
      'Additional Revenue',
      'Competitive Edge',
      'Future Growth',
      'Customer Insights',
      'Process Optimization',
      '24/7 Accessibility',
      'Multi-Channel Communication',
      'Scalable Solutions',
      'High ROI'
    ],
    category: 'offline'
  },
  'real-estate-marketing': {
    title: 'Real Estate Online Marketing Company in India',
    description: 'Specialized real estate digital marketing services to promote properties, generate quality leads, and maximize sales through targeted online strategies.',
    longDescription: `
      <h2>Real Estate Online Marketing Company</h2>
      <p>In the competitive real estate market, having a strong online presence is crucial for success. IM Solutions specializes in real estate digital marketing, helping developers, builders, and real estate agents promote their properties effectively, generate quality leads, and close more sales. Our comprehensive real estate marketing solutions combine cutting-edge digital strategies with industry expertise to deliver measurable results.</p>
      
      <p>The real estate industry has undergone a digital transformation, with the majority of home buyers and property investors starting their search online. Whether you're launching a new residential project, promoting commercial properties, or building your real estate brand, our targeted marketing strategies ensure your properties reach the right audience at the right time.</p>

      <h3>Our Real Estate Marketing Services</h3>
      
      <h4>Property Listing Optimization</h4>
      <p>We optimize your property listings across multiple platforms to maximize visibility and engagement. Our team creates compelling property descriptions, professional photography guidelines, virtual tour integration, and SEO-optimized content that attracts serious buyers and investors. We ensure your properties stand out on real estate portals, social media, and search engines.</p>
      
      <h4>Lead Generation Campaigns</h4>
      <p>Generate high-quality leads with our targeted real estate marketing campaigns. We use advanced audience targeting, geographic segmentation, and buyer persona development to reach potential buyers actively searching for properties. Our lead generation strategies include PPC advertising, social media campaigns, content marketing, and landing page optimization designed specifically for real estate conversions.</p>
      
      <h4>Social Media Marketing</h4>
      <p>Build your real estate brand and engage potential buyers through strategic social media marketing. We create and manage campaigns across Facebook, Instagram, LinkedIn, and other platforms, showcasing your properties with stunning visuals, virtual tours, testimonials, and community highlights. Our social media strategies help you build trust, generate inquiries, and nurture relationships with prospects.</p>
      
      <h4>SEO for Real Estate</h4>
      <p>Improve your visibility in search results when potential buyers search for properties in your area. Our real estate SEO services include local SEO optimization, keyword research for property types and locations, content creation, Google My Business optimization, and link building. We help you rank higher for valuable search terms that drive qualified traffic to your listings.</p>
      
      <h4>Paid Advertising (PPC)</h4>
      <p>Accelerate your property sales with targeted pay-per-click advertising campaigns. We manage Google Ads, Facebook Ads, and Instagram Ads specifically designed for real estate, ensuring maximum ROI. Our PPC strategies include remarketing to interested prospects, location-based targeting, and conversion-optimized landing pages that turn clicks into qualified leads.</p>
      
      <h4>Virtual Tours & Video Marketing</h4>
      <p>Showcase your properties with immersive virtual tours and engaging video content. We help you leverage 360-degree virtual tours, property walkthrough videos, drone footage, neighborhood tours, and promotional videos that give potential buyers a comprehensive view of your properties from anywhere in the world.</p>

      <h3>Why Real Estate Needs Digital Marketing</h3>
      <p>The real estate buying journey has fundamentally changed. Today's property buyers conduct extensive online research before making contact with agents or visiting properties. Here's why digital marketing is essential for real estate success:</p>
      <ul>
        <li><strong>Increased Online Property Search:</strong> 93% of home buyers use the internet to search for properties</li>
        <li><strong>Wider Reach:</strong> Reach potential buyers across cities, states, and even countries</li>
        <li><strong>Targeted Marketing:</strong> Connect with serious buyers based on budget, location, and property preferences</li>
        <li><strong>24/7 Availability:</strong> Your properties are marketed round the clock</li>
        <li><strong>Cost-Effective:</strong> More affordable than traditional marketing with better ROI</li>
        <li><strong>Measurable Results:</strong> Track every lead, inquiry, and conversion</li>
        <li><strong>Competitive Advantage:</strong> Stay ahead in a crowded marketplace</li>
      </ul>

      <h3>Our Real Estate Marketing Approach</h3>
      <ol>
        <li><strong>Market Research:</strong> Analyze your target audience, competitors, and market trends</li>
        <li><strong>Strategy Development:</strong> Create a customized marketing plan aligned with your goals</li>
        <li><strong>Property Showcase:</strong> Develop compelling content and visuals for your listings</li>
        <li><strong>Multi-Channel Campaigns:</strong> Launch integrated campaigns across multiple platforms</li>
        <li><strong>Lead Nurturing:</strong> Implement automated follow-up systems to convert leads</li>
        <li><strong>Performance Tracking:</strong> Monitor metrics and optimize campaigns continuously</li>
        <li><strong>Reporting & Analysis:</strong> Provide detailed reports on leads, conversions, and ROI</li>
      </ol>

      <h3>Real Estate Marketing Solutions We Offer</h3>
      <ul>
        <li>New project launches and pre-launch marketing</li>
        <li>Residential property marketing (apartments, villas, plots)</li>
        <li>Commercial property marketing (offices, retail, warehouses)</li>
        <li>Luxury real estate marketing</li>
        <li>Real estate agent branding and lead generation</li>
        <li>Property portal management (99acres, MagicBricks, Housing.com)</li>
        <li>Email marketing campaigns for real estate</li>
        <li>Real estate website development and optimization</li>
        <li>CRM integration for lead management</li>
        <li>Real estate content marketing and blogging</li>
      </ul>

      <h3>Key Performance Indicators We Track</h3>
      <p>We measure success through concrete metrics that matter to your real estate business:</p>
      <ul>
        <li>Number of qualified leads generated</li>
        <li>Cost per lead and cost per acquisition</li>
        <li>Website traffic and property page views</li>
        <li>Inquiry conversion rates</li>
        <li>Site visit bookings</li>
        <li>Social media engagement and reach</li>
        <li>Search engine rankings for key property terms</li>
        <li>Email open and click-through rates</li>
        <li>Return on ad spend (ROAS)</li>
      </ul>

      <h3>Industries We Serve</h3>
      <p>We provide specialized real estate marketing services for:</p>
      <ul>
        <li>Real estate developers and builders</li>
        <li>Real estate agents and brokers</li>
        <li>Property management companies</li>
        <li>Real estate investment firms</li>
        <li>Commercial real estate companies</li>
        <li>Luxury real estate brands</li>
        <li>Real estate technology platforms</li>
      </ul>

      <h3>Contact & Next Steps</h3>
      <p>Ready to transform your real estate marketing and generate more qualified leads? Let IM Solutions help you showcase your properties to the right buyers and maximize your sales. Contact us now:</p>
      <ul>
        <li><strong>Phone:</strong> +91 888 056 4488</li>
        <li><strong>Email:</strong> info@imsolutions.mobi</li>
        <li><strong>Corporate Office:</strong> #122, 8th Main Road, Bangalore</li>
      </ul>
      
      <p>Contact us today for a free consultation and let's discuss how our real estate marketing services can help you reach more buyers, generate quality leads, and accelerate your property sales!</p>
    `,
    features: [
      'Property Listing Optimization',
      'Lead Generation',
      'Social Media Marketing',
      'Real Estate SEO',
      'PPC Advertising',
      'Virtual Tours',
      'Video Marketing',
      'Email Campaigns',
      'Content Marketing',
      'CRM Integration',
      'Portal Management',
      'Analytics & Reporting'
    ],
    benefits: [
      'Quality Lead Generation',
      'Increased Property Visibility',
      'Faster Sales Cycles',
      'Better ROI',
      'Targeted Buyer Reach',
      'Brand Building',
      'Competitive Advantage',
      'Measurable Results',
      'Cost-Effective Marketing',
      '24/7 Property Showcase',
      'Enhanced Credibility',
      'Market Insights'
    ],
    category: 'offline'
  },
  'display-advertisement': {
    title: 'Display Advertising Service Company, India',
    description: 'Professional display advertising services to boost brand awareness, reach targeted audiences, and drive conversions through strategic banner ads and visual campaigns.',
    longDescription: `
      <h2>Display Advertising Company in Bangalore</h2>
      <p>To grow your business in the online world, one has to harness the power of online search engines through SEO. This way you generate the sales that you deserve for your business and enable new potential customers to your retail website. IM Solution is a Creatively Led, Strategically Driven, Techno-Friendly Full Service Digital Marketing Agency with 7+ years of Expertise.</p>

      <h3>Why Choose IM Solutions?</h3>
      <p>With years of experience in the online advertising field, IM Solutions knows all the right tactics to impact your website's ranking and get it to the very top. We incorporate the process of ethical PPC advertising that drives more traffic, which automatically leads to reaching more end users by harnessing today's online marketing options. Catering to clients from diverse domains, we have Created Many Powerful Brand Experiences for Our Clients Worldwide.</p>
      
      <p>As a Digital Marketing company, we offer Technical SEO Audits, Search Engine Optimization Strategies, Google AdWords Advertising (Search Engine Marketing, Pay Per Click Management & Video Advertising), Social Media Strategies and Creative Content Resulting in Fully Managed and Highly successful online marketing campaigns. Our exclusive SEM service offers a means to add value or drive traffic simultaneously while building organic SEO rankings.</p>

      <h3>Our Display Advertising Services</h3>
      
      <h4>Banner Ad Design & Creation</h4>
      <p>We create visually stunning and engaging banner ads that capture attention and drive clicks. Our design team develops eye-catching graphics, compelling copy, and clear calls-to-action that resonate with your target audience. We design banners in all standard sizes and formats optimized for different platforms and devices.</p>
      
      <h4>Strategic Ad Placement</h4>
      <p>We enhance your business's opportunity to appear within the search results & provide complete control over the keywords and budget. We work to deliver high ROI through our best practice of constant monitoring, testing and better targeting of keywords. Our strategic placement ensures your ads appear on relevant websites, apps, and platforms where your potential customers spend their time.</p>
      
      <h4>Audience Targeting & Segmentation</h4>
      <p>Reach the right people at the right time with advanced audience targeting. We use demographic targeting, interest-based targeting, behavioral targeting, and remarketing to ensure your display ads are shown to users most likely to convert. Our data-driven approach maximizes ad relevance and minimizes wasted impressions.</p>
      
      <h4>Google Display Network (GDN)</h4>
      <p>Leverage the power of Google Display Network to reach millions of users across websites, apps, and Google properties. We manage your GDN campaigns to maximize reach while maintaining cost-efficiency. Our expertise includes responsive display ads, uploaded image ads, and dynamic remarketing campaigns.</p>
      
      <h4>Performance Monitoring & Optimization</h4>
      <p>We continuously monitor your display advertising campaigns to ensure optimal performance. Our team analyzes metrics like impressions, click-through rates, conversions, and cost per acquisition to identify opportunities for improvement. We conduct A/B testing on ad creatives, targeting parameters, and bidding strategies to maximize ROI.</p>
      
      <h4>Campaign Management & Reporting</h4>
      <p>Get complete transparency with our comprehensive campaign management and reporting. We provide detailed reports on campaign performance, audience insights, and conversion data. Our team handles all aspects of campaign setup, optimization, and scaling to ensure your advertising goals are met.</p>

      <h3>Our SEM Specialization</h3>
      <p>We are the most preferred SEM Company in Bangalore to manage and enhance online presence. Our SEM specialization includes:</p>
      <ul>
        <li><strong>Online Marketing Plan:</strong> Comprehensive strategy development aligned with business goals</li>
        <li><strong>Campaign Management:</strong> End-to-end campaign setup, monitoring, and optimization</li>
        <li><strong>Keyword Research and Analysis:</strong> Identifying high-value keywords for maximum impact</li>
        <li><strong>Ad Creation and Management:</strong> Compelling ad copy and creative that drives clicks</li>
        <li><strong>Bid Management:</strong> Strategic bidding to maximize ROI while controlling costs</li>
        <li><strong>Landing Page Consultation:</strong> Optimizing landing pages for better conversions</li>
        <li><strong>Localization and Optimization:</strong> Geo-targeting and local market optimization</li>
        <li><strong>Search Analytics Implementation:</strong> Tracking and measuring campaign performance</li>
        <li><strong>Conversion Path Analysis:</strong> Understanding the customer journey</li>
        <li><strong>ROI Tracking and Reporting:</strong> Detailed performance reports and insights</li>
        <li><strong>Advanced AdWords Support:</strong> Expert Google Ads management and optimization</li>
      </ul>

      <h3>Benefits of Display Advertising</h3>
      <ul>
        <li><strong>Massive Reach:</strong> Access millions of websites and apps through display networks</li>
        <li><strong>Visual Impact:</strong> Engage users with eye-catching graphics and animations</li>
        <li><strong>Brand Awareness:</strong> Increase visibility and recognition across the web</li>
        <li><strong>Remarketing Power:</strong> Re-engage visitors who didn't convert initially</li>
        <li><strong>Flexible Formats:</strong> Text, image, video, and interactive ad options</li>
        <li><strong>Cost-Effective:</strong> Pay only for results with CPC or CPM bidding</li>
        <li><strong>Precise Targeting:</strong> Reach specific demographics, interests, and behaviors</li>
        <li><strong>Measurable Results:</strong> Track every impression, click, and conversion</li>
      </ul>

      <h3>Display Ad Formats We Create</h3>
      <ul>
        <li>Static banner ads (all standard IAB sizes)</li>
        <li>Animated HTML5 ads</li>
        <li>Responsive display ads</li>
        <li>Rich media ads</li>
        <li>Video display ads</li>
        <li>Native advertising</li>
        <li>Interstitial ads</li>
        <li>Mobile app ads</li>
      </ul>

      <h3>Industries We Serve</h3>
      <p>We provide display advertising services for businesses across all industries including:</p>
      <ul>
        <li>E-commerce and retail</li>
        <li>Technology and SaaS</li>
        <li>Healthcare and wellness</li>
        <li>Real estate</li>
        <li>Finance and insurance</li>
        <li>Education and e-learning</li>
        <li>Hospitality and travel</li>
        <li>Professional services</li>
      </ul>

      <h3>Contact & Next Steps</h3>
      <p>Contact now to re-shape your Digital Strategies to experience result-oriented Digital Marketing for your Company! Let IM Solutions create powerful display advertising campaigns that drive brand awareness and conversions. Contact us now:</p>
      <ul>
        <li><strong>Phone:</strong> +91 888 056 4488</li>
        <li><strong>Email:</strong> info@imsolutions.mobi</li>
        <li><strong>Corporate Office:</strong> #122, 8th Main Road, Bangalore</li>
      </ul>
      
      <p>Contact us today for a free consultation and let's discuss how our display advertising services can help you reach millions of potential customers and achieve your marketing goals!</p>
    `,
    features: [
      'Banner Design',
      'Network Placement',
      'Audience Targeting',
      'Performance Tracking',
      'Optimization',
      'Campaign Management',
      'Google Display Network',
      'Remarketing Campaigns',
      'A/B Testing',
      'Creative Development',
      'Bid Management',
      'Analytics & Reporting'
    ],
    benefits: [
      'Brand Awareness',
      'Targeted Reach',
      'Professional Appearance',
      'Flexible Placement',
      'Measurable Results',
      'Cost Control',
      'High ROI',
      'Visual Impact',
      'Massive Reach',
      'Remarketing Power',
      'Precise Targeting',
      'Data-Driven Insights'
    ],
    category: 'offline'
  },
  'blog-articles': {
    title: 'Blog Writing Services in Bangalore | Articles',
    description: 'Professional blog writing services to attract traffic, generate leads, and build customer relationships through engaging, SEO-optimized content.',
    longDescription: `
      <h2>Blog Articles</h2>
      <p>Blogging is an art. It is an integral part of your marketing campaign to keep your customers interested in you. Apart from the customer relationship, it also generates leads and conversions. Google's webmaster guide recommends blogging to attract the search engine spider to draw traffic to your webpage. Our experienced and highly skilled team of bloggers will give you just what you are looking for in blogging.</p>

      <h3>Our Blog Writing Approach</h3>
      <p>Just give us the keywords, and we turn those keywords into a body of artistic and engaging content, refined with impeccable language. Quality content attracts search engines such as Google, Bing and Yahoo. We guarantee interesting information that gathers huge number of backlinks and improves your rankings in the search engine results. Let your blogs build your customer relationship.</p>

      <h3>Our Strong Points</h3>
      <ol>
        <li>We make sure your content is strategically optimized so that maximum number of your target audience engages with it</li>
        <li>We have the capability to provide creative recommendations which are well thought out</li>
        <li>There is no chance of conflicts between clients since we are not associated or affiliated to any conglomerate</li>
        <li>We can create content that is strategically positioned across different platforms and channels</li>
        <li>We have a large network of industry experts and subject matter specialists</li>
      </ol>

      <h3>Why Choose IM Solutions for Blog Writing?</h3>
      <p>IM Solutions aims to use innovative ideas which can help advertisers achieve the best. We help your brand communicate with potential clients in an effective manner through well-crafted, engaging blog content that resonates with your audience.</p>

      <h3>Our Blog Writing Services</h3>
      
      <h4>SEO-Optimized Content Writing</h4>
      <p>We create blog articles that are not only engaging for readers but also optimized for search engines. Our writers incorporate relevant keywords naturally, use proper heading structures, and follow SEO best practices to help your content rank higher in search results and drive organic traffic to your website.</p>
      
      <h4>Topic Research & Ideation</h4>
      <p>Never run out of content ideas. Our team conducts comprehensive research to identify trending topics, industry news, and subjects that resonate with your target audience. We develop an editorial calendar with topic suggestions that align with your business goals and audience interests.</p>
      
      <h4>Industry-Specific Content</h4>
      <p>We have experience writing for various industries including technology, healthcare, finance, real estate, e-commerce, education, and more. Our writers understand industry-specific terminology and create content that demonstrates expertise and builds authority in your niche.</p>
      
      <h4>Engaging & Informative Articles</h4>
      <p>We turn complex topics into easy-to-understand, engaging content. Our articles are well-researched, fact-checked, and written in a conversational tone that keeps readers engaged from the first sentence to the call-to-action. We focus on providing value to your readers while subtly promoting your products or services.</p>
      
      <h4>Editorial Calendar Management</h4>
      <p>Maintain consistency with our editorial calendar management services. We plan, schedule, and deliver blog content according to your preferred publishing frequency. Whether you need daily, weekly, or monthly posts, we ensure a steady stream of quality content that keeps your audience engaged.</p>
      
      <h4>Content Optimization & Publishing</h4>
      <p>Beyond writing, we help with content optimization, formatting, image selection, and publishing support. We ensure your blog posts are properly formatted for readability, include relevant images, and are optimized for both desktop and mobile viewing.</p>

      <h3>Achieve Maximum Engagement</h3>
      <p>If you want to achieve maximum viewership and engagement, professional blog writing services are the ideal option for you to utilize. Quality blogging is one of the best forms of content marketing that builds trust, establishes authority, and drives conversions.</p>
      
      <p>According to client's requirements, we execute the content strategy successfully. Our activities are carried out in a very professional manner wherein we provide clients clear statistics about each article's performance including traffic, engagement, and conversions generated.</p>

      <h3>Benefits of Professional Blog Writing</h3>
      <ul>
        <li><strong>Improved SEO Rankings:</strong> Regular, quality content helps improve search engine rankings</li>
        <li><strong>Increased Website Traffic:</strong> Attracts organic traffic through search and social sharing</li>
        <li><strong>Lead Generation:</strong> Converts readers into leads through strategic CTAs</li>
        <li><strong>Brand Authority:</strong> Establishes your business as an industry expert</li>
        <li><strong>Customer Engagement:</strong> Keeps your audience interested and coming back</li>
        <li><strong>Cost-Effective Marketing:</strong> Provides long-term value compared to paid advertising</li>
        <li><strong>Social Media Content:</strong> Blog posts can be repurposed for social media</li>
        <li><strong>Backlink Opportunities:</strong> Quality content attracts backlinks from other websites</li>
      </ul>

      <h3>Content Types We Create</h3>
      <ul>
        <li>How-to guides and tutorials</li>
        <li>Industry news and trend analysis</li>
        <li>Product reviews and comparisons</li>
        <li>Case studies and success stories</li>
        <li>Listicles and curated content</li>
        <li>Expert interviews and opinion pieces</li>
        <li>Educational and informational articles</li>
        <li>Thought leadership content</li>
      </ul>

      <h3>Our Writing Process</h3>
      <ol>
        <li><strong>Consultation:</strong> Understanding your business, audience, and content goals</li>
        <li><strong>Research:</strong> Conducting thorough research on topics and keywords</li>
        <li><strong>Content Creation:</strong> Writing engaging, SEO-optimized articles</li>
        <li><strong>Editing & Proofreading:</strong> Ensuring error-free, polished content</li>
        <li><strong>Optimization:</strong> Adding meta descriptions, headers, and internal links</li>
        <li><strong>Delivery:</strong> Providing content in your preferred format</li>
        <li><strong>Performance Tracking:</strong> Monitoring and reporting on content performance</li>
      </ol>

      <h3>Contact & Next Steps</h3>
      <p>Ready to build your brand authority and drive traffic through quality blog content? Let IM Solutions create engaging articles that attract, inform, and convert your target audience. Contact us now:</p>
      <ul>
        <li><strong>Phone:</strong> +91 888 056 4488</li>
        <li><strong>Email:</strong> info@imsolutions.mobi</li>
        <li><strong>Corporate Office:</strong> #122, 8th Main Road, Bangalore</li>
      </ul>
      
      <p>Contact us today for a free consultation and let's discuss how our blog writing services can help you achieve your content marketing goals and grow your online presence!</p>
    `,
    features: [
      'Content Writing',
      'SEO Optimization',
      'Topic Research',
      'Editorial Calendar',
      'Publishing Support',
      'Performance Analysis',
      'Keyword Integration',
      'Industry-Specific Content',
      'Content Strategy',
      'Proofreading & Editing',
      'Image Selection',
      'Analytics Tracking'
    ],
    benefits: [
      'Increased Traffic',
      'SEO Benefits',
      'Thought Leadership',
      'Customer Engagement',
      'Lead Generation',
      'Brand Authority',
      'Improved Rankings',
      'Cost-Effective Marketing',
      'Social Media Content',
      'Backlink Opportunities',
      'Long-Term Value',
      'Audience Growth'
    ],
    category: 'offline'
  },
  'classified-portal': {
    title: 'Best Classifieds Portal Development Company in Bangalore',
    description: 'Complete classified portal development and management services to connect buyers and sellers efficiently through powerful, SEO-optimized online platforms.',
    longDescription: `
      <h2>Classified Portal Management</h2>
      <p>To grow your business in the online world, one has to harness the power of online search engines through SEO. This way you generate the sales that you deserve for your business and enable new potential customers to your retail website. IM Solution is a Creatively Led, Strategically Driven, Techno-Friendly Full Service Digital Marketing Agency with 7+ years of Expertise.</p>

      <h3>Why Choose IM Solutions for Classified Portal Development?</h3>
      <p>With years of experience in the online advertising field, IM Solutions knows all the right tactics to impact your website's ranking and get it to the very top. We incorporate the process of ethical PPC advertising that drives more traffic, which automatically leads to reaching more end users by harnessing today's online marketing options. Catering to clients from diverse domains, we have Created Many Powerful Brand Experiences for Our Clients Worldwide.</p>
      
      <p>As a Digital Marketing company, we offer Technical SEO Audits, Search Engine Optimization Strategies, Google AdWords Advertising (Search Engine Marketing, Pay Per Click Management & Video Advertising), Social Media Strategies and Creative Content Resulting in Fully Managed and Highly successful online marketing campaigns. Our exclusive SEM service offers a means to add value or drive traffic simultaneously while building organic SEO rankings.</p>

      <h3>Our Classified Portal Development Services</h3>
      
      <h4>Custom Portal Development</h4>
      <p>We develop fully customized classified portals tailored to your specific business requirements. Whether you need a general classifieds platform or a niche-specific portal for real estate, jobs, automotive, or services, we build scalable solutions that support your business model and growth objectives.</p>
      
      <h4>User Management System</h4>
      <p>Implement robust user management features including user registration, profile management, verification systems, and role-based access control. Our user management systems ensure secure authentication, social login integration, and comprehensive user dashboards for managing listings and communications.</p>
      
      <h4>Advanced Listing Management</h4>
      <p>Provide users with powerful listing management tools to create, edit, and manage their classified ads. Our systems support multiple listing types, image uploads, video integration, category management, featured listings, and automated expiration with renewal options.</p>
      
      <h4>Payment Gateway Integration</h4>
      <p>We enhance your business's opportunity to appear within the search results & provide complete control over the keywords and budget. We integrate secure payment gateways to enable monetization through premium listings, featured ads, subscription packages, and commission-based transactions. Our payment solutions support multiple payment methods and currencies.</p>
      
      <h4>Advanced Search & Filtering</h4>
      <p>Implement intelligent search functionality with advanced filtering options that help users find exactly what they're looking for. Our search systems include keyword search, category filtering, location-based search, price range filters, and saved search features.</p>
      
      <h4>Mobile-Responsive Design</h4>
      <p>Ensure your classified portal works flawlessly on all devices with fully responsive design. We create mobile-optimized experiences that provide seamless browsing, posting, and searching capabilities on smartphones and tablets, maximizing your platform's reach and user engagement.</p>

      <h3>Digital Marketing for Classified Portals</h3>
      <p>We work to deliver high ROI through our best practice of constant monitoring, testing and better targeting of keywords. Our comprehensive digital marketing services help your classified portal gain visibility and attract both sellers and buyers.</p>

      <h3>Our SEM Specialization for Classified Portals</h3>
      <p>We are the most preferred SEM Company in Bangalore to manage and enhance online presence. Our SEM specialization includes:</p>
      <ul>
        <li><strong>Online Marketing Plan:</strong> Comprehensive strategy to drive traffic to your portal</li>
        <li><strong>Campaign Management:</strong> End-to-end management of advertising campaigns</li>
        <li><strong>Keyword Research and Analysis:</strong> Identifying high-value keywords for classified listings</li>
        <li><strong>Ad Creation and Management:</strong> Creating compelling ads that drive clicks</li>
        <li><strong>Bid Management:</strong> Optimizing bids for maximum ROI</li>
        <li><strong>Landing Page Consultation:</strong> Optimizing portal pages for conversions</li>
        <li><strong>Localization and Optimization:</strong> Local SEO for location-based classifieds</li>
        <li><strong>Search Analytics Implementation:</strong> Tracking user behavior and performance</li>
        <li><strong>Conversion Path Analysis:</strong> Understanding user journey from search to posting</li>
        <li><strong>ROI Tracking and Reporting:</strong> Detailed reports on portal performance</li>
        <li><strong>Advanced AdWords Support:</strong> Expert Google Ads management</li>
      </ul>

      <h3>Key Features of Our Classified Portals</h3>
      <ul>
        <li><strong>Multi-Category Support:</strong> Organize listings across multiple categories and subcategories</li>
        <li><strong>Email Notifications:</strong> Automated alerts for new listings, messages, and favorites</li>
        <li><strong>Social Sharing:</strong> Easy sharing of listings on social media platforms</li>
        <li><strong>Messaging System:</strong> Built-in communication between buyers and sellers</li>
        <li><strong>Review & Rating System:</strong> Build trust with user reviews and ratings</li>
        <li><strong>Admin Dashboard:</strong> Comprehensive backend for managing portal operations</li>
        <li><strong>Analytics Integration:</strong> Track traffic, user behavior, and listing performance</li>
        <li><strong>SEO Optimization:</strong> Built-in SEO features for better search rankings</li>
        <li><strong>Spam Protection:</strong> Advanced filters to prevent spam and fraudulent listings</li>
        <li><strong>Multi-Language Support:</strong> Reach diverse audiences with language options</li>
      </ul>

      <h3>Monetization Options</h3>
      <ul>
        <li>Premium/featured listing fees</li>
        <li>Subscription-based packages for sellers</li>
        <li>Banner advertising revenue</li>
        <li>Commission on transactions</li>
        <li>Lead generation fees</li>
        <li>Promotional opportunities for businesses</li>
      </ul>

      <h3>Industries We Serve</h3>
      <p>We develop classified portals for various industries including:</p>
      <ul>
        <li>Real estate and property listings</li>
        <li>Job portals and recruitment</li>
        <li>Automotive (cars, bikes, vehicles)</li>
        <li>E-commerce and marketplace</li>
        <li>Services directory</li>
        <li>Rentals and accommodations</li>
        <li>Events and tickets</li>
        <li>Community and local classifieds</li>
      </ul>

      <h3>Contact & Next Steps</h3>
      <p>Contact now to re-shape your Digital Strategies to experience result-oriented Digital Marketing for your Company! Let IM Solutions build a powerful classified portal that connects buyers and sellers effectively. Contact us now:</p>
      <ul>
        <li><strong>Phone:</strong> +91 888 056 4488</li>
        <li><strong>Email:</strong> info@imsolutions.mobi</li>
        <li><strong>Corporate Office:</strong> #122, 8th Main Road, Bangalore</li>
      </ul>
      
      <p>Contact us today for a free consultation and let's discuss how we can develop a classified portal that drives engagement, generates revenue, and grows your online business!</p>
    `,
    features: [
      'Portal Development',
      'User Management',
      'Listing Management',
      'Payment Integration',
      'Search Functionality',
      'Mobile Responsive',
      'SEO Optimization',
      'Admin Dashboard',
      'Messaging System',
      'Review & Ratings',
      'Analytics Integration',
      'Multi-Language Support'
    ],
    benefits: [
      'Reliable Platform',
      'User-Friendly Interface',
      'Revenue Generation',
      'Scalability',
      'Reduced Support Costs',
      'Growth Potential',
      'High ROI',
      'Better Engagement',
      'Increased Traffic',
      'Brand Building',
      'Market Leadership',
      'Cost-Effective Solution'
    ],
    category: 'offline'
  },
  'press-releases': {
    title: 'Press Release Service Company, India | Blog Articles',
    description: 'Professional press release writing and distribution services to communicate your news effectively, boost brand visibility, and reach the right audience.',
    longDescription: `
      <h2>Press Releases / Blog Article Services</h2>
      <p>In any business, communication is the most important pillar. Communication has to be clear and should reach the right audience for them to connect with your brand. Although the channels of communication over the years have evolved tremendously as technology grew, press release still continues to be an effective and cost-effective means of communication. When done correctly, press release can boost your business performance by getting the right information of your business and increase its popularity among the public.</p>

      <h3>Our Core Press Release Services</h3>
      
      <h4>Strategic Media Placement</h4>
      <p>As news and updates form the core of businesses, we develop strategic media planning to leverage our expertise to find your audience wherever they are — in airports, gyms, hotels, shopping malls — and across radio, TV and online channels. Our strategic placement ensures your message reaches the right people at the right time.</p>
      
      <h4>International Distribution</h4>
      <p>Let your brand navigate with ease and reach influencers around the world. We have local expertise as well as global expertise to distribute your content globally to maximize on your communication strategy and increase brand awareness with your targeted audience. Our international distribution network ensures your news reaches markets worldwide.</p>
      
      <h4>Media Monitoring</h4>
      <p>As part of the media press release we also monitor the media. We have laser sharp focus on industry news that drives business decisions, listen to your audience to improve customer service, gather earned media to prove ROI, or manage your brand's reputation. Our media monitoring keeps you informed about how your news is being received and shared.</p>
      
      <h4>Press Release Package</h4>
      <p>All your press releases submitted through our network will get featured in major search engines and media platforms. We get all the analytics of the press release you published in over 100+ press release syndication data available in your dashboard. Track performance, engagement, and reach with comprehensive analytics.</p>
      
      <h4>PR Distribution</h4>
      <p>We publish your press releases in more than 100 media and news platforms. We syndicate it in an extensive range of popular media outlets. Premium Press Release Distribution will not only get your news to media journalists but also get into Google News, ensuring maximum visibility and credibility for your announcements.</p>
      
      <h4>Traditional Newsroom</h4>
      <p>Our press release services are circulated to traditional newsrooms in popular news channels on the request or demand of the client. The custom newsroom assists to bring your content in one place. News, Events, Press and Company details can be listed on your newsroom, creating a centralized hub for all your media communications.</p>

      <h3>Why Choose Our Press Release Services?</h3>
      <ul>
        <li><strong>Exceptional boost to search engine optimization:</strong> Press releases improve your online visibility and search rankings</li>
        <li><strong>Strengthen relationships with existing and new customers:</strong> Keep your audience informed and engaged</li>
        <li><strong>Greater connection with people to your business and brand:</strong> Build trust and credibility</li>
        <li><strong>Establishing your brand name as an industry leader:</strong> Position yourself as an authority in your field</li>
        <li><strong>Create opportunity for others to share the link to your business and brand:</strong> Expand reach through social sharing and backlinks</li>
      </ul>

      <h3>What We Include in Press Release Services</h3>
      <ul>
        <li><strong>Professional Writing:</strong> Expert writers craft compelling, newsworthy press releases</li>
        <li><strong>Strategic Distribution:</strong> Targeted distribution to relevant media outlets and journalists</li>
        <li><strong>SEO Optimization:</strong> Optimized for search engines to improve online visibility</li>
        <li><strong>Multimedia Integration:</strong> Include images, videos, and other media assets</li>
        <li><strong>Analytics & Reporting:</strong> Detailed reports on reach, engagement, and media pickups</li>
        <li><strong>Press Kit Development:</strong> Comprehensive press materials for media outreach</li>
        <li><strong>Media Relations:</strong> Build and maintain relationships with journalists and influencers</li>
        <li><strong>Crisis Communication:</strong> Manage sensitive situations with strategic communication</li>
      </ul>

      <h3>Press Release Distribution Network</h3>
      <p>Our extensive distribution network includes:</p>
      <ul>
        <li>100+ news and media platforms</li>
        <li>Major search engines (Google News, Bing News)</li>
        <li>Industry-specific publications</li>
        <li>Local, national, and international media outlets</li>
        <li>Social media platforms for viral potential</li>
        <li>Journalist and influencer databases</li>
        <li>Traditional newsrooms and wire services</li>
      </ul>

      <h3>Types of Press Releases We Write</h3>
      <ul>
        <li>Product launches and announcements</li>
        <li>Company milestones and achievements</li>
        <li>Executive appointments and leadership changes</li>
        <li>Event announcements and coverage</li>
        <li>Partnership and collaboration announcements</li>
        <li>Funding and investment news</li>
        <li>Award wins and recognitions</li>
        <li>Crisis management and responses</li>
        <li>Industry commentary and expert opinions</li>
        <li>Corporate social responsibility initiatives</li>
      </ul>

      <h3>Benefits of Professional Press Release Services</h3>
      <ul>
        <li><strong>Increased Media Coverage:</strong> Get your story picked up by major publications</li>
        <li><strong>Enhanced Brand Credibility:</strong> Establish authority and trust in your industry</li>
        <li><strong>Improved SEO:</strong> Quality backlinks and increased online visibility</li>
        <li><strong>Wider Audience Reach:</strong> Reach audiences beyond your existing network</li>
        <li><strong>Cost-Effective Marketing:</strong> More affordable than traditional advertising</li>
        <li><strong>Long-Term Value:</strong> Press releases remain online and continue to drive traffic</li>
        <li><strong>Social Proof:</strong> Media coverage builds trust with potential customers</li>
        <li><strong>Investor Relations:</strong> Keep stakeholders informed about company progress</li>
      </ul>

      <h3>Our Press Release Writing Process</h3>
      <ol>
        <li><strong>Consultation:</strong> Understanding your news, audience, and objectives</li>
        <li><strong>Research:</strong> Gathering all necessary information and background</li>
        <li><strong>Writing:</strong> Crafting a compelling, newsworthy press release</li>
        <li><strong>Approval:</strong> Review and revisions based on your feedback</li>
        <li><strong>Distribution:</strong> Strategic distribution to targeted media outlets</li>
        <li><strong>Monitoring:</strong> Tracking media pickups and engagement</li>
        <li><strong>Reporting:</strong> Providing detailed analytics and results</li>
      </ol>

      <h3>Contact & Next Steps</h3>
      <p>Ready to amplify your news and reach a wider audience? Let IM Solutions create and distribute professional press releases that get noticed. Contact us now:</p>
      <ul>
        <li><strong>Phone:</strong> +91 888 056 4488</li>
        <li><strong>Email:</strong> info@imsolutions.mobi</li>
        <li><strong>Corporate Office:</strong> #122, 8th Main Road, Bangalore</li>
      </ul>
      
      <p>Contact us today for a free consultation and let's discuss how our press release services can help you communicate your news effectively and build your brand reputation!</p>
    `,
    features: [
      'Press Release Writing',
      'Media Distribution',
      'Press Kit Development',
      'Media Relations',
      'Coverage Tracking',
      'PR Strategy',
      'International Distribution',
      'Media Monitoring',
      'SEO Optimization',
      'Analytics & Reporting',
      'Traditional Newsroom',
      'Crisis Communication'
    ],
    benefits: [
      'Media Coverage',
      'Brand Visibility',
      'Thought Leadership',
      'Crisis Communication',
      'Stakeholder Trust',
      'Market Awareness',
      'SEO Benefits',
      'Cost-Effective',
      'Wide Reach',
      'Enhanced Credibility',
      'Long-Term Value',
      'Social Proof'
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

  // Feature hover index
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const featureImages: string[] = [
    '/services/pro-feature-1-left.svg',
    '/services/pro-feature-1-right.svg',
    '/services/pro-feature-2-left.svg',
    '/services/pro-feature-2-right.svg',
    '/services/pro-feature-3-left.svg',
    '/services/pro-feature-3-right.svg'
  ];

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

          {/* Interactive features list with hover images */}
          <section data-reveal="true" className={`${styles.revealOnScroll} ${styles.featureHighlight}`}>
            <div className="container">
              <div className={styles.revealChild}>
                <div className={styles.featureHighlight}>
                  <ul className={styles.featureList}>
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className={styles.featureItem}
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.hoverImageWrap}>
                    <img
                      src={featureImages[(hoverIndex ?? 0) % featureImages.length]}
                      alt="Left hover"
                      className={`${styles.hoverImage} ${styles.left} ${hoverIndex !== null ? styles.visible : ''}`}
                    />
                    <img
                      src={featureImages[(hoverIndex ?? 1) % featureImages.length]}
                      alt="Right hover"
                      className={`${styles.hoverImage} ${styles.right} ${hoverIndex !== null ? styles.visible : ''}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

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
