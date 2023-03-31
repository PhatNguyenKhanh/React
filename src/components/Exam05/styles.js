import styled from "styled-components";
import { Input, Button } from "antd";

export const SearchContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`

export const SearchBox = styled(Input.Search)`
    width: 30%;
`

export const ButtonCreate = styled(Button)`
    display: block;
    margin-bottom: 20px;
    color: #000000;
    background-color: #ffffff;
    border-coler: #000000;

    &:hover {
        color: #000000;
        background-color: red;
        border-color: #000000;
    }

    &:active, &:focus {
        color: #000000;
        background-color: blue;
        border-color: #000000;
    }
`
