import React from 'react';
import { Spacing, Text, bootstrap} from 'react-elemental';
import karlaRegular from 'react-elemental-fonts/karla-regular';
import karlaBold from 'react-elemental-fonts/karla-bold';

bootstrap({
  primary: {
    regular: karlaRegular,
    bold: karlaBold,
  },
});

const titleImage = {
  position: 'relative',
  top: -50,
  backgroundImage: "url('http://www.publicdomainpictures.net/pictures/70000/velka/scotch-on-wooden-background.jpg')",
  backgroundSize: 'cover',
  height: 500,
};

const titleText = {
  textAlign: 'left',
  fontSize: '400%',
  color: 'white',
  paddingTop: 60,
  paddingLeft: 30,
};

const Title = () => (
  <div style={titleImage}>
    <Spacing style={titleText}>
      <Text size="beta" color="white">
      The Office Drunk
      </Text>
    </Spacing>
    <Spacing>
      <Text size="kilo" color="white">
        Test body
      </Text>

    </Spacing>
  </div>
);

export default Title;
