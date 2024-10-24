import "../css/admin.css";
import flower from "../images/fillers/flower.jpg";
import shirt from "../images/fillers/shirt.webp";

const serverUrl = "https://dr-naveen-server.vercel.app";
// const serverUrl = "http://localhost:3001";

function admin() {
  function getImageUrl(event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        createImage(e.target.result);
        uploadImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  }

  function uploadImage(url) {
    if (url) {
      // Send the string data to the server
      fetch(`${serverUrl}/send-string`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: url }), // Sending the string in the body
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      alert("Please enter a string.");
    }
  }

  function removeImage(event) {
    const image = event.target.parentElement.parentElement;
    const url = image.childNodes[0].src;

    if (url) {
      // Send the string data to the server
      fetch(`${serverUrl}/removeimg`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: url }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      alert("Please enter a string.");
    }

    if (image.classList.contains("image")) image.remove();
  }

  async function addImages() {
    try {
      // Send GET request to the /gallery endpoint
      const response = await fetch(`${serverUrl}/gallery`);

      // Check if the response is OK
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      // Parse the JSON response
      const data = await response.json();

      // Display the gallery
      const galleryDiv = document.querySelector(".admin .gallery_images");
      if (galleryDiv.innerHTML === "") {
        data.forEach((item) => {
          createImage(item.image_data);
        });
      }
    } catch (error) {
      console.error("Error fetching gallery:", error);
    }
  }

  function createImage(url) {
    const image_container = document.querySelector(".admin .gallery_images");
    let image = document.createElement("div");
    const img = document.createElement("img");
    const removeBtn = document.createElement("button");
    const removeHtml = document.createElement("i");
    removeHtml.className = "bx bx-minus";

    img.src = url;
    removeBtn.appendChild(removeHtml);

    image.classList.add("image");
    image.appendChild(img);
    image.appendChild(removeBtn);

    removeBtn.addEventListener("click", removeImage);

    image_container.appendChild(image);
  }

  document.addEventListener("DOMContentLoaded", addImages);
  setTimeout(() => {
    addImages();
  }, 250);

  return (
    <div className="admin">
      <button>
        <input type="file" alt="" onInput={getImageUrl} />
        add
      </button>
      <div className="gallery_images"></div>
    </div>
  );
}

export default admin;
