import { Box, Button, Text, SegmentedControl } from '@mantine/core';
import styles from '@/styles/Home.module.css';
import { fetchHaiku } from '@/services/requests';
import { useEffect, useState } from 'react';
import { ShowPoem } from '@/components/ShowPoem';
import { io } from 'socket.io-client';
import { socketEmitter } from '@/services/socket';
import { getTopWords } from '@/services/scraper';
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
      <Box className={styles.nextButton}>
        <Button
          onClick={async () => {
            handleNextEntry();
          }}
        >
          Another Please
        </Button>
        <p>{currentEntryIndex}</p>
      </Box>
      {entries.length > 0 && currentEntryIndex < entries.length ? (
        <ShowPoem poem={entries[currentEntryIndex]}></ShowPoem>
      ) : (
        <Text>No Poems</Text>
      )}
    </Box>
  );
}

export default Home;
