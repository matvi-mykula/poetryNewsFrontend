import { Box, Text } from '@mantine/core';
import styles from '@/styles/Home.module.css';
import { PoemData } from '@/types';

interface ShowPoemProps {
  poem: PoemData;
}

const ShowPoem = ({ poem }: ShowPoemProps) => {
  return (
    <Box className={styles.poemContainer}>
      <Box className={styles.innerPoem}>
        {' '}
        <Text ta="center">{poem.content[0]}</Text>
        <Text ta="center">{poem.content[1]}</Text>
        <Text ta="center">{poem.content[2]}</Text>
        {/* <Text ta="center">{poem.id}</Text> */}
      </Box>
    </Box>
  );
};

export { ShowPoem };
