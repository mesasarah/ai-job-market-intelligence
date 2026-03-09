import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container, TextField, Button, Grid } from "@mui/material";

import CompanyChart from "./CompanyChart";
import LocationChart from "./LocationChart";
import TypeChart from "./TypeChart";
import JobMap from "./JobMap";
import TrendChart from "./TrendChart";

function Dashboard() {

  const [jobs, setJobs] = useState([]);
  const [skill, setSkill] = useState("");

  const fetchJobs = () => {

    axios
      .get(`http://127.0.0.1:8000/api/jobs/?skill=${skill}`)
      .then(res => {
        setJobs(res.data);
      })
      .catch(err => {
        console.error("API Error:", err);
      });

  };

  useEffect(() => {
    fetchJobs();
  }, [skill]); 

  return (

    <Container style={{ marginTop: "40px" }}>

      <h1 style={{ textAlign: "center" }}>
        AI Job Market Intelligence Dashboard
      </h1>

      {/* Search Section */}

      <div style={{ marginBottom: "30px", textAlign: "center" }}>

        <TextField
          label="Search Skill (Python, SQL...)"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          style={{ marginRight: "20px", width: "300px" }}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={fetchJobs}
        >
          Search
        </Button>

      </div>

      <p style={{ textAlign: "center", fontSize: "18px" }}>
        Total Jobs Loaded: <b>{jobs.length}</b>
      </p>

      {/* Charts */}

      <Grid container spacing={4}>

        <Grid item xs={12} md={6}>
          <CompanyChart jobs={jobs} />
        </Grid>

        <Grid item xs={12} md={6}>
          <TypeChart jobs={jobs} />
        </Grid>

        <Grid item xs={12}>
          <LocationChart jobs={jobs} />
        </Grid>

        <Grid item xs={12}>
          <TrendChart jobs={jobs} />
        </Grid>

        <Grid item xs={12}>
          <JobMap jobs={jobs} />
        </Grid>

      </Grid>

    </Container>

  );
}

export default Dashboard;