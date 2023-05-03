import styled from 'styled-components'

export const ReposContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 2rem 0.4rem;
    gap: 1rem;

    @media(max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 750px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const RepoCard = styled.article`
    box-shadow: 0px 0px 4px rgba(128, 128, 128);
    border-radius: 5px;
    padding: 1rem;
    transition: 0.25s ease;
    position: relative;
    min-height: 170px;

    :hover {
        box-shadow: 0px 0px 10px rgba(128, 128, 128);
    }

    @media (max-width: 750px) {
        width: 90%;
        margin: 0 auto;
        text-align: center;
    }
    @media (max-width: 360px) {
        width: 290px;
        box-sizing: border-box;
    }
    @media(max-width: 300px) {
        width: 265px;
    }
    
`

export const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem;
    border-radius: 5px;
    flex-wrap: wrap;

    img {
        margin-right: 1rem;
        border-radius: 50%;
        width: 50px;
    }

    a {
        text-align: start;
        font-size: 16px;
        color: green;
        font-weight: 600;
        text-decoration: underline;
        transition: 0.25s ease;
        cursor: pointer;
        width: 140px;

        :hover {
            color: darkgreen;
        }
    }
`
export const OwnerName = styled.p`
    text-align: start;
    padding: 0.5rem 1rem;
    margin-block: 1rem;
    font-size: 16px;
    font-weight: 600;
    background: rgba(128, 128, 128, 0.163);
    border-radius: 5px;
`

export const RepoStats = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    span {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        width: 40%;
        justify-content: center;
        padding: 0.3rem 0.5rem;
        background: rgba(128, 128, 128, 0.163);
        border-radius: 5px;

        img {
            width: 20px;
            margin-right: 5px;
        }
        
        p {
            font-size: 14px;
        }
    }
`