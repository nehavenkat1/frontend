import React from 'react'
import { useParams } from 'react-router'

import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the tallest buildings in the world.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg',
        address: 'New York',
        coordinates: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Taj Mahal',
        description: 'wonder of the world.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg',
        address: 'India',
        coordinates: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'
    }
]

const UserPlaces = () => {
    const userId = useParams().uid
    const loadPlaces = DUMMY_PLACES.filter(item => item.creator === userId)
    return <PlaceList items={loadPlaces}/>
}

export default UserPlaces