"use server";

// import AccountProfile from "@/components/forms/AccountProfile";
import { getUserById } from "@/lib/actions/user.actions";

import { currentUser } from "@clerk/nextjs";

const OnboardingPage = async () => {
  /* 
  const user = await currentUser();

  if (!user) return null; // to avoid typescript warnings

  const userInfo = await getUserById(user.id);

  const userData = {
    clerkId: user?.id,
    objectId: userInfo._id,
    username: userInfo ? userInfo.username : user?.username,
    firstName: userInfo ? userInfo.firstName : user?.firstName,
    bio: userInfo ? userInfo.bio : "",
    photo: userInfo ? userInfo.photo : user?.imageUrl,
  };


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
        {/* <AccountProfile user={userInfo} btnTitle="Continue" /> */}
      </section>
    </main>
  );
};

export default OnboardingPage;
