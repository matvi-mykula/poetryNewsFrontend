import { Box, Button, Text, SegmentedControl } from '@mantine/core';
import styles from '@/styles/Home.module.css';
import { useEffect, useState } from 'react';
import { ShowPoem } from '@/components/ShowPoem';
import { io } from 'socket.io-client';
const socket = io('http://localhost:3000');

function Home() {
  const [key, setKey] = useState('pop');
  const [poem, setPoem] = useState<string[]>([]);
  const [entries, setEntries] = useState([]);
  const [currentEntryIndex, setCurrentEntryIndex] = useState(0);
  const [loaded, setLoaded] = useState(false); /// might not need this

  ///// ---- initialize
  useEffect(() => {
    console.log(loaded);
    socket.emit('get_todays_poems', key);
    socket.on('todays_poems', async (data) => {
      if (data.success) {
        await setEntries(data.data);
        setLoaded(true);
        console.log({ entries });
      }
    });
    return () => {
      // Clean up event listeners when the component unmounts
      socket.off('entries');
      socket.off('error');
    };
  }, [key]);

  const handleNextEntry = async () => {
    currentEntryIndex === entries.length - 1
      ? setCurrentEntryIndex(0)
      : setCurrentEntryIndex((prevIndex) => prevIndex + 1);
    console.log(currentEntryIndex);
  };

  return (
    <Box className={styles.homepage}>
      <SegmentedControl
        value={key}
        onChange={setKey}
        onClick={() => {
          setLoaded(false);
          setCurrentEntryIndex(0);
        }}
        data={[
          { label: 'Pop Culture', value: 'pop' },
          { label: 'World News', value: 'news' },
        ]}
      />
      {entries.length > 0 && currentEntryIndex < entries.length ? (
        <Box className={styles.contentBody}>
          <Button
            onClick={async () => {
              ///check if current poem has  a local storage item
              /// if it does create updated poemData and emit update
              handleNextEntry();
            }}
          >
            Another Please
          </Button>

          <ShowPoem poem={entries[currentEntryIndex]}></ShowPoem>
          <VoteButtons poem={entries[currentEntryIndex]}></VoteButtons>
        </Box>
      ) : (
        <Text>No Poems</Text>
      )}
    </Box>
  );
}

const VoteButtons = (poem: any) => {
  /// change a value in localstorage when another please if there is a value
  /// then emit an update

  const [vote, setVote] = useState(0);
  const [canVote, setCanVote] = useState({ up: true, down: true });
  const handleVote = async (direction: 'up' | 'down') => {
    if (canVote[direction]) {
      //   setVote((prevVote) => prevVote + (direction === 'up' ? 1 : -1));
      await setCanVote((prevCanVote) => ({
        ...prevCanVote,
        [direction]: false,
      }));
      await setCanVote((prevCanVote) => ({
        ...prevCanVote,
        [direction === 'up' ? 'down' : 'up']: true,
      }));

      direction === 'up'
        ? localStorage.setItem(`${poem.poem.id}`, 'good')
        : localStorage.setItem(`${poem.poem.id}`, 'bad');
      console.log({ poem });
      console.log(localStorage.getItem(`${poem.poem.id}`));
    }
  };
  return (
    <Box className={styles.voteButtons}>
      <Button
        disabled={!canVote.down}
        onClick={() => handleVote('down')}
      >
        UnGood
      </Button>
      <Button
        disabled={!canVote.up}
        onClick={() => handleVote('up')}
      >
        Sick
      </Button>
      {/* <p>Current vote count: ${canVote}</p> */}
    </Box>
  );
};

export default Home;
