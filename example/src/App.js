import React, { useState } from 'react'
import {
  Button,
  MultiButton,
  Chevron,
  SingleInput,
  FixedInput,
  CheckBox,
  styled,
  Icon,
  CodeBlock,
  RefreshArrow,
  BackArrow,
  ForwardArrow,
  ExportUp,
  MoreDots,
  Star,
  ExitIcon,
  HomeIcon,
  AddIcon,
  ProfileBadgeIcon,
  InfoIcon,
  FullScreenIcon,
  DownloadIcon,
  ForkIcon,
  DataIcon
} from 'global-winery'
import { Container, Jumbotron } from 'reactstrap'

const Wrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
  height: 100%;
  margin-left: 0px;
`
const Title = styled.h1`
  text-align: center;
  font-size: 30pt;
  color: #000000;
  font-weight: 100;
`
const SectionGradient = styled.div`
  width: 100%;
  height: 20px;
  background: rgb(38, 159, 157);
  background: radial-gradient(
    circle,
    rgba(38, 159, 157, 1) 0%,
    rgba(89, 39, 181, 1) 100%
  );
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 50px;
  margin-bottom: 50px;
`
const SectionTitle = styled.h2`
  text-align: center;
  font-size: 20pt;
  color: #000000;
  font-weight: 100;
`
const Content = styled.div`
text-align: center
display: inline-block;
position: relative;
padding-left: 45px;
&:after{
  float: left;

}
`
const Code = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Source+Code+Pro&display=swap');
  font-family: 'Source Code Pro', monospace;
  font-weight: 100;
  border-radius: 3px;
  margin-bottom: 30px;
  width: 250px;
  height: 100%;
  margin-top: 45px;
  text-align: left;
`
const Subsection = styled.p`
  text-align: center;
`
const Table = styled.div`
  align-items: center;
  width: 20%;
  margin: 0 auto;
  padding: 20px;
`
const OuterListEl = styled.ul`
  display: inline-block;
`
const ListI = styled.li`
  margin-top: 10px;
`
const App = () => (
  <Wrapper>
    <Jumbotron>
      <Title>global-winery | design</Title>

      <Subsection>
        Simple design components that, used together, build beauiful user
        interfaces, built in React.js for Grape.
      </Subsection>
      <Subsection>This Library is in progress!</Subsection>
      <Subsection>
        Created with ❤️ by{' '}
        <a href='https://sammyrp.com'>Sammy Robens-Paradise</a> for Grape.
      </Subsection>
      <Subsection>
        Check out <a href='https://grape-promo.firebaseapp.com/'>Grape</a> 🍇
      </Subsection>
    </Jumbotron>
    <SectionGradient />
    <TableOfContents />
    <SectionGradient />
    <ButtonsSection />
    <SectionGradient />
    <InputSection />
    <SectionGradient />
    <CheckBoxesSection />
    <SectionGradient />
    <IconSection />
    <SectionGradient />
  </Wrapper>
)

