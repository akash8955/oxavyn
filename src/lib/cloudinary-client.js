export const getCloudinaryPublicId = (urlOrPublicId) => {
  if (!urlOrPublicId) return null;
  
  // If it doesn't look like a URL, assume it's already a publicId
  if (!urlOrPublicId.includes('cloudinary.com') && !urlOrPublicId.startsWith('http') && !urlOrPublicId.startsWith('/')) {
    return urlOrPublicId;
  }
  
  try {
    // Extract publicId from Cloudinary URL
    // e.g., https://res.cloudinary.com/demo/image/upload/v1234567890/folder/image.jpg -> folder/image
    const matches = urlOrPublicId.match(/\/upload\/(?:v\d+\/)?(.+)/);
    if (matches && matches[1]) {
      // Return the extracted public ID WITH the extension so it doesn't 404
      return matches[1];
    }
    return urlOrPublicId; // fallback to returning the original string if it's not a standard upload URL
  } catch (error) {
    console.error("Failed to extract Cloudinary public ID", error);
    return urlOrPublicId;
  }
};

export const getOptimizedVideoUrl = (publicIdOrUrl) => {
  if (!publicIdOrUrl) return null;
  const publicId = getCloudinaryPublicId(publicIdOrUrl);
  
  // If it couldn't extract a public ID, just return the original URL
  if (publicIdOrUrl.includes('http') && publicId === publicIdOrUrl) {
      return publicIdOrUrl; 
  }

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'rqnd9sxe';
  
  // Use q_auto, f_auto, w_1280 for highly optimized fast video delivery
  return `https://res.cloudinary.com/${cloudName}/video/upload/q_auto,f_auto,w_1280/${publicId}`;
};

export const getOptimizedPosterUrl = (publicIdOrUrl) => {
  if (!publicIdOrUrl) return null;
  const publicId = getCloudinaryPublicId(publicIdOrUrl);
  
  if (publicIdOrUrl.includes('http') && publicId === publicIdOrUrl) {
    return null; 
  }

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'rqnd9sxe';
  
  // Replace any existing video extension with .jpg to generate a thumbnail poster
  const posterId = publicId.replace(/\.[^/.]+$/, "") + ".jpg";
  
  return `https://res.cloudinary.com/${cloudName}/video/upload/q_auto,f_auto,w_1200/${posterId}`;
};

export const getOptimizedImageUrl = (publicIdOrUrl, width) => {
  if (!publicIdOrUrl) return null;
  const publicId = getCloudinaryPublicId(publicIdOrUrl);
  
  // If it couldn't extract a public ID, just return the original URL
  if (publicIdOrUrl.includes('http') && publicId === publicIdOrUrl) {
    return publicIdOrUrl; 
  }

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'rqnd9sxe';
  
  let transformations = 'q_auto,f_auto';
  if (width) {
    transformations += `,w_${width}`;
  }
  
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformations}/${publicId}`;
};
