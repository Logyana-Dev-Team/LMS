import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

const isMobile = window.orientation > -1;
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function CareerContent() {
  return (
    <div class="mdk-header-layout__content page-content ">
      <div class="page-section">
        <div class="container page__container">
          <div class="page-headline text-center mt-5">
            <h2>A Glimpse of What We're Building</h2>
            <h4>Placed Students</h4>
          </div>

          <div className="swiper-wrapper margintop-swiper">
            <Swiper
              slidesPerView={isMobile ? 1 : 5}
              loopFillGroupWithBlank={true}
              navigation={{
                nextEl: `#prev`,
                prevEl: `#next`,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              <SwiperSlide style={{ margin: "0 15px" }}>
                <div className="swiper-slide overflow-hidden mx-2">
                  <div className="portfolio-box text-center">
                    <div className="">
                      <a href="#swiper">
                        <img
                          src="../../assets/images/students/Priya Sunny.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="portfolio-caption padding-30px-tb">
                      <a
                        href="#swiper"
                        className="alt-font text-extra-dark-gray font-weight-500 text-uppercase"
                      >
                        Priya Sunny
                      </a>
                      {/* <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">B.Tech Biotechnology</span>*/}
                      <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">
                        <img
                          src="../assets/images/logos/PAREXEL 1.png"
                          className="img-height"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide style={{ margin: "0 15px" }}>
                <div className="swiper-slide overflow-hidden mx-2">
                  <div className="portfolio-box text-center">
                    <div className="">
                      <a href="#swiper">
                        <img
                          src="../../assets/images/students/Anupama Kurle.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="portfolio-caption padding-30px-tb">
                      <a
                        href="#swiper"
                        className="alt-font text-extra-dark-gray font-weight-500 text-uppercase"
                      >
                        Anupama Kurle
                      </a>

                      <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">
                        <img
                          src="../assets/images/logos/Forte.jpeg"
                          className="img-height"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ margin: "0 15px" }}>
                <div className="swiper-slide overflow-hidden mx-2">
                  <div className="portfolio-box text-center">
                    <div className="">
                      <a href="#swiper">
                        <img
                          src="../../assets/images/students/Swathi N.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="portfolio-caption padding-30px-tb">
                      <a
                        href="#swiper"
                        className="alt-font text-extra-dark-gray font-weight-500 text-uppercase"
                      >
                        Swathi N
                      </a>

                      <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">
                        <img
                          src="../assets/images/logos/Forte.jpeg"
                          className="img-height"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ margin: "0 15px" }}>
                <div className="swiper-slide overflow-hidden mx-2">
                  <div className="portfolio-box text-center">
                    <div className="">
                      <a href="#swiper">
                        <img
                          src="../../assets/images/students/Pradeeksha.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="portfolio-caption padding-30px-tb">
                      <a
                        href="#swiper"
                        className="alt-font text-extra-dark-gray font-weight-500 text-uppercase"
                      >
                        Pradeeksha
                      </a>

                      <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">
                        <img
                          src="../assets/images/logos/COVANCE 1.jpg"
                          className="img-height"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ margin: "0 15px" }}>
                <div className="swiper-slide overflow-hidden mx-2">
                  <div className="portfolio-box text-center">
                    <div className="">
                      <a href="#swiper">
                        <img
                          src="../../assets/images/students/Elavarasi M.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="portfolio-caption padding-30px-tb">
                      <a
                        href="#swiper"
                        className="alt-font text-extra-dark-gray font-weight-500 text-uppercase"
                      >
                        Elavarasi M
                      </a>

                      <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">
                        <img
                          src="../assets/images/logos/Forte.jpeg"
                          className="img-height"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ margin: "0 15px" }}>
                <div className="swiper-slide overflow-hidden mx-2">
                  <div className="portfolio-box text-center">
                    <div className="">
                      <a href="#swiper">
                        <img
                          src="../../assets/images/students/Neelima Pinapati.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="portfolio-caption padding-30px-tb">
                      <a
                        href="#swiper"
                        className="alt-font text-extra-dark-gray font-weight-500 text-uppercase"
                      >
                        Neelima Pinapati
                      </a>

                      <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">
                        <img
                          src="../assets/images/logos/IQVIA.png"
                          className="img-height"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ margin: "0 15px" }}>
                <div className="swiper-slide overflow-hidden mx-2">
                  <div className="portfolio-box text-center">
                    <div className="">
                      <a href="#swiper">
                        <img
                          src="../../assets/images/students/Maanya K.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="portfolio-caption padding-30px-tb">
                      <a
                        href="#swiper"
                        className="alt-font text-extra-dark-gray font-weight-500 text-uppercase"
                      >
                        Maanya K
                      </a>

                      <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">
                        <img
                          src="../assets/images/logos/PAREXEL 1.png"
                          className="img-height"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ margin: "0 15px" }}>
                <div className="swiper-slide overflow-hidden mx-2">
                  <div className="portfolio-box text-center">
                    <div className="">
                      <a href="#swiper">
                        <img
                          src="../../assets/images/students/Dr. S.R Sadiya Pervaze.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="portfolio-caption padding-30px-tb">
                      <a
                        href="#swiper"
                        className="alt-font text-extra-dark-gray font-weight-500 text-uppercase"
                      >
                        Dr. S.R Sadiya Pervaze
                      </a>

                      <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">
                        <img
                          src="../assets/images/logos/IQVIA.png"
                          className="img-height"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ margin: "0 15px" }}>
                <div className="swiper-slide overflow-hidden mx-2">
                  <div className="portfolio-box text-center">
                    <div className="">
                      <a href="#swiper">
                        <img
                          src="../../assets/images/students/Smitha B R.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="portfolio-caption padding-30px-tb">
                      <a
                        href="#swiper"
                        className="alt-font text-extra-dark-gray font-weight-500 text-uppercase"
                      >
                        Smitha B R
                      </a>

                      <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">
                        <img
                          src="../assets/images/logos/IQVIA.png"
                          className="img-height"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ margin: "0 15px" }}>
                <div className="swiper-slide overflow-hidden mx-2">
                  <div className="portfolio-box text-center">
                    <div className="">
                      <a href="#swiper">
                        <img
                          src="../../assets/images/students/Nimna.RS.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="portfolio-caption padding-30px-tb">
                      <a
                        href="#swiper"
                        className="alt-font text-extra-dark-gray font-weight-500 text-uppercase"
                      >
                        Nimna R S
                      </a>

                      <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">
                        <img
                          src="../assets/images/logos/IQVIA.png"
                          className="img-height"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ margin: "0 15px" }}>
                <div className="swiper-slide overflow-hidden mx-2">
                  <div className="portfolio-box text-center">
                    <div className="">
                      <a href="#swiper">
                        <img
                          src="../../assets/images/students/Dr. Anagha Pradeep Data.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="portfolio-caption padding-30px-tb">
                      <a
                        href="#swiper"
                        className="alt-font text-extra-dark-gray font-weight-500 text-uppercase"
                      >
                        Dr. Anagha Pradeep Datar
                      </a>

                      <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">
                        <img
                          src="../assets/images/logos/"
                          className="img-height"
                          alt=""
                        />
                        CogScentia
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ margin: "0 15px" }}>
                <div className="swiper-slide overflow-hidden mx-2">
                  <div className="portfolio-box text-center">
                    <div className="">
                      <a href="#swiper">
                        <img
                          src="../../assets/images/students/Devnandan Shaw.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="portfolio-caption padding-30px-tb">
                      <a
                        href="#swiper"
                        className="alt-font text-extra-dark-gray font-weight-500 text-uppercase"
                      >
                        Devnandan Shaw
                      </a>

                      <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">
                        <img
                          src="../assets/images/logos/Nethradhama.jpeg"
                          className="img-height"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ margin: "0 15px" }}>
                <div className="swiper-slide overflow-hidden mx-2">
                  <div className="portfolio-box text-center">
                    <div className="">
                      <a href="#swiper">
                        <img
                          src="../../assets/images/students/Talluri Pratyusha.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="portfolio-caption padding-30px-tb">
                      <a
                        href="#swiper"
                        className="alt-font text-extra-dark-gray font-weight-500 text-uppercase"
                      >
                        Talluri Pratyusha
                      </a>

                      <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">
                        <img
                          src="../assets/images/logos/PAREXEL 1.png"
                          className="img-height"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ margin: "0 15px" }}>
                <div className="swiper-slide overflow-hidden mx-2">
                  <div className="portfolio-box text-center">
                    <div className="">
                      <a href="#swiper">
                        <img
                          src="../../assets/images/students/Chaithrashree G S.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="portfolio-caption padding-30px-tb">
                      <a
                        href="#swiper"
                        className="alt-font text-extra-dark-gray font-weight-500 text-uppercase"
                      >
                        Chaithrashree G S
                      </a>

                      <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">
                        <img
                          src="../assets/images/logos/Nethradhama.jpeg"
                          className="img-height"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ margin: "0 15px" }}>
                <div className="swiper-slide overflow-hidden mx-2">
                  <div className="portfolio-box text-center">
                    <div className="">
                      <a href="#swiper">
                        <img
                          src="../../assets/images/students/Gaddam Chandra kiran.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="portfolio-caption padding-30px-tb">
                      <a
                        href="#swiper"
                        className="alt-font text-extra-dark-gray font-weight-500 text-uppercase"
                      >
                        Gaddam Chandra kiran
                      </a>

                      <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">
                        <img
                          src="../assets/images/logos/eye-hospital.jpeg"
                          className="img-height"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div
              id="prev"
              className="swiper-button-next-nav swiper-button-next rounded-circle light slider-navigation-style-07 box-shadow-double-large"
            >
              <i class="fas fa-arrow-right"></i>
            </div>
            <div
              id="next"
              className="swiper-button-previous-nav swiper-button-prev rounded-circle light slider-navigation-style-07 box-shadow-double-large"
            >
              <i class="fas fa-arrow-left"></i>
            </div>
          </div>

          <div class="page-headline text-center mt-5">
            <h2>Career Insights</h2>
            <h4>
              Opportunities don't{" "}
              <span style={{ color: "#007bff" }}>happen</span> you{" "}
              <span style={{ color: "#007bff" }}>create</span> them.
            </h4>
          </div>

          <div class="accordion js-accordion accordion--boxed" id="parent">
            <div class="accordion__item">
              <a
                href="#accordian"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-1"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  Careers In Clinical Research
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-1">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    India is evolving in many phases to run the race in the
                    world; and Clinical Research is one such phase where India
                    is making remarkable development and growth. India has been
                    involved in clinical research for the past many years and is
                    now on its way to becoming a major focus for it. The billion
                    dollar industry is already witnessing high demand for
                    qualified professionals. Indian pharmaceutical industry is
                    one of the fastest growing sectors of the Indian economy and
                    has made rapid strides over the years. There is a massive
                    need for clinical research professionals in this
                    fast-growing field. Clinical research makes an interesting
                    career option with a great scope for professional growth. To
                    build a career in clinical research, basic education in this
                    field is necessary and a good hands on is the need. <br />
                    <br /> By 2020, the Indian pharma market is expected to rank
                    among the global top three by increasing growth and is
                    supposed to be the 6th largest market in the world with
                    respect to absolute size. <br /> <br /> The term clinical
                    trial refers to the entire record of any test article from
                    its initiation in the lab to its introduction to the market
                    and beyond. Once the promising molecule is identified in the
                    lab, it is subjected to more per-clinical studies to get an
                    idea about different aspects of the test article. Clinical
                    research is often conducted at academic medical centers and
                    recognized research centers. <br />
                    <br /> Many believe that informed consent makes clinical
                    research ethical. However, informed consent is not
                    sufficient. Drawing on the basic philosophies there are some
                    requirements that systematically explain a logical framework
                    for evaluating the ethics of clinical research studies. The
                    requirements are universal and they must be adapted to the
                    various fields in which clinical research is conducted.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion__item">
              <a
                href="#accordion"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-2"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  Clinical Research Associate (CRA)
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-2">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    Clinical Research Associate (CRA) is a health-care
                    professional who performs activities related to clinical
                    trials. They are the soul in the field of Clinical Research.
                    The experts find their place in various organizations such
                    as pharmaceutical companies, medical research institutes and
                    government agencies. Depending on the organization’s
                    policies different education and certification requirements
                    may be necessary to practice as a Clinical Research
                    Associate.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion__item">
              <a
                href="#accordion"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-3"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  Clinical Data Management (CDM)
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-3">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    Clinical Data Management (CDM) is a critical phase in
                    clinical research. CDM leads to generation of superior
                    quality, dependable, and statistically well informed data
                    from clinical trials. The ultimate goal of CDM is to assure
                    a well maintained data support conclusions drawn from
                    research and thus achieving this goal protects public health
                    and creates confidence in the world of therapeutics.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion__item">
              <a
                href="#accordion"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-4"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  Clinical Research Organisation (CRO)
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-4">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    A CRO landscape is vast; using a CRO’s expertise you can
                    maximize the efficiency of your clinical trials, but only if
                    you choose the right one for the project at hand.Typically,
                    a CRO will organize and conduct clinical trials to check the
                    test molecule in humans. As independent companies, they
                    offer an objective assessment of a new drug in the clinical
                    setting and since they partner with many companies,
                    typically provide broader experience.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion__item">
              <a
                href="#accordion"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-5"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  Key Cities in India for Clinical Research
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-5">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    Delhi & NCR Region
                    <br /> Mumbai
                    <br /> Pune
                    <br /> Ahmedabad
                    <br /> Vadodara
                    <br /> Hyderabad
                    <br /> Bangalore
                    <br /> Chennai
                    <br /> Chandigarh, Bhopal, Indore, Coimbatore and Vizag are
                    emerging as new centres for clinical trials.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion__item open">
              <a
                href="#accordion"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-6"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  Advantages Of Taking up Clinical Research As a Career
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-6">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    Recession proof Industry <br /> Huge Demand & Supply Gap
                    <br /> White Collared, Knowledge Intensive Job <br /> Good
                    Career Prospects
                    <br /> Quick money
                    <br /> National & International Travel
                    <br /> Cross-cultural Exposure
                    <br /> Increased Contacts, Marketability
                    <br /> Understanding of Drugs, Diseases & Management
                    <br />
                    Research, Documentation, Paper Work
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="page-headline text-center mt-5">
            <h2>FAQ</h2>
          </div>

          <div
            class="accordion js-accordion accordion--boxed list-group-flush"
            id="parent"
            data-domfactory-upgraded="accordion"
          >
            <div class="accordion__item open">
              <a
                href="#accordian"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-7"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  Who can take OET?
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-7">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    OET has been developed specifically for 12 healthcare
                    professions: Dentistry, Dietetics, Medicine, Nursing,
                    Occupational Therapy, Optometry, Pharmacy, Physiotherapy,
                    Podiatry, Radiography, Speech Pathology and Veterinary
                    Science. OET is accepted as proof of English proficiency for
                    visas, study, registration and employment in healthcare.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion__item">
              <a
                href="#accordion"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-8"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  How is the test scored?
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-8">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    You will receive a Statement of Results which shows your
                    score for each of the four sub-tests, on a scale from 0 to
                    500. Each of the four sub-tests is assessed in a specific
                    way.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion__item">
              <a
                href="#accordion"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-9"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  Listening and Reading
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-9">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    Your answer booklets for Listening Part A and for Reading
                    Part A are marked by trained OET Assessors. These answer
                    booklets are assigned to OET Assessors at random to avoid
                    any conflict of interest. Your answer booklets for Reading
                    and Listening Parts B and C are computer scanned and
                    automatically scored. Listening and Reading Assessors use a
                    detailed marking guide which sets out which answers receive
                    marks and how the marks are counted. Assessors use this
                    guide to decide for each question whether you have provided
                    enough correct information to be given the mark or marks
                    available. Assessors are monitored for accuracy and
                    consistency, and your Part A answers are marked by at least
                    two different assessors.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion__item">
              <a
                href="#accordion"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-10"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  Writing and Speaking
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-10">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    Your performances on the Writing and Speaking sub-tests are
                    each rated by at least two trained Assessors. Audio files
                    and scripts are assigned to Assessors at random to avoid any
                    conflict of interest. Your test-day Interlocutor is not
                    involved in the assessment process. Writing and Speaking
                    Assessors are monitored for accuracy and consistency, and
                    the scores they award are adjusted to take into account any
                    leniency or severity. If two Assessors award different
                    scores to your performance, your script and/or audio file
                    will be referred to at least one other senior Assessor not
                    previously involved in your assessment.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion__item">
              <a
                href="#accordion"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-11"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  For the Writing sub-test
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-11">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    Each Assessor scores your performance according to five
                    criteria: Overall Task Fulfilment, Appropriateness of
                    Language, Comprehension of Stimulus, Linguistic Features
                    (Grammar and Cohesion), and Presentation Features (Spelling,
                    Punctuation, and Layout). The five criteria are assessed on
                    a scale from 0 to 6 and are equally weighted. A score of 350
                    (previously grade B) for Writing requires a high level of
                    performance on all five criteria.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion__item open">
              <a
                href="#accordion"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-12"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  For the Speaking sub-test
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-12">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    Each Assessor scores your performance according to nine
                    criteria. The four linguistically-oriented criteria are
                    Intelligibility, Fluency, Appropriateness of Language, and
                    Resources of Grammar and Expression. They are assessed on a
                    scale from 0 to 6. Clinical communication criteria include
                    Indicators of Relationship Building, Indicators of
                    Understanding & Incorporating the Patient’s Perspective,
                    Indicators of Providing Structure, Indicators for
                    Information Gathering and Indicators for Information Giving.
                    They are assessed on a scale from 0 to 3. A high level of
                    performance on all nine criteria is required in order to
                    achieve a score of 350 (previously grade B) on the speaking
                    test.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="page-headline text-center mt-5">
            <h2>FAQ for all Courses</h2>
          </div>
          <h4>PG Diploma in Clinical Research</h4>
          <div
            class="accordion js-accordion accordion--boxed list-group-flush"
            id="parent"
            data-domfactory-upgraded="accordion"
          >
            <div class="accordion__item open">
              <a
                href="#accordian"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-7"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  What will I learn if I take up this course?
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-7">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    The PG Diploma Clinical Research in Bangalore programme will
                    help the life science and health science graduates to learn
                    about the life cycle of a drug and provide an understanding
                    on the process involved in the movement of a drug from the
                    bench side to the bedside.
                    <br />
                    <br />
                    It will also give an insight into clinical trial approval
                    processes, marketing approval processes and about the
                    different regulatory authorities pertaining to product
                    registration across the globe.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion__item">
              <a
                href="#accordion"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-8"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  Is this program right for me?
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-8">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    If you are passionate about working with clinical data and
                    looking forward to work in Site Management Organisations
                    (SMOs), Contract Research Organisations (CROs),
                    Pharmaceutical Companies and MNCs, ACRI’s PG Diploma
                    Clinical Research in Bangalore course is the right choice.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion__item">
              <a
                href="#accordion"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-9"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  Who can apply?
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-9">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    <ul style={{ listStyle: "inside" }}>
                      <li>
                        MBBS/BHMS/BAMS/BPT/MPT/BDS/BMLT/Bachelor in Naturopathy
                        & Veterinary Science /MD/MS.
                      </li>
                      <li>
                        Graduate/Postgraduate degree in Pharmacy/ Pharmaceutical
                        Sciences.
                      </li>
                      <li>
                        Graduate/Postgraduate degree in Life Sciences (Botany,
                        Zoology, Biochemistry, Microbiology, Genetics,
                        Biotechnology).
                      </li>
                      <li>
                        Graduate/Postgraduate degree in Chemistry/Biostatistics/
                        Bioinformatics.
                      </li>
                      <li>
                        Graduate or equivalent degree in Nursing/Allied Health.
                      </li>
                      <li>
                        Students in their final year of graduation for the above
                        courses may also apply.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion__item">
              <a
                href="#accordion"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-10"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  What are the job opportunities for clinical research?
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-10">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    <ul style={{ listStyle: "inside" }}>
                      <li>
                        The PG Diploma Clinical Research in Bangalore programme
                        will give an opportunity to work in Multinational
                        Companies.
                      </li>
                      <li>
                        Students can get engaged in different profiles like
                      </li>
                      <li>Clinical Trial Analyst</li>
                      <li>Clinical Trial Assistant</li>
                      <li>Clinical Research Co-Ordinator</li>
                      <li>Clinical Research Associate</li>
                      <li>Quality Control</li>
                      <li>Quality Analyst</li>
                      <li>Principal Investigator</li>
                      <li>Sub-Investigator</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <h4>PG Diploma In Clinical Data Management</h4>
            <div class="accordion__item">
              <a
                href="#accordion"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-11"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  What will I learn if I take up this course?
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-11">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    This PG Diploma in Clinical Research Bangalore programme
                    will help the life science graduates to learn about how the
                    massive amount of clinical data are managed and validated.
                    <br />
                    <br />
                    It will give an insight on various processes involved in
                    Clinical Data Management.
                    <br />
                    <br />
                    Give students an experience on how to manage the data
                    utilizing different softwares like Rave, Oracle, Inform etc.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion__item open">
              <a
                href="#accordion"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-12"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  Is this program right for me?
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-12">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    If you are a science graduate and looking forward to work in
                    an MNC sticking to your core side, widening your
                    opportunities to be placed, then ACRI’s course of PG Diploma
                    Clinical Research in Bangalore is the right choice.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion__item open">
              <a
                href="#accordion"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-13"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  Who can apply?
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-13">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    Applicants are recommended to have one of the following
                    Graduate/Postgraduate degree in Life Sciences (Botany,
                    Zoology, Biochemistry, Microbiology, Genetics, and
                    Biotechnology).
                    <br />
                    <br />
                    Graduate/Postgraduate degree in Chemistry/Biostatistics/
                    Bioinformatics.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion__item open">
              <a
                href="#accordion"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-14"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  What are the job opportunities for Clinical Data Management?
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-14">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    <ul style={{ listStyle: "inside" }}>
                      <li>Data Entry Operator</li>
                      <li>Associate Clinical Data Co-Ordinator</li>
                      <li>Data Validator</li>
                      <li>Medical Coder</li>
                      <li>Data Manager</li>
                      <li>Clinical Data Analyst</li>
                      <li>Clinical Data Programmer</li>
                      <li>Clinical Data Manager I</li>
                      <li>Clinical Data Manager II</li>
                      <li>Principal Clinical Data Manager</li>
                      <li>Manager, Clinical Data Management</li>
                      <li>Group Manager, Clinical Data Management</li>
                      <li>Associate Director, Clinical Data Management</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <h4>Advanced PG Diploma in Clinical Research</h4>
            <h5 className="text-muted">
              Pharmacovigilance – an evergreen industry.
            </h5>
            <div class="accordion__item">
              <a
                href="#accordion"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-15"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  What will I learn if I take up this course?
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-15">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    The Pharmacovigilance (Advanced PG Diploma in Clinical
                    Research) will provide a foundation in pharmacovigilance
                    principles and operations. Having a curriculum that's fully
                    reviewed by industry professionals, this course will prepare
                    aspirants of the pharmacovigilance sector both within and
                    outside the pharmaceutical industry.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion__item">
              <a
                href="#accordion"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-16"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  Is this program right for me?
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-16">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    If you are a Health science graduate and looking forward to
                    work in an MNC, and eager to get knowledge in various real
                    life cases and hands – on software training, then
                    ACRI’s&nbsp;
                    <span className="fw-bold">
                      Post Graduate Diploma in Clinical Research
                    </span>
                    &nbsp;is absolutely for you!
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion__item">
              <a
                href="#accordion"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-17"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  Who Can Apply?
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-17">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    The basic minimum qualifications for fitting to a
                    pharmacovigilance career include undergraduate and/or
                    graduate degrees in human (MBBS, BDS) and veterinary (BVSC)
                    medicine, BAMS, BUMS, pharmacy (B.Pharm), nursing (BS) or
                    allied health sciences (BSc); after which a course in&nbsp;
                    <span className="fw-bold">
                      Post Graduate Diploma in Clinical Research
                    </span>
                    &nbsp;can be applied for.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion__item">
              <a
                href="#accordion"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-18"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  What are the Job Opportunities after doing the
                  Pharmacovigilance course?
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-18">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    The jobs in the pharmacovigilance domain are being offered
                    by pharmaceutical companies, CROs, IT firms (BPOs/KPOs) and
                    consulting firms. The national or regional pharmacovigilance
                    centers and hospitals will also be offering jobs in the long
                    run as the pharmacovigilance network develops further.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion__item">
              <a
                href="#accordion"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-19"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  What are the Job Opportunities after doing the
                  Pharmacovigilance course?
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-19">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    <ul style={{ listStyle: "inside" }}>
                      <li>Drug Safety Associate</li>
                      <li>Drug Safety Physician</li>
                      <li>Medical Reviewer</li>
                      <li>Medical Coder</li>
                      <li>Quality Analyst</li>
                      <li>Narrative Writer</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
