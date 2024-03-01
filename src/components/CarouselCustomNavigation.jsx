import { Carousel } from "@material-tailwind/react";

export function CarouselCustomNavigation() {
  return (
    <Carousel className="h-80 w-2/3">
      <img
        src="https://images.unsplash.com/38/IbJK5etSN6dH6jAF4U0U_DSC_0280-1.jpg?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
      <img
        src="https://images.unsplash.com/photo-1524293772845-840102eccb82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image 2"
        className="h-full w-full object-cover object-center"
      />
      <img
        src="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?q=80&w=1901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
