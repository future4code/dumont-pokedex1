import styled from 'styled-components';
import { darkBlue, lightBlue, lightBackground } from '../../../constants/colors'

export const GridContainer = styled.div`
    background: linear-gradient(45deg, #FFF, ${lightBackground});
    height: 100%;
    display: grid;
    padding: 40px 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    align-items: center;
`