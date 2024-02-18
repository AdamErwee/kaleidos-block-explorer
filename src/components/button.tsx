import { ButtonContainer } from "../styles/button.styles";

interface ButtonProps {
  onClick: () => void;
  backgroundColor?: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, backgroundColor, text }) => {
  return (
    <ButtonContainer onClick={onClick} backgroundColor={backgroundColor}>
      {text}
    </ButtonContainer>
  );
};

export default Button;
