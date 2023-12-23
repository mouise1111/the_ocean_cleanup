// Story.js
import { Html } from "@react-three/drei";

const Story = ({ position }) => {
  return (
    <Html fullscreen position={position}>
      <div className="w-1/3 p-12 rounded-xl bg-amber-100">
        <h1 className="mb-4 text-3xl font-bold text-neutral-600">Projects</h1>
        <p className="text-neutral-600">
          FOUNDED 2013
          <br />
          NON-PROFIT FOUNDATION
          <br />
          HQ ROTTERDAM
          <br />
          We are fully reliant on donations from individuals, corporations,
          governments, and institutions.
          <br />
          The Ocean Cleanup's team consists of 120 engineers, researchers,
          scientists, computational modelers, and supporting roles, working
          daily to rid the world's oceans of plastic.
        </p>
      </div>
    </Html>
  );
};

export default Story;
