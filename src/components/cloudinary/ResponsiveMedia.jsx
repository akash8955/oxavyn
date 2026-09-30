"use client";
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { getCloudinaryPublicId, getOptimizedVideoUrl, getOptimizedImageUrl, getOptimizedPosterUrl } from '../../lib/cloudinary-client';

const ResponsiveMedia = React.forwardRef(({
  src,
  type = 'image',
  variant = 'content',
  alt = '',
  className = '',
  style,
  autoPlay = false,
  muted = false,
  loop = false,
  controls = false,
  priority = false,
  ...props
}, ref) => {
  // ALL HOOKS MUST BE AT THE TOP LEVEL BEFORE ANY EARLY RETURNS
  const internalVideoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [imgError, setImgError] = useState(false);
  
  useEffect(() => {
    setImgError(false);
  }, [src]);

  useEffect(() => {
    if (type !== 'video') return;
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [type]);

  useEffect(() => {
    if (type !== 'video' || !isMobile) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && internalVideoRef.current) {
          internalVideoRef.current.muted = false;
          window.dispatchEvent(new CustomEvent('video-unmute', { detail: { element: internalVideoRef.current } }));
        } else if (internalVideoRef.current) {
          internalVideoRef.current.muted = true;
        }
      });
    }, { threshold: 0.5 });

    if (internalVideoRef.current) observer.observe(internalVideoRef.current);
    return () => {
      if (internalVideoRef.current) observer.unobserve(internalVideoRef.current);
    };
  }, [type, isMobile]);

  useEffect(() => {
    if (type !== 'video') return;
    const handleGlobalUnmute = (e) => {
      if (e.detail.element !== internalVideoRef.current && internalVideoRef.current) {
        internalVideoRef.current.muted = true;
      }
    };
    window.addEventListener('video-unmute', handleGlobalUnmute);
    return () => window.removeEventListener('video-unmute', handleGlobalUnmute);
  }, [type]);

  if (!src) return null;

  const publicId = getCloudinaryPublicId(src);

  // Check if it's an external url (not cloudinary) or a relative url
  const isExternalOrRelativeUrl = (str) => str.startsWith('http') && !str.includes('cloudinary.com') || str.startsWith('/');
  const isCloudinaryId = src && !isExternalOrRelativeUrl(src) || src.includes('res.cloudinary.com');

  const setRefs = (element) => {
    internalVideoRef.current = element;
    if (typeof ref === 'function') ref(element);
    else if (ref) ref.current = element;
  };

  const handleMouseEnter = () => {
    if (type !== 'video' || isMobile || !internalVideoRef.current) return;
    internalVideoRef.current.muted = false;
    window.dispatchEvent(new CustomEvent('video-unmute', { detail: { element: internalVideoRef.current } }));
  };

  const handleMouseLeave = () => {
    if (type !== 'video' || isMobile || !internalVideoRef.current) return;
    internalVideoRef.current.muted = true;
  };

  // Video logic
  if (type === 'video') {
    if (isCloudinaryId && publicId) {
      const optimizedSrc = getOptimizedVideoUrl(publicId);
      const posterUrl = getOptimizedPosterUrl(publicId);
      return (
        <video
          src={optimizedSrc}
          poster={posterUrl}
          className={className}
          style={style}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline
          controls={controls}
          preload={autoPlay ? "auto" : "none"}
          ref={setRefs}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          {...props}
        />
      );
    } else {
      return (
        <video
          src={src}
          className={className}
          style={style}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline
          controls={controls}
          preload={autoPlay ? "auto" : "none"}
          ref={setRefs}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          {...props}
        />
      );
    }
  }

  // Image logic
  if (isCloudinaryId && publicId) {
    let sizes = "100vw";
    let width = 800;
    let height = 600;

    switch (variant) {
      case 'hero':
        sizes = "100vw";
        width = 1920;
        height = 1080;
        break;
      case 'card':
        sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";
        width = 800;
        height = 500;
        break;
      case 'thumbnail':
        sizes = "(max-width: 768px) 50vw, 400px";
        width = 400;
        height = 300;
        break;
      case 'logo':
        width = 200;
        height = 100;
        sizes = "200px";
        break;
      case 'background':
        sizes = "100vw";
        width = 1920;
        height = 1080;
        break;
      default:
        sizes = "(max-width: 768px) 100vw, 50vw";
        width = 1200;
        height = 800;
    }

    // Use user-provided width/height if available
    const finalWidth = props.width || width;
    const finalHeight = props.height || height;

    // Remove width and height from props to avoid passing them to CldImage twice
    const { width: _w, height: _h, ...restProps } = props;

    // Use explicitly transformed URL
    const optimizedSrc = getOptimizedImageUrl(publicId, finalWidth);

    return (
      <img
        key={publicId}
        src={optimizedSrc}
        alt={alt}
        className={className}
        style={{ ...style, display: imgError ? 'none' : undefined }}
        width={finalWidth}
        height={finalHeight}
        loading={priority || variant === 'hero' ? 'eager' : 'lazy'}
        onError={() => setImgError(true)}
        {...restProps}
      />
    );
  }

  // Fallback for non-Cloudinary images
  const isLocalAsset = src && typeof src === 'string' && src.startsWith('/');

  if (isLocalAsset) {
    return (
      <Image
        src={src}
        alt={alt}
        className={className}
        style={{ ...style, display: imgError ? 'none' : undefined }}
        width={props.width || 800}
        height={props.height || 600}
        priority={priority}
        onError={() => setImgError(true)}
        {...props}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ ...style, display: imgError ? 'none' : undefined }}
      loading={priority ? "eager" : "lazy"}
      onError={() => setImgError(true)}
      ref={ref}
      {...props}
    />
  );
});

ResponsiveMedia.displayName = 'ResponsiveMedia';
export default ResponsiveMedia;
