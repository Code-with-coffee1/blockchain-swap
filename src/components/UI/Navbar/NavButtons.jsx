import styled from 'styled-components'

export const PrimaryBtn = styled.button`
border: none;
outline: none;
cursor: pointer;
background-color: #3EDBF0;
color: #fff;
padding: 8px 15px;
font-size: 14px;
font-weight: 600;
border-radius: 20px;
transition: all 0.3s ease-in-out;
margin: 0 10px;
height: 40px;


&:hover{
    filter: brightness(0.8);
    transition: all 0.3s ease-in-out;
}
`;

export const SecondaryBtn = styled.button`
border: none;
outline: none;
cursor: pointer;
background-color: #77ACF1;
color: #fff;
margin: 0 10px;
padding: 8px 15px;
font-size: 14px;
font-weight: 600;
border-radius: 20px;
transition: all 0.3s ease-in-out;

&:hover{
    filter: brightness(0.8);
    transition: all 0.3s ease-in-out;
}
`;

