const priceCard = [
  {
    title: "Basic",
    prices: "$24",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos velit necessitatibus debitis, eum adipisci obcaecati, dolorum quae, voluptatum ullam similique",
    popular: false,
    feature: [
      {
        feat: "Record incoming and outcoming items",
        condition: true,
      },
      {
        feat: "Record profit results",
        condition: true,
      },
      {
        feat: "Chart Analytics",
        condition: false,
      },
      {
        feat: "Live chat support",
        condition: false,
      },
      {
        feat: "Export data to Excel",
        condition: false
      },
      {
        feat: "AI support",
        condition: false,
      },
    ],
  },
  {
    title: "Business",
    prices: "$72",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos velit necessitatibus debitis, eum adipisci obcaecati, dolorum quae, voluptatum ullam similique",
    popular: true,
    feature: [
      {
        feat: "Record incoming and outcoming items",
        condition: true,
      },
      {
        feat: "Record profit results",
        condition: true,
      },
      {
        feat: "Chart Analytics",
        condition: true,
      },
      {
        feat: "Live chat support",
        condition: true,
      },
      {
        feat: "Export data to Excel",
        condition: false
      },
      {
        feat: "AI support",
        condition: false,
      },
    ],
  },
  {
    title: "Enterprise",
    prices: "$135",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos velit necessitatibus debitis, eum adipisci obcaecati, dolorum quae, voluptatum ullam similique",
    popular: false,
    feature: [
      {
        feat: "Record incoming and outcoming items",
        condition: true,
      },
      {
        feat: "Record profit results",
        condition: true,
      },
      {
        feat: "Chart Analytics",
        condition: true,
      },
      {
        feat: "Live chat support",
        condition: true,
      },
      {
        feat: "Export data to Excel",
        condition: true
      },
      {
        feat: "AI support",
        condition: true,
      },
    ],
  },
];

const Pricing = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="content flex flex-col items-center">
        <div className="flex flex-col items-center gap-5">
          <h3 className="border px-5 py-2 rounded-3xl border-indigo-500">
            Pricing
          </h3>
          <h1 className="font-bold text-center">Right Plan for You</h1>
          <p className="max-w-lg text-center">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {priceCard.map((price, index) => {
          return (
            <div
              key={index}
              className={`price-card max-w-sm ${price.popular && '-translate-y-5 border border-indigo-500'} xl:max-w-xs bg-gray-100 p-5 rounded-lg shadow-md`}
            >
              <div className="price-title border border-x-0 border-t-0 py-2">
                {price.title}
              </div>
              <div className="price-content flex flex-col gap-5 pt-5">
                <p className="text-5xl font-bold">
                  {price.prices}{" "}
                  <span className="text-sm font-normal">/Month</span>
                </p>
                <p className="text-justify">{price.desc}</p>
                <div className="feature-pricing">
                  <ul className="flex flex-col gap-2 pb-5">
                    {price.feature.map((features, index) => {
                      return (
                        <li
                          key={index}
                          className={`${
                            features.condition ? "bold" : "opacity-25"
                          }`}
                        >
                          {" "}
                          <span>✔</span> {features.feat}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <a
                  href="#contact"
                  className="border border-indigo-500 py-2 text-center rounded-lg"
                >
                  Choose Plan
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