const TableOfContents = () => {
  return (
    <div>
      <Table>
        <SectionTitle>Table of Contents</SectionTitle>
        <OuterListEl>
          <ListI>
            <a href='#buttons_and_toggles'>Buttons and Toggles</a>
          </ListI>
          <ListI>
            {' '}
            <a href='#inputs_and_text_fields'>Inputs and Text Fields</a>
          </ListI>
          <ListI>
            <a href='#check_boxes'>Check Boxes</a>
          </ListI>
          <ListI>
            <a href='#icons'>Icons</a>
          </ListI>
        </OuterListEl>
      </Table>
    </div>
  )
}
const ButtonsSection = () => {
  const [count, setCount] = useState(0)
  const [countTwo, setCountTwo] = useState(0)

  return (
    <Container>
      <Jumbotron>
        <SectionTitle id='buttons_and_toggles'>
          Buttons and Toggles
        </SectionTitle>
      </Jumbotron>
      <Container>
        <Content>
          <Code>Button Props: text,small,event</Code>
          <Button
            text='Sign Up'
            small={true}
            event={() => alert('Button Clicked!')}
            hover={true}
          ></Button>
        </Content>
        <Content>
          <Code>Button Props: text,small,event,dropShadow</Code>
          <Button
            text='Sign Up'
            small={true}
            event={() => alert('Button Clicked!')}
            dropShadow={true}
            hover={true}
          ></Button>
        </Content>
        <Content>
          <Code>Button Props: text,small,event,hover,invert</Code>
          <Button
            text='Sign Up'
            small={true}
            invert={true}
            hover={true}
            event={() => alert('Button Clicked!')}
          ></Button>
        </Content>
        <Content>
          <Code>Button Props: text,small,event,dropShadow,hover,invert</Code>
          <Button
            text='Sign Up'
            small={true}
            invert={true}
            hover={true}
            dropShadow={true}
            event={() => alert('Button Clicked!')}
          ></Button>
        </Content>
        <Content>
          <Code>
            {' '}
            MultiButton Props:
            textLeft,textRight,leftFocus,RightFocus,leftEvent,RightEvent
          </Code>
          <MultiButton
            textLeft='Left Buttton'
            textRight='Right Button'
            leftFocus={count % 2 === 0 ? true : false}
            rightFocus={count % 2 === 0 ? false : true}
            leftEvent={() => setCount(count + 1)}
            rightEvent={() => setCount(count + 1)}
          />
        </Content>
        <br></br>
        <Content>
          <Code>
            {' '}
            MultiButton Props:
            textLeft,textRight,leftFocus,RightFocus,leftEvent,RightEvent,dropShadow
          </Code>
          <MultiButton
            textLeft='Left Buttton'
            textRight='Right Button'
            leftFocus={countTwo % 2 === 0 ? false : true}
            rightFocus={countTwo % 2 === 0 ? true : false}
            leftEvent={() => setCountTwo(countTwo + 1)}
            rightEvent={() => setCountTwo(countTwo + 1)}
            dropShadow={true}
          ></MultiButton>
        </Content>
        <br></br>
        <Content>
          <Code> Chevron Props: direction, color</Code>
          <Chevron direction='RIGHT' color='#2EBF91'></Chevron>
        </Content>
        <Content>
          <Code> Chevron Props: direction, color</Code>
          <Chevron direction='LEFT' color='#361E5C'></Chevron>
        </Content>
        <Content>
          <Code> Chevron Props: direction, color</Code>
          <Chevron direction='UP' color='#361E5C'></Chevron>
        </Content>
        <Content>
          <Code> Chevron Props: direction, color</Code>
          <Chevron direction='DOWN' color='#2EBF91'></Chevron>
        </Content>
      </Container>
    </Container>
  )
}

const InputSection = () => (
  <Container>
    <Jumbotron>
      <SectionTitle id='inputs_and_text_fields'>
        Inputs and Text Fields
      </SectionTitle>
    </Jumbotron>
    <Content>
      <Code>
        Text Input Resizable and Scrollable Props: type,size,scrollAndResize
      </Code>
      <SingleInput type='text' size='30' scrollAndResize={true}></SingleInput>
    </Content>
    <br></br>
    <Content>
      <Code>Text Input Resizable Default Props: type,size,scrollAndResize</Code>
      <SingleInput type='text' size='30' scrollAndResize={false}></SingleInput>
    </Content>
    <br></br>
    <Content>
      <Code>Text Input Resizable Default Props: type,size,width,height</Code>
      <FixedInput type='text' size='30' width={800} height={300}></FixedInput>
    </Content>
  </Container>
)

const CheckBoxesSection = () => {
  const [count, setCount] = useState(0)
  return (
    <Container>
      <Jumbotron>
        <SectionTitle id='check_boxes'>Check Boxes</SectionTitle>
      </Jumbotron>
      <Content>
        <Code>CheckBox props: Checked, borderColor </Code>
        <CheckBox
          checked={count % 2 === 0 ? true : false}
          borderColor={'#A9A9A9'}
          event={() => setCount(count + 1)}
        />
      </Content>
      <Content>
        <Code>CheckBox props: Checked, borderColor </Code>
        <CheckBox
          checked={count % 2 === 0 ? false : true}
          borderColor={'#A9A9A9'}
          event={() => setCount(count + 1)}
        />
      </Content>
    </Container>
  )
}

