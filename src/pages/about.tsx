import { Box, Text, Accordion } from '@mantine/core';

const About = () => {
  return (
    <Box>
      <Accordion
        defaultValue="about"
        transitionDuration={800}
      >
        <Accordion.Item value="about">
          <Accordion.Control>About</Accordion.Control>
          <Accordion.Panel>
            This site digests the titles of news articles and makes them into
            poems. Generated via OpenAI API prompts, these poems are not always
            good. Be judgemental!
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="ai">
          <Accordion.Control>This Project and AI</Accordion.Control>
          <Accordion.Panel>
            While OpenAI makes use of art to generate what some call &quot;ai
            art&quot; , the goal here is to let popculture and worldnews be
            absorbed via osmosis not to create Poetry or Art.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="contact">
          <Accordion.Control>Contact</Accordion.Control>
          <Accordion.Panel>
            If you would like to see any other functionality out of this project
            email me! <br />
            matt.pronchick@gmail.com <br />
            <br />
            Or check out my other coding projects. <br />
            <a href="www.matvi.dev">matvi.dev</a> <br />
            <a href="https://github.com/matvi-mykula">
              github.com/matvi-mykula
            </a>{' '}
            <br />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Box>
  );
};

export default About;
