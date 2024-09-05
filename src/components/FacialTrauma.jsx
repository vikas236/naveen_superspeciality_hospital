import banner from "../images/treatments/facial_trauma.jpg";
import doctor from "../images/treatments/facial_trauma0.jpg";

function FacialTrauma() {
  return (
    <div className="facialtrauma treatments">
      <div className="banner_box small">
        <img src={banner} alt="" className="banner" />
        <h1>Facial Trauma</h1>
      </div>
      <div className="no_padding">
        <p>
          Facial trauma refers to any injury to the face, teeth, or inside of
          the mouth. If you experience a facial injury, our oral surgeons may be
          able to help at our office in Ravulapalem, CA. Oral and maxillofacial
          surgeons, like our surgical staff at Ravulapalem Center for Oral &
          Maxillofacial Surgery, are experts at repairing facial and dental
          injuries.
        </p>
      </div>
      <div className="no_padding">
        <p>
          Whether your trauma was the result of a sports injury, an accidental
          fall, or another incident, it’s important to seek treatment as soon as
          possible. Doing so can prevent future complications. If you experience
          a facial cut, broken tooth, or fractured facial bone, our staff will
          see you as soon as possible — usually the day you call. Oral surgeons
          undergo years of hospital-based training where they learn to repair
          facial injuries while preserving the appearance of your face.
        </p>
      </div>
      <div>
        <img src={doctor} alt="" />
        <div className="content">
          <h1>Treating Facial Injuries</h1>
          <p>
            The face is one of the most complicated parts of the body: various
            muscles, glands, nerves, and structures must work together in
            perfect harmony for a person to eat, speak, and function normally.
            Oral surgeons are trained to restore both the function and the
            appearance of your face after an injury. Depending on the location
            and extent of your injury, one or more of the following methods may
            be used:
          </p>
          <ul>
            <li>
              <b>Soft tissue injuries</b>. With soft tissue injuries, such as
              facial lacerations or intraoral cuts, oral surgeons usually treat
              the injury with sutures. Our surgeons understand the need to
              prevent scarring, and they can use techniques that hide or
              minimize any visible scars once your injury heals.
            </li>
            <li>
              <b>Bone injuries/fractures</b>. Doctors treat broken bones by
              stabilizing the bone in its proper position. With most body parts,
              a cast is used to hold the bones in place, but it’s impossible
              (and impractical) to place a cast over the smaller facial bones
              (eye sockets, jaws, etc.). Instead, oral surgeons surgically place
              tiny plates to secure your facial bones after an injury.
            </li>
            <li>
              <b>Dental injuries.</b> Sometimes your dentist can repair a broken
              or cracked tooth, but when an injury damages the tooth socket or
              knocks out a tooth, an oral surgeon may be necessary. Oral
              surgeons can often restore an avulsed tooth or repair a damaged
              tooth socket.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p>
          If you lose an adult tooth, bring it into the office right away
          because the best chances of replacement are within the first 30
          minutes after tooth loss. Make sure you don’t wipe off or clean the
          tooth, as doing so can damage tissues that are important for
          replacement. Just put the tooth in a container of saliva or whole milk
          and bring it in as quickly as possible.
        </p>
      </div>
    </div>
  );
}

export default FacialTrauma;
