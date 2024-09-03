const button = document.querySelector(".gridSize");
      const rgb = document.querySelector(".rgb");
      const removeColor = document.querySelector(".rm-color");
      const container = document.querySelector(".container");

      button.addEventListener("click", () => {
        const gridSize = parseInt(prompt("Enter grid size", "16"), 10);

        if (isNaN(gridSize)) {
          alert("Not a number");
        } else if (gridSize < 2 || gridSize > 100) {
          alert("Size error:");
        } else {
          updateGrid(gridSize);
        }
      });

     

      rgb.addEventListener("click", () => {
        const boxes = document.querySelectorAll(".container-box");
        boxes.forEach((box) => {
          box.addEventListener("mouseover", () => {
            const color1 = Math.floor(Math.random() * 256);
            const color2 = Math.floor(Math.random() * 256);
            const color3 = Math.floor(Math.random() * 256);
            box.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
          });
        });
      });

      removeColor.addEventListener("click", () => {
        const boxes = document.querySelectorAll(".container-box");
        boxes.forEach((box) => {
          box.addEventListener("mouseover", () => {
            box.style.backgroundColor = `white`;
          });
        });
      });


      function updateGrid(size) {
        document.querySelectorAll(".container-box").forEach((element) => {
          element.remove();
        });

        const boxSize = 500 / size;

        for (let i = 0; i < size ** 2; i++) {
          const element = document.createElement("div");
          element.className = "container-box";
          element.style.width = `${boxSize}px`;
          element.style.height = `${boxSize}px`;
          element.style.border = `1px solid black`;
          container.appendChild(element);
        }
      }