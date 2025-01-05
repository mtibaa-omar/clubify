import { useEffect, useState } from "react";
import { useUniversities } from "./useUniversities";
import Select from "../../ui/Select";

function UniversityOperations({
  selectedUniversity,
  setSelectedUniversity,
  selectedMandat,
  setSelectedMandat,
}) {
  const [selectedStateOperation, setSelectedStateOperation] = useState("0");
  const { isLoadingUniversities, universities } = useUniversities(
    selectedStateOperation,
    selectedMandat
  );

  useEffect(() => {
    if (selectedStateOperation === "0" && selectedUniversity !== "0") {
      setSelectedUniversity("0");
    }
  }, [selectedStateOperation, selectedUniversity, setSelectedUniversity]);

  return (
    <>
      <Select
        options={[
          { value: "0", label: "Select a State" },
          { value: "sfax", label: "Sfax" },
          { value: "sousse", label: "Sousse" },
          { value: "monastir", label: "monastir" },
          { value: "mahdia", label: "Mahdia" },
          { value: "nabeul", label: "Nabeul" },
          { value: "kairouan", label: "Kairouan" },
          { value: "tunis", label: "Tunis" },
        ]}
        onHandle={(e) => {
          setSelectedStateOperation(e.target.value);
        }}
      />
      <span>
        <Select
          onHandle={(e) => setSelectedMandat(e.target.value)}
          options={[
            { value: "0", label: "Select Mandat" },
            { value: "2024-09-01", label: "2024-2025" },
            { value: "2025-09-01", label: "2025-2026" },
          ]}
        />
      </span>
      <span>
        <Select
          onHandle={(e) => setSelectedUniversity(e.target.value)}
          disabled={
            selectedStateOperation === "0" ||
            isLoadingUniversities ||
            universities.length === 0
          }
          options={[
            { value: "0", label: "Select a University" },
            ...(universities
              ? universities.map((university) => ({
                  value: university.shortName,
                  label: university.shortName,
                }))
              : []),
          ]}
        />
      </span>
    </>
  );
}

export default UniversityOperations;
