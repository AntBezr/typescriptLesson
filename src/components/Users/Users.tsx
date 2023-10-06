import { Container, Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import UsersCard from "./UsersCard";
import { getUsers } from "../../features/usersSlice";
import { useEffect } from "react";

const Users = () => {

  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.data);

  console.log("users", users);

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <Container>
      <h1>users list</h1>
      <Grid container spacing={5}>
        {users.map((user) => (
          <Grid key={user.id} item> <UsersCard key={user.id} user={user} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Users;