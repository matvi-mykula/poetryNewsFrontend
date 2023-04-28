import { Box, Text } from '@mantine/core';
import styles from '@/styles/Home.module.css';
import { PoemData } from '@/types';
import { getColor } from '@/services/color';

interface ShowPoemProps {
  poem: PoemData;
}

const ShowPoem = ({ poem }: ShowPoemProps) => {
  console.log({ poem });
  const backgroundColor = getColor(poem.sentiment);

  return (
    <Box
      className={styles.poemContainer}
      sx={{ backgroundColor: `${backgroundColor}` }}
    >
      <Box className={styles.innerPoem}>
        {' '}
        <Text className={styles.poemText}>{poem.content[0]}</Text>
        <Text className={styles.poemText}>{poem.content[1]}</Text>
        <Text className={styles.poemText}>{poem.content[2]}</Text>
        {/* <Text ta="center">{poem.id}</Text> */}
      </Box>
    </Box>
  );
};

export { ShowPoem };
