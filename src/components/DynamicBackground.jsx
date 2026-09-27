"use client";
import React from 'react';
import { useDynamicMedia } from './useDynamicMedia';
import { getOptimizedImageUrl } from '../lib/cloudinary-client';

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
