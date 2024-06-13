"use client";
import config from "@/config/general";
import styles from "@/app/price.module.css";

const Price = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="price" className="mb-24">
      <div className="bg-grayBackground rounded-md">
        <div className="w-11/12 xl:w-[1050px] mx-auto py-16">
          <p className="font-light text-2xl text-activeButton text-center">
            {config.contents.price.description}
          </p>
          <div className="flex flex-wrap justify-center gap-12 items-center mt-12">
            {config.contents.price.plans.map((plan, index) => (
              <div key={index} className={`${styles.priceCard} flex flex-col items-center gap-5 bg-white p-6 rounded-md shadow-md w-full sm:w-1/2 lg:w-1/3`}>
                <h3 className="text-2xl font-bold text-activeButton">
                  {plan.title}
                </h3>
                <ul className={`${styles.listStyle} flex flex-col gap-2 mt-4`}>
                  {plan.advantages.map((advantage, advIndex) => (
                    <li
                      key={advIndex}
                      className="flex items-center gap-2 font-normal text-base text-activeButton"
                    >
                      <div className={styles.markerStyle}>&#8226;</div> {advantage}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-5 mt-12">
            <span className="text-2xl font-bold text-activeButton">
              {config.contents.price.pricing}
            </span>
            <button
              className="bg-primary rounded-md py-4 px-16 text-black uppercase font-medium text-base"
              onClick={scrollToTop}
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
