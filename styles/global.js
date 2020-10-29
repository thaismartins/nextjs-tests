import styled from 'styled-components'

const ContentMain = styled.main`
  min-height: 500px;
`

const ContentCenter = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: auto;
  position: relative;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
`

const Title = styled.h1`
  color: red;
`

const Subtitle = styled.h2`
  color: gray;
  padding-bottom: 10px;
  margin: 50px 0 10px;
  border-bottom: 1px solid grey;
`

export { ContentMain, ContentCenter, Title, Subtitle }
