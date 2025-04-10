
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, FileText } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-navy-dark/90 backdrop-blur-md shadow-md' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white font-mono">
          <span className="text-highlight">S</span>anjai
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <ol className="flex space-x-1">
            {NavItems.map((item, i) => (
              <li key={i}>
                <a href={item.href} className="nav-link">
                  <span className="text-highlight font-mono mr-1">{i + 1}.</span> {item.name}
                </a>
              </li>
            ))}
          </ol>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-4"
          >
            <Button variant="outline" className="border-highlight text-highlight hover:bg-highlight/10">
              <FileText className="mr-2 h-4 w-4" /> Resume
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-light" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed top-0 right-0 bottom-0 bg-navy-light w-3/4 z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu}>
            <X size={24} className="text-slate-light" />
          </button>
        </div>
        <nav className="flex flex-col items-center mt-16 space-y-6">
          {NavItems.map((item, i) => (
            <a 
              key={i} 
              href={item.href} 
              className="text-lg font-medium text-slate-light hover:text-highlight"
              onClick={toggleMenu}
            >
              <span className="text-highlight font-mono mr-1">{i + 1}.</span> {item.name}
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-8"
            onClick={toggleMenu}
          >
            <Button variant="outline" className="border-highlight text-highlight hover:bg-highlight/10">
              <FileText className="mr-2 h-4 w-4" /> Resume
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
