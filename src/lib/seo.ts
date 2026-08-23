export const siteUrl = "https://iobytes.io";

export function withTrailingSlash(path: string) {
  if (path === "/") return "/";

  const [pathname, queryString] = path.split("?");
  const normalizedPath = pathname.endsWith("/") ? pathname : `${pathname}/`;

  return queryString ? `${normalizedPath}?${queryString}` : normalizedPath;
}
