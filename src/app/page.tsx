"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/getProjects");
        const data = await res.json();
        console.log(data);
        setProjects(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <main>
      <div>Hello world!</div>
      <div>projects</div>
    </main>
  );
}
