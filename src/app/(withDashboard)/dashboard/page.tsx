import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      {session?.user && (
        <>
          {" "}
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.name}{" "}
          </h1>
          <h1 className="text-4xl text-center mt-10">
            Logged in users email: {session?.user?.email}{" "}
          </h1>
          <Image
            className="mx-auto rounded-full"
            width={100}
            height={100}
            src={session?.user?.image}
            alt="profile image"
          ></Image>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
