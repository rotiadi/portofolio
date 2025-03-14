import React from "react";
import "../styles/css/projectcard.css";

const ProjectCard = ({
  link,
  image,
  title,
  description,
  tags,
  source,
  video,
}) => {
  return (
    <>
      <div className="project-card">
        <h3>
          <a href={link} target="_blank">
            {title}
          </a>
        </h3>
        <div className="project-container">
          <div className="project-media">
            {image && <img src={image} alt="project" />}
            {video && <video src={video} controls muted />}
          </div>
          <div className="project-info">
            <p>{description}</p>
            <div className="project-source">
              {source && (
                <>
                  <p>Repository: </p>
                  {source.map((source) => (
                    <a key={source} href={source} target="_blank">
                      {source}
                    </a>
                  ))}
                </>
              )}
            </div>
            <div className="project-tags">
              {tags &&
                tags.map((tag) => (
                  <div key={tag} className="tag">
                    {tag}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
