/**
 * CDN utility for handling asset URLs
 * Switches between local assets (development) and CDN (production)
 */

/**
 * Get the appropriate asset URL based on environment
 * @param {string} assetPath - The asset path starting with /assets/
 * @returns {string} - Complete URL for the asset
 */
export const getAssetUrl = (assetPath) => {
  // Check if we're in development or if CDN is disabled
  // const isDevelopment = process.env.NODE_ENV === 'development';
  const cdnBaseUrl = process.env.NEXT_PUBLIC_CDN_BASE_URL;
  
  // Use local assets in development or if CDN URL is not configured
  // if (isDevelopment || !cdnBaseUrl) {
  //   return assetPath;
  // }
  
  // Remove leading slash from assetPath if present and construct CDN URL
  const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  return `${cdnBaseUrl}/public/${cleanPath}`;
};

/**
 * Convenience function for asset paths that already have /assets/ prefix
 * @param {string} relativePath - Path relative to /assets/ (e.g., "svg/icon.svg")
 * @returns {string} - Complete URL for the asset
 */
export const getAssetUrlFromRelative = (relativePath) => {
  return getAssetUrl(`/assets/${relativePath}`);
};