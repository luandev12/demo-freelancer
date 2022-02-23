import styled from 'styled-components';

const Style = styled.div`
  .header-container {
    border-bottom: 1px solid black;
  }

  .header-wrap {
    width: 90%;
    margin: 0 auto;
  }

  .header {
    display: flex;
    justify-content: space-between;

    height: 54px;
    line-height: 54px;
  }

  .header-main {
    display: flex;
  }

  .header-menu {
    display: flex;

    padding: 0px 20px 0px 20px;
  }

  .header-menu-item {
    padding: 0px 10px 0px 10px;
  }
`;

export default Style;
