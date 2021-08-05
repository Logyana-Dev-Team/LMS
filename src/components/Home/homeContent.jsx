import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

//import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Content() {
  const [name, setName] = useState("");
  const [emailid, setEmailid] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [enquirymsg, setEnquirymsg] = useState("");
  return (
    <div>
      <section className="p-0 parallax" data-parallax-background-ratio="0.3">
        <div className="container-fluid position-relative">
          <div className="row full-screen md-h-800px sm-h-500px">
            <div className="col-12 col-xl-5 offset-lg-1 col-lg-6 col-md-8 col-sm-10 d-flex flex-column justify-content-center md-padding-35px-left xs-padding-15px-left">
              <h3 className="alt-font text-extra-dark-gray font-weight-600 letter-spacing-minus-2px w-80 xl-w-100 margin-twelve-bottom sm-margin-30px-bottom">
                True Lessons
                <br />
                Because Blended Learning Makes the New Professional{" "}
              </h3>
              <div className="d-inline-block">
                <a
                  href="/register"
                  className="btn section-link btn-fancy btn-large btn-round-edge btn-primary margin-35px-right xs-margin-20px-bottom"
                >
                  Register Now
                </a>
                <a
                  href="tel:+7776972451"
                  className="btn section-link btn-fancy btn-large btn-round-edge btn-primary margin-35px-right xs-margin-20px-bottom"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-dentist big-section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-xl-6 col-lg-5 col-md-10 md-margin-5-rem-bottom">
              <div className="position-relative w-95 md-w-100">
                <img
                  className="border-radius-10px"
                  src="../../assets/images/home-dentist-img-01.jpg"
                  alt=""
                />
                <a
                  href="https://www.youtube.com/channel/UCVD6JlUI5Hg1eN9Aoanp7fg"
                  target="_blank"
                  className="popup-youtube absolute-middle-center video-icon-box video-icon-extra-large"
                  rel="noreferrer"
                >
                  <span>
                    <span className="video-icon bg-white box-shadow-large">
                      <i className="feather icon-feather-play icon-very-medium text-primary"></i>
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-12 col-xl-5 col-lg-6 offset-lg-1 text-center text-lg-left">
              <img
                className="margin-50px-bottom"
                src="../../assets/images/home-dentist-icon-01.png"
                alt=""
              />

              <p className="w-90 d-inline-block">
                True Lessons: the perfect blend of specialized courses. Life
                Sciences, Healthcare, Research and Career Development through
                integrated Language training.
              </p>
              <a
                href="/about"
                className="btn btn-fancy btn-large btn-round-edge btn-primary margin-20px-top"
              >
                About Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="half-section border-bottom border-color-medium-gray">
        <div className="container">
          <div className="col-md-12 text-center margin-seven-bottom">
            <h6 className="alt-font text-extra-dark-gray font-weight-500">
              Our Accomplishments
            </h6>
          </div>
          <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-2 justify-content-center">
            <div
              className="col md-margin-40px-bottom xs-margin-35px-bottom wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <div className="feature-box feature-box-left-icon last-paragraph-no-margin">
                <div className="feature-box-icon line-height-0px">
                  <img
                    className="embed-responsive-item"
                    src={
                      process.env.PUBLIC_URL + "../../assets/images/1500.png"
                    }
                    alt=""
                  />
                  {/* <img className="embed-responsive-item" src="../../assets/images/1500+.png" alt="" /> */}
                </div>
              </div>
            </div>

            <div
              className="col md-margin-40px-bottom xs-margin-35px-bottom wow animate__fadeIn"
              data-wow-delay="0.4s"
            >
              <div className="feature-box feature-box-left-icon last-paragraph-no-margin">
                <div className="feature-box-icon line-height-0px">
                  <img
                    className="embed-responsive-item"
                    src={process.env.PUBLIC_URL + "../../assets/images/50.png"}
                    alt=""
                  />

                  {/* <img className="embed-responsive-item" src="../../assets/images/50+.png" alt=""/> */}
                </div>
              </div>
            </div>

            <div className="col wow animate__fadeIn" data-wow-delay="0.6s">
              <div className="feature-box feature-box-left-icon last-paragraph-no-margin">
                <div className="feature-box-icon line-height-0px">
                  <img
                    className="embed-responsive-item"
                    src="../../assets/images/100.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="big-section pb-0">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center margin-five-bottom">
              <h6 className="alt-font text-extra-dark-gray font-weight-500">
                Featured Courses
              </h6>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-xl-4 row-cols-sm-2">
            <div
              className="col cover-background h-650px px-0 lg-no-margin md-h-500px xs-h-450px wow animate__slideInUp bg1"
              data-wow-delay="0.1s"
            >
              <div className="opacity-medium-2 bg-extra-dark-gray"></div>
              <div className="d-flex flex-column h-100 padding-5-rem-all text-center position-relative z-index-1 xl-padding-3-rem-lr lg-padding-8-rem-lr">
                <a href="/clinical">
                  <h4 className="alt-font font-weight-600 text-white text-uppercase mb-0 mt-auto letter-spacing-minus-1px">
                    <span>Clinical</span> <span>Research</span>{" "}
                    <span>Courses</span>
                  </h4>
                </a>
                <a
                  href="/clinical"
                  class="btn btn-fancy btn-small btn-round-edge btn-primary align-self-center margin-10px-top"
                >
                  {/* <i class="fas fa-arrow-right icon-very-small text-white"></i> */}
                  Know More
                </a>
                {/* <div className="d-flex flex-column h-100 justify-content-start padding-5-rem-tb padding-6-rem-lr text-center position-relative z-index-1 xl-padding-3-rem-lr lg-padding-8-rem-lr">
                        
                            <a href="/clinical" className="btn btn-fancy btn-small btn-round-edge btn-primary align-self-center margin-10px-top">Know More</a>
                      
                       </div> */}
              </div>
            </div>

            <div
              className="col cover-background h-650px px-0 md-h-500px xs-h-450px wow animate__slideInUp bg2"
              data-wow-delay="0.2s"
            >
              <div className="d-flex flex-column h-100 justify-content-start padding-6-rem-all text-center position-relative z-index-1 xl-padding-2-half-rem-lr lg-padding-8-rem-lr md-padding-5-rem-lr">
                <p className="text-white">
                  Spearheading supreme Clinical Research in India from 2010 with
                  a towering track record and apex faculty.
                </p>
                <a
                  href="/contact"
                  className="btn btn-fancy btn-small btn-round-edge btn-primary align-self-center margin-10px-top"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div
              className="col cover-background h-650px px-0 lg-no-margin md-h-500px xs-h-450px wow animate__slideInUp bg3"
              data-wow-delay="0.3s"
            >
              <div className="opacity-medium-2 bg-extra-dark-gray"></div>
              <div className="d-flex word-break flex-column h-100 padding-5-rem-all text-center position-relative z-index-1 xl-padding-3-rem-lr lg-padding-8-rem-lr">
                <a href="/career">
                  <h4 className="alt-font font-weight-600 text-white text-uppercase mb-0 mt-auto letter-spacing-minus-1px">
                    <span>Career</span> <span>Development</span>{" "}
                    <span>Courses</span>
                  </h4>
                </a>
                <a
                  href="/career"
                  class="btn btn-fancy btn-small btn-round-edge btn-primary align-self-center margin-10px-top"
                >
                  {/* <i class="fas fa-arrow-right icon-very-small text-white"></i> */}
                  Know More
                </a>
                {/* <div className="d-flex flex-column h-100 justify-content-start padding-5-rem-tb padding-6-rem-lr text-center position-relative z-index-1 xl-padding-3-rem-lr">
                            
                             <a href="/career" className="btn btn-fancy btn-small btn-round-edge btn-primary align-self-center margin-10px-top">Know More</a>
                        </div> */}
              </div>
            </div>

            <div
              className="col cover-background h-650px px-0 md-h-500px xs-h-450px wow animate__slideInUp bg4"
              data-wow-delay="0.4s"
            >
              <div className="d-flex flex-column h-100 justify-content-start padding-5-rem-tb padding-6-rem-lr text-center position-relative z-index-1 xl-padding-3-rem-lr lg-padding-8-rem-lr">
                <p className="text-white">
                  Paving the way for proficient communicators since 2006.
                  <br />
                  <br />
                </p>
                <a
                  href="/contact"
                  className="btn btn-fancy btn-small btn-round-edge btn-primary align-self-center margin-10px-top"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="appointment" className="py-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-6 bg-light-iris-blue padding-10-rem-left padding-4-rem-tb d-flex flex-column justify-content-center xl-padding-15px-left md-padding-6-rem-all xs-padding-15px-lr wow animate__fadeIn">
              <div className="row justify-content-lg-center">
                <div className="col-12 col-xl-7 col-md-11 col-sm-10">
                  <h4 className="alt-font font-weight-600 letter-spacing-minus-1px text-extra-dark-gray margin-5-rem-bottom">
                    Why choose us?
                  </h4>
                  <ul className="list-style-06">
                    <li
                      className="margin-40px-bottom last-paragraph-no-margin d-flex align-items-center wow animate__fadeIn"
                      data-wow-delay="0.2s"
                    >
                      <div>
                        <span className="w-30px h-30px text-center bg-primary rounded-circle text-white margin-25px-right d-flex flex-column">
                          <i className="fas fa-check"></i>
                        </span>
                      </div>
                      <div>
                        <span className="alt-font text-extra-medium text-dark-charcoal font-weight-500 margin-5px-bottom d-block">
                          FIRST OF ITS KIND PLATFORM{" "}
                        </span>
                        <p>
                          With our self-designed, up-to-date industry-integrated
                          curriculum, along with technical and soft skills
                          training, we impart our students the best knowledge
                          while making them adroit with the latest technology.
                        </p>
                      </div>
                    </li>
                    <li
                      className="margin-40px-bottom last-paragraph-no-margin d-flex align-items-center wow animate__fadeIn"
                      data-wow-delay="0.4s"
                    >
                      <div>
                        <span className="w-30px h-30px text-center bg-primary rounded-circle text-white margin-25px-right d-flex flex-column">
                          <i className="fas fa-check"></i>
                        </span>
                      </div>
                      <div>
                        <span className="alt-font text-extra-medium text-dark-charcoal font-weight-500 margin-5px-bottom d-block">
                          ONE STEP AHEAD OF THE CURVE{" "}
                        </span>
                        <p>
                          Going above & beyond the call of duty has been our
                          forte, which is why we love launching our students’
                          careers with the kingpins of the industry. Our
                          placement record speaks for itself.{" "}
                        </p>
                      </div>
                    </li>
                    <li
                      className="margin-40px-bottom last-paragraph-no-margin d-flex align-items-center wow animate__fadeIn"
                      data-wow-delay="0.4s"
                    >
                      <div>
                        <span className="w-30px h-30px text-center bg-primary rounded-circle text-white margin-25px-right d-flex flex-column">
                          <i className="fas fa-check"></i>
                        </span>
                      </div>
                      <div>
                        <span className="alt-font text-extra-medium text-dark-charcoal font-weight-500 margin-5px-bottom d-block">
                          UNBROKEN GROWTH CULTURE{" "}
                        </span>
                        <p>
                          Right from our inception, we have upheld an
                          unrelenting growth culture. The True Lessons way of
                          life is only getting stronger by every passing day.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* api post request */}
            <div
              className="col-12 col-lg-6 bg-primary padding-10-rem-all xl-padding-8-rem-all lg-padding-6-rem-all xs-padding-15px-lr wow animate__fadeIn"
              data-wow-delay="0.5s"
            >
              <h3 className="alt-font text-white font-weight-600 margin-5-rem-bottom md-margin-25px-bottom">
                <span className="text-decoration-line-bottom-medium">
                  Reach Out To Us
                </span>{" "}
              </h3>
              <form method="post" class="alt-font text-extra-dark-gray">
                <input
                  class="input-border-bottom border-color-dark-white-transparent bg-transparent placeholder-light large-input text-white px-0 margin-25px-bottom border-radius-0px required"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  class="input-border-bottom border-color-dark-white-transparent bg-transparent placeholder-light large-input text-white px-0 margin-25px-bottom border-radius-0px required"
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  value={emailid}
                  onChange={(e) => setEmailid(e.target.value)}
                />

                <input
                  class="input-border-bottom border-color-dark-white-transparent bg-transparent placeholder-light large-input text-white px-0 margin-25px-bottom border-radius-0px"
                  type="tel"
                  name="phone"
                  placeholder="Mobile number"
                  value={mobileno}
                  maxLength="10"
                  onChange={(e) => setMobileno(e.target.value)}
                />

                <textarea
                  class="input-border-bottom border-color-dark-white-transparent bg-transparent placeholder-light large-input text-white px-0 margin-45px-bottom border-radius-0px"
                  rows="3"
                  placeholder="How can we help you?"
                  name="comment"
                  value={enquirymsg}
                  onChange={(e) => setEnquirymsg(e.target.value)}
                ></textarea>

                {/* <input type="hidden" name="redirect" value="" /> */}
                <button
                  class="btn btn-fancy btn-round-edge btn-large btn-white mb-0 submit"
                  type="submit"
                >
                  Submit
                </button>
                <div class="form-results d-none"></div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="big-section wow animate__fadeIn">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center margin-seven-bottom">
              <h6 className="alt-font text-extra-dark-gray font-weight-500">
                Students Testimonial
              </h6>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-xl-9 col-lg-8 col-md-9">
              <div className="swiper-simple-arrow-style-1">
                <div
                  className="swiper-container black-move"
                  data-slider-options='{ "loop": true, "slidesPerView": 1, "spaceBetween": 0, "observer": true, "observeParents": true, "keyboard": { "enabled": true, "onlyInViewport": true }, "autoplay": { "delay": 3000, "disableOnInteraction": false }, "effect": "slide" }'
                >
                  <div className="swiper-wrapper">
                    <Swiper
                      spaceBetween={30}
                      centeredSlides={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div className="swiper-slide text-center">
                          <div className="feature-box feature-box-left-icon-middle">
                            <div className="feature-box-icon margin-50px-right xs-margin-15px-right">
                              <img
                                className="rounded-circle w-180px h-180px sm-w-150px sm-h-150px xs-w-80px xs-h-80px"
                                src="../../assets/images/students/Shruthi BR.jpg"
                                alt=""
                              />
                            </div>
                            <div className="feature-box-content">
                              <p>
                                I wanted to take up an academic course in
                                Clinical Research after learning about the scope
                                it entails. But the question persisted; Where
                                from? I finally breathed a sigh of relief after
                                landing in ACRI! The amazing staff at the
                                institute is the reason I got to interview with
                                leading companies and I’m happy to be placed in
                                a top pharmaceutical company as a Drug Safety
                                Associate. Grateful to the wonderful people at
                                ACRI!
                              </p>
                              <div className="text-extra-dark-gray alt-font text-uppercase font-weight-600 line-height-20px">
                                Dr. Shruti B.R.
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide text-center">
                          <div className="feature-box feature-box-left-icon-middle">
                            <div className="feature-box-icon margin-50px-right xs-margin-15px-right">
                              <img
                                className="rounded-circle w-180px h-180px sm-w-150px sm-h-150px xs-w-80px xs-h-80px"
                                src="../../assets/images/students/sreelakshmi.jpg"
                                alt=""
                              />
                            </div>
                            <div className="feature-box-content">
                              <p>
                                I joined ACRI after completing my Bachelor’s in
                                Biotechnology. I felt a pressing need to gather
                                the right technical knowledge prior to joining
                                the industry. Hence, I joined the PG Diploma
                                course in Clinical Research. I have to say, it
                                was truly one of my best decisions as I got
                                placed in Accenture with the wonderful placement
                                support of the institute.
                              </p>
                              <div className="text-extra-dark-gray alt-font text-uppercase font-weight-600 line-height-20px">
                                Sreelakshmi Sathyakumar
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide text-center">
                          <div className="feature-box feature-box-left-icon-middle">
                            <div className="feature-box-icon margin-50px-right xs-margin-15px-right">
                              <img
                                className="rounded-circle w-180px h-180px sm-w-150px sm-h-150px xs-w-80px xs-h-80px"
                                src="../../assets/images/students/Poornima . H.D.jpg"
                                alt=""
                              />
                            </div>
                            <div className="feature-box-content">
                              <p>
                                Having joined ACRI in 2018, I have been subject
                                to a myriad of learning opportunities at the
                                institute. The staff at ACRI were always
                                supportive throughout my journey at the
                                institute. All the technical sessions coupled
                                with the PD ones really opened the right gates
                                for me. It is because of the institute’s
                                endeavour to provide excellent clinical research
                                education that I got placed at IQVIA. I would
                                recommend ACRI 10/10 for anyone that wants to
                                carve a niche for themselves in the clinical
                                research space.
                              </p>
                              <div className="text-extra-dark-gray alt-font text-uppercase font-weight-600 line-height-20px">
                                Purnima H.D.
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide text-center">
                          <div className="feature-box feature-box-left-icon-middle">
                            <div className="feature-box-icon margin-50px-right xs-margin-15px-right">
                              <img
                                className="rounded-circle w-180px h-180px sm-w-150px sm-h-150px xs-w-80px xs-h-80px"
                                src="../../assets/images/students/Anupama A Sattigeri.jpg"
                                alt=""
                              />
                            </div>
                            <div className="feature-box-content">
                              <p>
                                ACRI is the perfect institute for aspirants of
                                Life Sciences, Healthcare and Clinical Research
                                looking to further their careers in the field.
                                The courses offered at ACRI are comprehensive
                                and affordable. The staff, study material and
                                overall conduct of the institution is what makes
                                ACRI an ideal learning centre. Before joining
                                ACRI, I had been to a couple of Clinical
                                Research institutes only to see minimal
                                infrastructure and training staff at the time of
                                my visit. I highly recommend ACRI as I have
                                gotten placed in one of the best companies with
                                a handsome package.
                              </p>
                              <div className="text-extra-dark-gray alt-font text-uppercase font-weight-600 line-height-20px">
                                Dr. Anupama A Sattigeri
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide text-center">
                          <div className="feature-box feature-box-left-icon-middle">
                            <div className="feature-box-icon margin-50px-right xs-margin-15px-right">
                              <img
                                className="rounded-circle w-180px h-180px sm-w-150px sm-h-150px xs-w-80px xs-h-80px"
                                src="../../assets/images/students/Vyshnavi .M.jpg"
                                alt=""
                              />
                            </div>
                            <div className="feature-box-content">
                              <p>
                                ACRI is without a doubt the ideal institute to
                                enhance one’s path in the clinical research
                                field. Having opted for the three-months course,
                                I got to learn a great deal and the four modules
                                were perfectly segmented. Personality
                                development sessions gave my confidence an
                                instant boost and the aptitude tests prepared me
                                to tackle tricky maths. These efforts of the
                                institutes combined by mine led me to be placed
                                at Parexel, a leading CRO. ACRI has given me the
                                best learning experience and I would suggest any
                                aspirant planning to take up careers in Clinical
                                Research to give ACRI a shot.
                              </p>
                              <div className="text-extra-dark-gray alt-font text-uppercase font-weight-600 line-height-20px">
                                Vyshnavi M.
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="big-section wow animate__fadeIn">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center margin-seven-bottom">
              <h6 className="alt-font text-extra-dark-gray font-weight-500">
                Placement Partners
              </h6>
            </div>
            <div className="col-12">
              <div
                className="swiper-container text-center"
                data-slider-options='{ "slidesPerView": 1, "loop": true, "navigation": { "nextEl": ".swiper-button-next-nav", "prevEl": ".swiper-button-previous-nav" }, "autoplay": { "delay": 3000, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "1200": { "slidesPerView": 4 }, "992": { "slidesPerView": 3 }, "768": { "slidesPerView": 3 } } }'
              >
                <div className="swiper-wrapper">
                  <Swiper
                    slidesPerView={4}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img alt="" src="../../assets/images/c-l-1.jpg" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img alt="" src="../../assets/images/c-l-3.jpg" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img alt="" src="../../assets/images/c-l-4.jpg" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img alt="" src="../../assets/images/c-l-5.jpg" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img alt="" src="../../assets/images/c-l-6.jpg" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img alt="" src="../../assets/images/c-l-7.jpg" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img alt="" src="../../assets/images/c-l-8.jpg" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img alt="" src="../../assets/images/c-l-9.jpg" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img alt="" src="../../assets/images/c-l-10.jpg" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img alt="" src="../../assets/images/c-l-11.jpg" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img alt="" src="../../assets/images/c-l-12.jpg" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img alt="" src="../../assets/images/c-l-13.jpg" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img alt="" src="../../assets/images/c-l-14.jpg" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img alt="" src="../../assets/images/c-l-15.jpg" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <img alt="" src="../../assets/images/c-l-16.jpg" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>

              <div className="swiper-button-next-nav swiper-button-next rounded-circle light slider-navigation-style-07 box-shadow-double-large">
                <i className="feather icon-feather-arrow-right"></i>
              </div>
              <div className="swiper-button-previous-nav swiper-button-prev rounded-circle light slider-navigation-style-07 box-shadow-double-large">
                <i className="feather icon-feather-arrow-left"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
