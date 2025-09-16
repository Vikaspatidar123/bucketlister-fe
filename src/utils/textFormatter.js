/**
 * Text formatting utilities for parsing markdown and HTML-like syntax
 * Supports paragraphs, bold, underline, and bullet points
 */

/**
 * Format text with support for markdown and HTML-like syntax
 * @param {string} text - Raw text to format
 * @returns {string} - HTML formatted text
 */
export const formatText = (text) => {
  if (!text || typeof text !== "string") return "";

  let formatted = text;

  // Convert double line breaks to paragraph breaks
  formatted = formatted.replace(/\n\s*\n/g, "</p><p>");

  // Wrap in paragraph tags if we have paragraph breaks
  if (formatted.includes("</p><p>")) {
    formatted = `<p>${formatted}</p>`;
  }

  // Convert single line breaks to <br> tags (but not if already in paragraph tags)
  if (!formatted.includes("<p>")) {
    formatted = formatted.replace(/\n/g, "<br>");
  }

  // Bold text: **text** -> <strong>text</strong>
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Underline text: __text__ -> <u>text</u>
  formatted = formatted.replace(/__(.*?)__/g, "<u>$1</u>");

  // Bullet points: - item -> <li>item</li>
  // Handle multiple bullet points in sequence
  formatted = formatted.replace(/^- (.+)$/gm, "<li>$1</li>");

  // Wrap consecutive <li> elements in <ul> tags
  formatted = formatted.replace(/(<li>.*?<\/li>\s*)+/gs, (match) => {
    return `<ul>${match}</ul>`;
  });

  // Clean up any empty paragraphs
  formatted = formatted.replace(/<p>\s*<\/p>/g, "");

  return formatted;
};

/**
 * Strip HTML tags and get plain text for truncation
 * @param {string} html - HTML string
 * @returns {string} - Plain text
 */
export const stripHtml = (html) => {
  if (!html || typeof html !== "string") return "";

  return html
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/&nbsp;/g, " ") // Replace non-breaking spaces
    .replace(/&amp;/g, "&") // Replace HTML entities
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .trim();
};

/**
 * Truncate text to specified length with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length (default: 150)
 * @returns {string} - Truncated text
 */
export const truncateText = (text, maxLength = 150) => {
  if (!text || typeof text !== "string") return "";

  const plainText = stripHtml(text);

  if (plainText.length <= maxLength) {
    return plainText;
  }

  // Find the last complete word within the limit
  const truncated = plainText.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  if (lastSpace > 0) {
    return truncated.substring(0, lastSpace) + "...";
  }

  return truncated + "...";
};

/**
 * Check if text needs truncation
 * @param {string} text - Text to check
 * @param {number} maxLength - Maximum length (default: 150)
 * @returns {boolean} - Whether text needs truncation
 */
export const needsTruncation = (text, maxLength = 150) => {
  if (!text || typeof text !== "string") return false;

  const plainText = stripHtml(text);
  return plainText.length > maxLength;
};
