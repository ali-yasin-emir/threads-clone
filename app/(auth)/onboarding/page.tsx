"use server";

import AccountProfile from "@/components/forms/AccountProfile";
import { getUserById } from "@/lib/actions/user.actions";
import User from "@/lib/database/models/user.model";

import { currentUser } from "@clerk/nextjs";

const OnboardingPage = async () => {
  const user = await currentUser();

  if (!user) return null; // to avoid typescript warnings

  // const userInfo = {}

  const userInfo = await getUserById(user.id);

  const userData = {
    id: user?.id,
    objectId: userInfo._id,
    username: userInfo ? userInfo.username : user?.username,
    name: userInfo ? userInfo.name : user?.firstName,
    bio: userInfo ? userInfo.bio : "",
    image: userInfo ? userInfo.image : user?.imageUrl,
  };

  /* 
  const userData = {
    id: user.id,
    objectId: userInfo._id,
    username: userInfo.username || user?.username,
    name: userInfo.name || user?.firstName || "",
    bio: userInfo.bio || "",
    image: userInfo.image || user?.imageUrl,
  };
*/
  return (
    <main className="text-white flex flex-col gap-4 tracking-wide">
      <h1 className="text-4xl font-semibold">Onboarding</h1>
      <p className="text-lg">Complete your profile now to use Threads</p>
      <section className="p-9 bg-[#16171a] shadow-xl rounded-lg">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  );
};

export default OnboardingPage;
