import puzzleImg from "../assets/images/image-web-3-desktop.jpg";
import retroImg from "../assets/images/image-retro-pcs.jpg";
import gamigImg from "../assets/images/image-gaming-growth.jpg";
import laptopImg from "../assets/images/image-top-laptops.jpg";
import useWindowDimensions from "../hooks/useWindowDimesions";
import mobilePuzzleImg from "../assets/images/image-web-3-mobile.jpg";
function MainContent() {
  const { width } = useWindowDimensions();

  return (
    <main className="grid">
      <article className="grid-item grid-img">
        <img src={width > 960 ? puzzleImg : mobilePuzzleImg} alt="" />
      </article>
      <article className="grid-item grid-future ">
        <h1>The Bright Future of Web 3.0?</h1>
      </article>
      <article className="grid-item grid-btn-content ">
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button>READ MORE</button>
      </article>
      <article className="grid-item grid-new">
        <h2>New</h2>
        <div className="grid-new-items">
          <div className="new-item">
            <h3>Hydrogen VS Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <div className="new-item top-bottom-border">
            <h3>The Downsides of AI Artistry</h3>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div className="new-item">
            <h3>Is VC Funding Drying Up?</h3>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </article>
      <article className="grid-item flex">
        <div>
          <img src={retroImg} alt="" />
        </div>
        <div>
          <p className="number-heading">01</p>
          <h4>Reviving Retro PCs</h4>
          <p className="para">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </article>
      <article className="grid-item flex">
        <div>
          <img src={laptopImg} alt="" />
        </div>
        <div>
          <p className="number-heading">02</p>
          <h4>Top 10 Laptops of 2022</h4>
          <p className="para">Our best picks for various needs and budgets.</p>
        </div>
      </article>
      <article className="grid-item flex">
        <div>
          <img src={gamigImg} alt="" />
        </div>
        <div>
          <p className="number-heading">03</p>
          <h4>The Growth of Gaming</h4>
          <p className="para">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </article>
    </main>
  );
}

export default MainContent;
