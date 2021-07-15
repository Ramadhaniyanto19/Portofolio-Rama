import React from "react";

function About() {
  return (
    <section className="page-section bg-primary text-white mb-0" id="about">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white">
          About
        </h2>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row">
          <div className="col-lg-4 ml-auto">
            <p className="lead">
              Saya adalah seorang mahasiswa dan seedang berusaha mencapai impian
              saya untuk menjadi seorang programmer. Saya lahir di Bandung pada
              tanggal 19 November 2001. Nama lengkap saya Mohammad
              Ramadhaniyanto dan saya biasa dipanggil Rama. Saya memiliki hobby
              Futsal, bermain gitar dan juga senang mempelajari hal hal baru.
            </p>
          </div>
          <div className="col-lg-4 mr-auto">
            <p className="lead">
              Alasan saya membuat website ini dikarenakan saya sedang mencoba
              hal hal baru dan pada akhirnya saya berhasil menciptakan website
              ini. Selain itu saya juga menyukai tentang berbagai hal seperti
              Internet Of Think ataupun dunia Bitcoin. Jangan lihat tampang yah
              haha, karena yang "TAMPAN" akan kalah dengan yang "MAPAN"
            </p>
          </div>
        </div>
        <div className="text-center mt-4">
          <a
            className="btn btn-xl btn-outline-light"
            href="https://linkedin.com"
          >
            <i className="fas fa-download mr-2"></i>
            Download My CV
          </a>
        </div>
      </div>
    </section>
  );
}
export default About;
