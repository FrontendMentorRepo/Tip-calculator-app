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
  Logo,
  CustomItem,
} from "./App.styled";
import dol from "./assets/images/icon-dollar.svg";
import people from "./assets/images/icon-person.svg";
import logo from "./assets/images/logo.svg";
import { useState, useEffect } from "react";

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [peopleAmount, setPeopleAmount] = useState(1);
  const [rateTip, setRateTip] = useState(0);
  const [totalPerson, setTotalPerson] = useState(0);
  const [tipPerson, setTipPerson] = useState(0);
  const [valCustom, setValCustom] = useState("");

  useEffect(() => {
    setTipPerson((rateTip * billAmount) / peopleAmount);
    setTotalPerson(
      billAmount / peopleAmount + (rateTip * billAmount) / peopleAmount
    );
  }, [billAmount, peopleAmount, rateTip]);

  const reset = () => {
    setBillAmount(0);
    setPeopleAmount(1);
    setRateTip(0);
    setValCustom("");
  };

  const handleClickTip = (rate) => {
    setRateTip(rate);
    setValCustom("");
  };

  const custom = (text) => {
    const t = text.replace("%", "");
    const isNumber = parseInt(t);
    if (isNumber) {
      setValCustom(t + "%");
      setRateTip(t / 100);
    }
  };

  return (
    <>
      <Logo src={logo} />
      <BoxWrapper>
        <LeftBox>
          <TitleSection>Bill</TitleSection>
          <img
            src={dol}
            style={{ position: "absolute", top: "80px", left: "40px" }}
            alt="img_dollar"
          ></img>
          <InputNumber
            type="text"
            value={billAmount}
            onChange={(val) => setBillAmount(val.target.value)}
          ></InputNumber>
          <MiddleSectionWrapper>
            <TitleSection>Select Tip %</TitleSection>
            <Grid>
              <GridItem onClick={() => handleClickTip(0.05)}>5%</GridItem>
              <GridItem onClick={() => handleClickTip(0.1)}>10%</GridItem>
              <GridItem onClick={() => handleClickTip(0.15)}>15%</GridItem>
              <GridItem onClick={() => handleClickTip(0.25)}>25%</GridItem>
              <GridItem onClick={() => handleClickTip(0.5)}>50%</GridItem>
              <CustomItem
                type="text"
                placeholder="Custom"
                value={valCustom}
                onChange={(val) => custom(val.target.value)}
              ></CustomItem>
            </Grid>
          </MiddleSectionWrapper>
          <TitleSection>Number of People</TitleSection>
          <img
            src={people}
            style={{ position: "absolute", top: "310px", left: "40px" }}
            alt="img_people"
          ></img>
          <InputNumber
            type="text"
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
    </>
  );
}

export default App;
