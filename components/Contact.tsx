import React from 'react';

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35.0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35.0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-stone-200 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Get In Touch</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          I'm always happy to connect and chat about technology, projects, or anything in between. Feel free to drop me a line!
        </p>
        <a 
          href="mailto:shilinsias@gmail.com" 
          className="inline-block bg-sky-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-sky-600 transition-colors duration-300"
        >
          Say Hello
        </a>
        <div className="flex justify-center space-x-6 mt-12">
            <a href="https://github.com/linsssbei" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-500 transition-colors"><GithubIcon /></a>
            <a href="https://www.linkedin.com/in/linshijasper/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-500 transition-colors"><LinkedinIcon /></a>
        </div>
        <div className="mt-12 border-t border-stone-300 pt-8">
            <p className="text-slate-500">
                Designed & Built by Lin Shi
            </p>
            <p className="text-sm text-slate-400 mt-2">
                Assisted by Google's Gemini
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
