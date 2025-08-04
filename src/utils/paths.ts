// Helper function to create correct paths for GitHub Pages
export function getAssetPath(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  // Remove leading slash from path if it exists, then combine with base
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return base + cleanPath;
}

// Helper function to create correct page paths for navigation
export function getPagePath(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  // For the root path, just return base
  if (path === '/') {
    return base;
  }
  // For other paths, ensure proper path joining
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Since base now ends with /, just concatenate
  return base + cleanPath;
}
