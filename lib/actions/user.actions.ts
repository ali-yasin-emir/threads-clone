"use server";

import { revalidatePath } from "next/cache";

import User from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";

// CREATE or UPDATE
export const createOrUpdateUser = async (
  id: any,
  first_name: any,
  last_name: any,
  image_url: any,
  email_addresses: any,
  username: any
) => {
  try {
    await connectToDatabase();

    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          profilePhoto: image_url,
          email: email_addresses[0].email_address,
          username: username,
        },
      },
      {
        upsert: true,
        new: true,
      }
    );

    await user.save(); // Save user to database

    return user;
  } catch (error) {
    handleError(error);
  }
};

// READ
export async function getUserById(id: string) {
  try {
    await connectToDatabase();

    const user = await User.findOne({ clerkId: id });

    if (!user) throw new Error("User not found");
  } catch (error) {
    handleError(error);
  }
}

// DELETE
export const deleteUser = async (id: string) => {
  try {
    await connectToDatabase();
    await User.findOneAndDelete({ clerkId: id });
  } catch (error) {
    handleError(error);
  }
};
