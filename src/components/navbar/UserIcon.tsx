import { LuUser } from "react-icons/lu";
import { fetchProfileImage } from "@/utils/actions";
import Image from "next/image";

async function UserIcon() {
  const profileImage = await fetchProfileImage();
  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt="profile image"
        width={50}
        height={50}
        className="w-6 h-6 rounded-full object-cover"
      />
    );
  }

  return <LuUser className="w-6 h-6 bg-primary rounded-full text-white" />;
}
export default UserIcon;
