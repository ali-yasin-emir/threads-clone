/* eslint-disable no-unused-vars */

// ====== USER PARAMS ====== \\

declare type CreateUserParams = {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
};

declare type UpdateUserParams = {
  photo: string;
  firstName: string;
  username: string;
  bio: string;
};
