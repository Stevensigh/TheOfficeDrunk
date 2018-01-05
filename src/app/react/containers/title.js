import React from 'react';
import { Helmet } from 'react-helmet';
import Title from 'app/react/components/title';


const TitleContainer = () => (
  <div>
    <Helmet>
      <title>Title</title>
    </Helmet>
    <Title />
    <div>
      TitleLogo
    </div>
  </div>
);

export default TitleContainer;
