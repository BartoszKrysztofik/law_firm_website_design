'use client'

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import { useEffect, useState } from "react"

type CompanyMapProps = {
    address: string
}

const containerStyle = {
    width: "100%",
    height: "100%",
};

const libraries: ("core"|"places")[] = ["core", "places"]

const CompanyMap = ({ address }: CompanyMapProps) => {
    const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchCoordinates = async () => {
            try {
                const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
                if (!apiKey) throw new Error("Missing Google Maps API Key")
                
                const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`
                const res = await fetch(url)
                const data = await res.json()

                if (data.status === "OK" && data.results.length > 0) {
                    setLocation(data.results[0].geometry.location)
                } else {
                    throw new Error("Location not found")
                }
            } catch (err: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
                setError( err.message || "An error occurred")
            }
        }
        fetchCoordinates()
    }, [address])
    
    if (error) return <p>Error: {error}</p>
    if (!location) return <p>Loading map...</p>
    
    return (
        <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
            libraries={libraries}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={15}
            >
                <Marker position={location}/>
            </GoogleMap>
        </LoadScript>
    )
}

export default CompanyMap