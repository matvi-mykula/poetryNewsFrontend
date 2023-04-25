import { Box, Button } from '@mantine/core';
import styles from '@/styles/Home.module.css';
import { fetchHaiku } from '@/services/requests';
import { useEffect, useState } from 'react';
import { ShowPoem } from '@/components/ShowPoem';

function Home() {
  const [poem, setPoem] = useState<string[]>([]);

  return (
    <Box>
      <Box>
        <Button
          onClick={async () => {
            console.log('button');
            // const response = await fetchHaiku(topWords);
            /// commented out to save money
            console.log({
              success: true,
              code: 200,
              response:
                '\n\nTwo authorities | Silenced a transgender voice | Montana lawmaker guilty',
            });
            setPoem([
              'Two authorities',
              'Silenced a transgender voice',
              'Montana lawmaker guilty',
            ]);
          }}
        ></Button>
      </Box>

      <ShowPoem poem={poem}></ShowPoem>
    </Box>
  );
}

export default Home;
