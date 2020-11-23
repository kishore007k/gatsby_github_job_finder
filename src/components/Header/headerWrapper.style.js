import styled from "styled-components"

const HeaderWrapper = styled.div`
  display: block;
  padding-bottom: 10vh;

  .headerWrapper {
    display: block;
    position: absolute;
    height: 8vh;
    top: 0px;
    left: 0px;
    right: 0px;
    box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.1);
    z-index: 10px;
  }

  .header {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
  }

  .iconContainer {
    display: block;
    width: 60px;
  }

  .icon {
    width: 100%;
    height: 100%;
    margin: auto 10px;
  }

  .externalLinks {
    display: flex;
    width: auto;
    margin: 25px 30px auto auto;
  }

  .links {
    display: flex;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    margin-right: 20px;
    transition: 0.5s ease-in-out all;

    a {
      text-decoration: none;
      font-size: 20px;
      font-weight: 500;
    }
  }

  .socialIcons {
    display: block;
    width: 20px;
    margin-right: 10px;
  }
`

export default HeaderWrapper
