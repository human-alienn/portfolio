import { Briefcase, Users, Megaphone, Shield, Code, Sparkles, Zap, Star, TrendingUp, Target, Rocket, Globe, Twitter, GraduationCap, Award, ArrowRight, Send, Mail } from 'lucide-react';

// Local image path
const profileImg = '/images/profile.jpg';

export function Home() {
  const expertiseAreas = [
    {
      icon: Briefcase,
      title: 'Business Developer',
      shortDesc: 'Strategic partnerships and growth initiatives',
      fullDesc: 'I specialize in identifying and cultivating strategic partnerships that drive exponential growth. With a keen eye for opportunities, I connect projects with the right partners, investors, and collaborators. My approach combines market analysis, relationship building, and strategic planning to create win-win scenarios that unlock new revenue streams and expand market reach. I excel at pitching, negotiating deals, and establishing long-term business relationships that deliver sustained value.',
      skills: ['Partnership Development', 'Market Analysis', 'Deal Negotiation', 'Revenue Growth', 'Strategic Planning', 'Investor Relations'],
      gradient: 'from-purple-400 to-pink-400',
      bgGradient: 'from-purple-100 to-pink-100',
    },
    {
      icon: Users,
      title: 'Ambassador',
      shortDesc: 'Brand representation and community leadership',
      fullDesc: 'As a brand ambassador, I serve as the face and voice of projects I believe in. I represent brands authentically across multiple platforms, building trust and credibility within target communities. My ambassadorial work includes attending events, creating engaging content, hosting AMAs, and being the bridge between projects and their communities. I understand the importance of genuine representation and work to embody the values and vision of every project I represent.',
      skills: ['Brand Representation', 'Public Speaking', 'Content Creation', 'Event Hosting', 'Community Relations', 'Social Media Advocacy'],
      gradient: 'from-blue-400 to-purple-400',
      bgGradient: 'from-blue-100 to-purple-100',
    },
    {
      icon: Megaphone,
      title: 'Raiding & Shilling Expert',
      shortDesc: 'Strategic marketing and viral community growth',
      fullDesc: 'I mastermind coordinated marketing campaigns that create massive visibility and engagement. My raiding strategies involve organizing community members to strategically engage with target platforms, creating organic buzz and viral moments. I understand the psychology of social media algorithms and leverage them to maximize reach. From Twitter raids to Discord takeovers, I orchestrate campaigns that turn whispers into roars, driving authentic community growth and market awareness.',
      skills: ['Raid Coordination', 'Viral Marketing', 'Twitter Growth', 'Telegram Strategies', 'Discord Raids', 'Trend Hijacking', 'Influencer Outreach'],
      gradient: 'from-pink-400 to-rose-400',
      bgGradient: 'from-pink-100 to-rose-100',
    },
    {
      icon: Shield,
      title: 'Community Moderator',
      shortDesc: 'Expert in community management and engagement',
      fullDesc: 'I build and maintain thriving online communities where members feel valued, heard, and engaged. My moderation style balances firmness with empathy, ensuring communities remain positive, productive, and aligned with project goals. I handle conflicts diplomatically, enforce rules consistently, and create engagement strategies that keep communities active 24/7. From Discord servers to Telegram groups, I craft community cultures that turn members into passionate advocates.',
      skills: ['Community Management', 'Conflict Resolution', 'Engagement Strategies', 'Rule Enforcement', 'Member Onboarding', 'Event Coordination', 'Crisis Management'],
      gradient: 'from-green-400 to-emerald-400',
      bgGradient: 'from-green-100 to-emerald-100',
    },
    {
      icon: Code,
      title: 'Frontend Developer',
      shortDesc: 'Building modern, responsive websites',
      fullDesc: 'I craft beautiful, high-performance websites that don\'t just look stunning but convert visitors into customers. Using cutting-edge technologies like React, Next.js, and Tailwind CSS, I build responsive, SEO-optimized websites with seamless user experiences. From landing pages to full web applications, I translate business requirements into pixel-perfect implementations. My code is clean, maintainable, and built with scalability in mind.',
      skills: ['React & Next.js', 'Tailwind CSS', 'Responsive Design', 'UI/UX Implementation', 'Web3 Integration', 'Performance Optimization', 'SEO Best Practices'],
      gradient: 'from-orange-400 to-red-400',
      bgGradient: 'from-orange-100 to-red-100',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero Section - Asymmetric Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
        {/* Left Side - Profile */}
        <div className="order-2 lg:order-1 animate-slide-in-up flex flex-col items-center lg:col-span-2">
          <div className="mb-6">
            <div className="relative group">
              <div className="w-56 h-56 rounded-[3rem] overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-3 shadow-2xl shadow-purple-500/50 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-1">
                <img src={profileImg} alt="Akande Ezekiel" className="w-full h-full object-cover rounded-[2.8rem]" />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="absolute -top-4 -right-4">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl p-4 shadow-xl animate-bounce">
                  <Star className="w-8 h-8 text-white fill-white" />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-3xl opacity-20 blur-xl animate-pulse"></div>
            </div>
          </div>
          
          <div className="text-center w-full">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mb-4">
              Akande Ezekiel
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              <span className="px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Business Dev
              </span>
              <span className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Ambassador
              </span>
              <span className="px-5 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 flex items-center gap-2">
                <Megaphone className="w-4 h-4" />
                Marketing
              </span>
              <span className="px-5 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Moderator
              </span>
              <span className="px-5 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 flex items-center gap-2">
                <Code className="w-4 h-4" />
                Developer
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section - Social Proof */}
      <div className="mb-24 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* X Community Stat */}
          <div className="group relative bg-gradient-to-br from-sky-400 to-blue-600 rounded-[2.5rem] p-10 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-black/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                  <Twitter className="w-10 h-10 text-white" />
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm">Active</span>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="text-white/80 mb-2">Phoenix Ecosystem Community</div>
                <div className="flex items-end gap-3">
                  <h2 className="text-white">20K+</h2>
                  <div className="pb-2 flex items-center gap-1 text-green-300">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-lg">Growing</span>
                  </div>
                </div>
              </div>
              
              <p className="text-white/90 text-lg">
                Part of a dedicated team leading the Phoenix Ecosystem community on X with 20,000+ engaged followers, creating viral content and coordinating powerful marketing campaigns.
              </p>
            </div>
          </div>

          {/* University Channel Stat */}
          <div className="group relative bg-gradient-to-br from-purple-500 to-pink-600 rounded-[2.5rem] p-10 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-black/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm">Active Daily</span>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="text-white/80 mb-2">University Onboarding Channel</div>
                <div className="flex items-end gap-3">
                  <h2 className="text-white">6K+</h2>
                  <div className="pb-2 flex items-center gap-1 text-yellow-200">
                    <Award className="w-5 h-5" />
                    <span className="text-lg">Members</span>
                  </div>
                </div>
              </div>
              
              <p className="text-white/90 text-lg">
                Managing an active university channel with 6,000+ members, specializing in onboarding and education, creating a seamless entry experience for new community members.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Expertise - Staggered Layout */}
      <div className="mb-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-100 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span className="text-purple-600">What I Do Best</span>
          </div>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Deep Expertise Across Multiple Domains
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Each skill refined through real-world experience and proven results
          </p>
        </div>
        
        <div className="space-y-8">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={area.title}
                className={`flex ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-8`}
              >
                {/* Icon Side */}
                <div className="lg:w-1/3">
                  <div className={`sticky top-24 group relative bg-gradient-to-br ${area.gradient} rounded-[2.5rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105`}>
                    <div className="absolute inset-0 bg-white/10 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 text-center">
                      <Icon className="w-20 h-20 text-white mx-auto mb-6 animate-float" />
                      <h3 className="text-white mb-2">{area.title}</h3>
                      <p className="text-white/80">{area.shortDesc}</p>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-2/3">
                  <div className="bg-white/70 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-10 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500">
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      {area.fullDesc}
                    </p>
                    
                    <div className="border-t border-gray-200 pt-6">
                      <p className="text-gray-600 mb-4">Core Skills:</p>
                      <div className="flex flex-wrap gap-3">
                        {area.skills.map((skill) => (
                          <span
                            key={skill}
                            className={`px-4 py-2 bg-gradient-to-r ${area.gradient} bg-opacity-10 text-gray-800 rounded-xl border border-gray-200 hover:scale-105 hover:shadow-md transition-all duration-300`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why Work With Me - Creative Layout */}
      <div className="mb-20">
        <div className="relative bg-gradient-to-br from-gray-900 to-purple-900 rounded-[3rem] p-12 md:p-16 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-white mb-4">Why Choose Me?</h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Real results, authentic engagement, and a commitment to excellence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-white mb-3">Proven Track Record</h4>
                <p className="text-white/70 leading-relaxed">
                  0 to 1K followers
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-white mb-3">Strategic Mindset</h4>
                <p className="text-white/70 leading-relaxed">
                  Every move calculated, every campaign optimized. I think 10 steps ahead to ensure sustainable growth.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-400 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-white mb-3">100% Committed</h4>
                <p className="text-white/70 leading-relaxed">
                  Your project becomes my mission. I bring passion, dedication, and relentless execution to everything I touch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA - Bold Design */}
      <div className="text-center">
        <div className="relative inline-block">
          <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-[3rem] p-12 md:p-16 shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <div className="relative z-10">
              <Globe className="w-20 h-20 text-white mx-auto mb-8 animate-float" />
              <h2 className="text-white mb-6">Let's Build Something Incredible</h2>
              <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                Whether you need explosive community growth, strategic partnerships, or a stunning website—I've got the skills, the network, and the drive to make it happen.
              </p>
              <div className="flex items-center justify-center gap-6">
                <a
                  href="https://x.com/talented_alien"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/30"
                >
                  <Twitter className="w-7 h-7 text-white" />
                </a>
                <a
                  href="https://t.me/webby3333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/30"
                >
                  <Send className="w-7 h-7 text-white" />
                </a>
                <a
                  href="mailto:akandeezekel2007@gmail.com"
                  className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/30"
                >
                  <Mail className="w-7 h-7 text-white" />
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-[3rem] blur-2xl opacity-50 -z-10 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}