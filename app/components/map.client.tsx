import type { LatLngTuple } from 'leaflet'
import { divIcon } from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

type MarkerConfig = {
  title: string
  position: LatLngTuple
  bagged: boolean
}

type MyMapProps = {
  markers: MarkerConfig[]
}

const unbaggedIcon = divIcon({ className: 'map-marker-icon' })
const defaultIcon = divIcon({ className: 'map-marker-icon-bagged' })
const centralFells = divIcon({
  className: 'map-marker-icon-bagged map-marker-icon-central-fells',
})
const nothernFells = divIcon({
  className: 'map-marker-icon-bagged map-marker-icon-northern-fells',
})
const easternFells = divIcon({
  className: 'map-marker-icon-bagged map-marker-icon-eastern-fells',
})
const farEasternFells = divIcon({
  className: 'map-marker-icon-bagged map-marker-icon-far-eastern-fells',
})
const southernFells = divIcon({
  className: 'map-marker-icon-bagged map-marker-icon-southern-fells',
})
const westernFells = divIcon({
  className: 'map-marker-icon-bagged map-marker-icon-western-fells',
})
const northWesternFells = divIcon({
  className: 'map-marker-icon-bagged map-marker-icon-north-western-fells',
})

const icon = {
  'Central Fells': centralFells,
  'Northern Fells': nothernFells,
  'Eastern Fells': easternFells,
  'Far Eastern Fells': farEasternFells,
  'Southern Fells': southernFells,
  'Western Fells': westernFells,
  'North Western Fells': northWesternFells,
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
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            icon={
              marker.bagged ? icon[marker.area] ?? defaultIcon : unbaggedIcon
            }
          >
            <Popup>{marker.title}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export { MyMap }
