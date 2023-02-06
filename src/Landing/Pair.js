import React from 'react'
import styled from 'styled-components'
const Pair = () => {
  return (
    <div>
        <Container>
            <Card>
            🤍🤍🤍🤍
               <Name>PRECIOUS</Name>
               <span>you are paired to</span>
               <Name1>DAVID</Name1>
               🤍🤍🤍🤍
            </Card>
        </Container>
    </div>
  )
}

export default Pair

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-image: url("/image/piiii.jpg");
background-repeat: no-repeat;
background-position: center;
background-size: cover;

`


const Card = styled.div`
width: 300px;
height: 200px;
border-radius: 10px;
background-color: transparent;
display: flex;
border: 2px solid white;
align-items: center;
justify-content: center;
flex-direction: column;
span{
    color: white;
    font-size: small;
}
`
const Name = styled.div`
font-family: cursive;
color: white;
font-size: larger;
`
const Name1 = styled.div`
color: white;
font-family: cursive;
font-size: larger;



`