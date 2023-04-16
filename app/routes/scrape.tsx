import { scrapeHillList } from "~/scraper"
import { wainwrightSourceList } from "~/data"
import { json } from "@remix-run/node"

export const loader = async () => {
  const urls = wainwrightSourceList.map((hill) => hill.href)
  const hills = await scrapeHillList(urls)
  return json(hills)
}
