import "../css/gallery.css";

const serverUrl = "https://dr-naveen-server.vercel.app";
// const serverUrl = "http://localhost:3001";

function gallery() {
  async function addGalleryImages() {
    try {
      // Send GET request to the /gallery endpoint
      const response = await fetch(`${serverUrl}/gallery`);

      // Check if the response is OK
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      // Parse the JSON response
      const data = await response.json();
      showImages(data);
    } catch (error) {
      console.error("Error fetching gallery:", error);
    }
  }

  setTimeout(() => {
    addGalleryImages();
  }, 250);

  function showImages(data) {
    const gallery = document.querySelector(".main_gallery .gallery_images");

    if (gallery.innerHTML === "") {
      data.forEach((item) => {
        createImage(item.image_data);
      });
    }
  }

  function createImage(url) {
    const gallery = document.querySelector(".main_gallery .gallery_images");
    const image = document.createElement("img");
    image.src = url;
    gallery.appendChild(image);
  }

  return (
    <div className="main_gallery">
      <div className="gallery_images"></div>
    </div>
  );
}

export default gallery;
