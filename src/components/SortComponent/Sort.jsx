import React from 'react'
import {Select} from './css/Select.styled'

const Sort = ({sorting, setSorting, searchParams, setSearchParams}) => {

    const options = {
        '1': {sort: 'stars', order: 'desc'},
        '2': {sort: 'stars', order: 'asc'},
        '3': {sort: 'forks', order: 'desc'},
        '4': {sort: 'forks', order: 'asc'},
    }

    const getAllSearchParams = Object.fromEntries([...searchParams])

    const handleOptions = (e) => {
        setSorting(e.target.value)
        setSearchParams({
            ...getAllSearchParams,
            ...options[e.target.value]
        })
    }

    return (
            <Select value={sorting} onChange={handleOptions}>
                <option value="0">Sort</option>
                <option value="1">Sort by most stars</option>
                <option value="2">Sort by least stars</option>
                <option value="3">Sort by most forks</option>
                <option value="4">Sort by least forks</option>
            </Select>
    )
}

export default Sort