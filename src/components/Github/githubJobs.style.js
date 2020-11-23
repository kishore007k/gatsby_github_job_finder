import styled from "styled-components"

const Wrapper = styled.section`
  display: block;
  width: 100%;
  height: 100%;

  .title {
    text-align: center;
    color: lightseagreen;
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 50px;
  }

  form {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  label {
    font-size: 20px;
    font-weight: 600;
    margin-right: 10px;
  }

  input {
    border: 0.05px solid gray;
    border-radius: 5px;
    outline: none;
    padding: 5px 10px;
  }

  .buttonContainer {
    display: flex;
    justify-content: start;
    align-items: center;

    button {
      display: block;
      padding: 5px 10px;
      outline: none;
      border: none;
      border-radius: 5px;
      background-color: darkgray;
      cursor: pointer;
      margin: 5px;
    }

    .arrow {
      display: block;
    }
  }

  .jobCard {
    display: block;
    max-width: 1300px;
    height: auto;
    overflow: hidden;
  }

  .cardContainer {
    display: block;
  }

  .card {
    padding: 10px;
    border: none;
    border-radius: 10px;
    margin: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  .titleAndImage {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .contents {
    display: block;
    width: 80%;
    height: auto;
  }

  .companyImgContainer {
    display: block;
    width: 20%;
    height: auto;
    margin-left: auto;

    img {
      width: 90%;
      height: auto;
      margin: auto;
    }
  }

  h2.companyTitle {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;

    span {
      font-size: 15px;
      font-weight: 600;
      color: rebeccapurple;
    }
  }

  .preAndCode {
    display: flex;
    justify-content: start;
    align-items: center;

    pre {
      padding: 10px;
      border: none;
      border-radius: 5px;
      background-color: darkcyan;
      box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
      color: aliceblue;
      font-weight: 500;
      font-size: 15px;
      margin-right: 20px;
    }
  }

  .viewAndHideBtn {
    display: block;
    float: right;
    margin: 0px 20px 10px 0px;

    button {
      padding: 5px 10px;
      border: none;
      outline: none;
      background-color: cornflowerblue;
      border-radius: 5px;
      box-shadow: 0px 2px 15px #6494ed;
      color: aliceblue;
      font-size: 20px;
      font-weight: 300;
      cursor: pointer;
      transition: 0.5s ease-in-out all;

      &:hover {
        box-shadow: 0px 5px 25px cornflowerblue;
      }
    }
  }
`

export default Wrapper
