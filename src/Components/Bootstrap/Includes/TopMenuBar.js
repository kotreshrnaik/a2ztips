import React from 'react'

const TopMenuBar = () => {
    return (
        <div>
            {/* <!-- top-header start --> */}
        <div id="top-header" className="bg-primary">
            <div className="container">
                <div className="row ">
                    <div className="col-md-3 align-self-center">
                        <div className="text-center text-md-start p-1">
                            <a href="mailto:a2zenglishtips@gmail.com"><i className="fas fa-envelope-open-text"></i> a2zenglishtips@gmail.com</a>
                        </div>
                    </div>
                    <div className="col-md-2 align-self-center">
                        <div className="text-center p-1">
                            <a href="tel:09731564894"><i className="fas fa-phone-volume"></i> +91 97315 64894</a>
                        </div>
                    </div>
                    <div className="col-md-4 align-self-center">
                        <ul className="d-flex list-unstyled mb-0 justify-content-center">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="social-media-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Social Media
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="social-media-dropdown">

                                    <li><a className="dropdown-item" href="https://www.youtube.com/c/a2zenglishtips/">Youtube</a></li>
                                    
                                    <li><a className="dropdown-item" href="https://www.facebook.com/english.tips.73157">Facebook Page</a></li>
                                    
                                    <li><a className="dropdown-item" href="https://www.instagram.com/a2zenglishtips">Instagram</a></li>
                                    
                                    <li><a className="dropdown-item" href="https://t.me/joinchat/eMVGpR68vzU3ZWY1">Telegram</a></li>
                                    
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="downloads-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-download"></i>
                                    Competitive English
                                </a>
                                <ul className="dropdown-menu mb-0 justify-content-center" aria-labelledby="downloads-dropdown">

                                    <li className="hover-me"><a className="dropdown-item" href="<?= base_url(); ?>/downloads/english-grammar">UPSC Compulsory English<i className="fa fa-angle-right"></i></a>
                                        <div className="sub-menu-2 dropend">
                                            <ul>
                                                <li><a href="/" >Syllabus</a></li>
                                                <li><a href="/">Books</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><a className="dropdown-item" href="<?= base_url(); ?>/downloads/spoken-english">KAS Compulsory English</a></li>
                                    
                                    <li><a className="dropdown-item" href="<?= base_url(); ?>/downloads/parts-of-speech">English for SSC, RRB & IBPS (NRA-CET)</a></li>
                                    
                                    <li><a className="dropdown-item" href="<?= base_url(); ?>/downloads/vocabulary">English for CDS, NDA</a></li>
                                    
                                    <li><a className="dropdown-item" href="<?= base_url(); ?>/downloads/translation">English for SCRA, CAT, MAT & MBA Entrance Exams</a></li>
                                    
                                    <li><a className="dropdown-item" href="<?= base_url(); ?>/downloads/objective-english">English for Insurance Exams (LIC, GIC...)</a></li>
                                    
                                    <li><a className="dropdown-item" href="<?= base_url(); ?>/downloads/interview">English for state Police (Delhi, Bihar, Telangana ... etc.)</a></li>
                                    
                                    <li><a className="dropdown-item" href="<?= base_url(); ?>/downloads/essays">English for TET & CET</a></li>

                                    <li><a className="dropdown-item" href="<?= base_url(); ?>/downloads/essays">English for Army, Navy & Airforce Exams</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="downloads-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-download"></i>
                                    Downloads
                                </a>
                                <ul className="dropdown-menu mb-0 justify-content-center" aria-labelledby="downloads-dropdown">

                                    <li><a className="dropdown-item" href="<?= base_url(); ?>/downloads/english-grammar">Previous Year Question Papers</a></li>

                                    <li><a className="dropdown-item" href="<?= base_url(); ?>/downloads/english-grammar">English Grammar</a></li>
                                    
                                    <li><a className="dropdown-item" href="<?= base_url(); ?>/downloads/spoken-english">Spoken English</a></li>
                                    
                                    <li><a className="dropdown-item" href="<?= base_url(); ?>/downloads/parts-of-speech">Parts Of Speech</a></li>
                                    
                                    <li><a className="dropdown-item" href="<?= base_url(); ?>/downloads/vocabulary">Vocabulary</a></li>
                                    
                                    <li><a className="dropdown-item" href="<?= base_url(); ?>/downloads/translation">Translation</a></li>
                                    
                                    <li><a className="dropdown-item" href="<?= base_url(); ?>/downloads/objective-english">Objective English</a></li>
                                    
                                    <li><a className="dropdown-item" href="<?= base_url(); ?>/downloads/interview">Interview Q&A</a></li>
                                    
                                    <li><a className="dropdown-item" href="<?= base_url(); ?>/downloads/essays">Essays</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 align-self-center">
                        <ul className="d-flex list-unstyled mb-0 justify-content-center justify-content-md-end">
                            <li className="nav-item">
                                <a className="nav-link" href="<?= base_url(); ?>/contact"><i className="far fa-address-card"></i> Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/"><i className="fas fa-sign-in-alt"></i> Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- top-header-end --> */}
        </div>
    )
}

export default TopMenuBar
