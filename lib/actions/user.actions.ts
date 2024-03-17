"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database/mongoose";
import User from "../database/models/user.model";
import { handleError } from "../utils";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";

interface Params {
  userId: string;
  username: string;
  name: string;
  bio: string;
  image: string;
  path: string;
}

type CreateUserParams = {
  userId: string;
  email: string;
  username: string;
  name: string;
  image: string;
};

// CREATE
export const createUser = async ({
  userId,
  email,
  username,
  name,
  image,
}: CreateUserParams): Promise<void> => {
  try {
    await connectToDatabase();

    const newUser = await User.create({
      userId,
      email,
      username,
      name,
      image,
    });

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
};

// READ
export const getUserById = async (userId: string) => {
  try {
    await connectToDatabase();

    const user = await User.findOne({ id: userId });

    if (!user) throw new Error("User not found");

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
};

export const updateUser = async ({
  userId,
  bio,
  name,
  path,
  username,
  image,
}: Params): Promise<void> => {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate(
      {
        id: userId,
      },
      {
        username: username.toLowerCase(),
        name,
        bio,
        image,
        onboarded: true,
      },
      { upset: true }
    );

    if (path === "/onboarding") {
      revalidatePath(path);
    }

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
};
