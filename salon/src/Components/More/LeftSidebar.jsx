import React from "react";
import Footer from "../Footer";

const LeftSidebar = () => {
  return (
    <div className="lg:w-[73vw]">
      <div className="px-5 md:p-10 lg:px-20 pb-20">
        <h1 className="text-[54px] my-5 font-bold leading-tight text-gray-800">
          Left Sidebar
        </h1>
        <div className="lg:flex ">
          <div className="order-2 lg:ml-10 lg:w-[75vw]">
            <p className="my-7 text-gray-600 lg:text-[18px]">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly
              into your mouth. Even the all-powerful Pointing has no control
              about the blind texts it is an almost unorthographic life One day
              however a small line of blind text by the name of Lorem Ipsum
              decided to leave for the far World of Grammar.
            </p>
            <h1 className="text-[45px] font-bold leading-tight text-gray-800  ">
              The Big Oxmox advised her
            </h1>
            <p className="my-7 text-gray-600 lg:text-[18px]">
              Because there were thousands of bad Commas, wild Question Marks
              and devious Semikoli, but the Little Blind Text didn’t listen. She
              packed her seven versalia, put her initial into the belt and made
              herself on the way. When she reached the first hills of the Italic
              Mountains, she had a last view back on the skyline of her hometown
              Bookmarksgrove, the headline of Alphabet Village and the subline
              of her own road, the Line Lane. Pityful a rethoric question ran
              over her cheek, then she continued her way. On her way she met a
              copy.
            </p>
            <h1 className="text-[20px] font-bold leading-tight text-gray-800">
              The copy warned the Little Blind Text
            </h1>
            <p className="my-7 text-gray-600 lg:text-[18px]">
              Tat where it came from it would have been rewritten a thousand
              times and everything that was left from its origin would be the
              word “and” and the Little Blind Text should turn around and return
              to its own, safe country. But nothing the copy said could convince
              her and so it didn’t take long until a few insidious Copy Writers
              ambushed her, made her drunk with Longe and Parole and dragged her
              into their agency, where they abused her for their projects again
              and again. And if she hasn’t been rewritten, then they are still
              using her.
            </p>
            <h1 className="text-[20px] font-bold text-gray-800">
              Far far away
            </h1>
            <p className="my-7 text-gray-600 lg:text-[18px]">
              Behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in
              Bookmarksgrove right at the coast of the Semantics, a large
              language ocean. Because there were thousands of bad Commas, wild
              Question Marks and devious Semikoli, but the Little Blind Text
              didn’t listen. She packed her seven versalia, put her initial into
              the belt and made.
            </p>
          </div>

          <div className="my-16 lg:my-5">
            <div className="my-10 lg:my-7">
              <h1 className="lg:text-[24px]">News</h1>
              <hr />
            </div>
            <div>
              <h1 className="font-bold hover:underline lg:text-2xl hover:decoration-pink-600 text-gray-700 decoration-2 underline-offset-8">
                A spa is a location where mineral-rich spring water
              </h1>
              <p className="my-2 text-sm">May 23, 2021 in Spa Treatments</p>
              <hr className="my-3" />
            </div>
            <div>
              <h1 className="font-bold hover:underline lg:text-2xl hover:decoration-pink-600 text-gray-700 decoration-2 underline-offset-8">
                The main professionals that provide therapeutic
              </h1>
              <p className="my-2 text-sm">May 22, 2021 in Spa Treatments</p>
              <hr className="my-3" />
            </div>
            <div>
              <h1 className="font-bold hover:underline lg:text-2xl hover:decoration-pink-600 text-gray-700 decoration-2 underline-offset-8">
                The dyeing of hair is an ancient art that involves
              </h1>
              <p className="my-2 text-sm">May 21, 2021 in Hair Care</p>
              <hr className="my-3" />
            </div>
            <div>
              <h1 className="font-bold hover:underline lg:text-2xl hover:decoration-pink-600 text-gray-700 decoration-2 underline-offset-8">
                Beauty salons have proven to be a recession-proof industry
              </h1>
              <p className="my-2 text-sm">May 20, 2021 in Makeup Tips</p>
              <hr className="my-3" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LeftSidebar;
