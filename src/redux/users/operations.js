import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers, updateUser } from "../../services/usersAPI";

export const getUsersThunk = createAsyncThunk("users/getUsers", getUsers);
export const updateUserThunk = createAsyncThunk("users/updateUser", updateUser);
