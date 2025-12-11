'use client';
import { motion } from 'framer-motion';
import './TeamSection.css';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Krunal Kumar Yadav',
      role: 'Founder & CEO',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/033/129/417/small/a-business-man-stands-against-white-background-with-his-arms-crossed-ai-generative-photo.jpg',
      description: 'Visionary leader with expertise in business strategy. Passionate about creating innovative digital solutions.',
      skills: ['Leadership', 'Strategy', 'Architecture'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      social: {
        linkedin: 'https://www.linkedin.com/in/krunal-kumar-yadav-347184396?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        whatsapp: 'https://wa.me/7634820773',
      }
    },
    {
      name: 'Manya Shukla',
      role: 'Team Lead - Tech & Operations',
  image: '/assets/teams/manya.jpeg',
      description: 'Software Developer specializing in building scalable, high-performance applications. Ensures smooth project execution and technical excellence.',
      skills: ['Frontend', 'Backend', 'Database', 'Deployment', 'Project Management'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      social: {
        linkedin: 'https://www.linkedin.com/in/manya-shukla99/',
        portfolio: 'https://manya-shukla.vercel.app/',
        github: 'https://github.com/MANYA-SHUKLA'
      }
    },
    {
      name: 'Afreeda Asad',
      role: ' Software Engineer & QA Analyst',
   image: '/assets/teams/afreeda.jpg',
      description: 'Testing specialist with expertise in frontend development and user experience design. Creates beautiful, functional interfaces.',
      skills: ['Testing', 'UI/UX', 'Frontend', 'Quality Assurance'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      social: {
        linkedin: 'https://www.linkedin.com/in/afreedaasad',
        portfolio: '#',
        github: 'https://github.com/afridaasad'
      }
    },
      {
      name: 'Rajkumar Yogi',
      role: 'Software Engineer',
      image: 'https://rajkumaryogi.vercel.app/static/media/Photo_Pass.54eb909dfcd512176872.JPG',
      description: 'Software Developer with a strong foundation in modern technologies and best coding practices.',
      skills: ['Frontend', 'Backend', 'Database', 'Deployment'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      social: {
        linkedin: 'https://www.linkedin.com/in/rajkumaryogi-jnu/',
        portfolio: 'https://rajkumaryogi.vercel.app/',
        github: 'https://github.com/Rajkumaryogi'
      }
    },
       {
      name: 'Nikhil Verma',
      role: 'Software Engineer',
      image: 'https://rajkumaryogi.vercel.app/static/media/Photo_Pass.54eb909dfcd512176872.JPG',
      description: 'Detail-oriented Developer with hands-on experience in modern tools, frameworks, and engineering best practices.',
      skills: ['Frontend', 'Backend', 'Database', 'Deployment'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      social: {
        linkedin: 'https://www.linkedin.com/in/nikhil-verma-1b1bb8227/',
        portfolio: 'https://rajkumaryogi.vercel.app/',
        github: 'https://github.com/nvverma8'
      }
    },
  ];

  return (
    <section id="team" className="team-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            The passionate minds behind CODYSSEY's success
          </p>
        </motion.div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="team-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="team-card-inner">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                  <div 
                    className="member-gradient"
                    style={{ background: member.gradient }}
                  ></div>
                </div>
                
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-description">{member.description}</p>
                  
                  <div className="member-skills">
                    {member.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                  
                  <div className="member-social">
                    <a href={member.social.linkedin} className="social-link">
                      <svg viewBox="0 0 24 24" width="20" height="20">
                        <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    {member.social.portfolio && (
                      <a href={member.social.portfolio} className="social-link">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                          <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="social-link">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                          <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {member.social.whatsapp && (
                      <a href={member.social.whatsapp} className="social-link" target="_blank">
                        <svg width="20" height="20" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12c0 1.86.51 3.6 1.39 5.11L2 22l4.99-1.32A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.71 0-3.33-.5-4.72-1.39l-.34-.22-2.96.78.79-2.89-.23-.35A7.938 7.938 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.31-5.48c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.53.12-.15.24-.61.78-.75.94-.14.16-.27.18-.5.06-.24-.12-.99-.36-1.88-1.15-.7-.63-1.17-1.4-1.31-1.64-.14-.24-.02-.37.1-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.29-.72-1.78-.19-.48-.39-.41-.55-.42h-.47c-.18 0-.44.06-.67.3-.23.24-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.78 2.73 4.33 3.82.61.26 1.08.41 1.46.53.61.19 1.16.16 1.6.1.49-.07 1.52-.62 1.74-1.21.22-.59.22-1.12.15-1.23-.06-.11-.24-.17-.5-.3z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
