import React from "react";

const About = () => {
  return (
    <div className="about" id="about" style={{backgroundColor : "rgb(234, 234, 234)"}}>
      <div className="line-styling">
        <div className="style-circle bg-primary"></div>
        <div className="style-circle bg-primary"></div>
        <div className="style-line bg-primary"></div>
      </div>
      <div className="about-body">
        <div className="about-description">
          <h2 className="color-primary">من کیم؟</h2>
          <p>
          وقتی ثروت‌ های بزرگ به دست برخی مردم می‌افتد در پرتو آن نیرومند می‌شوند و در سایهٔ نیرومندی و ثروت خیال می‌ کنند که می‌توانند در خارج از وطن خود زندگی نمایند و خوشبخت و سرافراز باشند ولی به زودی می‌ فهمند که اشتباه کرده‌ اند و عظمت هر ملتی بر روی خرابه‌ های وطن خودش می‌باشد و بس!
          </p>
        </div>

        <div className="about-img">
          <img src="images/svg/about/redTheme-boy.svg" alt="Hamid.Ba" />
        </div>
      </div>
    </div>
  );
};

export default About;
