import React from 'react';
import { type Experience } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const experienceData: Experience[] = [
  {
    role: 'Principle Software Engineer',
    company: 'Salesforce',
    duration: 'Dec 2018 – Present',
    description: [
      'Designed and built a high performance, scalable, and reliable data compute platform on HDFS, HBase, Kafka and Spark, serving multi-petabytes of data daily with 99% uptime.',
      'Developed and optimized a data ingestion application in GoLang, reducing memory and CPU usage while ensuring consistent data flow through Kafka.',
      'Led the migration of a traditional data center solution to a cloud-native automation pipeline using Spinnaker, Helm, and Terraform.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'IBM',
    duration: 'Jan 2018 – Dec 2018',
    description: [
      'Engineered a scalable, real-time data warehouse schema, handling over 100,000 daily transactions from remote database servers.',
      'Implemented an incremental ETL process, successfully reducing data latency between server components by 15%.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'IBM',
    duration: 'April 2016 – Dec 2017',
    description: [
      'Reduced UI response time by 70% by customizing Angular Change Detection and implementing partial loading features.',
      'Designed a secure, event-driven inter-process communication architecture for efficient data exchange across multiple operating systems.',
      'Optimized NodeJS application memory usage by 75% through garbage collector customization.',
      'Extended the Electron framework with native C++/Objective-C add-ons to enhance notification compatibility on Windows, MacOS, and Ubuntu.',
      'Automated End-to-End testing with Jenkins, reducing QA regression efforts by 30% and enabling CI/CD.',
    ],
  },
   {
    role: 'Software Engineer',
    company: 'IBM',
    duration: 'Jan 2015 – March 2016',
    description: [
      'Implemented a cloud-based console management system using NodeJS, ExpressJS, AngularJS, and various SQL databases.',
      'Increased user concurrency by 125% by analyzing and refactoring SQL queries and RESTful API performance bottlenecks.',
      'Extended core services to support automatic installation of new file formats across Windows, MacOS, and Linux distributions.',
    ],
  },
];


const ExperienceItem: React.FC<{ experience: Experience; isLast: boolean }> = ({ experience, isLast }) => {
    const { ref, isVisible } = useScrollAnimation();
    return (
        <div ref={ref} className={`relative pl-8 sm:pl-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="absolute left-0 top-1 h-full">
                <span className="block w-4 h-4 bg-sky-500 rounded-full"></span>
                {!isLast && <span className="block w-0.5 h-full bg-stone-300 mx-auto mt-2"></span>}
            </div>
            <div className="mb-12">
                <p className="text-slate-500 font-medium">{experience.duration}</p>
                <h3 className="text-xl font-bold text-slate-800 mt-1">{experience.role}</h3>
                <p className="text-sky-600 font-semibold">{experience.company}</p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-slate-600">
                    {experience.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Experience: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation();
    return (
        <section id="experience" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div ref={ref} className={`text-center mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                        Professional Experience
                    </h2>
                    <p className="text-lg text-slate-500 mt-2">My career journey so far.</p>
                </div>
                <div className="max-w-3xl mx-auto">
                    {experienceData.map((exp, index) => (
                        <ExperienceItem key={index} experience={exp} isLast={index === experienceData.length - 1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;