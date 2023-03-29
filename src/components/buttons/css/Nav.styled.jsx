import styled from 'styled-components'

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    max-width: 350px;
    background: white;
    justify-content: space-evenly;
    padding-top: 2rem;
    padding-inline: 0.5rem;
    flex-wrap: wrap;

    a {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        box-shadow: 0px 1px 3px gray;
        border-radius: 4px;
        padding: 0.25rem 1rem;
        transition: 0.25s ease;
        opacity: 60%;

        :hover {
            opacity: 100%;
        }
    }

    .active {
        opacity: 100%;       
    }
`

const BtnIcon = styled.img`
    margin-right: 0.25rem;
`

const BtnText = styled.p`
    font-size: 18px;
    font-weight: 600;
    color: black;
`

export {ButtonsContainer, BtnIcon, BtnText}