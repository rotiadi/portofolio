import React from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/css/projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <section>
        <div className="projects-group" id="solo">
          <h2>Solo projects</h2>
          <ProjectCard
            link="https://roti-tictactoe.netlify.app/"
            image="/assets/images/tictactow.jpeg"
            title="Tic Tac Toe"
            description=" A TicTacToe game built with React. It is a two-player game where
            players take turns to place their mark on the board. The first
            player to get three of their marks in a row wins the game."
            source={["https://github.com/rotiadi/TicTacToe"]}
            tags={["React", "JavaScript", "CSS"]}
          />
          <ProjectCard
            title="To Do App"
            link="https://delicate-kitten-287616.netlify.app/"
            image="/public/assets/images/todo.jpeg"
            description="A simple to do app built with DOM manipulation. 
          It allows users to add, edit, and delete tasks. 
          The app also has a filter feature that allows users to filter tasks by their status."
            tags={["React", "JavaScript", "CSS"]}
            source={["https://github.com/rotiadi/intro-react"]}
          />
        </div>
        <div className="projects-group" id="group">
          <h2>Group projects</h2>
          <ProjectCard
            title="Estia Project"
            // link=""

            image=""
            video=""
            description="A simple to do app built with DOM manipulation. 
          It allows users to add, edit, and delete tasks. 
          The app also has a filter feature that allows users to filter tasks by their status."
            tags={["Node.js", "Express", "PostgreSQL"]}
            source={["https://github.com/vasiliki0217/Project-Estia-Backend"]}
          />
          <ProjectCard
            title="Tapi"
            // link=""
            image="/public/assets/images/pencil.svg"
            description="An application that allows users to learn 
          a new language by translating words or expressions.
           Is made like a game and the user needs to fill the spaces from the sentences provided by the application"
            tags={["Node.js", "Express", "MongoDB"]}
            source={[
              "https://github.com/tareqitos/tapi-backend",
              "https://github.com/tareqitos/tapi",
            ]}
          />
        </div>
      </section>
    </div>
  );
};

export default Projects;
