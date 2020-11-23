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

  .cardContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  }
`

export default Wrapper
