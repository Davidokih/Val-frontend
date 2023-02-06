import React from 'react'
import styled from 'styled-components'

const home = () => {
  return (
    <div>
        <Container>
            <Wrapper>
              <Title>HAPPY VALENTINE</Title>
              <Text>One word frees us of all the weight and pain of life: that word is love.</Text>
             <Holder>
             <input placeholder='name'></input>
              <button>submit</button>
             </Holder>
         
            </Wrapper>
        </Container>
    </div>
  )
}

export default home

const Container = styled.div`
width: 100%;
height: 100vh;
/* background-color: red; */
background-image: url("/image/love.jpg");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`


const Wrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.div`
  font-size: 40px;
  font-weight: 800;
  font-family: cursive;
  color: white;
  text-align: center;
`
const Text = styled.div`
color: #fff;
text-align: center;

`
const Holder = styled.div`
display: flex;
flex-direction: column;
  align-items: center;
  justify-content: center;

  input{
    border: 0;
    outline: none;
    width: 200px;
    height: 40px;
    margin-bottom: 10px;
    margin-top: 10px;
  border-radius: 5px;

  }
  button{
    border: 1px solid white;
    background-color: transparent;
    outline: none;
    width: 150px;
    height: 30px;
    color: white;
    margin-bottom: 20px;
  border-radius: 5px;

  }
`