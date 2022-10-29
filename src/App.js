import {
  InputNumber,
  TitleSection,
  BoxWrapper,
  RightBox,
  LeftBox,
  ButtonReset,
  Grid,
  GridItem,
  SectionStandard,
  ContainerText,
  ContainerNumber,
  ContainerTextPerson,
  MiddleSectionWrapper,
} from "./App.styled";

import { useState, useEffect } from "react";

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [peopleAmount, setPeopleAmount] = useState(1);
  const [rateTip, setRateTip] = useState(0);
  const [totalPerson, setTotalPerson] = useState(0);
  const [tipPerson, setTipPerson] = useState(0);

  useEffect(() => {
    setTipPerson((rateTip * billAmount) / peopleAmount);
    setTotalPerson(
      billAmount / peopleAmount + (rateTip * billAmount) / peopleAmount
    );
    // console.log(billAmount);
    // console.log(peopleAmount);
    console.log(rateTip);
  }, [billAmount, peopleAmount, rateTip]);

  const reset = () => {
    setBillAmount(0);
    setPeopleAmount(1);
    setRateTip(0);
  };

  return (
    <BoxWrapper>
      <LeftBox>
        <TitleSection>Bill</TitleSection>
        <InputNumber
          type="number"
          value={billAmount}
          onChange={(val) => setBillAmount(val.target.value)}
        ></InputNumber>
        <MiddleSectionWrapper>
          <TitleSection>Select Tip %</TitleSection>
          <Grid>
            <GridItem onClick={() => setRateTip(0.05)}>5%</GridItem>
            <GridItem onClick={() => setRateTip(0.1)}>10%</GridItem>
            <GridItem onClick={() => setRateTip(0.15)}>15%</GridItem>
            <GridItem onClick={() => setRateTip(0.25)}>25%</GridItem>
            <GridItem onClick={() => setRateTip(0.5)}>50%</GridItem>
            <GridItem></GridItem>
          </Grid>
        </MiddleSectionWrapper>
        <TitleSection>Number of People</TitleSection>
        <InputNumber
          type="number"
          value={peopleAmount}
          onChange={(val) => setPeopleAmount(val.target.value)}
        ></InputNumber>
      </LeftBox>
      <RightBox>
        <SectionStandard>
          <ContainerText>
            Tip Amount
            <ContainerTextPerson>/ person</ContainerTextPerson>
          </ContainerText>
          <ContainerNumber>${tipPerson.toFixed(2)}</ContainerNumber>
        </SectionStandard>
        <SectionStandard>
          <ContainerText>
            Total
            <ContainerTextPerson>/ person</ContainerTextPerson>
          </ContainerText>
          <ContainerNumber>${totalPerson.toFixed(2)}</ContainerNumber>
        </SectionStandard>
        <ButtonReset onClick={reset}>RESET</ButtonReset>
      </RightBox>
    </BoxWrapper>
  );
}

export default App;
