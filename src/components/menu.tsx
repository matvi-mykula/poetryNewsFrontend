import { Menu, Button, Text, Box } from '@mantine/core';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

function DropDown() {
  return (
    <Box className={styles.dropDown}>
      <Menu
        shadow="md"
        width={200}
        // trigger="hover"
        openDelay={100}
        closeDelay={400}
        position="bottom-start"
      >
        <Menu.Target>
          <Button w={120}>Navigate</Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item>
            <Link href="/about">About</Link>
          </Menu.Item>
          <Menu.Item>
            {' '}
            <Link href="/home">Poems as News</Link>
          </Menu.Item>
          <Menu.Item>
            {' '}
            <Link href="/donate">Support Me</Link>
          </Menu.Item>
          {/* <Menu.Item>
            <Link href="/home">World News</Link>
          </Menu.Item> */}
          <Menu.Item>Gallery</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Box>
  );
}

export default DropDown;
