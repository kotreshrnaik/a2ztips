import React from "react";

const TopMenuBar = () => {
  return (
    <div>
      {/* <!-- top-header start --> */}
      <div id="top-header" className="bg-primary">
        <div className="container">
          <div className="row ">
            <div className="col-md-3 align-self-center">
              <div className="text-center text-md-start p-1">
                <a href="mailto:a2zenglishtips@gmail.com">
                  <i className="fas fa-envelope-open-text"></i>{" "}
                  a2zenglishtips@gmail.com
                </a>
              </div>
            </div>
            <div className="col-md-2 align-self-center">
              <div className="text-center p-1">
                <a href="tel:09731564894">
                  <i className="fas fa-phone-volume"></i> +91 97315 64894
                </a>
              </div>
            </div>
            <div className="col-md-4 align-self-center">
              <ul className="d-flex list-unstyled mb-0 justify-content-center">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown button
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="javascript:void(0)"
                    id="social-media-dropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Social Media
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="social-media-dropdown"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://www.youtube.com/c/a2zenglishtips/"
                      >
                        Youtube
                      </a>
                    </li>

                    <li>
                      <a
                        className="dropdown-item"
                        href="https://www.facebook.com/english.tips.73157"
                      >
                        Facebook Page
                      </a>
                    </li>

                    <li>
                      <a
                        className="dropdown-item"
                        href="https://www.instagram.com/a2zenglishtips"
                      >
                        Instagram
                      </a>
                    </li>

                    <li>
                      <a
                        className="dropdown-item"
                        href="https://t.me/joinchat/eMVGpR68vzU3ZWY1"
                      >
                        Telegram
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="downloads-dropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-download"></i>
                    Competitive English
                  </a>
                  <ul
                    className="dropdown-menu mb-0 justify-content-center"
                    aria-labelledby="downloads-dropdown"
                  >
                    <li className="hover-me">
                      <a
                        className="dropdown-item"
                        href="<?= base_url(); ?>/downloads/english-grammar"
                      >
                        UPSC Compulsory English
                        <i className="fa fa-angle-right"></i>
                      </a>
                      <div className="sub-menu-2 dropend">
                        <ul>
                          <li>
                            <a href="/">Syllabus</a>
                          </li>
                          <li>
                            <a href="/">Books</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="<?= base_url(); ?>/downloads/spoken-english"
                      >
                        KAS Compulsory English
                      </a>
                    </li>

                    <li>
                      <a
                        className="dropdown-item"
                        href="<?= base_url(); ?>/downloads/parts-of-speech"
                      >
                        English for SSC, RRB & IBPS (NRA-CET)
                      </a>
                    </li>

                    <li>
                      <a
                        className="dropdown-item"
                        href="<?= base_url(); ?>/downloads/vocabulary"
                      >
                        English for CDS, NDA
                      </a>
                    </li>

                    <li>
                      <a
                        className="dropdown-item"
                        href="<?= base_url(); ?>/downloads/translation"
                      >
                        English for SCRA, CAT, MAT & MBA Entrance Exams
                      </a>
                    </li>

                    <li>
                      <a
                        className="dropdown-item"
                        href="<?= base_url(); ?>/downloads/objective-english"
                      >
                        English for Insurance Exams (LIC, GIC...)
                      </a>
                    </li>

                    <li>
                      <a
                        className="dropdown-item"
                        href="<?= base_url(); ?>/downloads/interview"
                      >
                        English for state Police (Delhi, Bihar, Telangana ...
                        etc.)
                      </a>
                    </li>

                    <li>
                      <a
                        className="dropdown-item"
                        href="<?= base_url(); ?>/downloads/essays"
                      >
                        English for TET & CET
                      </a>
                    </li>

                    <li>
                      <a
                        className="dropdown-item"
                        href="<?= base_url(); ?>/downloads/essays"
                      >
                        English for Army, Navy & Airforce Exams
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="downloads-dropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-download"></i>
                    Downloads
                  </a>
                  <ul
                    className="dropdown-menu mb-0 justify-content-center"
                    aria-labelledby="downloads-dropdown"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="<?= base_url(); ?>/downloads/english-grammar"
                      >
                        Previous Year Question Papers
                      </a>
                    </li>

                    <li>
                      <a
                        className="dropdown-item"
                        href="<?= base_url(); ?>/downloads/english-grammar"
                      >
                        English Grammar
                      </a>
                    </li>

                    <li>
                      <a
                        className="dropdown-item"
                        href="<?= base_url(); ?>/downloads/spoken-english"
                      >
                        Spoken English
                      </a>
                    </li>

                    <li>
                      <a
                        className="dropdown-item"
                        href="<?= base_url(); ?>/downloads/parts-of-speech"
                      >
                        Parts Of Speech
                      </a>
                    </li>

                    <li>
                      <a
                        className="dropdown-item"
                        href="<?= base_url(); ?>/downloads/vocabulary"
                      >
                        Vocabulary
                      </a>
                    </li>

                    <li>
                      <a
                        className="dropdown-item"
                        href="<?= base_url(); ?>/downloads/translation"
                      >
                        Translation
                      </a>
                    </li>

                    <li>
                      <a
                        className="dropdown-item"
                        href="<?= base_url(); ?>/downloads/objective-english"
                      >
                        Objective English
                      </a>
                    </li>

                    <li>
                      <a
                        className="dropdown-item"
                        href="<?= base_url(); ?>/downloads/interview"
                      >
                        Interview Q&A
                      </a>
                    </li>

                    <li>
                      <a
                        className="dropdown-item"
                        href="<?= base_url(); ?>/downloads/essays"
                      >
                        Essays
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-md-3 align-self-center">
              <ul className="d-flex list-unstyled mb-0 justify-content-center justify-content-md-end">
                <li className="nav-item">
                  <a className="nav-link" href="<?= base_url(); ?>/contact">
                    <i className="far fa-address-card"></i> Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <i className="fas fa-sign-in-alt"></i> Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- top-header-end --> */}

      {/* <!-- navbar starts  --> */}
      <nav
        className="navbar navbar-expand-lg navbar-light sticky-top"
        id="navbar"
      >
        <div className="container">
          <a className="navbar-brand" href="<?= base_url(); ?>">
            {" "}
            <img
              src="<?= base_url(); ?>/public/assets/images/logo2.png"
              alt=""
              className="img-fluid"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="<?= base_url();?>"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="<?= base_url();?>/about">
                  About
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="<?= base_url();?>/onlinecourses"
                  id="online-courses-dropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Online Courses
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="online-courses-dropdown"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/spelling-and-basic-english-course"
                    >
                      Spelling And Basic English Course
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/english-grammar-course"
                    >
                      English Grammar Course
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/spoken-english-course"
                    >
                      Spoken English Course
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/translation-course"
                    >
                      Translation Course
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/cursive-handwriting-course"
                    >
                      Cursive Handwriting Course
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/objective-english-course"
                    >
                      Objective English Course
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/jobs-skills-training-course"
                    >
                      Jobs Skills Training Course
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/essay-writing-course"
                    >
                      Essay Writing Course
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/build-your-vocabulary-course"
                    >
                      Build Your Vocabulary Course
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/precis-writing-course"
                    >
                      Precis Writing Course
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="<?= base_url();?>/onlinecourses"
                  id="online-courses-dropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Test Series
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="online-courses-dropdown"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/spelling-and-basic-english-course"
                    >
                      Spelling And Basic English Course
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/english-grammar-course"
                    >
                      English Grammar Course
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/spoken-english-course"
                    >
                      Spoken English Course
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/translation-course"
                    >
                      Translation Course
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/cursive-handwriting-course"
                    >
                      Cursive Handwriting Course
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/objective-english-course"
                    >
                      Objective English Course
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/jobs-skills-training-course"
                    >
                      Jobs Skills Training Course
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/essay-writing-course"
                    >
                      Essay Writing Course
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/build-your-vocabulary-course"
                    >
                      Build Your Vocabulary Course
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/precis-writing-course"
                    >
                      Precis Writing Course
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="<?= base_url();?>/onlinecourses"
                  id="online-courses-dropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Academic English
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="online-courses-dropdown"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/spelling-and-basic-english-course"
                    >
                      Class-12-English NCERT Solutions
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/english-grammar-course"
                    >
                      Class-11-English NCERT Solutions
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/spoken-english-course"
                    >
                      Class-10-English NCERT Solutions
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/translation-course"
                    >
                      Class-9-English NCERT Solutions
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/cursive-handwriting-course"
                    >
                      Class-8-English NCERT Solutions
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/objective-english-course"
                    >
                      Class-7-English NCERT Solutions
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/jobs-skills-training-course"
                    >
                      Class-6-English NCERT Solutions
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/essay-writing-course"
                    >
                      Class-5-English NCERT Solutions
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/build-your-vocabulary-course"
                    >
                      Class-4-English NCERT Solutions
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/precis-writing-course"
                    >
                      Class-3-English NCERT Solutions
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/build-your-vocabulary-course"
                    >
                      Class-2-English NCERT Solutions
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/onlinecourses/precis-writing-course"
                    >
                      Class-1-English NCERT Solutions
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="<?= base_url(); ?>/services">
                  Services
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="blogs-dropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blogs
                </a>
                <ul className="dropdown-menu" aria-labelledby="blogs-dropdown">
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/blogs/english-grammar"
                    >
                      English Grammar
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/blogs/spoken-english"
                    >
                      Spoken English
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/blogs/parts-of-speech"
                    >
                      Parts Of Speech
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/blogs/vocabulary"
                    >
                      Vocabulary
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/blogs/translation"
                    >
                      Translation
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/blogs/objective-english"
                    >
                      Objective English
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/blogs/interview"
                    >
                      Interview
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/blogs/essays"
                    >
                      Essays
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="<?= base_url(); ?>/eBooks">
                  eBooks
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="more-dropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu" aria-labelledby="more-dropdown">
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/more/english-charts"
                    >
                      English Charts
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/more/students-doubts"
                    >
                      Students' Doubts
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="<?= base_url(); ?>/more/gallery"
                    >
                      Gallery
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* <!-- <form className="search d-flex">
                        <input className="form-control  ms-2" type="search" placeholder="Search" aria-label="Search">
                        <button className="btn search-btn" type="submit">Search</button>
                    </form> --> */}
          </div>
        </div>
      </nav>

      {/* <!-- navbar ends  --> */}
    </div>
  );
};

export default TopMenuBar;
