import banner from "../images/treatments/banner4.png";
import brow from "../images/treatments/brow.webp";
import operation from "../images/treatments/operation.png";
import doctor from "../images/treatments/doctor2.jpg";
import procedure from "../images/treatments/procedure4.jpg";

function EyeBrowHairLoss() {
  return (
    <div className="brow treatments">
      <div className="banner_box">
        <img src={banner} alt="" className="banner" />
        <h1>Eyebrow Hair Loss</h1>
      </div>
      <div>
        {" "}
        <div className="content">
          <span className="sub_heading">EYEBROWS</span>
          <h1>Eyebrow Thinning / Loss</h1>
          <p>
            Eyebrows have been described as your most important facial feature.
            Eyebrows act to frame the eyes and highlight some of your best
            features.
          </p>
          <h2>Causes</h2>
          <p>
            It is common to see women with thin or partially absent eyebrows
            that are a result of overzealous plucking. Eyebrow loss can also be
            either congenital in nature or due to scar tissue secondary to
            physical trauma.
          </p>
          <h2>Treatments</h2>
          <p>
            Restoration of the eyebrows generally involves hair transplantation
            from the scalp to the affected area on the eyebrows to give a fuller
            natural look. It is essential to have a detailed understanding of
            eyebrow design as both the shape and the contour of the eyebrow are
            vital elements for a natural-looking eyebrow.
          </p>
        </div>
        <iframe
          src="https://www.youtube.com/embed/Kk_KTEQMLoY?si=FS7deymvaX4anu22"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <img src={brow} alt="" />
        <div className="content">
          <h1>Eyebrow Transplant</h1>
          <p>
            The eyebrows frame the face and can take years off your appearance
            if crafted correctly! This is where our team at Naveen
            Superspeciality Hospital are on-call to help you look and feel your
            best. The current buzzwords in the industry include Eyebrow
            Transplantation and this is part of the Eyebrow Hair Transplant
            techniques in which we excel!
          </p>
        </div>
      </div>
      <div>
        <div className="content">
          <h1>Eyebrow Hair Transplant</h1>
          <p>
            Naveen Superspeciality Hospital are able to create a wide-eyed, but
            natural, appearance for you, based on the way we perfect our eyebrow
            hair transplants. You can rest assured that our team are the
            industry’s best and we only use world-class techniques to create a
            modern yet natural looking result!
          </p>
        </div>
        <img src={operation} alt="" />
      </div>
      <div>
        <img src={doctor} alt="" />
        <div className="content">
          <h1>Eyebrow Hair Transplant Clinic</h1>
          <p>
            As time goes by, however, let’s face it; we all produce fewer
            follicles and at a slower pace, including facially as far as eyebrow
            growth. For many of our clients, treatments for other issues mean
            that booking in for an Eyebrow Hair Transplant makes sense and
            offers greater confidence. Some of our most satisfied clients have
            had to face treatments for other health issues which may have
            impacted their body’s own ability to produce fresh follicles and
            hair growth; this is where we are happy to support your and offer a
            range of options to keep you looking fresh-faced and ready to face
            the world as best you can under a variety of life’s changing
            circumstances.
          </p>
        </div>
      </div>
      <div>
        <div className="content">
          <h1>Eyebrow Hair Transplant</h1>
          <p>
            {" "}
            On the other hand, many of our clients simply request an updated
            eyebrow hair transplant because they love staying on-trend.{" "}
          </p>
          <p>
            {" "}
            Imagine the convenience of not having to apply any eyebrow pencil
            every morning; it’s honestly a breeze and our testimonials prove
            that many of our clients appreciate the added fullness offered by
            Naveen Superspeciality Hospital eyebrow treatments.{" "}
          </p>
        </div>
        <img src={procedure} alt="" />
      </div>
    </div>
  );
}

export default EyeBrowHairLoss;
