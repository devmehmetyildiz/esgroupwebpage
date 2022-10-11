import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


export default function index() {

    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
            {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
        </GoogleMap>
    ))

    return (
        <div className='flex flex-col lg:flex-row justify-center items-center py-24 px-[10%]'>
            <div className='flex flex-col items-start justify-center lg:w-1/2'>
                <h4 className='text-xl p-2 font-[poppins] font-bold'>Adresimiz</h4>
                <div className='border bg-gray-500 border-gray-500 w-[100%]' />
                <h4 className='text-xl p-2 font-[poppins] font-bold'>Onikişubat/Kahramanmaraş</h4>
                <h4 className='text-lg p-2 text-gray-500 font-[poppins] '>Organize Sanayi Bölgesi 3.Cadde No:3</h4>
                <div className='flex flex-row justify-between items-center w-[100%]'>
                    <h4 className='text-xs lg:text-md font-[poppins] '>Email:</h4>
                    <p className='text-gray-500 font-[poppins] text-xs lg:text-md px-2'>evita@eslon.com.tr</p>
                    <h4 className='text-xs lg:text-md font-[poppins] '>Telefon:</h4>
                    <p className='text-gray-500 font-[poppins] text-xs lg:text-md px-2'>+90 (0) 344 257 93 30</p>
                </div>
                <div className='flex flex-row justify-between items-center w-[100%]'>
                    <h4 className='text-xs lg:text-md font-[poppins] '>Email:</h4>
                    <p className='text-gray-500 font-[poppins] text-xs lg:text-md px-2'>evita@eslon.com.tr</p>
                    <h4 className='text-xs lg:text-md font-[poppins] '>Fax:</h4>
                    <p className='text-gray-500 font-[poppins] text-xs lg:text-md px-2'>+90 (0) 344 257 93 76</p>
                </div>
            </div>
            <div className='w-[100%] lg:w-1/2 px-8 py-4'>
                <MyMapComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        </div>
    )
}
