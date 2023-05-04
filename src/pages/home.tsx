import { Box, Button, Text, SegmentedControl } from '@mantine/core';
import styles from '@/styles/Home.module.css';
import { useEffect, useState } from 'react';
import { ShowPoem } from '@/components/ShowPoem';
import { VoteButtons } from '@/components/VoteButtons';
import { io } from 'socket.io-client';
import { PoemData } from '@/types';
import { environment } from '@/utils/environment';
import { notifications } from '@mantine/notifications';

const socket = io(environment); // this is where the environment variable goes

function Home() {
  const [key, setKey] = useState('pop');
  const [poem, setPoem] = useState<string[]>([]);
  const [entries, setEntries] = useState<PoemData[]>([]);
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
      notifications.show({
        title: `Welcome!`,
        message: `This page takes trending news headlines and makes poetry 
        from them. The color is tied to Natural Language Processing Sentiment Analysis. 
        Vote on whether or not the poems come out meaningful to you! `,
      });
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
  };

  return (
    <Box className={styles.homepage}>
      <SegmentedControl
        color="blue"
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
              console.log(entries[currentEntryIndex]);
              const vote = localStorage.getItem(
                `${entries[currentEntryIndex].id}`
              );
              const newVoteMarker = localStorage.getItem('new');
              // dont update if its just looking at a poem already voted on
              // if new vote or changed vote then update
              if (vote && newVoteMarker) {
                console.log('new vote exists');
                const updatedPoem = entries[currentEntryIndex];
                vote === 'good'
                  ? (updatedPoem.goods += 1)
                  : (updatedPoem.bads += 1);
                localStorage.removeItem('new'); /// prevents old votes to be recast
                socket.emit('poem:updated', updatedPoem);
              }

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

export default Home;
