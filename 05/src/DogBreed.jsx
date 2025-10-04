import React, { useState, useEffect } from "react";
import axios from "axios";

function DogBreed() {
  const [breed, setBreed] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dogapi.dog/api/v2/breeds")
      .then((response) => {
        console.log("Full Response:", response.data);

        
        const index = 2;
        const selected = response.data.data[index];

        setBreed(selected);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error Fetching:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h2>Selected Dog Breed</h2>
      {breed ? (
        <div>
          <p><strong>Name:</strong> {breed.attributes.name}</p>
          <p><strong>Description:</strong> {breed.attributes.description}</p>
          <p><strong>Life Span:</strong> {breed.attributes.life.min} - {breed.attributes.life.max} years</p>
          <p><strong>Male Weight:</strong> {breed.attributes.male_weight.min} - {breed.attributes.male_weight.max} kg</p>
          <p><strong>Female Weight:</strong> {breed.attributes.female_weight.min} - {breed.attributes.female_weight.max} kg</p>
          <p><strong>Hypoallergenic:</strong> {breed.attributes.hypoallergenic ? "Yes" : "No"}</p>
        </div>
      ) : (
        <p>No breed found at this index.</p>
      )}
    </>
  );
}

export default DogBreed;

