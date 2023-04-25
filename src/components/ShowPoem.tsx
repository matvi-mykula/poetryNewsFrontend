import { Box, Text } from '@mantine/core';
import styles from '@/styles/Home.module.css';

interface ShowPoemProps {
  poem: string[];
}

const ShowPoem = ({ poem }: ShowPoemProps) => {
  console.log('show');

  const display = `${poem[0]} \n ${poem[1]} \n ${poem[2]}`;

  return (
    <Box className={styles.poemContainer}>
      <Box className={styles.innerPoem}>
        {' '}
        <Text ta="center">{poem[0]}</Text>
        <Text ta="center">{poem[1]}</Text>
        <Text ta="center">{poem[2]}</Text>
      </Box>
    </Box>
  );
};

export { ShowPoem };
