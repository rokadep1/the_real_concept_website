document.addEventListener("DOMContentLoaded", () => {
  fetch("projects.json")
    .then(response => response.json())
    .then(projects => {
      const container = document.getElementById("projects-container");

      projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "project";

        projectDiv.innerHTML = `
          <h3>${project.name}</h3>
          <img src="${project.image}" alt="${project.name}" style="max-width:100%; height:auto;">
          <video controls style="max-width:100%; margin-top:10px;">
            <source src="${project.video}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <hr>
        `;

        container.appendChild(projectDiv);
      });
    });
});
