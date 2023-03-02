import { A, Button, Div } from "../components/styles/Contact.styled";

const Contact = () => {
  return (
    <Div>
      <Button>
        <A href="https://github.com/salihaoguz11" target="_blank">
          github
        </A>
      </Button>
      <Button>
        <A
          href="https://www.linkedin.com/in/saliha-o-a6a287259/"
          target="_blank"
        >
          Linkedin
        </A>
      </Button>
    </Div>
  );
};

export default Contact;
