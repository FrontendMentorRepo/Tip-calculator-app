import styled from "styled-components";

export const Logo = styled.img`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 600px) {
    top: 8%;
  }
`;

export const BoxWrapper = styled.div`
  width: 700px;
  overflow: hidden;
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 600px) {
    width: 70%;
    display: block;
  }
`;

export const LeftBox = styled.div`
  float: left;
  width: 47%;
  margin-right: 35px;
  @media only screen and (max-width: 600px) {
    float: none;
    width: 100%;
  }
`;
export const RightBox = styled.div`
  float: right;
  width: 47%;
  background-color: hsl(183, 100%, 15%);
  border-radius: 15px;
  padding: 25px;
  position: relative;
  @media only screen and (max-width: 600px) {
    margin-top: 25px;
    float: none;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }
`;

export const TitleSection = styled.div`
  color: hsl(186, 14%, 43%);
  margin: 10px 0px;
`;
export const InputNumber = styled.input`
  width: 100%;
  background-color: hsl(185, 41%, 84%);
  height: 25px;
  border: none;
  border-radius: 5px;
  outline-color: #09be82;
  text-align: end;
`;

export const MiddleSectionWrapper = styled.div`
  margin: 30px 0px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  gap: 5px 5px;
`;

export const GridItem = styled.div`
  background-color: hsl(183, 100%, 15%);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 35px;
  cursor: pointer;
  focus-within {
    background: #ff8;
    color: black;
  }
`;

export const CustomItem = styled.input`
  box-sizing: border-box;
  background-color: hsl(185, 41%, 84%);
  color: hsl(183, 100%, 15%);
  display: flex;
  height: 35px;
  cursor: pointer;
  text-align: center;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  font-family: "Space Mono", monospace;
  outline-color: #09be82;
`;

export const SectionStandard = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
`;

export const ContainerText = styled.div`
  color: white;
`;
export const ContainerTextPerson = styled.div`
  color: hsl(185, 41%, 84%);
  font-size: 12px;
`;
export const ContainerNumber = styled.div`
  color: hsl(172, 67%, 45%);
  font-size: 30px;
`;

export const ButtonReset = styled.button`
  width: 80%;
  background-color: hsl(172.26, 66.52%, 45.69%);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  height: 30px;
  outline: none;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  :active {
    background-color: hsl(189, 41%, 97%);
  }

  @media only screen and (max-width: 600px) {
    position: relative;
    bottom: 0px;
    margin: 10px 0px;
  }
`;
