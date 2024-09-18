import banner from "../images/treatments/banner2.png";
import procedure from "../images/treatments/procedure3.jpg";
import pattern from "../images/treatments/pattern0.webp";
import doctor from "../images/treatments/doctor0.jpg";
import hair from "../images/treatments/hair0.jpg";
import patter0 from "../images/treatments/pattern1.png";
import doctor0 from "../images/treatments/doctor1.jpg";

function FemaleHairLoss() {
  return (
    <div className="femalehairloss treatments">
      <div className="banner_box">
        <img src={banner} alt="" className="banner" />
        <h1>Female Hair Loss</h1>
      </div>
      <div>
        <div className="content">
          <span className="sub_heading">FEMALE HAIR LOSS</span>
          <h1>Conditions That We Treat.</h1>
          <p>
            Female hair loss is becoming increasingly common and prevalent. This
            can be a great cause of concern and distress for anyone who is
            experiencing this. It is important that this is diagnosed and the
            correct treatment be commenced in order to thicken and restore the
            hair loss that has occurred.
          </p>
          <h2>causes</h2>
          <p>
            Hair loss in women can be due to a combination of factors such as
            age, hormonal levels, and genetics.
          </p>
          <h2>Treatments</h2>
          <p>
            Medication can be prescribed to try and stop the progression of hair
            loss and stimulate further hair growth. In some cases, hair
            transplant is an appropriate treatment option to add more hair to a
            particular area.
          </p>
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6DSeO3QX0mo?si=waqEepYHtEi_TY3A"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFllScreen
        ></iframe>
      </div>
      <div>
        <img src={procedure} alt="" />
        <div className="content">
          <h1>Female Hair Loss Clinic</h1>
          <p>
            {" "}
            Female hair loss can be devastating. A lot of focus seems to hone in
            on men’s experiences of hair thinning and hair loss, but let’s be
            real: hormonal changes, peri-menopause, menopause and post-partum
            hair changes can create a dramatic impact on how a woman feels about
            her appearance.{" "}
          </p>
          <p>
            {" "}
            At the same time, weaves, clip-in extensions and so on can offer
            temporary reprieve, but there’s nothing like the feeling of having
            your lustrous locks restored from within, offering you the
            confidence to style your hair exactly as you like (particularly for
            special occasions.){" "}
          </p>
        </div>
      </div>
      <div>
        <div className="content">
          <h1>Female Hair Loss Treatment</h1>
          <p>
            {" "}
            Trichologists identify three major periods of the lifespan, which
            each present varying types of hair-growth. Firstly, as infants, most
            people have very fine, sparse hair, which grows in tufts and maybe
            curls too. Some babies, as you know, are also already born with a
            full-head of hair, but it will still be of the texture identified as
            “baby’s-hair.” During puberty, human hair changes again and
            gradually peaks in thickness, fullness and length.{" "}
          </p>
          <p>
            {" "}
            The duration of this middle-stage continues depending on heredity
            and overall health and wellbeing, plus stress-levels and even
            environmental impacts (eg water-quality and air pollution levels!)
            Incidentally, if you become a mother, you might also notice some
            post-partum hair-falling as well, but, don’t worry! Our specialised
            team are ready to help you restore your hair with our expect advice
            and world-class treatment options.{" "}
          </p>
        </div>
        <img src={pattern} alt="" />
      </div>
      <div>
        <img src={doctor} alt="" />
        <div className="content">
          <p>
            The third and final stage of hair thickness and consistency can
            appear almost overnight and can take some women a little by
            surprise. You might notice (for example, in a hairdresser’s mirror)
            that, from behind, the volume of hair has started to diminish
            (usually from around the mid-40s onwards.) Obviously, the age-ranges
            for these changes can vary greatly and extenuating circumstances
            (such as kidney health, for example) can also impact on hair growth
            and quality. Culturally, in many locations, female-identified
            individuals sometimes feel societal pressure to maintain long,
            flowing locks as a sign of wellbeing and even status. This is why a
            gentle approach is key to unlocking the best way to treat your
            hair-needs at every stage of the lifespan.
          </p>
          <p>
            {" "}
            At Naveen Superspeciality Hospital, we listen. We care. We take your
            hair seriously and we want you to feel at your best in every
            situation.{" "}
          </p>
          <p>
            {" "}
            We’re also aware that mitigating circumstances such as
            traction-alopecia (from wearing braids/hair extensions) can impact
            on your hair’s ability to rejuvenate itself, given the right
            treatment approach and state-of-the-art techniques.{" "}
          </p>
        </div>
      </div>
      <div>
        <div className="content">
          <h1>Female Hair Loss Treatment</h1>
          <p>
            We listen to your concerns about how lifestyle, stress, even the
            environment plus normal hormonal changes over the lifespan can
            deeply impact your hair. This is where our friendly team at naveenhfc (Naveen
            Superspeciality Hospital) are ready to step in and help maximise your
            hair’s potential! Why wait? Pick up the phone or drop us a line. We
            can’t wait to hear from you!
          </p>
        </div>
        <img src={hair} alt="" />
      </div>
      <div className="pattern">
        <h1>Stages of hair loss in women</h1>
        <img src={patter0} alt="" />
      </div>
      <div>
        <img src={doctor0} alt="" />
        <div className="content">
          <h1>Women Hair Loss Treatment</h1>
          <p>
            Trichologists are working daily to devise new ways to treat women’s
            hair loss. We are across the latest in industry best-practices and
            our professional advice is second-to-none. This is why naveenhfc (Naveen
            Superspeciality Hospital) are your one-stop-shop for treating women’s
            hair loss. Our experienced and friendly team are also discreet; we
            respect your privacy and we understand that this can be an
            experience requiring a gentle approach.
          </p>
          <p>
            This is why our reputation is growing so quickly as being the
            best-of-the-best; we genuinely care about how you feel, every step
            of the way, plus, we focus on results! You will feel immediately at
            ease in our presence so make an appointment and find out why naveenhfc (Naveen
            Superspeciality Hospital) is the industry-leader!
          </p>
        </div>
      </div>
    </div>
  );
}

export default FemaleHairLoss;
