import { Box, Text } from '@mantine/core';

const About = () => {
  return (
    <Box>
      <Text>About This Project</Text>
      <Text>
        This site digests the titles of news articles and makes them into poems.
        Generated via OpenAI API prompts, these are not always Haikus but they
        are supposed to be!
      </Text>
      <br></br>
      <Text>About AI</Text>
      <Text>
        While OpenAI makes use of art to geenrate what some call &quot;ai
        art&quot; I do not believe that is what this is. The goal here is to let
        the popculture and worldnews be absorbed via osmosis not to create
        Poetry or Art.
      </Text>
    </Box>
  );
};

export default About;
