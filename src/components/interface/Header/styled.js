import styled from "styled-components"
import { Link } from "react-router-dom"

export const Header = styled.header`
    width: 100%;
    background: #32313A;
    color: #FAFAFB;
    padding: 0 8%;
    padding-top: 30px;
    border-bottom: 1px solid #262626;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
`


export const Logo = styled(Link)`
    font-size: 2.2rem;
    font-weight: 600;
`

export const SearchContainer = styled.div`
    width: 40%;
    position: relative;
`