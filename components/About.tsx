import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { ref, isVisible } = useScrollAnimation();
    return (
        <div ref={ref} className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {children}
        </div>
    );
}

const About: React.FC = () => {
    const skills = ['GoLang', 'JavaScript', 'TypeScript', 'Node.js', 'React', 'C++', 'Spark', 'Kafka', 'Salesforce Platform', 'Terraform', 'CI/CD', 'Cloud Architecture'];
    
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
                About Me
            </h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3">
                 <AnimatedSection>
                    <p className="text-lg mb-4 text-slate-600">
                        Hello! I'm Lin, a Principle Software Engineer at Salesforce, where I specialize in building high-performance, scalable data platforms. With a career spanning nearly a decade, I've architected complex systems handling multi-petabyte data loads, migrated data centers to cloud-native infrastructures, and optimized applications for peak performance.
                    </p>
                    <p className="text-lg mb-6 text-slate-600">
                        My expertise bridges backend architecture—with technologies like GoLang, Spark, and Kafka—and frontend development, where I've significantly improved UI responsiveness. I'm passionate about solving intricate technical puzzles and fostering a culture of engineering excellence.
                    </p>
                </AnimatedSection>
            </div>
            <div className="md:col-span-2">
                 <AnimatedSection>
                    <div className="bg-stone-50/60 p-6 rounded-lg shadow-sm border border-stone-200/50">
                        <h3 className="text-xl font-semibold text-slate-800 mb-4">Core Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span key={skill} className="bg-sky-100 text-sky-800 text-sm font-medium px-3 py-1 rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;