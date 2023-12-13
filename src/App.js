import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";



const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/api/data') // Adjust this endpoint to match your server's route
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
      console.log("Fetched data:", data); // Check the fetched data
      setData(data);
  }, []);

  return(
  <div> 
    <h1>My 3D Scene</h1>
    <p>This is a paragraph describing the scene.</p>
  
  <Canvas>
    <ambientLight intensity={0.1} />
    <directionalLight color="red" position={[0, 0, 5]} />
    <mesh>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  </Canvas>


  <div>
      <h2>User Data:</h2>
      {data.map((user, index) => (
        <div key={index}>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Score: {user.score}</p>
        </div>
      ))}

    </div>


  </div>
  )
};

export default App;
