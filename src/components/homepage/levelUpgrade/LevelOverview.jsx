import Prize from "./Prize";
import formatPrice from "../../../utils/formatPrice";

const LevelOverview = () => {
  return (
    <>
      <h3 className="py-3 font-semibold">Current Level Points</h3>
      <div className="flex flex-wrap max-[900px]:gap-0 gap-3 justify-center">
        <Prize
          url={"/image/prize/normal.png"}
          active={true}
          revenue={3}
          startPrice={formatPrice(0)}
          limitPrice={formatPrice(300000)}
        />
        <Prize
          url={"/image/prize/bronze.png"}
          active={true}
          revenue={5}
          startPrice={formatPrice(300000)}
          limitPrice={formatPrice(800000)}
        />
        <Prize
          url={"/image/prize/silver.png"}
          active={true}
          revenue={7}
          startPrice={formatPrice(800000)}
          limitPrice={formatPrice(1500000)}
        />
        <Prize
          url={"/image/prize/gold.png"}
          active={true}
          revenue={9}
          startPrice={formatPrice(1500000)}
          limitPrice={formatPrice(2000000)}
        />
        <Prize
          url={"/image/prize/platinum.png"}
          active={true}
          revenue={10}
          startPrice={formatPrice(2000000)}
          limitPrice={formatPrice(1500000)}
        />
      </div>
    </>
  );
};

export default LevelOverview;