const IconSection = () => {
  const type = <CodeBlock color={'#00000'} />
  const typeTwo = <RefreshArrow color={'#00000'} />
  const typeThree = <BackArrow color={'#00000'} />
  const typeFour = <ForwardArrow color={'#00000'} />
  const typeFive = <ExportUp color={'#00000'} />
  const typeSix = <MoreDots color={'#000000'} />
  const typeSeven = <Star color={'#000000'} />
  const typeEight = <ExitIcon color={'#000000'} />
  const typeNine = <HomeIcon color={'#000000'} />
  const typeTen = <AddIcon color={'#000000'} />
  const typeEleven = <ProfileBadgeIcon color={'#000000'} />
  const typeTwelve = <InfoIcon color={'#000000'} />
  const typeThirteen = <FullScreenIcon color={'#000000'} />
  const typeFourteen = <DownloadIcon color={'#000000'} />
  const typeFifteen = <ForkIcon color={'#000000'} />
  const typeSixteen = <DataIcon color={'#000000'} />
  return (
    <Container>
      <Jumbotron>
        <SectionTitle id='icons'>Icons</SectionTitle>
      </Jumbotron>
      <Content>
        <Code>CodeBlock</Code>
        <Icon
          type={type}
          event={() => alert('codeblock clicked!')}
        ></Icon>
      </Content>
      <Content>
        <Code>RefreshArrow</Code>
        <Icon
          type={typeTwo}
          event={() => alert('refresh arrow clicked!')}
        ></Icon>
      </Content>
      <Content>
        <Code>BackArrow</Code>
        <Icon
          type={typeThree}
          event={() => alert('back arrow clicked!')}
        ></Icon>
      </Content>
      <Content>
        <Code>ForwardArrow</Code>
        <Icon
          type={typeFour}
          event={() => alert('forward arrow clicked!')}
        ></Icon>
      </Content>
      <Content>
        <Code>ExportUp</Code>
        <Icon type={typeFive} event={() => alert('Export Up clicked!')}></Icon>
      </Content>
      <Content>
        <Code>MoreDots</Code>
        <Icon type={typeSix} event={() => alert('more dots clicked!')}></Icon>
      </Content>
      <Content>
        <Code>Star</Code>
        <Icon type={typeSeven} event={() => alert('star clicked!')}></Icon>
      </Content>
      <Content>
        <Code>ExitIcon</Code>
        <Icon type={typeEight} event={() => alert('exit icon clicked!')}></Icon>
      </Content>
      <Content>
        <Code>HomeIcon</Code>
        <Icon type={typeNine} event={() => alert('home icon clicked!')}></Icon>
      </Content>
      <Content>
        <Code>AddIcon</Code>
        <Icon type={typeTen} event={() => alert('add icon clicked!')}></Icon>
      </Content>
      <Content>
        <Code>ProfileBadgeIcon</Code>
        <Icon
          type={typeEleven}
          event={() => alert('profile badge clicked!')}
        ></Icon>
      </Content>
      <Content>
        <Code>InfoIcon</Code>
        <Icon
          type={typeTwelve}
          event={() => alert('info icon clicked!')}
        ></Icon>
      </Content>
      <Content>
        <Code>FullScreenIcon</Code>
        <Icon
          type={typeThirteen}
          event={() => alert('full screen icon clicked!')}
        ></Icon>
      </Content>
      <Content>
        <Code>DownloadIcon</Code>
        <Icon
          type={typeFourteen}
          event={() => alert('download icon clicked!')}
        ></Icon>
      </Content>
      <Content>
        <Code>ForkIcon</Code>
        <Icon
          type={typeFifteen}
          event={() => alert('fork icon clicked!')}
        ></Icon>
      </Content>
      <Content>
        <Code>DataIcon</Code>
        <Icon
          type={typeSixteen}
          event={() => alert('data icon clicked!')}
        ></Icon>
      </Content>
    </Container>
  )
}
export default App
