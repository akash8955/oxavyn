"use client";
import React, { useEffect } from 'react';
import { useDynamicMedia } from './useDynamicMedia';
import { getOptimizedImageUrl } from '../lib/cloudinary-client';
import { preload } from 'react-dom';

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

  // Optimize background image for cloudinary
  const optimizedSrc = src && src.includes('cloudinary.com') 
    ? getOptimizedImageUrl(src, 1920) 
    : src;

  // Immediately inject a preload link into the document head
  // This forces the browser to download the background image instantly
  // rather than waiting for CSS parsing and rendering
  if (optimizedSrc) {
    preload(optimizedSrc, { as: 'image' });
  }

  return (
    <Element 
      className={`global-dynamic-banner ${className || ''}`} 
      style={{ ...style, backgroundImage: optimizedSrc ? `url(${optimizedSrc})` : 'none' }} 
      {...props}
    >
      {children}
    </Element>
  );
}
