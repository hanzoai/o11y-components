import { getTransformedColorTokens } from "../utils";

const colors = getTransformedColorTokens();

function ColorPalette() {
  return (
    <div className="p-5">
      <h1 className="mb-5 text-lg font-bold text-vanilla-100">Pallette</h1>

      {/* Regular colors */}
      <div className="grid grid-cols-4 gap-5 mb-12">
        {colors
          .filter((item) => item.name !== "Gradient")
          .map((color) => (
            <div key={color.name}>
              <h3 className="mt-4 text-base font-bold capitalize text-vanilla-100">
                {color.name}
              </h3>
              <div className="overflow-hidden rounded-lg shadow-lg">
                {color.shades.map((shade) => (
                  <div
                    key={shade.name}
                    className={`flex items-center justify-between w-full h-12 px-4 font-semibold ${color.name === "ink" || color.name === "slate" ? "text-vanilla-100" : ""}`}
                    style={{ backgroundColor: shade.value }}
                  >
                    <span>{shade.name}</span>
                    <span className="uppercase">{shade.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

      {/* Gradients */}
      {colors
        .filter((item) => item.name === "Gradient")
        .map((color) => (
          <div key={color.name}>
            <h1 className="mb-5 text-lg font-bold text-vanilla-100">
              Gradients
            </h1>

            <div className="grid grid-cols-6 gap-5 mb-12">
              {color.shades.map((shade) => (
                <div className=" shadow-lg">
                  <div
                    key={shade.name}
                    className={`flex items-center justify-between w-full h-20 px-4 font-semibold overflow-hidden rounded-lg`}
                    style={{ backgroundImage: shade.value }}
                  ></div>
                  <span className="text-vanilla-100">{shade.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default ColorPalette;
