import { banner, cards } from "../data/homepage";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ExternalLink, Phone, Mail } from "lucide-react";

export function Homepage() {
  return (
    <div>
      <div>
        <div className={"bg-[url('" + banner.imageURL + "')]"}>
          <h1>{banner.name}</h1>
        </div>
        <div>
          <h2>About Me</h2>
          <p>{banner.description}</p>
          <div>
            <a href={banner.github}>
              <FaGithub />
            </a>
            <a href={banner.linkedIn}>
              <FaLinkedin />
            </a>
            <a href={banner.twitter}>
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div>
        <h2>My Work</h2>
        {cards.map((card) => (
          <div key={card.id}>
            <img src={card.imageURL} alt={card.title} />
            <div>
              <div>
                <h4>{card.title}</h4>
                <div>
                  <a href={card.github}>
                    <FaGithub />
                  </a>
                  <a>
                    <ExternalLink />
                  </a>
                </div>
              </div>

              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <div>
          <h2>Contact Me</h2>
          <p>
            Please get in touch if you think our work couold be mutually
            beneficial!
          </p>
          <p>1234 Random Road, Random Town, Random City, 12345</p>
          <div>
            <Phone className="w-5 h-5" />
            <p>000 0000 0000</p>
          </div>
          <div>
            <Mail className="w-5 h-5" />
            <p>notarealemail@email.com</p>
          </div>
          <div>
            <a href={banner.github}>
              <FaGithub />
            </a>
            <a href={banner.linkedIn}>
              <FaLinkedin />
            </a>
            <a href={banner.twitter}>
              <FaTwitter />
            </a>
          </div>
        </div>
        <img src="" alt="" />
      </div>
    </div>
  );
}
