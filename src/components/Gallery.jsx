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
    const slider = document.querySelector(".main_gallery .gallery_slider");
    slider.classList.remove("active");
    total_slides = data.length;
    image_urls = data.slice();

    if (gallery.innerHTML === "") {
      data.forEach((item, i) => {
        createImage(item.image_data, gallery, "gallery", i);
      });
    }
  }

  function createImage(url, container, condition, i) {
    const image = document.createElement("img");
    image.src = url;
    container.appendChild(image);

    if (condition === "gallery") {
      image.addEventListener("click", () => {
        slide_number = i + 1;
        showImageSlider(image.src, i);
      });
    }
  }

  let slide_number = 0;
  let total_slides = 0;
  let image_urls = [];
  function createimageSlider(data) {
    const slider = document.querySelector(".main_gallery .gallery_slider");
    const left_btn = document.createElement("div");
    const right_btn = document.createElement("div");
    const close_btn = document.createElement("i");

    left_btn.classList.add("left_btn");
    right_btn.classList.add("right_btn");
    close_btn.className = "bx bx-x close_btn";

    left_btn.innerHTML = "<i class='bx bx-chevron-left'></i>";
    right_btn.innerHTML = "<i class='bx bx-chevron-right'></i>";

    slide_number = 1;
    left_btn.addEventListener("click", (e) => moveSlider(e, "left"));
    right_btn.addEventListener("click", (e) => moveSlider(e, "right"));
    close_btn.addEventListener("click", closeSlider);

    if (slider.innerHTML === "") {
      slider.appendChild(left_btn);
      slider.appendChild(right_btn);
      slider.appendChild(close_btn);
      createImage(data[0].image_data, slider);
    }
  }

  function moveSlider(e, direction) {
    let image = e.target.parentElement.parentElement.childNodes[3];
    if (!image) image = e.target.parentElement.childNodes[3];
    console.log(image);

    if (direction === "left" && slide_number > 1) {
      image.src = image_urls[--slide_number - 1].image_data;
    } else if (direction === "right" && slide_number < total_slides) {
      image.src = image_urls[++slide_number - 1].image_data;
    }
  }

  function showImageSlider(url, i) {
    const slider = document.querySelector(".gallery_slider");
    slider.classList.add("active");
    slider.childNodes[3].src = url;
    slide_number = i + 1;
  }

  function closeSlider() {
    const slider = document.querySelector(".main_gallery .gallery_slider");
    slider.classList.remove("active");
  }

  return (
    <div className="main_gallery">
      <div className="gallery_images"></div>
      <div className="gallery_slider"></div>
    </div>
  );
}

export default gallery;
