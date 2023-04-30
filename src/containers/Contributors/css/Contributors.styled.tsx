import styled from 'styled-components'

export const ContributorsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 600px;
    margin-top: 20px;
    position: relative;

    @media(max-width: 1080px) {
        width: 100%;
    }
`

export const Card = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em 2em;
    width: 200px;
    transition: 0.25s;
    border-radius: 10px;
    margin: 10px;
    transition: 0.3s;
    background: rgba(0,0,0,0.04);

    :hover {
        box-shadow: rgba(50, 50, 93, 0.2) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.7) 0px 18px 36px -18px inset;
    }

    img {
        width: 80px;
        border-radius: 50%;
        margin-block: 10px;
    }

    @media(max-width: 648px) {
        width: 30%;
    }

    @media(max-width: 500px) {
        width: 100%;
    }
`
