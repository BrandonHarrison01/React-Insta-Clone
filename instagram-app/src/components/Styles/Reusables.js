import React from 'react';
import styled, { css } from 'styled-components';

const UserName = styled.h3`
    text-shadow: 2px 2px 5px royalBlue;
    display: inline-block;
    font-size: 1.3rem;

    ${props => props.lower && 
    css`
        font-size: 1rem;
    `}
`

export default UserName