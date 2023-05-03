import styled from 'styled-components'

export const PaginationButton = styled.button`
    padding: 0.20rem 0.5rem;
    border: none;
    color: black;
    width: 80px;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    transition: 0.25s ease;
    border: 2px solid #778da9;
    border-radius: 4px;
    margin: 1rem 0.5rem;
    color: black;
    background: white;
    opacity: ${props => props.disabled ? "50%" : "100%"};
    
    :hover {
        background: ${props => props.disabled ? "white" : "#778da9"};
        color: ${props => !props.disabled && 'white'};
    }
`

