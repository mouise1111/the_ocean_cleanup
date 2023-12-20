import { useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <div className="flex items-center justify-center h-screen text-white bg-opacity-50 bg-cover bg-sky-400">
      <div className="flex items-center">
        <div className="p-8 text-center">
          <h2 className="mb-12 text-6xl font-bold text-black joti-one">
            Are you ready to start the discovery of the Ocean3D world?
          </h2>

          <h3 className="text-3xl font-light text-center">
            {progress} % loaded
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Loader;
