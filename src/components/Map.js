
import Image from 'next/image'
import { ComposableMap, Geographies, Geography } from "react-simple-maps";


export default function Map() {
   

    const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

  return (
    <>
     <div>
     <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} 
              fill="#A2A6AE"
              stroke="#fff"/>
            ))
          }
        </Geographies>
      </ComposableMap>
      
      </div>
    </>
  )
}
