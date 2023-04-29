import { Box, Button } from '@mantine/core';
import { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css';

const VoteButtons = (poem: any) => {
  /// change a value in localstorage when another please if there is a value
  /// then emit an update

  const [vote, setVote] = useState(0);
  const [canVote, setCanVote] = useState({ good: true, bad: true });
  useEffect(() => {
    const handle = async () => {
      console.log(localStorage);
      console.log(poem.poem.id);
      const localVote = localStorage.getItem(poem.poem.id);
      console.log({ localVote });

      if (localVote === 'good') {
        console.log('getting good somehow');
        await setCanVote({
          good: false,
          bad: true,
        });
      } else if (localVote === 'bad') {
        console.log('getting bad somehow');
        await setCanVote({
          good: true,
          bad: false,
        });
      } else {
        await setCanVote({
          good: true,
          bad: true,
        });
      }
    };
    handle();

    console.log({ canVote });
  }, [poem.poem.id]);

  const handleVote = async (direction: 'good' | 'bad') => {
    console.log({ direction });
    if (canVote[direction]) {
      await setCanVote((prevState) => ({
        ...prevState,
        [direction]: false,
      }));
      await setCanVote((prevState) => ({
        ...prevState,
        [direction === 'good' ? 'bad' : 'good']: true,
      }));
      localStorage.setItem(`${poem.poem.id}`, direction);
    }
  };
  return (
    <Box className={styles.voteButtons}>
      <Button
        disabled={!canVote.bad}
        onClick={() => {
          handleVote('bad');
        }}
      >
        UnGood
      </Button>
      <Button
        disabled={!canVote.good}
        onClick={() => {
          handleVote('good');
        }}
      >
        Sick
      </Button>
    </Box>
  );
};

export { VoteButtons };
