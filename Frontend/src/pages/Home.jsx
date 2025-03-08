import React, { useEffect, useRef, useState, useContext } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import axios from 'axios';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';
import { SocketContext } from '../context/SocketContext';
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import LiveTracking from '../components/LiveTracking';

const Home = () => {
    const [ pickup, setPickup ] = useState('')
    const [ destination, setDestination ] = useState('')
    const [ panelOpen, setPanelOpen ] = useState(false)
    const vehiclePanelRef = useRef(null)
    const confirmRidePanelRef = useRef(null)
    const vehicleFoundRef = useRef(null)
    const waitingForDriverRef = useRef(null)
    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)
    const [ vehiclePanel, setVehiclePanel ] = useState(false)
    const [ confirmRidePanel, setConfirmRidePanel ] = useState(false)
    const [ vehicleFound, setVehicleFound ] = useState(false)
    const [ waitingForDriver, setWaitingForDriver ] = useState(false)
    const [ pickupSuggestions, setPickupSuggestions ] = useState([])
    const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
    const [ activeField, setActiveField ] = useState(null)
    const [ fare, setFare ] = useState({})
    const [ vehicleType, setVehicleType ] = useState(null)
    const [ ride, setRide ] = useState(null)

    const navigate = useNavigate()

    const { socket } = useContext(SocketContext)
    const { user } = useContext(UserDataContext)

    useEffect(() => {
        socket.emit("join", { userType: "user", userId: user._id })
    }, [ user ])

    socket.on('ride-confirmed', ride => {


        setVehicleFound(false)
        setWaitingForDriver(true)
        setRide(ride)
    })

    socket.on('ride-started', ride => {
        console.log("ride")
        setWaitingForDriver(false)
        navigate('/riding', { state: { ride } }) // Updated navigate to include ride data
    })


    const handlePickupChange = async (e) => {
        setPickup(e.target.value)
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }

            })
            setPickupSuggestions(response.data)
        } catch {
            // handle error
        }
    }

    const handleDestinationChange = async (e) => {
        setDestination(e.target.value)
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setDestinationSuggestions(response.data)
        } catch {
            // handle error
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
    }

    useGSAP(function () {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '70%',
                padding: 24
                // opacity:1
            })
            gsap.to(panelCloseRef.current, {
                opacity: 1
            })
        } else {
            gsap.to(panelRef.current, {
                height: '0%',
                padding: 0
                // opacity:0
            })
            gsap.to(panelCloseRef.current, {
                opacity: 0
            })
        }
    }, [ panelOpen ])


    useGSAP(function () {
        if (vehiclePanel) {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ vehiclePanel ])

    useGSAP(function () {
        if (confirmRidePanel) {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ confirmRidePanel ])

    useGSAP(function () {
        if (vehicleFound) {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ vehicleFound ])

    useGSAP(function () {
        if (waitingForDriver) {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ waitingForDriver ])


    async function findTrip() {
        setVehiclePanel(true)
        setPanelOpen(false)

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
            params: { pickup, destination },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })


        setFare(response.data)


    }

    async function createRide() {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
            pickup,
            destination,
            vehicleType
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })


    }

    return (
        <div style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
            <img 
                style={{ width: '4rem', position: 'absolute', left: '1.25rem', top: '1.25rem' }} 
                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" 
                alt="" 
            />
            <div style={{ height: '100vh', width: '100vw' }}>
                {/* image for temporary use */}
                <LiveTracking />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100vh', position: 'absolute', top: 0, width: '100%' }}>
                <div style={{ height: '30%', padding: '1.5rem', backgroundColor: 'white', position: 'relative' }}>
                    <h5 
                        ref={panelCloseRef} 
                        onClick={() => setPanelOpen(false)} 
                        style={{ position: 'absolute', opacity: 0, right: '1.5rem', top: '1.5rem', fontSize: '1.5rem' }}
                    >
                        <i className="ri-arrow-down-wide-line"></i>
                    </h5>
                    <h4 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Find a trip</h4>
                    <form 
                        style={{ position: 'relative', paddingTop: '0.75rem', paddingBottom: '0.75rem' }} 
                        onSubmit={(e) => submitHandler(e)}
                    >
                        <div 
                            style={{ 
                                position: 'absolute', height: '4rem', width: '0.25rem', 
                                top: '50%', transform: 'translateY(-50%)', left: '1.25rem', 
                                backgroundColor: '#4b5563', borderRadius: '9999px' 
                            }} 
                        ></div>
                        <input
                            onClick={() => {
                                setPanelOpen(true);
                                setActiveField('pickup');
                            }}
                            value={pickup}
                            onChange={handlePickupChange}
                            style={{ backgroundColor: '#eee', padding: '0.5rem 3rem', fontSize: '1.125rem', borderRadius: '0.5rem', width: '100%' }}
                            type="text"
                            placeholder="Add a pick-up location"
                        />
                        <input
                            onClick={() => {
                                setPanelOpen(true);
                                setActiveField('destination');
                            }}
                            value={destination}
                            onChange={handleDestinationChange}
                            style={{ backgroundColor: '#eee', padding: '0.5rem 3rem', fontSize: '1.125rem', borderRadius: '0.5rem', width: '100%', marginTop: '0.75rem' }}
                            type="text"
                            placeholder="Enter your destination"
                        />
                    </form>
                    <button
                        onClick={findTrip}
                        style={{ backgroundColor: 'black', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.5rem', marginTop: '0.75rem', width: '100%' }}
                    >
                        Find Trip
                    </button>
                </div>
                <div ref={panelRef} style={{ backgroundColor: 'white', height: 0 }}>
                    <LocationSearchPanel
                        suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
                        setPanelOpen={setPanelOpen}
                        setVehiclePanel={setVehiclePanel}
                        setPickup={setPickup}
                        setDestination={setDestination}
                        activeField={activeField}
                    />
                </div>
            </div>
            <div ref={vehiclePanelRef} style={{ position: 'fixed', width: '100%', zIndex: 10, bottom: 0, transform: 'translateY(100%)', backgroundColor: 'white', padding: '2.5rem 0.75rem 2.5rem 0.75rem' }}>
                <VehiclePanel
                    selectVehicle={setVehicleType}
                    fare={fare} 
                    setConfirmRidePanel={setConfirmRidePanel} 
                    setVehiclePanel={setVehiclePanel} 
                />
            </div>
            <div ref={confirmRidePanelRef} style={{ position: 'fixed', width: '100%', zIndex: 10, bottom: 0, transform: 'translateY(100%)', backgroundColor: 'white', padding: '1.5rem 0.75rem 2.5rem 0.75rem' }}>
                <ConfirmRide
                    createRide={createRide}
                    pickup={pickup}
                    destination={destination}
                    fare={fare}
                    vehicleType={vehicleType}
                    setConfirmRidePanel={setConfirmRidePanel} 
                    setVehicleFound={setVehicleFound} 
                />
            </div>
            <div ref={vehicleFoundRef} style={{ position: 'fixed', width: '100%', zIndex: 10, bottom: 0, transform: 'translateY(100%)', backgroundColor: 'white', padding: '1.5rem 0.75rem 2.5rem 0.75rem' }}>
                <LookingForDriver
                    createRide={createRide}
                    pickup={pickup}
                    destination={destination}
                    fare={fare}
                    vehicleType={vehicleType}
                    setVehicleFound={setVehicleFound} 
                />
            </div>
            <div ref={waitingForDriverRef} style={{ position: 'fixed', width: '100%', zIndex: 10, bottom: 0, backgroundColor: 'white', padding: '1.5rem 0.75rem 2.5rem 0.75rem' }}>
                <WaitingForDriver
                    ride={ride}
                    setVehicleFound={setVehicleFound}
                    setWaitingForDriver={setWaitingForDriver}
                    waitingForDriver={waitingForDriver} 
                />
            </div>
        </div>
    );
    
};

export default Home;

