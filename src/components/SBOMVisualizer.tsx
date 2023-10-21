import React, { useEffect, useState } from 'react';
import { parseSPDX } from '../services/spdx';
import '../styles/SBOMVisualizer.css';

const SBOMVisualizer: React.FC = () => {
  const [sbomData, setSbomData] = useState(null);

  useEffect(() => {
    fetchSBOMData();
  }, []);

  const fetchSBOMData = async () => {
    const data = await parseSPDX();
    setSbomData(data);
  };

  return (
    <div id="sbomVisualizer">
      {sbomData ? (
        <div>
          <h2>SBOM Visualizer</h2>
          <pre>{JSON.stringify(sbomData, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SBOMVisualizer;