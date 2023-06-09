import Head from 'next/head';
import Image from 'next/image';
// import { Inter } from 'next/font/google';
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
  ButtonStylesParams,
} from '@mantine/core';
import { Router, useRouter } from 'next/router';
import Link from 'next/link';
import DropDown from '@/components/menu';
import { Notifications, notifications } from '@mantine/notifications';

// import { Notifications } from '@mantine/notifications';

// const inter = Inter({ subsets: ['latin'] });
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
        theme={{
          fontFamily: 'monospace',
          components: {
            Button: {
              styles: (theme, params: ButtonStylesParams) => ({
                root: {
                  border: '2px solid black',
                },
              }),
            },
            Header: {
              styles: (theme) => ({
                root: {
                  border: '2px solid black',
                },
              }),
            },
          },
        }}
      >
        <Notifications />

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
            // Button: {
            //   border: '2px solid black',
            // },
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
