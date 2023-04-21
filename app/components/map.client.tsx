import type { LatLngTuple } from 'leaflet'
import { divIcon } from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

type MarkerConfig = {
  title: string
  area: string
  position: LatLngTuple
  bagged: boolean
}

type MyMapProps = {
  markers: MarkerConfig[]
}

const MyMap = (props: MyMapProps) => {
  const { markers = [] } = props

  const position: LatLngTuple = [
    54.491_896_744_134_09, -3.090_268_422_647_674_7,
  ]

  return (
    <div className="map-container">
      <MapContainer
        style={{ height: '100%' }}
        center={position}
        zoom={10}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => {
          const icon = divIcon({
            className: `${
              marker.bagged ? 'map-marker-icon-bagged' : 'map-marker-icon'
            } map-marker-icon-${marker.area.toLowerCase().replace(/\s+/, '-')}`,
          })

          return (
            <Marker key={index} position={marker.position} icon={icon}>
              <Popup>{marker.title}</Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </div>
  )
}

export { MyMap }
export type { MarkerConfig }
