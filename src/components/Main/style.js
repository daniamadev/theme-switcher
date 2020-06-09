import styled from "styled-components"

export const Container = styled.section`
  max-width: 960px;
  margin: 0 auto;
  background: ${(props) => props.theme.colors.secundary};
`

export const Heading = styled.h1`
  display: flex;
  justify-content: center;
  padding-top: 30px;
`

export const Paragraph = styled.p`
  padding: 10px;
  font-size: 1rem;
  font-family: sans-serif;
`
