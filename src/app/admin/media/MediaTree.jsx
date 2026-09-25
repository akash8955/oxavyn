'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, CheckCircle, Circle } from 'lucide-react';

export default function MediaTree({ structure, mediaList, selectedSlot, onSelect }) {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (key) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const isSlotFilled = (page, section, title) => {
    return mediaList.some(m => m.page === page && m.section === section && m.title === title);
  };

  return (
    <div className="media-tree">
      {structure.map(page => (
        <div key={page.title} className="tree-page">
          <div className="tree-node page-node" onClick={() => toggleExpand(page.title)}>
            {expanded[page.title] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            <span className="font-bold">{page.title}</span>
          </div>
          
          {expanded[page.title] && (
            <div className="tree-children">
              {page.children.map(section => (
                <div key={section.title} className="tree-section">
                  <div className="tree-node section-node" onClick={() => toggleExpand(`${page.title}-${section.title}`)}>
                    {expanded[`${page.title}-${section.title}`] ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    <span>{section.title}</span>
                  </div>
                  
                  {expanded[`${page.title}-${section.title}`] && (
                    <div className="tree-slots">
                      {section.slots.map(slot => {
                        const filled = isSlotFilled(page.title, section.title, slot.title);
                        const isSelected = selectedSlot?.page === page.title && 
                                          selectedSlot?.section === section.title && 
                                          selectedSlot?.title === slot.title;
                        
                        return (
                          <div 
                            key={slot.title} 
                            className={`tree-slot-item ${isSelected ? 'selected' : ''}`}
                            onClick={() => onSelect({
                              page: page.title,
                              section: section.title,
                              title: slot.title,
                              type: slot.type
                            })}
                          >
                            <span className="status-icon">
                              {filled ? <CheckCircle size={12} className="text-success" /> : <Circle size={12} className="text-gray-light" />}
                            </span>
                            <span>{slot.title}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
