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
  const poemLines = poem.content.map((line) =>
    line.replace(/[{}"]/g, '').replace(/\\\\/g, '')
  );

  return (
    <Box>
      <Box
        className={styles.poemContainer}
        sx={{ backgroundColor: `${backgroundColor}` }}
      >
        <Box className={styles.innerPoem}>
          {poemLines.map((line, index) => (
            <Text
              key={index}
              className={styles.poemText}
            >
              {line}
            </Text>
          ))}{' '}
        </Box>
      </Box>

      {/* voting buttons */}
      <Box></Box>
    </Box>
  );
};

export { ShowPoem };
