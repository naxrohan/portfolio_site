
export default async function markdownToHtml(markdown) {
  /**
   * const result = await remark().use(html).process(markdown)
   * Removed remark | remark-hmtl due to HTML formating issues.
   * Directly render MD
   */
  return markdown.toString()
}
