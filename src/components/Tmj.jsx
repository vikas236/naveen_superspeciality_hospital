import banner from "../images/treatments/facial_trauma.jpg";
import tmj from "../images/treatments/tmj.jpg";

function Tmj() {
  return (
    <div className="tmj treatments">
      <div className="banner_box small">
        <img src={banner} alt="" className="banner" />
        <h1>TMJ Treatment</h1>
      </div>
      <div>
        <div className="content">
          <p>
            TMJ disorders are a family of problems that affect your
            temporomandibular joint, which is the joint that allows your mouth
            to open and close and move side to side smoothly (your jaw joints).
            Our oral surgeons are TMJ specialists who can help diagnose and
            correct TMJ problems from our office in Ravulapalem. If you are
            experiencing discomfort, tightness, pain, clicking or snapping
            sounds in your jaw, or other symptoms, you may have a TMJ disorder.
          </p>
          <p>
            There are many reasons that people develop TMJ disorders, some of
            which can be controlled through simple lifestyle changes. Excessive
            clenching or grinding of your teeth can put extra stress on the jaw
            muscles, causing tension and other problems. The use of a night
            guard can sometimes relieve the tension in overstrained muscles. In
            other cases, surgery may be necessary to relieve chronic jaw pain.
            Regardless of the cause of your TMJ disorder, treating jaw issues
            early is the best way to prevent future discomfort and
            complications.
          </p>
        </div>
        <iframe
          src="https://www.youtube.com/embed/F715Y1Dw_pM?si=I-gKqAdCAzvLC15y"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="idle">
        <div className="content">
          <h1>Symptoms of TMJ Disorders</h1>
          <p>
            Any combination of the following symptoms and risk factors may
            relate to a TMJ disorder:
          </p>
          <ul>
            <li>
              <i class="bx bx-check"></i>Soreness or stiffness around the jaws
              or teeth
            </li>
            <li>
              <i class="bx bx-check"></i>Frequent headaches
            </li>
            <li>
              <i class="bx bx-check"></i>A clicking or grating sound when
              opening and closing the mouth
            </li>
            <li>
              <i class="bx bx-check"></i>Clenching or grinding of the teeth
              during sleep
            </li>
            <li>
              <i class="bx bx-check"></i>Pain when opening the jaw or biting
              into certain foods
            </li>
            <li>
              <i class="bx bx-check"></i>
              Jaws that snap open or shut (because of a general sense of
              tightness)
            </li>
            <li>
              <i class="bx bx-check"></i>A history of arthritis
            </li>
            <li>
              <i class="bx bx-check"></i>Sensitive or worn down teeth
            </li>
            <li>
              <i class="bx bx-check"></i>TMJ Arthroscopy
            </li>
          </ul>
        </div>
      </div>
      <div className="idle">
        <div className="content">
          <h1>Treatment & Exercises</h1>
          <p>
            Treatment can vary depending on the extent and cause of your TMJ
            issues. In general, the best treatments are a combination of
            self-care techniques and professional help. Some of the most
            effective self-care techniques you can use include
          </p>
          <ul>
            <li>
              <i class="bx bx-check"></i> Improving your posture (sitting up
              straight, not slouching, etc.)
            </li>
            <li>
              <i class="bx bx-check"></i> Resting your jaw by keeping teeth
              apart when not in use
            </li>
            <li>
              <i class="bx bx-check"></i> Using a mouth guard at night to
              prevent clenching
            </li>
            <li>
              <i class="bx bx-check"></i> Stress management techniques
            </li>
            <li>
              <i class="bx bx-check"></i> Doing exercises to stretch your jaw
            </li>
            <li>
              <i class="bx bx-check"></i> Avoiding very hard and chewy foods for
              a while
            </li>
          </ul>
          <p>
            If these lifestyle changes alone can’t correct your condition, your
            doctor may prescribe anti-inflammatories, pain relievers, muscle
            relaxers, or other treatments. Orthodontics and <b>jaw surgery</b>{" "}
            are also options to consider when non-surgical treatments do not
            effectively control your symptoms.
          </p>
        </div>
      </div>
      <div>
        <div className="content">
          <h1>We Specialize in Treating TMJ </h1>
          <p>
            If you live in Ravulapalem, and you notice problems with your jaw or
            TMJ, contact our office. Our oral surgeons are jaw specialists with
            years of experience diagnosing and treating issues with the joints
            and the bite. One of our staff members will be happy to help you
            schedule an appointment.
          </p>
        </div>
        <img src={tmj} alt="" />
      </div>
    </div>
  );
}

export default Tmj;
