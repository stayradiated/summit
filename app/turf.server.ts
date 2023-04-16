import * as t from '@turf/helpers'
import booleanPointInPolygon from '@turf/boolean-point-in-polygon'
import nearestPointOnLine from '@turf/nearest-point-on-line'

export type Point = t.Feature<t.Point>
export type LineString = t.Feature<t.LineString>

const LAKE_DISTRICT_GEOMETRY = t.polygon([[[54.476598,-2.47796],[54.123006,-2.72461],[54.031852,-3.221794],[54.408271,-3.585361],[54.51382,-3.687905],[54.738681,-3.509229],[54.777344,-2.914938],[54.476598,-2.47796]]])

const newPoint = (input: t.Position): Point => {
  return t.point(input)
}

const newLineString = (input: t.Position[]): LineString => {
  return t.lineString(input)
}

const pointInsideLakeDistrict = (point: Point): boolean => {
  return booleanPointInPolygon(point, LAKE_DISTRICT_GEOMETRY)
}

const distanceFromLine = (line: LineString, point: Point): number => {
  const result = nearestPointOnLine(line, point)
  return result.properties.dist ?? Infinity
}

export { newPoint, newLineString, pointInsideLakeDistrict, distanceFromLine }
