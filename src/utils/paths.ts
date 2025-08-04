// Helper function to create correct paths for GitHub Pages
export function getAssetPath(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  // Remove leading slash from path if it exists, then combine with base
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return base + cleanPath;
}
