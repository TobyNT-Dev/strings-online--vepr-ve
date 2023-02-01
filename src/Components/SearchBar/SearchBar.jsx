import React from 'react'
import styled from 'styled-components'
import Mail from '../../Assets/Images/mail-icon.png'
import Phone from '../../Assets/Images/phone-icon.png'
import Cart from '../../Assets/Images/cart-icon.png'

export const SearchBar = () => {
  return (
    <StyledSearch>
      <div className="contact-box">
        <img src={Mail} /> <p>SALES@STRINGSONLINE.COM</p>
        <img src={Phone} /> <p>+45 98 12 22 68</p>
        <img src={Cart} />
      </div>
        <div className="input-box">
          <input type="text" placeholder="Indtast søgeord" /><button>➜</button>
        </div>
    </StyledSearch>
  )
}
const StyledSearch = styled.div`
grid-area: SBAR;

.contact-box {
  margin-left: 1vw;
  display: flex;
  gap: 0.7vw;
  height: 3.3vw;
  p {
    margin-right: 0.4vw;
    display: inline-block;
    color: ${props => props.theme.colors.onBackground};
    font-size: 1vw;
  }
  img {
    height: 1.2vw;
    margin-top: 0.9vw;
    :nth-child(5) {
      height: 1.5vw;
    }
  }
}

.input-box {
  margin-top: -0.7vw;
  input {
    display: inline-block;
    width: 26vw;
    margin-left: 0.7vw;
    height: 2.8vw;
    font-size: 1.4vw;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.colors.interaction};
    background-color: ${props => props.theme.colors.interactionBack};
    color: ${props => props.theme.colors.onBackground};
    ::placeholder {
      color: ${props => props.theme.colors.interaction};
    }
  }
  button {
    line-height: 1vw;
    display: inline-block;
    font-size: 2vw;
    margin-left: 0.7vw;
    width: 4vw;
    height: 3.2vw;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.colors.darkInteraction};
    background-color: ${props => props.theme.colors.interaction};
    color: ${props => props.theme.colors.darkInteraction};
  }
}
`