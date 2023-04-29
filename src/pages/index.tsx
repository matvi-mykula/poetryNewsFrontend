import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import {
  AppShell,
  Navbar,
  Header,
  Box,
  Button,
  Text,
  Menu,
  MantineProvider,
} from '@mantine/core';
import { Router, useRouter } from 'next/router';
import Link from 'next/link';
import DropDown from '@/components/menu';

// import { Notifications } from '@mantine/notifications';

const inter = Inter({ subsets: ['latin'] });
interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ fontFamily: 'monospace' }}
      >
        <AppShell
          padding="md"
          // navbar={
          //   <Navbar
          //     width={{ base: 300 }}
          //     height={500}
          //     p="xs"
          //   >
          //     {/* Navbar content */}
          //   </Navbar>
          // }
          styles={(theme: {
            colorScheme: string;
            colors: { dark: any[]; gray: any[] };
          }) => ({
            main: {
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
            '*': {},
          })}
          header={
            <Header
              height={120}
              p="xs"
              className={styles.header}
            >
              <Text className={styles.title}>Subconscious News</Text>
              <Box className={styles.headerButtons}>
                {' '}
                <Button>
                  <Link href="/donate">Support Me</Link>
                </Button>
                <DropDown></DropDown>
              </Box>
              {/* <Box></Box> */}
            </Header>
          }
        >
          <Head>
            <title>Create Next App</title>
            <meta
              name="description"
              content="Generated by create next app"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link
              rel="icon"
              href="/favicon.ico"
            />
          </Head>
          {/* <Notifications /> */}

          <main>
            <Box className={styles.mainContent}>{children}</Box>
          </main>
        </AppShell>
      </MantineProvider>
    </>
  );
};

export default Layout;
