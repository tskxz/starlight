import Project from "@/components/programs/project";

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Project
        title="WINC Website"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indsutry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        tags={["TypeScript", "TypeScript", "TypeScript"]}
      />
    </div>
  );
};

export default Home;
