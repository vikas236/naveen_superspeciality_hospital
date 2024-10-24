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
      createimageSlider(data);
    } catch (error) {
      console.error("Error fetching gallery:", error);
    }
  }

  addGalleryImages();

  function showImages(data) {
    const gallery = document.querySelector(".main_gallery .gallery_images");

    if (gallery.innerHTML === "") {
      data.forEach((item) => {
        createImage(item.image_data, gallery);
      });
    }
  }

  function createImage(url, container) {
    const image = document.createElement("img");
    image.src = url;
    container.appendChild(image);
  }

  function createimageSlider(data) {
    const slider = document.querySelector(".main_gallery .gallery_slider");
    const left_btn = document.createElement("div");
    const right_btn = document.createElement("div");

    left_btn.classList.add("left_btn");
    right_btn.classList.add("right_btn");

    left_btn.innerHTML = "<i class='bx bx-chevron-left'></i>";
    right_btn.innerHTML = "<i class='bx bx-chevron-right'></i>";

    if (slider.innerHTML === "") {
      slider.appendChild(left_btn);
      slider.appendChild(right_btn);
      data.forEach((item, i) => {
        createImage(item.image_data, slider);
      });
    }
    console.log(slider.childNodes);
  }

  function showImageSlider(i) {
    console.log(i);
  }

  return (
    <div className="main_gallery">
      <div className="gallery_images"></div>
      <div className="gallery_slider"></div>
    </div>
  );
}

export default gallery;
