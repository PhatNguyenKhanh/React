import styled from "styled-components";

export const Actions = styled.div`
    button {
        margin-right: 16px;
    }
`

export const Country = styled.div`
    display: grid;
    grid-template-columns: 2.5rem 1fr;
    gap: 1rem;
    align-items: center;

    h6 {
        font-size: 1rem;
        margin: 0;
    }
`

export const Image = styled.div`
    background-image: url(${props => props.src});
    background-position: center;
    background-size: cover;
    backgrond-repeat: no-repeat;
    border-radius: 50%;
    padding-top: 100%;
`

export const Population = styled.div`
    color: ${props => props.color};
    font-weight: 700;
`