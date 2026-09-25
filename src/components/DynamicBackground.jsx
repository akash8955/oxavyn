"use client";
import React from 'react';
import { useDynamicMedia } from './useDynamicMedia';

export default function DynamicBackground({ 
  page, 
  section, 
  title, 
  fallbackSrc, 
  className, 
  style, 
  children,
  elementType: Element = 'section',
  ...props 
}) {
  const { src } = useDynamicMedia(page, section, title, fallbackSrc);

  return (
    <Element 
      className={className} 
      style={{ ...style, backgroundImage: `url(${src})` }} 
      {...props}
    >
      {children}
    </Element>
  );
}
