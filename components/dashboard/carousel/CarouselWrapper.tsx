import CarouselItem from "./CarouselItem";

const carouselData = [
  {
    id: 1,
    title: "Amsterdam Organization",
    location: "location",
    description: "Overview about the organization",
    lightColor: "#B4E13C",
    darkColor: "#637C21",
  },
  {
    id: 2,
    title: "Amsterdam Organization",
    location: "location",
    description: "Overview about the organization",
    lightColor: "#FFE155",
    darkColor: "#D88E00",
  },
  {
    id: 3,
    title: "Amsterdam Organization",
    location: "location",
    description: "Overview about the organization",
    lightColor: "#FFC8C8",
    darkColor: "#EC5454",
  },
  {
    id: 4,
    title: "Amsterdam Organization",
    location: "location",
    description: "Overview about the organization",
    lightColor: "#B4E13C",
    darkColor: "#637C21",
  },
  {
    id: 5,
    title: "Amsterdam Organization",
    location: "location",
    description: "Overview about the organization",
    lightColor: "#FFE155",
    darkColor: "#D88E00",
  },
  {
    id: 6,
    title: "Amsterdam Organization",
    location: "location",
    description: "Overview about the organization",
    lightColor: "#FFC8C8",
    darkColor: "#EC5454",
  },
  {
    id: 7,
    title: "Amsterdam Organization",
    location: "location",
    description: "Overview about the organization",
    lightColor: "#FFC8C8",
    darkColor: "#EC5454",
  },
];

const CarouselWrapper = ({ currentSlide }: { currentSlide: number }) => {
  return (
    <div
      style={{
        transform: `translateX(-${currentSlide * 10}%)`,
        transition: "all 0.3s",
      }}
      className="grid grid-flow-col auto-cols-[minmax(330px,1fr)] gap-6"
    >
      {carouselData.map((carousel) => {
        return <CarouselItem key={carousel.id} {...carousel} />;
      })}
    </div>
  );
};

export default CarouselWrapper;
