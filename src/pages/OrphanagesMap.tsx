//! ReactCore e Dependecias
import React from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';

//! Assets
import MapMarkerImg from '../images/map-marker.svg';
import { FiPlus } from 'react-icons/fi'
//! Estilos
import '../styles/pages/orphanagesmap.css';
import 'leaflet/dist/leaflet.css'

const apiKey = 'pk.eyJ1Ijoidm5jc21udHIiLCJhIjoiY2tnOGRoemRpMGFoNzJ2cGZ2c3l2c2t1OSJ9.ieEzkeSvtOXnENmS8tSmlA'

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={MapMarkerImg} alt="Logo Happy"/>
          <h2>Escolha um orfanato no mapa.</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Diadema</strong>
          <span>São Paulo</span>
        </footer>
      </aside>
      
      <Map center={[-23.7126872, -46.6415725]} zoom={15} style={{ width: '100%', height: '100%' }} >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${apiKey}`}/>
      </Map>

      <Link to='' className='create-orphanage'>
        <FiPlus size={32} color="#FFF" />
      </Link>    
    </div>
  )
}

export default OrphanagesMap;