import Header from "./header";
import Information from "./information";

const Profile = () => {
  return (
    <div className="h-full px-12">
      <Header
        name="Andrew Khadder"
        email="placeholder@ucr.edu"
        github="Andrewk1"
        discord="Andrewk1"
        status="Returning"
        profilePic="/assets/placeholderpic.png"
        projects={["ACM", "UCR", "testtestesttest"]}
      />
      <Information />
    </div>
  );
};

export default Profile;
