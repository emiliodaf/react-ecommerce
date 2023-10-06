import styled from 'styled-components';


export const BaseButton = styled.button `

  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #272727;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: black, 4%, 5%;
    color: #357ae8;
    border: 1px solid #f7f4f4; 
  }

`
export const GoogleSignInButton = styled(BaseButton) `
    background-color: #f50707;
    border-radius: 3px;
    color: white;

    &:hover {
      background-color: #357ae8;
      border: none;
    }
`
export const InvertedButton = styled(BaseButton) `

    background-color: #fff;
    color: #fbfbfb;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }

`










 