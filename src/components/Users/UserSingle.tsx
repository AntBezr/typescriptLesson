import { Container, Table, TableCell, TableHead, TableRow } from "@mui/material";
import { getUserAlbums, getUsers } from "../../features/usersSlice"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { useEffect, useState } from "react"

import { useParams } from "react-router-dom";

const UserSingle = () => {

  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.data)
  const albums = useAppSelector((state) => state.users.usersAlbums)
  const { userId } = useParams()


  useEffect(() => {
    if (users.length === 0) dispatch(getUsers())
    if (albums.length === 0) dispatch(getUserAlbums(Number(userId)))

  }, [dispatch, users])

  console.log(albums);

  // 1. we should retern  a table of the users album data here
  //  Remember that the use table has 3 fields of data: id,title and userID
  // we are only interested in the title of each album
  return (
    <Container>
      <div>Single user will be here</div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Albom's title</TableCell>
          </TableRow>
          {albums.map((album) => (
            <TableRow>
              <TableCell>{album.id - (album.userId - 1) * 10}</TableCell>
              <TableCell>{album.title}</TableCell>
            </TableRow>
          )
          )
          }
        </TableHead>
      </Table>
    </Container>
  )
}

export default UserSingle