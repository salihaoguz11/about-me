import React from "react";
import { Button, Div, A } from "../components/styles/MyProject.styled";

const MyProject = () => {
  return (
    <Div>
      <Button>
        <A href="https://task-trackers-app.netlify.app" target="_blank">
          Task Checker
        </A>
      </Button>
      <Button>
        <A href="https://fullstack-language-cards.netlify.app" target="_blank">
          FullStack-Cards
        </A>
      </Button>
      <Button>
        <A href="https://water-marbling-ebru-cards.netlify.app" target="_blank">
          Ebru-Cards
        </A>
      </Button>
      <Button>
        <A
          href="https://salihaoguz11.github.io/BOOSTRAP-CLARUSWAY/"
          target="_blank"
        >
          Boostrap-website
        </A>
      </Button>
    </Div>
  );
};

export default MyProject;
