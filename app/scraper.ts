import pMap from 'p-map'
import cheerio from 'cheerio'

const latlonRegex = /lat=(-?\d+\.\d+)&lon=(-?\d+\.\d+)/

const getLatLon = (text: string) => {
  const result = text.match(latlonRegex)
  if (!result) {
    throw new Error('Could not find the x')
  }

  const lat = Number.parseFloat(result[1])
  const lon = Number.parseFloat(result[2])

  return [lat, lon]
}

const scrapeHill = async (url: string) => {
  const response = await fetch(url) 
  const text = await response.text()

  const $ = cheerio.load(text)
  const name = $('h1').text()
  const area = $('td:contains("Area:")').next().text()
  const county = $('td:contains("County:")').next().text()
  const country = $('td:contains("Country:")').next().text()
  const classification = $('meta[property="og:description"]').attr('content')
  const height = $('td:contains("Height:")').next().text()
  const gridRef = $('td:contains("Grid Ref:")').next().find('a').eq(0).text()
  const notes = $('td:contains("Notes:")').next().text()
  const id = Number.parseInt($('meta[property="og:url"]').attr('content')!.match(/\d+/)![0]!)

  return {
    id,
    name,
    area,
    county,
    country,
    classification,
    height,
    gridRef,
    notes,
    coords: getLatLon(text),
  }
}

const scrapeHillList = (urlList: string[]) => {
  return pMap(urlList, async (url) => {
    const hill = await scrapeHill(url)
    console.log(hill)
    return hill
  }, { concurrency: 5 })
}

export { scrapeHillList }
