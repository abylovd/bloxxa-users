import {
  AccountBtnCancel,
  AccountBtnSave,
  DeleteAccount,
} from "../Button/Button.styles";

const Button = ({ type }) => {
  switch (type) {
    case "transparent": {
      return <AccountBtnCancel>Cancel</AccountBtnCancel>;
    }
    case "black": {
      return <AccountBtnSave>Save changes</AccountBtnSave>;
    }
    case "red": {
      return <DeleteAccount>Delete account</DeleteAccount>;
    }
  }
};

export default Button;
