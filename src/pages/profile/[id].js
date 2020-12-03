import { useRouter } from 'next/router';

function Profile() {
  const router = useRouter()
return <h1>Profile {router.query.id}</h1>
};

export default Profile;