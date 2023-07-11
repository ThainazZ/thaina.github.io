import styled from "styled-components";

export const ToggleSwitch = styled.switch`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  .switch-checkbox {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  .switch-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 100px;
    height: 50px;
    background: grey;
    border-radius: 100px;
    position: relative;
    transition: background-color 0.2s;
  }

  .switch-label .switch-button {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 45px;
    height: 45px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }

  .switch-checkbox:checked + .switch-label .switch-button {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  .switch-label:active .switch-button {
    width: 60px;
  }
`;
