import React, { useState } from "react";
import { Handle, Position } from "reactflow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function CustomNode({ data }) {
  const [hovered, setHovered] = useState(null);

  const handleClick = () => {
    window.open(`/nodes/${data.id}`, "_blank");
  };
  console.log("Node data:", data);

  const isQuestion = data.type === "question";

  return (
      <div
        className={isQuestion ? "question-node" : "custom-node"}
        onMouseLeave={() => setHovered(null)}
        onClick={() => {
          if (!isQuestion) {
            handleClick();
          }
        }}
        style={{ cursor: isQuestion ? "default" : "pointer" }} // Evita o cursor de clique em questions
      >

      <div className="node-content">
        <span>{data.label}</span>

        {!isQuestion && (
          <>
            <FontAwesomeIcon
              icon={faUser}
              className="icon user-icon"
              onMouseEnter={() => setHovered("papel")}
            />
            <FontAwesomeIcon
              icon={faFileAlt}
              className="icon file-icon"
              onMouseEnter={() => setHovered("artefato")}
            />
          </>
        )}
      </div>

      {/* Tooltip */}
      {hovered && !isQuestion && (
        <div className="tooltip">
          {hovered === "papel" && <p><strong>Papel:</strong> {data.papel}</p>}
          {hovered === "artefato" && <p><strong>Artefato:</strong> {data.artefato}</p>}
        </div>
      )}
      <Handle type="source" position={data?.sourcePosition ?? Position.Right} />
      <Handle type="target" position={data?.targetPosition ?? Position.Left} />

    </div>
    
  );
  
}
