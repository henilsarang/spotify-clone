import React from "react";
import NextImage from "next/image";
import NextLink from "next/link";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
];
const playLists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);
const SideBar = () => {
  console.log("SideBar");

  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box width="200px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.svg" height={700} width={700} />
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((menuItem) => (
              <ListItem paddingX="20px" fontSize="16px" key={menuItem.name}>
                <LinkBox>
                  <NextLink href={menuItem.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menuItem.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menuItem.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box marginBottom="20px">
          <List spacing={2}>
            {musicMenu.map((menuItem) => (
              <ListItem paddingX="20px" fontSize="16px" key={menuItem.name}>
                <LinkBox>
                  <NextLink href={menuItem.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menuItem.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menuItem.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider color="gray.800" />
        <Box height="55%" overflowY="auto" paddingY="20px">
          <List spacing={2}>
            {playLists.map((playlist) => (
              <ListItem paddingX="20px" key={playlist}>
                <LinkBox>
                  <NextLink href="/" passHref>
                    <LinkOverlay>{playlist}</LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
