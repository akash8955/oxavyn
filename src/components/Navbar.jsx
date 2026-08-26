"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";
import { navLinks } from "./navData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSubDropdown, setMobileSubDropdown] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileSubDropdown(null);
  }, [pathname]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.nav-item') && !e.target.closest('.mobile-drawer')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);



  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          {/* Logo */}
          <div className="nav-logo">
            <Link href="/">
              <span className="logo-text">Oxavyn</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="nav-links desktop-only">
            {navLinks.map((link, idx) => (
              <div 
                key={idx} 
                className={`nav-item ${link.megaMenuType === 'full' ? 'mega-full-parent' : ''}`}
                onMouseEnter={() => {
                  if (activeDropdown && activeDropdown !== link.name) {
                    setActiveDropdown(null);
                  }
                }}
              >
                {link.isDropdown ? (
                  <span 
                    className={`nav-link ${activeDropdown === link.name ? 'active' : ''}`}
                    onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                  >
                    {link.name}
                    <svg className="chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </span>
                ) : (
                  <Link href={link.href} className="nav-link">
                    {link.name}
                  </Link>
                )}

                {/* Mega Menu Dropdown */}
                {link.isDropdown && activeDropdown === link.name && (
                  <div className={`mega-menu animate-fade-in ${link.megaMenuType === 'full' ? 'mega-menu-full' : ''}`}>
                    {link.megaMenuType === 'full' ? (
                      <div className="mega-menu-rows">
                        {link.rows.map((row) => (
                          <div key={row.id} className="mega-row">
                            {row.columns.map((col, cIdx) => (
                              <div key={cIdx} className="mega-col">
                                <h5 className="mega-col-title">{col.title}</h5>
                                <div className="mega-col-items">
                                  {col.items.map((item, i) => (
                                    <Link href={item.href || "/services"} key={i} className="mega-menu-item">
                                      <div className="mega-icon">{item.icon}</div>
                                      <div className="mega-text">
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="mega-menu-grid">
                        {link.items.map((item, i) => (
                          <Link href={item.href || "/services"} key={i} className="mega-menu-item">
                            <div className="mega-icon">{item.icon}</div>
                            <div className="mega-text">
                              <h4>{item.title}</h4>
                              <p>{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="mobile-only">
            <button 
              className="hamburger"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div className={`mobile-drawer-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(false)}></div>
      
      {/* Mobile Drawer (Slide from Left) */}
      <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <span className="logo-text">Oxavyn</span>
          <button className="close-btn" onClick={() => setIsMobileMenuOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="drawer-content">
          {navLinks.map((link, idx) => (
            <div key={idx} className="drawer-item">
              {link.isDropdown ? (
                <>
                  <button 
                    className="drawer-link dropdown-toggle"
                    onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                  >
                    {link.name}
                    <svg className={`chevron ${activeDropdown === link.name ? 'rotated' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </button>
                  <div className={`drawer-dropdown ${activeDropdown === link.name ? 'open' : ''}`}>
                    <div className="drawer-dropdown-inner">
                      {link.megaMenuType === 'full' ? (
                        <div className="drawer-full-menu">
                        {link.rows.map((row, rIdx) => (
                          row.columns.map((col, cIdx) => (
                            <div key={cIdx} className="drawer-col-group">
                              <button 
                                className="drawer-col-title-btn"
                                onClick={() => setMobileSubDropdown(mobileSubDropdown === col.title ? null : col.title)}
                              >
                                {col.title}
                                <svg 
                                  className={`chevron ${mobileSubDropdown === col.title ? 'active' : ''}`}
                                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                >
                                  <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                              </button>
                              <div className={`drawer-dropdown ${mobileSubDropdown === col.title ? 'open' : ''}`}>
                                <div className="drawer-dropdown-inner">
                                  {col.items.map((item, i) => (
                                    <Link href={item.href || "/services"} key={i} className="drawer-dropdown-item">
                                      {item.title}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))
                        ))}
                      </div>
                    ) : (
                      link.items.map((item, i) => (
                        <Link href={item.href || "/services"} key={i} className="drawer-dropdown-item">
                          {item.title}
                        </Link>
                      ))
                    )}
                    </div>
                  </div>
                </>
              ) : (
                <Link href={link.href} className="drawer-link">
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
