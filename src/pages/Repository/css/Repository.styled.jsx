import styled from 'styled-components'

export const RepositoryContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    box-shadow: 0px 0px 80px lightgray;
    padding: 2rem;
    margin-bottom: 2rem;
    
    h2 {
        margin-bottom: 30px;
    }

    @media(max-width: 1280px) {
        box-shadow: none;
    }

    @media(max-width: 1080px) {
        flex-direction: column;
    }
`

export const Avatar = styled.img`
    border-radius: 10px;
    width: 250px;

`

export const RepoStats = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 180px;
    margin: 0 auto;
    margin-block: 15px;

    span {
        display: flex;
        align-items: center;

        img {
            margin-right: 5px;
        }
    }
`