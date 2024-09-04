import banner_img from "../images/treatments/banner_non_sugical.png";
import medicine from "../images/treatments/medicine.png";
import banner0 from "../images/treatments/banner0.jpg";
import laser from "../images/treatments/laser.jpg";
import show from "../images/treatments/hairloss_show.png";

function NonSurgical() {
  return (
    <div className="non_surgical treatments">
      <div className="banner_box">
        <img src={banner_img} alt="" className="banner" />
        <h1>Non-Surgical Treatment</h1>
      </div>
      <div>
        <div className="content">
          <span className="sub_heading">THE TREATMENT</span>
          <h1>The non-Clinical Treatments</h1>
          <p>
            Non-Clinical therapies are generally designed at maintaining and in
            some cases improving the quality of your hair. Since Androgenic
            Alopecia is a progressive condition, trying to halt the process is a
            vital part of the challenge of managing this condition. These
            treatment options can vary from topical therapies through to more
            invasive procedures that require the injection of growth factors
            into the scalp.
          </p>
          <button>Book A Consultation</button>
        </div>
        <img src={medicine} alt="" className="medicine" />
      </div>
      <div className="banner_box">
        <div className="content">
          <h1>Medical Therapy</h1>
          <p>
            If you are suffering from Male Pattern Hair Loss or Female Pattern
            Hair Loss, the most effective form of non-clinical therapy will be a
            combination of prescription medication and medication that can be
            bought over the counter (OTC). Medical therapy is designed to
            stabilize hair loss. It is essential that you get a proper diagnosis
            and a full discussion of all available medical therapies.
          </p>
        </div>
        <img src={banner0} alt="" className="banner0" />
      </div>
      <div>
        <img src={laser} alt="" />
        <div className="content">
          <span className="sub_heading">LLLT</span>
          <h1>Low Level Laser Therapy</h1>
          <p>
            Low Level Laser Therapy works by directly stimulating the hair
            follicles to grow and lengthening their growth cycle. This is a
            safe, portable, and non-invasive form of therapy that can be used as
            part of a holistic treatment regime. The quality of the device used
            will also impact the outcome of the treatment. It can safely be used
            with no side effects in both men and women.
          </p>
        </div>
      </div>
      <div>
        <div className="content">
          <h1>How does Low Level Laser Therapy work?</h1>
          <p>
            Low Level Laser Therapy (LLLT) works through the principle of
            photo-biostimulation. Light at a particular wavelength reaches the
            root so the hair follicle which results in increased growth factors,
            thickening of the hair and decreased inflammation. It is an
            extremely safe treatment option that can be used by both men and
            women.
          </p>
        </div>
        <img src={show} alt="" />
      </div>
    </div>
  );
}

export default NonSurgical;
