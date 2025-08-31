import React from 'react';
import { type Project } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projectsData: Project[] = [
  {
    title: 'High-Performance Data Compute Platform',
    description: 'Architected and developed a scalable, reliable data compute platform at Salesforce using HDFS, HBase, Kafka, and Spark to process multi-petabyte data loads with 99% uptime. Optimized data ingestion with GoLang for maximum efficiency.',
    tags: ['GoLang', 'Spark', 'Kafka', 'HDFS', 'Cloud Architecture'],
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'IBM BigFix Application Modernization',
    description: 'Led a major performance overhaul for the IBM BigFix Self-Service Application. Improved UI responsiveness by 70% through Angular optimization and reduced application memory usage by 75% by customizing the NodeJS garbage collector.',
    tags: ['Angular', 'Node.js', 'Electron', 'Performance', 'C++'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
    link: '#',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const { ref, isVisible } = useScrollAnimation();
    return (
        <div ref={ref} className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col group shadow-md hover:shadow-xl border border-stone-200/50">
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                    <p className="text-slate-600 mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                            <span key={tag} className="bg-stone-200 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                        ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-auto text-sky-500 hover:text-sky-600 font-semibold self-start">
                        View Project &rarr;
                    </a>
                </div>
            </div>
        </div>
    );
};


const Projects: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="projects" className="py-20 md:py-32 bg-stone-200/70">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`text-center mb-12 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                My Projects
            </h2>
            <p className="text-lg text-slate-500 mt-2">A selection of my work.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;