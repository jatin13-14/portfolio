import fs from "node:fs";
import path from "node:path";
import { links } from "@/lib/data/profile";

/**
 * Server-only check for whether the resume link actually resolves to
 * something real, so we never render a "View Resume" / "Download Resume"
 * button that 404s.
 *
 * - An external URL (http/https) is assumed configured on purpose and is
 *   always treated as available — we can't reach the network at build time
 *   to verify it, and a user who set NEXT_PUBLIC_RESUME_URL clearly intends
 *   to use it.
 * - The default local path (/resume.pdf) is only "available" once the file
 *   actually exists in /public, so the button disappears automatically
 *   until a real PDF is dropped in and reappears the moment it is — no code
 *   changes needed either way.
 */
export function isResumeAvailable(): boolean {
  if (/^https?:\/\//i.test(links.resume)) return true;

  const relativePath = links.resume.replace(/^\//, "");
  const filePath = path.join(process.cwd(), "public", relativePath);

  try {
    return fs.existsSync(filePath) && fs.statSync(filePath).isFile();
  } catch {
    return false;
  }
}
