import * as t from '@turf/helpers'
import booleanPointInPolygon from '@turf/boolean-point-in-polygon'
import nearestPointOnLine from '@turf/nearest-point-on-line'

export type Point = t.Feature<t.Point>
export type LineString = t.Feature<t.LineString>

const LAKE_DISTRICT_GEOMETRY = t.polygon([
  [
    [54.476_598, -2.477_96],
    [54.123_006, -2.724_61],
    [54.031_852, -3.221_794],
    [54.408_271, -3.585_361],
    [54.513_82, -3.687_905],
    [54.738_681, -3.509_229],
    [54.777_344, -2.914_938],
    [54.476_598, -2.477_96],
  ],
])

const newPoint = (input: t.Position): Point => {
  return t.point(input)
}

const newLineString = (input: t.Position[]): LineString => {
  return t.lineString(input)
}

const pointInsideLakeDistrict = (point: Point): boolean => {
  return booleanPointInPolygon(point, LAKE_DISTRICT_GEOMETRY)
}

const distanceFromLine = (
  line: LineString,
  point: Point,
): {
  index: number
  distance: number
} => {
  const result = nearestPointOnLine(line, point)
  return {
    index: result.properties.index ?? -1,
    distance: result.properties.dist ?? Number.POSITIVE_INFINITY,
  }
}

export { newPoint, newLineString, pointInsideLakeDistrict, distanceFromLine }
