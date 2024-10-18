import React from "react";
import styles from "./ProjectsStyles.module.css";
import car from "../../assets/eco_img.png";
import api from "../../assets/api.png";
import list_box from "../../assets/task_tracker.png";
import data_git from "../../assets/github_img.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={car}
          link="https://github.com/Zarvi16G/Ecommerce"
          h3="Ecommerce"
          p="Django app"
        />
        <ProjectCard
          src={api}
          link="https://github.com/Zarvi16G/FastAPI"
          h3="API"
          p="FastAPI + MongoDB"
        />
        <ProjectCard
          src={list_box}
          link="https://github.com/Zarvi16G/tasks_tracker_project"
          h3="Task Tracker"
          p="Script"
        />
        <ProjectCard
          src={data_git}
          link="https://github.com/Zarvi16G/fetch_github_user_activity_project"
          h3="Fetch GitHub user activity"
          p="Script"
        />
      </div>
    </section>
  );
}

export default Projects;
