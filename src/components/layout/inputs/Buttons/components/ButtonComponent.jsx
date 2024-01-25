import styled from 'styled-components'



function ButtonComponent({label, colorbg}) {
  

  const Button = styled.button`
    background-color: ${(props) => (colorbg ? props.theme.primaryColor : 'transparent')};
    height: 47px;
    cursor: pointer;

    border-radius: 24px;
    border: 1px solid ${(props) => props.theme.colorText};
    color: ${(props) => (colorbg ? '#ffffff' : props.theme.primaryColor)};
    padding: 12px 28px 12px 28px;
    font-size: 18px;
    font-weight: 400;
  `
  
  return (
    <>
    
      <Button>
        {label}
      </Button>
       
    </>
  );
}

export default ButtonComponent;
