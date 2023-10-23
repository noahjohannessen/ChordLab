import './Button.css';

type ButtonProps = {
  label: string
}

function Button(props: ButtonProps) {
  const handleClick = () => {

  }

  return (
    <button className="button" onClick={handleClick}>
      {props.label}
    </button>
  );
}

export default Button;